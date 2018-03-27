import { getConstructorDetails } from './utils/getDetails';
import { defaultProperties } from './staticContent';
import { FunctionDefinition } from '../Types/AbiTypes';
import { getPath, getName, getDetails } from './utils'
import { parseAbi } from './parseAbi'
import { Output } from '../io';

export const getAbiDeclaration = (abi: any, interfaceName: string): string => {
 let abiTypings = '';
 let connectedAbiTypings = '';
 let constructorTypings;
 const abiObject = parseAbi(abi);
 const { constructorFunction, overloadedFunctions, regularFunctions } = abiObject;
 if(constructorFunction){
	 constructorTypings = getConstructorDetails(constructorFunction)
 }
 if(overloadedFunctions){
	Object.keys(overloadedFunctions).forEach((name: string) => {
		abiTypings += `${name}: ${parseOverloadedFunctions(overloadedFunctions[name])}\n`
		connectedAbiTypings += `${name}: ${parseOverloadedFunctions(overloadedFunctions[name], true)}\n`
	 })
 }
 if(regularFunctions){
	Object.keys(regularFunctions).forEach((name: string) => {
		const func = regularFunctions[name]
		abiTypings += `${name}: ${getDetails(func)}\n`
		connectedAbiTypings += `${name}: ${getDetails(func, true)};\n`
	})
 }

	const contractInterface = `export interface I${interfaceName}{\n${abiTypings}}`
	const connectedContractInterface = `export interface I${interfaceName}Connected {\n${defaultProperties}${connectedAbiTypings}}\n`
	const connectedContractConstructor = constructorTypings ? `export interface I${interfaceName}Constructor {\n${constructorTypings}\n}\n` : ``

	const combinedContractInterface = `${contractInterface}\n${connectedContractInterface}${connectedContractConstructor}`
	return combinedContractInterface;
}

const parseOverloadedFunctions = (overloadedFunctions: FunctionDefinition[], connected?: boolean) => {
	let details = overloadedFunctions.map(func => {
		return getDetails(func, connected)
	})
	details = [...new Set(details)] //remove duplicates, since multiple Solidity typings may sometimes convert 
	return details.join(' | ')
}