import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x2209c0bccBDd1f750750023ba2bAcdC82D031EbE'
}

export const POOL_DEPLOYER_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x07099fEf5825e3298111C21a23A1283aB24eDb39'
}

export const QUOTER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x8af296FcA616376aBbB3Ac78bD319bfbe4aF5503'
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x804cD0Cb4397DFba6c34B75daF16793db6fbe4F9'
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x10Dcb20d06fbC1461D21D6b31E54042D656C67FC'
}

export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x4faa52749ed85FF69d73ddfBDf5Fd623aa3356Bc'
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x7B709b1E27Dbf4405f45Ed3fFf8A6eFA08BB02f6'
}

export const REAL_STAKER_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x32CFF674763b06B983C0D55Ef2e41B84D16855bb'
}

export const FINITE_FARMING_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x43c5c0756fA7F466915370D81abE32eB1aF48494'
}

export const INFINITE_FARMING_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x2Eb15BAbB42bA69152bB995CA5b4B4DeaE8D4bae'
}

export const FARMING_CENTER: AddressMap = {
  [SupportedChainId.POLYGON]: '0xb7875b8Dc8f49c2D6BBb658905dBF88843B54Da8'
}

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32'
}

export const V2_ROUTER_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506'
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x65770b5283117639760beA3F867b69b3697a91dd'
}