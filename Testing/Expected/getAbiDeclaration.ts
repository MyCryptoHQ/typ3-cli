export const getAbiDecTest0 = `export interface ITest0{
}
export interface ITest0Connected {
address: string
}
`

export const getAbiDecTest1 = `export interface ITest1{
}
export interface ITest1Connected {
address: string
}
export interface ITest1Constructor {
a: BN | Buffer,b: string | Buffer
}
`

export const getAbiDecTest2 = `export interface ITest2{
function1: ABIFuncSend<{a: string | Buffer}>
function2: ABIFuncSend<{a: string | Buffer,b: BN | Buffer}>
function3: ABIFuncSend<{a: string | Buffer,b: BN | Buffer}>
function0: ABIFuncParamlessSend
}
export interface ITest2Connected {
address: string
function1: ABIFuncSendConnected<{a: string | Buffer}>;
function2: ABIFuncSendConnected<{a: string | Buffer,b: BN | Buffer}>;
function3: ABIFuncSendConnected<{a: string | Buffer,b: BN | Buffer}>;
function0: ABIFuncParamlessSendConnected;
}
`

export const getAbiDecTest3 = `export interface ITest3{
overloaded: ABIFuncSend<{arg0: BN | Buffer}> | ABIFuncSend<{arg0: BN | Buffer,arg1: string | Buffer}>
}
export interface ITest3Connected {
address: string
overloaded: ABIFuncSendConnected<{arg0: BN | Buffer}> | ABIFuncSendConnected<{arg0: BN | Buffer,arg1: string | Buffer}>
}
export interface ITest3Constructor {
arg0: BN | Buffer,arg1: string | Buffer
}
`