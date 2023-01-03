const WebSocket = require("ws");
const proto = require("./ecr-json-api");

const ws = new WebSocket("ws://127.0.0.1:8086/ingenico/tetraecr");

const messageInType = proto.lookupType("EcrToTerminalMessage");
const messageOutType = proto.lookupType("TerminalToEcrMessage");

const screenTypes = {
    UI: proto.lookup("TerminalToEcrMessage.ui").id,
    ACTION: proto.lookup("TerminalToEcrMessage.action").id,
    PRINT: proto.lookup("TerminalToEcrMessage.print").id,
    QUERY: proto.lookup("TerminalToEcrMessage.query").id
}

const txnList = [{ "value": 1, "label": "Sale" }, { "value": 2, "label": "Refund" }, { "value": 3, "label": "PreAuth" }, { "value": 64, "label": "CNP Sale" }, { "value": 65, "label": "CNP Refund" }, { "value": 68, "label": "CNP Pre-Auth" }, { "value": 136708101, "label": "Admin" }, { "value": 136708102, "label": "Top-Up" }, { "value": 136708103, "label": "Completion" }, { "value": 136708104, "label": "Duplicate" }, { "value": 136708105, "label": "Cash" }, { "value": 136708106, "label": "PWCB" }, { "value": 136708107, "label": "CardholderVerify" }, { "value": 136708108, "label": "ForceSale" }, { "value": 136708109, "label": "ForceRefund" }, { "value": 136708110, "label": "ForceCash" }, { "value": 136708111, "label": "ForcePWCB" }, { "value": 136708112, "label": "AccountVerify" }, { "value": 136708113, "label": "Credit Customer" }, { "value": 136708166, "label": "CNP Top-Up" }, { "value": 136708167, "label": "CNP Completion" }, { "value": 136708169, "label": "CNP Cash" }, { "value": 136708172, "label": "CNP ForceSale" }, { "value": 136708173, "label": "CNP ForceRefund" }, { "value": 136708174, "label": "CNP ForceCash" }, { "value": 136708176, "label": "CNP AccountVerify" }, { "value": 136708177, "label": "CNP Credit Customer" }];

// get the list of query types
const QueryType = proto.lookup("EcrQueryRequest.QueryType").values;

// get the list of transaction statuses
const TxnStatus = proto.lookup("EcrActionResult.TxnStatus").values;

// get the list of transaction outcomes
const TxnOutcome = proto.lookup("EcrLastTxnResult.TxnOutcome").values;

let sequenceId = 0;

let lastTransactionOutcome = {
    outcome: TxnOutcome.NoTransaction,
    uniqueId: "0",
};

function sendMessage(payload) {
    const errMsg = messageOutType.verify(payload);

    if (errMsg) {
        console.error(this.identifier + 'encoding error ' + errMsg);
        return;
    }

    // create a new message
    const message = messageOutType.create(payload);

    // encode a message to an Uint8Array (browser)
    const buffer = messageOutType.encode(message).finish();
    ws.send(buffer);
    sequenceId++;
}


function transactionResult(result) {
    // generate a uniqueId for the result
    const uniqueId = (Math.floor(Math.random() * 99999999) + 1).toString();
    lastTransactionOutcome.uniqueId = uniqueId;
    lastTransactionOutcome.outcome = result;

    return {
        sequenceId: sequenceId,
        type: screenTypes.ACTION,
        action: {
            result: result,
            uniqueId: uniqueId,
        },
    };
}

function getLastTransactionResult() {
    return {
        sequenceId: sequenceId,
        type: screenTypes.QUERY,
        query: {
            lastTransactionResponse: {
                txnOutcome: lastTransactionOutcome.outcome,
                uniqueId: lastTransactionOutcome.uniqueId,
            },
        },
    };
}

function txnTypes(txn) {
    // if a transaction type is specified, return its value
    if (txn) {
        return txnList.find(
            (element) => element.label.toUpperCase() == txn.toUpperCase()
        ).value;
    }

    return 0;
}

ws.on("open", function open() {
    console.log("open");
})

ws.on("message", function message(data) {
    const message = messageInType.decode(new Uint8Array(data));
    const lastRequest = message;
    console.info("From terminal", JSON.stringify(message));
    switch (message.type) {
        case screenTypes.QUERY:
            switch (message.query.queryType) {
                case QueryType.GET_LIST_TXN_TYPES:
                    sequenceId = 2;
                    sendMessage({ "sequenceId": sequenceId, "type": screenTypes.QUERY, "query": { "listTxnTypesResponse": txnList } });
                    break;

                case QueryType.GET_LAST_TXN_RESULT:
                    sendMessage(getLastTransactionResult());
                    break;
            }
            break;
        case screenTypes.ACTION:
            switch (message.action.txnType) {
                case txnTypes("SALE"):
                    let response = {
                        sequenceId: sequenceId, // same as sent in the request
                        type: screenTypes.ACTION, // action response
                        action: {
                            txnType: txnTypes("SALE"), // sale (note, terminal may change the transaction type - eg to purchase with cashback)
                            amount: {
                                currency: {
                                    code: lastRequest.action.amount.currency.code, // same as sent in the request
                                    exponent:
                                        lastRequest.action.amount.currency
                                            .exponent, // same as sent in the request
                                },
                                value: lastRequest.action.amount.value, // same as sent in the request (note, terminal may change the transaction amount - eg if cashback was added)
                            },
                            result: TxnStatus.Approved, // successful transaction
                            actionId: lastRequest.action.amount.actionId, // same as sent in the request
                        },
                    };

                    sendMessage(response);
                    break;
            }
            break;
    }
    // ws.send(data);
});