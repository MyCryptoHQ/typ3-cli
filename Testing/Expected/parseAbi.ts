export const parseAbiTest0 = {
  constructorFunction: {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  overloadedFunctions: {},
  regularFunctions: {}
};

export const parseAbiTest1 = {
  constructorFunction: {
    inputs: [{ name: 'a', type: 'uint256' }, { name: 'b', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  overloadedFunctions: {},
  regularFunctions: {}
};

export const parseAbiTest2 = {
  constructorFunction: {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  regularFunctions: {
    function0: {
      constant: false,
      inputs: [],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    function1: {
      constant: false,
      inputs: [
        {
          name: 'a',
          type: 'bytes32'
        }
      ],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    function2: {
      constant: false,
      inputs: [
        {
          name: 'a',
          type: 'bytes32'
        },
        {
          name: 'b',
          type: 'uint256'
        }
      ],
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    function3: {
      constant: false,
      inputs: [
        {
          name: 'a',
          type: 'bytes32'
        },
        {
          name: 'b',
          type: 'uint256'
        }
      ],
      outputs: [
        {
          name: '',
          type: 'int256'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  },
  overloadedFunctions: {}
};

export const parseAbiTest3 = {
  constructorFunction: {
    inputs: [
      {
        name: 'arg0',
        type: 'uint256'
      },
      {
        name: 'arg1',
        type: 'bytes32'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  overloadedFunctions: {
    overloaded: [
      {
        constant: false,
        inputs: [
          {
            name: 'arg0',
            type: 'uint256'
          }
        ],
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          {
            name: 'arg0',
            type: 'uint256'
          },
          {
            name: 'arg1',
            type: 'bytes32'
          }
        ],
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ]
  },
  regularFunctions: {}
};
