export interface functionDefinition {
  name?: string
  inputs?: SolidityVariable[]
  outputs?: SolidityVariable[]
	constant?: boolean
	type?: string
}

export interface SolidityVariable {
  name: string
  type: string
}