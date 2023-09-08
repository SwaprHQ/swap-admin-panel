import { useEffect } from 'react'
import { InfiniteFarmingsList } from '../../components/InfiniteFarmingsList'
import { useInfoSubgraph } from '../../hooks/subgraph/useInfoSubgraph'
import styled from 'styled-components/macro'
import { useInfiniteFarming } from '../../hooks/useInfiniteFarming'

const Wrapper = styled.div`
  max-width: 95vw;
  min-width: 95vw;
`

const Title = styled.div`
  font-size: 21px;
  margin-bottom: 1rem;
`

export default function InfiniteEvents() {
  const {
    fetchInfiniteFarmings: { infiniteFarmings, infiniteFarmingsLoading, fetchInfiniteFarmingsFn },
  } = useInfoSubgraph()

  const { deactivateFarming, changeRate, addRewards, decreaseRewards } = useInfiniteFarming()

  useEffect(() => {
    fetchInfiniteFarmingsFn()
  }, [])

  return (
    <Wrapper>
      <Title>Active Eternal Farmings</Title>
      <InfiniteFarmingsList
        list={infiniteFarmings}
        loading={infiniteFarmingsLoading}
        deactivateCallback={deactivateFarming}
        changeRateCallback={changeRate}
        addRewardsCallback={addRewards}
        claimRewards={decreaseRewards}
        items={10}
      ></InfiniteFarmingsList>
    </Wrapper>
  )
}
