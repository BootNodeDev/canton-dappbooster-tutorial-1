import { useAccount } from '@bootnodedev/canton-connect'
import { sumHoldings } from '@bootnodedev/canton-dappbooster'
import { useHoldings } from '@bootnodedev/canton-dappbooster/connect'

export const AccountPanel = (): React.JSX.Element => {
  const { account, isConnected } = useAccount()
  const { holdings } = useHoldings()

  if (!isConnected || account === undefined) {
    return <p className="text-fg-muted">Connect a wallet to start.</p>
  }

  const [amulet] = sumHoldings(holdings ?? [])

  return (
    <section className="rounded-lg border border-border p-4">
      <p className="font-semibold">{account.hint}</p>
      <p className="break-all text-sm text-fg-muted">{account.partyId}</p>
      <p className="mt-3 text-sm">Balance: {amulet?.balance ?? '0'}</p>
    </section>
  )
}
