import { type CantonConnectConfig, CantonConnectProvider } from '@bootnodedev/canton-connect'
import { ThemeProvider } from '@bootnodedev/canton-dappbooster'
import { RemoteAdapter } from '@canton-network/dapp-sdk'
import { WALLET_GATEWAY_URL } from '@/utils/config'

const connectConfig: CantonConnectConfig = {
  appName: 'Notes',
  // `restore()` matches this url, so a session survives a reload only for a gateway registered here.
  additionalAdapters: [new RemoteAdapter({ name: 'Wallet Gateway', rpcUrl: WALLET_GATEWAY_URL })],
}

export const App = (): React.JSX.Element => (
  <ThemeProvider>
    <CantonConnectProvider config={connectConfig}>
      <main className="p-8">Notes</main>
    </CantonConnectProvider>
  </ThemeProvider>
)
