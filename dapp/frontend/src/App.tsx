import { type CantonConnectConfig, CantonConnectProvider } from '@bootnodedev/canton-connect'
import { ThemeProvider } from '@bootnodedev/canton-dappbooster'
import { WalletButton } from '@bootnodedev/canton-dappbooster/connect'
import { RemoteAdapter } from '@canton-network/dapp-sdk'
import { NoteForm } from '@/components/NoteForm'
import { NoteList } from '@/components/NoteList'
import { WALLET_GATEWAY_URL } from '@/utils/config'

const connectConfig: CantonConnectConfig = {
  appName: 'Notes',
  additionalAdapters: [new RemoteAdapter({ name: 'Wallet Gateway', rpcUrl: WALLET_GATEWAY_URL })],
}

export const App = (): React.JSX.Element => (
  <ThemeProvider>
    <CantonConnectProvider config={connectConfig}>
      <div className="min-h-screen bg-bg text-fg">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="text-lg font-semibold">Notes</span>
          <WalletButton />
        </header>
        <main className="mx-auto max-w-2xl space-y-6 px-6 py-10">
          <NoteForm />
          <NoteList />
        </main>
      </div>
    </CantonConnectProvider>
  </ThemeProvider>
)
