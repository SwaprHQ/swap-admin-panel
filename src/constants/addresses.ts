import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x74c5ACD183273F29DA20e6f977e0aC3AaEcA0160'
}

export const POOL_DEPLOYER_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x70B85D5FF88f1Dad2B5F20Ac7D12B02acfa2B256'
}

export const QUOTER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x958E35b21E25FD2c45d6aE1a6Ae88B19fB5D3eea'
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0xf9922494971eb0c5db0b301283656bC512329630'
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x1D24D597A94E3868eD66aa7B69b030683756E95c'
}

export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.POLYGON]: '0x6C3189d5137E7a54C23594f7C958b6d10Ec2f7A2'
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
  [SupportedChainId.POLYGON]: '0x43c5e86EfA885186De01A06b3820e7ED4dE080D6'
}

export const FARMING_CENTER: AddressMap = {
  [SupportedChainId.POLYGON]: '0x899A3A968080f8e599B5191b048EEfE67A6493F6'
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