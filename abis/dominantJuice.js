export const dominantJuice_ABI = [{
        "inputs": [],
        "name": "AlreadyWithdrawnRefund",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "minAmount",
            "type": "uint256"
        }],
        "name": "AmountIsBelowMinimumPledge",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ContractAlreadyInitialized",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CycleHasExpired",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
        }],
        "name": "CycleHasNotEndedYet",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DataSourceNotInitialized",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FunctionCanOnlyBeCalledOnce",
        "type": "error"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "input",
            "type": "uint256"
        }],
        "name": "FundsMustMatchInputAmount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InsufficientFunds",
        "type": "error"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "InvalidPaymentEvent",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NoRefundsForSuccessfulCycle",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "name": "CycleHasClosed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "CycleRefundBonusWithdrawal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "OwnerWithdrawal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "RefundBonusDeposited",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "controller",
        "outputs": [{
            "internalType": "contract IJBController3_1",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address payable",
                "name": "receivingAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "creatorWithdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cycleExpiryDate",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cycleTarget",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "refundBonusAmount",
            "type": "uint256"
        }],
        "name": "depositRefundBonus",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "payer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "projectId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentFundingCycleConfiguration",
                    "type": "uint256"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currency",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JBTokenAmount",
                    "name": "amount",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currency",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JBTokenAmount",
                    "name": "forwardedAmount",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "projectTokenCount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "preferClaimedTokens",
                    "type": "bool"
                },
                {
                    "internalType": "string",
                    "name": "memo",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "dataSourceMetadata",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "payerMetadata",
                    "type": "bytes"
                }
            ],
            "internalType": "struct JBDidPayData3_1_1",
            "name": "_data",
            "type": "tuple"
        }],
        "name": "didPay",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "address",
                    "name": "holder",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "projectId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentFundingCycleConfiguration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "projectTokenCount",
                    "type": "uint256"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currency",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JBTokenAmount",
                    "name": "reclaimedAmount",
                    "type": "tuple"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currency",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JBTokenAmount",
                    "name": "forwardedAmount",
                    "type": "tuple"
                },
                {
                    "internalType": "address payable",
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "memo",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "dataSourceMetadata",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "redeemerMetadata",
                    "type": "bytes"
                }
            ],
            "internalType": "struct JBDidRedeemData3_1_1",
            "name": "_data",
            "type": "tuple"
        }],
        "name": "didRedeem",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "directory",
        "outputs": [{
            "internalType": "contract IJBDirectory",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "earlyPledgerRefundBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "earlyRefundBonusCalc",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fundAccessConstraintsStore",
        "outputs": [{
            "internalType": "contract IJBFundAccessConstraintsStore",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCycleFundingStatus",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "addy",
            "type": "address"
        }],
        "name": "getEarlyPledgerStatus",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_address",
            "type": "address"
        }],
        "name": "getPledgerAmount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "hasCreatorWithdrawnAllFunds",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_cycleTarget",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minimumPledgeAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint32",
                "name": "_maxEarlyPledgers",
                "type": "uint32"
            },
            {
                "internalType": "contract IJBController3_1",
                "name": "_controller",
                "type": "address"
            },
            {
                "internalType": "contract IJBSingleTokenPaymentTerminalStore3_1_1",
                "name": "_paymentTerminalStore",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isCycleExpired",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isTargetMet",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxEarlyPledgers",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minimumPledgeAmount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "numEarlyPledgers",
        "outputs": [{
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "contract IJBPaymentTerminal",
                    "name": "terminal",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "payer",
                    "type": "address"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currency",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JBTokenAmount",
                    "name": "amount",
                    "type": "tuple"
                },
                {
                    "internalType": "uint256",
                    "name": "projectId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentFundingCycleConfiguration",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "weight",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reservedRate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "memo",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "metadata",
                    "type": "bytes"
                }
            ],
            "internalType": "struct JBPayParamsData",
            "name": "_data",
            "type": "tuple"
        }],
        "name": "payParams",
        "outputs": [{
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "components": [{
                        "internalType": "contract IJBPayDelegate3_1_1",
                        "name": "delegate",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "metadata",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct JBPayDelegateAllocation3_1_1[]",
                "name": "delegateAllocations",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paymentTerminal",
        "outputs": [{
            "internalType": "contract IJBSingleTokenPaymentTerminal",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paymentTerminalStore",
        "outputs": [{
            "internalType": "contract IJBSingleTokenPaymentTerminalStore3_1_1",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paymentToken",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "projectConfiguration",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "projectId",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "components": [{
                    "internalType": "contract IJBPaymentTerminal",
                    "name": "terminal",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "holder",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "projectId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentFundingCycleConfiguration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "overflow",
                    "type": "uint256"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "decimals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "currency",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JBTokenAmount",
                    "name": "reclaimAmount",
                    "type": "tuple"
                },
                {
                    "internalType": "bool",
                    "name": "useTotalOverflow",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "redemptionRate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "memo",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "metadata",
                    "type": "bytes"
                }
            ],
            "internalType": "struct JBRedeemParamsData",
            "name": "_data",
            "type": "tuple"
        }],
        "name": "redeemParams",
        "outputs": [{
                "internalType": "uint256",
                "name": "reclaimAmount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "memo",
                "type": "string"
            },
            {
                "components": [{
                        "internalType": "contract IJBRedemptionDelegate3_1_1",
                        "name": "delegate",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "metadata",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct JBRedemptionDelegateAllocation3_1_1[]",
                "name": "delegateAllocations",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "relayCycleResults",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "bytes4",
            "name": "_interfaceId",
            "type": "bytes4"
        }],
        "name": "supportsInterface",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalAmountPledged",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalRefundBonus",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]