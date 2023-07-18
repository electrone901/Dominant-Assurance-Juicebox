export const delegateDeployer_ABI = [{
        inputs: [{
            internalType: 'contract IJBDelegatesRegistry',
            name: '_delegatesRegistry',
            type: 'address',
        }, ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [{
                indexed: false,
                internalType: 'uint256',
                name: 'projectId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'contract DominantJuice',
                name: 'delegate',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'contract IJBDirectory',
                name: 'directory',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'caller',
                type: 'address',
            },
        ],
        name: 'DelegateDeployed',
        type: 'event',
    },
    {
        inputs: [],
        name: 'delegate',
        outputs: [
            { internalType: 'contract DominantJuice', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'delegateOfProject',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'delegatesRegistry',
        outputs: [{
            internalType: 'contract IJBDelegatesRegistry',
            name: '',
            type: 'address',
        }, ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_owner', type: 'address' },
            { internalType: 'uint256', name: '_projectID', type: 'uint256' },
            { internalType: 'uint256', name: '_cycleTarget', type: 'uint256' },
            {
                internalType: 'uint256',
                name: '_minimumPledgeAmount',
                type: 'uint256',
            },
            { internalType: 'uint32', name: '_maxEarlyPledgers', type: 'uint32' },
            {
                internalType: 'contract IJBController3_1',
                name: '_controller',
                type: 'address',
            },
            {
                internalType: 'contract IJBDirectory',
                name: '_directory',
                type: 'address',
            },
            {
                internalType: 'contract IJBSingleTokenPaymentTerminalStore3_1_1',
                name: '_paymentTerminalStore',
                type: 'address',
            },
        ],
        name: 'deployDelegateFor',
        outputs: [
            { internalType: 'contract DominantJuice', name: '', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '_projectID', type: 'uint256' }],
        name: 'getDelegateOfProject',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
]