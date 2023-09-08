import { Contract, providers } from "ethers"
import { Interface } from "ethers/lib/utils"
import { useCallback } from "react"
import INFINITE_FARMING_ABI from '../abis/infinite-farming.json'
import { INFINITE_FARMING_ADDRESS } from "../constants/addresses"
import { useActiveWeb3React } from "./web3"
import { SupportedChainId } from "constants/chains"

export function useInfiniteFarming() {

    const { chainId, account } = useActiveWeb3React();

    const provider = window.ethereum ? new providers.Web3Provider(window.ethereum) : undefined

    const infiniteFarmingInteface = new Interface(INFINITE_FARMING_ABI)

    const infiniteFarmingContract = new Contract(INFINITE_FARMING_ADDRESS[SupportedChainId.POLYGON], infiniteFarmingInteface, provider?.getSigner())

    const deactivateFarming = useCallback(async (rewardAddress, bonusRewardAddress, pool, nonce) => {

        if (!account || !provider) return

        console.log('[DEACTIVATE]', [rewardAddress, bonusRewardAddress, pool, nonce])

        await infiniteFarmingContract.deactivateIncentive([rewardAddress, bonusRewardAddress, pool, nonce])

    }, [provider, account])

    // const attachFarming = useCallback(async (rewardAddress, bonusRewardAddress, pool, nonce) => {

    //     if (!account || !provider) return

    //     await infiniteFarmingContract.attachIncentive([rewardAddress, bonusRewardAddress, pool, nonce])

    // }, [provider, account])

    const changeRate = useCallback(async (rewardAddress, bonusRewardAddress, pool, nonce, rewardRate, bonusRewardRate, newRate, rewardType) => {

        if (!account || !provider) return

        if (rewardType === 'main') {
            console.log('[CHANGE REWARD RATE]', [rewardAddress, bonusRewardAddress, pool, nonce], newRate, bonusRewardRate)
            await infiniteFarmingContract.setRates([rewardAddress, bonusRewardAddress, pool, nonce], newRate, bonusRewardRate)
        } else {
            console.log('[CHANGE BONUS REWARD RATE]', [rewardAddress, bonusRewardAddress, pool, nonce], rewardRate, newRate)
            await infiniteFarmingContract.setRates([rewardAddress, bonusRewardAddress, pool, nonce], rewardRate, newRate)
        }

    }, [provider, account])

    const addRewards = useCallback(async (rewardAddress, bonusRewardAddress, pool, nonce, newAmount, rewardType) => {

        if (!account || !provider) return

        if (rewardType === 'main') {
            console.log('[ADD REWARD]', [rewardAddress, bonusRewardAddress, pool, nonce], +newAmount, 0)
            await infiniteFarmingContract.addRewards([rewardAddress, bonusRewardAddress, pool, nonce], newAmount, 0)
        } else {
            console.log('[ADD BONUS REWARD]', [rewardAddress, bonusRewardAddress, pool, nonce], 0, +newAmount)
            await infiniteFarmingContract.addRewards([rewardAddress, bonusRewardAddress, pool, nonce], 0, newAmount)
        }

    }, [provider, account])

    const decreaseRewards = useCallback(async (rewardAddress, bonusRewardAddress, pool, nonce, amount, rewardType) => {

        if (!account || !provider) return

        if (rewardType === 'main') {
            console.log('[DECREASE REWARD]', [rewardAddress, bonusRewardAddress, pool, nonce], +amount, 0)
            await infiniteFarmingContract.decreaseRewardsAmount([rewardAddress, bonusRewardAddress, pool, nonce], amount, 0)
        } else {
            console.log('[DECREASE BONUS REWARD]', [rewardAddress, bonusRewardAddress, pool, nonce], 0, +amount)
            await infiniteFarmingContract.decreaseRewardsAmount([rewardAddress, bonusRewardAddress, pool, nonce], 0, amount)
        }

    }, [provider, account])

    return {
        deactivateFarming,
        changeRate,
        addRewards,
        decreaseRewards
    }
}