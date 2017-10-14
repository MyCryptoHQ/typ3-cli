import { existsSync } from 'fs';
import * as path from 'path'

const getMappings = ({ types, abiFunc, config, input}) => {
    const abiInOut = input
    ? abiFunc.inputs
    : abiFunc.outputs

    const configInOut = input
    ? config.inputMappings
    : config.outputMappings

    const mappedFunctions = abiInOut.reduce((str, curr, index) => {
        types.mapType(curr.type)
        const name =
        (configInOut &&
            configInOut[abiFunc].name &&
            configInOut[abiFunc][index]) ||
        curr.name ||
        `${curr.type}_${index}`
        return (str += `${name}: ${curr.type}${index === abiInOut.length - 1
        ? ''
        : ', '}`)
    }, '')
    return mappedFunctions
}

export const getInputs = ({ types, abiFunc, config }) => {
    return getMappings({ types, abiFunc, config, input: true })
}

export const getOutputs = ({types, abiFunc, config }) => {
    return getMappings({ types, abiFunc, config, input: false })
}

export const getMapping = ({ filePath, inOut, funcName }) => {
    const resolvedPath = path.resolve(filePath).split('.')[0]
    const file = `${resolvedPath}.${inOut}.json`;
    return existsSync(file) ? require(file) : funcName;
}
