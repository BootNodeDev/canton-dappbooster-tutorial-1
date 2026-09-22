# @canton-dappbooster/frontend — Notes

One party writes a note for another. The reader acknowledges it and the note is archived.

Every read and every write goes through the connected CIP-0103 wallet, so the app acts as the
wallet's primary account and each write raises an approval prompt. Changing the wallet's primary
party changes the party the app acts as.

## Run

The app needs a Canton LocalNet, the Wallet Gateway and the `note` DAR on the participant before it
does anything. From the repo root:

```bash
node scripts/localnet-config.mjs .canton-localnet
cd .canton-localnet && pnpm exec canton-barebones start
```

```bash
pnpm run wallet-gateway   # → http://localhost:3030
```

```bash
pnpm run app:dev          # → http://localhost:3012
```

Build the contract and upload it, from the repo root:

```bash
cd dapp/daml
dpm build
cd ../..
export CANTON_BACKEND_TOKEN=$(node scripts/mint-token.mjs ledger-api-user | awk 'NR==1')
curl -X POST http://localhost:2975/v2/packages \
  -H "Authorization: Bearer $CANTON_BACKEND_TOKEN" \
  -H "Content-Type: application/octet-stream" \
  --data-binary "@dapp/daml/.daml/dist/note-1.0.0.dar"
```

Connect with the Wallet Gateway and log in with the client secret `unsafe`. You need two parties,
both created with `wallet-kernel` as the signing provider. A party takes about a minute after
creation before it can be used in a transaction.

The gateway's dApp API url is the one env knob the app reads, and it defaults to the local stack.
It is set in the repo root's [`.env`](../../.env.example).
