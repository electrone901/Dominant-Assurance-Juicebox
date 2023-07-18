export const delegateProjectDeployerContract_ABI = [{
        inputs: [{
                internalType: 'contract MyDelegateDeployer',
                name: '_delegateDeployer',
                type: 'address',
            },
            {
                internalType: 'contract IJBController3_1',
                name: '_controller',
                type: 'address',
            },
            {
                internalType: 'contract IJBOperatorStore',
                name: '_operatorStore',
                type: 'address',
            },
            {
                internalType: 'contract IJBSingleTokenPaymentTerminalStore3_1_1',
                name: '_paymentTerminalStore',
                type: 'address',
            },
            {
                internalType: 'contract JBETHPaymentTerminal3_1_1',
                name: '_paymentTerminal',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    { inputs: [], name: 'UNAUTHORIZED', type: 'error' },
    {
        inputs: [],
        name: '_delegate',
        outputs: [
            { internalType: 'contract DominantJuice', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'controller',
        outputs: [
            { internalType: 'contract IJBController3_1', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'delegateDeployer',
        outputs: [{
            internalType: 'contract MyDelegateDeployer',
            name: '',
            type: 'address',
        }, ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_owner', type: 'address' },
            { internalType: 'string', name: '_ipfsCID', type: 'string' },
            { internalType: 'uint256', name: '_cycleTarget', type: 'uint256' },
            { internalType: 'uint256', name: '_startTime', type: 'uint256' },
            { internalType: 'uint256', name: '_duration', type: 'uint256' },
            {
                internalType: 'uint256',
                name: '_minimumPledgeAmount',
                type: 'uint256',
            },
            { internalType: 'uint32', name: '_maxEarlyPledgers', type: 'uint32' },
        ],
        name: 'launchProjectFor',
        outputs: [{ internalType: 'uint256', name: '_projectID', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'operatorStore',
        outputs: [
            { internalType: 'contract IJBOperatorStore', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paymentTerminal',
        outputs: [{
            internalType: 'contract JBETHPaymentTerminal3_1_1',
            name: '',
            type: 'address',
        }, ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paymentTerminalStore',
        outputs: [{
            internalType: 'contract IJBSingleTokenPaymentTerminalStore3_1_1',
            name: '',
            type: 'address',
        }, ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'projectID',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_projectId', type: 'uint256' },
            { internalType: 'uint8', name: 'result', type: 'uint8' },
        ],
        name: 'reconfigureFundingCyclesOf',
        outputs: [
            { internalType: 'uint256', name: 'configuration', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
]