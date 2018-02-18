import { getAbiInterfaces, interfaces, Types } from './builder';
import { options, usage } from './cli';
import { Output } from './io';
import { getPath, getName } from './builder/utils'
import { unlinkSync, existsSync } from 'fs'
const relative = require('require-relative')

export const buildTypedABIs = () => {
  const opts = options;
  const contractFiles = opts.files;
  const abiSpecificationFiles = opts.outputSpecifications;
  const outputFile = opts.outputFile ? opts.outputFile : './abiTypes.ts';
  const outputSpecifications = {}
  const printer = new Output(outputFile);
  
  try {
    //TODO handle abi output definitions
    if(abiSpecificationFiles){
      abiSpecificationFiles.forEach(file => {
        const specificationName = getName(file);
      })
    }
    contractFiles.forEach(file => {
      const filePath = getPath(file);
      const interfaceName = getName(file);
      const abi = require(filePath)
      printer.print(getAbiInterfaces(abi, interfaceName, outputFile))
    })
    printer.print(interfaces);
  } catch (e) {
    if (existsSync(outputFile)) {
      unlinkSync(outputFile)
    }
    console.log(e)
  }

  if (!contractFiles || opts.help) {
    return console.log(usage);
  }
}
