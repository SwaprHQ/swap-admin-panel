import { useCallback, useState } from "react"
import { Contract, providers } from 'ethers'
import { useActiveWeb3React } from "./web3"
import { INFINITE_FARMING_ADDRESS } from "../constants/addresses"
import INFINITE_FARMING_ABI from 'abis/infinite-farming.json'
import { calculateGasMargin } from "../utils/calculateGasMargin"
import { useTransactionAdder } from "../state/transactions/hooks"
import { SupportedChainId } from "../constants/chains"

export function useInfiniteFarmingIncentives({
    poolAddress,
    rewardAddress,
    reward,
    rewardRate,
    bonusRewardAddress = '0x0000000000000000000000000000000000000000',
    bonusReward = '0',
    bonusRewardRate = '0',
    minimalRange
}: {
    rewardAddress: string
    reward: string
    poolAddress: string
    bonusRewardAddress: string
    bonusReward: string
    rewardRate: string
    bonusRewardRate: string
    minimalRange: string
}) {

    const { chainId, account, library } = useActiveWeb3React();

    const addTransaction = useTransactionAdder()
    const [createdHash, setCreatedHash] = useState(null)

    const _w: any = window
    const provider = new providers.Web3Provider(_w.ethereum)
    const signer = provider.getSigner()

    const eternalFarmingContract = new Contract(INFINITE_FARMING_ADDRESS[SupportedChainId.POLYGON], INFINITE_FARMING_ABI, signer)

    const createIncentiveTx = useCallback(async () => {
        if (!chainId || !rewardAddress || !poolAddress || !rewardRate || !account || !reward) return null

        setCreatedHash('pending')

        try {

            const currentNonce = await eternalFarmingContract.numOfIncentives();

            // const a = await eternalFarmingContract.deactivateIncentive([
            //     '0x809689bce54aaf05d5729772657fd7f62af685d8',
            //     '0x0000000000000000000000000000000000000000',
            //     '0x32e9e93f31a31413a0519bd370828458e7bf3e4c',
            //     1
            // ], {
            //     gasLimit: 7000000,
            //     gasPrice: 5
            // })



            console.log([rewardAddress, bonusRewardAddress, poolAddress, currentNonce],
                {
                    reward,
                    bonusReward,
                    rewardRate,
                    bonusRewardRate,
                    minimalPositionWidth: minimalRange || 0,
                })

            const calldata = eternalFarmingContract.interface.encodeFunctionData('createEternalFarming', [
                [rewardAddress, bonusRewardAddress, poolAddress, Number(currentNonce)],
                {
                    reward,
                    bonusReward,
                    rewardRate,
                    bonusRewardRate,
                    minimalPositionWidth: minimalRange || 0,
                }
            ])

            const txn: { to: string; data: string } = {
                to: INFINITE_FARMING_ADDRESS[chainId],
                data: calldata
            }

            console.log('calldata', calldata)

            library
                .getSigner()
                .estimateGas(txn)
                .then((estimate) => {
                    const newTxn = {
                        ...txn,
                        gasLimit: calculateGasMargin(chainId, estimate),
                    }
                    return library
                        .getSigner()
                        .sendTransaction(newTxn)
                        .then((response) => {
                            addTransaction(response, {
                                summary: `Created incentive`
                            })
                            setCreatedHash(response.hash)

                        })
                        .catch(err => {
                            setCreatedHash('failed')
                            console.error(err)
                        })
                })
                .catch(err => {
                    setCreatedHash('failed')
                    console.error(err)
                })

        } catch (e) {
            setCreatedHash('failed')
            console.error(e)
        }

        // setCreated(true)

    }, [account,
        rewardAddress,
        poolAddress,
        reward,
        bonusRewardAddress,
        bonusReward,
        rewardRate,
        bonusRewardRate
    ])


    return {
        createIncentiveTx,
        createdHash
    }
}