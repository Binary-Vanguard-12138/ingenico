const protobuf = require("protobufjs");

const proto = protobuf.Root.fromJSON({
    nested: {
        ingenico: {
            nested: {
                graphics: {
                    options: {
                        java_package: "com.ingenico.graphics",
                        java_outer_classname: "EcrUiApiCommonProto",
                    },
                    nested: {
                        EcrUiMessageType: {
                            values: {
                                MESSAGE_TYPE_NOTIFICATION: 0,
                                MESSAGE_TYPE_CONFIRMATION: 1,
                                MESSAGE_TYPE_AMOUNT_INPUT: 2,
                                MESSAGE_TYPE_TEXT_INPUT: 3,
                                MESSAGE_TYPE_MENU_SELECTION: 4,
                                MESSAGE_TYPE_CARD_WAIT: 5,
                                MESSAGE_TYPE_CANCEL: 6,
                            },
                        },
                        EcrUiMessagePreamble: {
                            fields: {
                                messageType: {
                                    type: "EcrUiMessageType",
                                    id: 1,
                                },
                                sequenceNumber: {
                                    type: "uint32",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiMessageIcon: {
                            values: {
                                MESSAGE_ICON_QUESTION: 0,
                                MESSAGE_ICON_WARNING: 1,
                                MESSAGE_ICON_ERROR: 2,
                                MESSAGE_ICON_INFORMATION: 3,
                            },
                        },
                        EcrUiMessageCommonRequest: {
                            fields: {
                                preamble: {
                                    type: "EcrUiMessagePreamble",
                                    id: 1,
                                },
                                requestId: {
                                    type: "uint32",
                                    id: 2,
                                },
                                icon: {
                                    type: "EcrUiMessageIcon",
                                    id: 3,
                                },
                                timeout: {
                                    type: "uint32",
                                    id: 4,
                                },
                                cancellable: {
                                    type: "bool",
                                    id: 5,
                                },
                                titleText: {
                                    type: "string",
                                    id: 6,
                                },
                                text: {
                                    type: "string",
                                    id: 7,
                                },
                                validButtons: {
                                    type: "EcrUiValidButtons",
                                    id: 8,
                                },
                            },
                        },
                        EcrUiResult: {
                            fields: {
                                resultCode: {
                                    type: "Result",
                                    id: 1,
                                },
                                buttonCode: {
                                    type: "EcrUiButtonCode",
                                    id: 2,
                                },
                                errorCode: {
                                    type: "uint32",
                                    id: 3,
                                },
                            },
                            nested: {
                                Result: {
                                    values: {
                                        ECR_UI_TIMED_OUT: 1,
                                        ECR_UI_BUTTON_PRESSED: 2,
                                        ECR_UI_ERROR: 3,
                                        ECR_UI_CANCELLED: 4,
                                    },
                                },
                                EcrUiButtonCode: {
                                    values: {
                                        BUTTON_OK: 0,
                                        BUTTON_CANCEL: 1,
                                        BUTTON_ABORT: 2,
                                        BUTTON_IGNORE: 3,
                                        BUTTON_RETRY: 4,
                                        BUTTON_CLEAR: 5,
                                        BUTTON_MENU: 6,
                                    },
                                },
                            },
                        },
                        EcrUiMessageCommonResponse: {
                            fields: {
                                preamble: {
                                    type: "EcrUiMessagePreamble",
                                    id: 1,
                                },
                                result: {
                                    type: "EcrUiResult",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiValidButtons: {
                            fields: {
                                cancelButton: {
                                    type: "bool",
                                    id: 1,
                                },
                                clearButton: {
                                    type: "bool",
                                    id: 2,
                                },
                                okButton: {
                                    type: "bool",
                                    id: 3,
                                },
                                menuButton: {
                                    type: "bool",
                                    id: 4,
                                },
                                abortButton: {
                                    type: "bool",
                                    id: 5,
                                },
                                ignoreButton: {
                                    type: "bool",
                                    id: 6,
                                },
                                retryButton: {
                                    type: "bool",
                                    id: 7,
                                },
                                cancelLabel: {
                                    type: "string",
                                    id: 8,
                                },
                                clearLabel: {
                                    type: "string",
                                    id: 9,
                                },
                                okLabel: {
                                    type: "string",
                                    id: 10,
                                },
                                menuLabel: {
                                    type: "string",
                                    id: 11,
                                },
                                abortLabel: {
                                    type: "string",
                                    id: 12,
                                },
                                ignoreLabel: {
                                    type: "string",
                                    id: 13,
                                },
                                retryLabel: {
                                    type: "string",
                                    id: 14,
                                },
                            },
                        },
                        EcrUiNotificationRequest: {
                            fields: {
                                notificationId: {
                                    type: "int32",
                                    id: 1,
                                },
                            },
                        },
                        EcrUiConfirmationRequest: {
                            fields: {
                                confirmationId: {
                                    type: "int32",
                                    id: 1,
                                },
                            },
                        },
                        EcrUiConfirmationResponse: {
                            fields: {
                                confirmationId: {
                                    type: "int32",
                                    id: 1,
                                },
                            },
                        },
                        EcrUiAmountInputRequest: {
                            fields: {
                                amountInputId: {
                                    type: "int32",
                                    id: 1,
                                },
                                initialAmount: {
                                    type: "EcrUiAmount",
                                    id: 5,
                                },
                            },
                        },
                        EcrUiAmountInputResponse: {
                            fields: {
                                amountInputId: {
                                    type: "int32",
                                    id: 1,
                                },
                                amount: {
                                    type: "EcrUiAmount",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiTextInputRequest: {
                            fields: {
                                textInputId: {
                                    type: "int32",
                                    id: 1,
                                },
                                regex: {
                                    type: "string",
                                    id: 4,
                                },
                                initialText: {
                                    type: "string",
                                    id: 6,
                                },
                            },
                        },
                        EcrUiTextInputResponse: {
                            fields: {
                                textInputId: {
                                    type: "int32",
                                    id: 1,
                                },
                                returnedText: {
                                    type: "string",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiMenuSelectionRequest: {
                            fields: {
                                menuSelectionId: {
                                    type: "int32",
                                    id: 1,
                                },
                                list: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 2,
                                },
                                initialIndex: {
                                    type: "int32",
                                    id: 3,
                                },
                            },
                        },
                        EcrUiMenuSelectionResponse: {
                            fields: {
                                menuSelectionId: {
                                    type: "int32",
                                    id: 1,
                                },
                                returnedIndex: {
                                    type: "int32",
                                    id: 4,
                                },
                            },
                        },
                        EcrUiCardWaitRequest: {
                            fields: {
                                technologies: {
                                    rule: "repeated",
                                    type: "uint32",
                                    id: 1,
                                    options: {
                                        packed: false,
                                    },
                                },
                            },
                        },
                        EcrUiCardWaitResponse: {
                            fields: {},
                        },
                        EcrUiRequestData: {
                            fields: {
                                notification: {
                                    type: "EcrUiNotificationRequest",
                                    id: 2,
                                },
                                confirmation: {
                                    type: "EcrUiConfirmationRequest",
                                    id: 3,
                                },
                                amountInput: {
                                    type: "EcrUiAmountInputRequest",
                                    id: 4,
                                },
                                textInput: {
                                    type: "EcrUiTextInputRequest",
                                    id: 5,
                                },
                                menuSelection: {
                                    type: "EcrUiMenuSelectionRequest",
                                    id: 6,
                                },
                                cardWait: {
                                    type: "EcrUiCardWaitRequest",
                                    id: 7,
                                },
                            },
                        },
                        EcrUiRequestEvent: {
                            fields: {
                                commonElements: {
                                    type: "EcrUiMessageCommonRequest",
                                    id: 1,
                                },
                                requestData: {
                                    type: "EcrUiRequestData",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiResponseData: {
                            fields: {
                                confirmation: {
                                    type: "EcrUiConfirmationResponse",
                                    id: 1,
                                },
                                amountInput: {
                                    type: "EcrUiAmountInputResponse",
                                    id: 2,
                                },
                                textInput: {
                                    type: "EcrUiTextInputResponse",
                                    id: 3,
                                },
                                menuSelection: {
                                    type: "EcrUiMenuSelectionResponse",
                                    id: 4,
                                },
                                cardWait: {
                                    type: "EcrUiCardWaitResponse",
                                    id: 5,
                                },
                            },
                        },
                        EcrUiResponseEvent: {
                            fields: {
                                commonElements: {
                                    type: "EcrUiMessageCommonResponse",
                                    id: 1,
                                },
                                responseData: {
                                    type: "EcrUiResponseData",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiCurrency: {
                            fields: {
                                code: {
                                    type: "uint32",
                                    id: 1,
                                },
                                exponent: {
                                    type: "uint32",
                                    id: 2,
                                },
                            },
                        },
                        EcrUiAmount: {
                            fields: {
                                currency: {
                                    type: "EcrUiCurrency",
                                    id: 1,
                                },
                                value: {
                                    type: "sint64",
                                    id: 2,
                                },
                                minAmount: {
                                    type: "sint64",
                                    id: 3,
                                },
                                maxAmount: {
                                    type: "sint64",
                                    id: 4,
                                },
                            },
                        },
                        EcrUiAPiCommon: {
                            methods: {},
                        },
                    },
                },
            },
        },
        ingenicouk: {
            nested: {
                ecr: {
                    nested: {
                        EcrToTerminalMessage: {
                            fields: {
                                sequenceId: {
                                    type: "int32",
                                    id: 1,
                                },
                                type: {
                                    rule: "required",
                                    type: "int32",
                                    id: 2,
                                },
                                ui: {
                                    type: "ingenico.graphics.EcrUiResponseEvent",
                                    id: 3,
                                },
                                action: {
                                    type: "action.EcrActionStart",
                                    id: 4,
                                },
                                print: {
                                    type: "print.EcrPrintResponse",
                                    id: 5,
                                },
                                query: {
                                    type: "query.EcrQueryRequest",
                                    id: 6,
                                },
                            },
                        },
                        TerminalToEcrMessage: {
                            fields: {
                                sequenceId: {
                                    type: "int32",
                                    id: 1,
                                },
                                type: {
                                    type: "int32",
                                    id: 2,
                                },
                                ui: {
                                    type: "ingenico.graphics.EcrUiRequestEvent",
                                    id: 3,
                                },
                                action: {
                                    type: "action.EcrActionResult",
                                    id: 4,
                                },
                                print: {
                                    type: "print.EcrPrintRequest",
                                    id: 5,
                                },
                                query: {
                                    type: "query.EcrQueryResponse",
                                    id: 6,
                                },
                            },
                        },
                        action: {
                            nested: {
                                EcrActionStart: {
                                    fields: {
                                        txnType: {
                                            type: "int32",
                                            id: 1,
                                        },
                                        amount: {
                                            type: "Amount",
                                            id: 2,
                                        },
                                        actionId: {
                                            type: "int32",
                                            id: 3,
                                        },
                                    },
                                },
                                EcrActionResult: {
                                    fields: {
                                        txnType: {
                                            type: "int32",
                                            id: 1,
                                        },
                                        amount: {
                                            type: "Amount",
                                            id: 2,
                                        },
                                        result: {
                                            type: "TxnStatus",
                                            id: 3,
                                        },
                                        actionId: {
                                            type: "int32",
                                            id: 4,
                                        },
                                        uniqueId: {
                                            type: "string",
                                            id: 5,
                                        },
                                    },
                                    nested: {
                                        TxnStatus: {
                                            values: {
                                                UnknownStatus: 0,
                                                Approved: 1,
                                                Declined: 2,
                                                CardNotSupported: 3,
                                                Aborted: 4,
                                                Terminated: 5,
                                                TxnNotSupported: 6,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        Currency: {
                            fields: {
                                code: {
                                    type: "uint32",
                                    id: 1,
                                },
                                exponent: {
                                    type: "uint32",
                                    id: 2,
                                },
                            },
                        },
                        Amount: {
                            fields: {
                                currency: {
                                    type: "Currency",
                                    id: 1,
                                },
                                value: {
                                    type: "sint64",
                                    id: 2,
                                },
                                minAmount: {
                                    type: "sint64",
                                    id: 3,
                                },
                                maxAmount: {
                                    type: "sint64",
                                    id: 4,
                                },
                            },
                        },
                        print: {
                            nested: {
                                EcrPrintRequest: {
                                    fields: {
                                        printRequest: {
                                            type: "string",
                                            id: 1,
                                        },
                                        printType: {
                                            type: "PrintType",
                                            id: 2,
                                        },
                                    },
                                    nested: {
                                        PrintType: {
                                            values: {
                                                ADMIN: 1,
                                                MERCHANT_NOTE: 2,
                                                CARDHOLDER_NOTE: 3,
                                                MERCHANT_RECEIPT: 4,
                                                CARDHOLDER_RECEIPT: 5,
                                            },
                                        },
                                    },
                                },
                                EcrPrintResponse: {
                                    fields: {
                                        result: {
                                            type: "Result",
                                            id: 1,
                                        },
                                    },
                                    nested: {
                                        Result: {
                                            values: {
                                                UnknownResult: 0,
                                                PrintSendOK: 1,
                                                PrintSendError: 2,
                                            },
                                        },
                                    },
                                },
                                EcrPrintService: {
                                    methods: {
                                        EcrPrint: {
                                            requestType: "EcrPrintRequest",
                                            responseType: "EcrPrintResponse",
                                        },
                                    },
                                },
                            },
                        },
                        status: {
                            nested: {
                                EcrStatusRequest: {
                                    fields: {},
                                },
                                EcrStatusResponse: {
                                    fields: {
                                        status: {
                                            type: "Status",
                                            id: 1,
                                        },
                                        errorCode: {
                                            type: "EcrUiErrorCode",
                                            id: 2,
                                        },
                                    },
                                    nested: {
                                        Status: {
                                            values: {
                                                Connected: 0,
                                                NotConnected: 1,
                                                Disabled: 2,
                                            },
                                        },
                                        EcrUiErrorCode: {
                                            values: {
                                                ERR_ON_CLOSE: 1,
                                                ERR_ON_FAIL: 2,
                                                ERR_ON_PONG_FAIL: 3,
                                            },
                                        },
                                    },
                                },
                                EcrStatusService: {
                                    methods: {
                                        EcrStatus: {
                                            requestType: "EcrStatusRequest",
                                            responseType: "EcrStatusResponse",
                                        },
                                    },
                                },
                            },
                        },
                        query: {
                            nested: {
                                EcrQueryRequest: {
                                    fields: {
                                        queryType: {
                                            rule: "required",
                                            type: "QueryType",
                                            id: 1,
                                        },
                                    },
                                    nested: {
                                        QueryType: {
                                            values: {
                                                GET_LIST_TXN_TYPES: 1,
                                                GET_LAST_TXN_RESULT: 2,
                                            },
                                        },
                                    },
                                },
                                EcrQueryResponse: {
                                    fields: {
                                        listTxnTypesResponse: {
                                            rule: "repeated",
                                            type: "EcrListTxnTypes",
                                            id: 1,
                                        },
                                        lastTransactionResponse: {
                                            type: "EcrLastTxnResult",
                                            id: 2,
                                        },
                                    },
                                },
                                EcrLastTxnResult: {
                                    fields: {
                                        txnOutcome: {
                                            type: "TxnOutcome",
                                            id: 1,
                                        },
                                        uniqueId: {
                                            type: "string",
                                            id: 2,
                                        },
                                    },
                                    nested: {
                                        TxnOutcome: {
                                            values: {
                                                UnknownStatus: 0,
                                                Approved: 1,
                                                Declined: 2,
                                                CardNotSupported: 3,
                                                Aborted: 4,
                                                Terminated: 5,
                                                TxnNotSupported: 6,
                                                NoTransaction: 7,
                                            },
                                        },
                                    },
                                },
                                EcrListTxnTypes: {
                                    fields: {
                                        value: {
                                            type: "int32",
                                            id: 1,
                                        },
                                        label: {
                                            type: "string",
                                            id: 2,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

module.exports = proto;
