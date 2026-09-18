# Canton dAppBooster tutorial

The app built in the [Canton dAppBooster quickstart](https://docs.dappbooster.cc/tutorials/quickstart).

It is a Canton dAppBooster project with the demo removed, plus one small Daml contract called
`Note`. A note is a line of text written by one party for another. The reader acknowledges it and
the note is archived.

Each commit on `main` is one step of the tutorial, so you can read them in order or check out the
one you are stuck on.

## Requirements

- Node 24 (>=24.15.0)
- pnpm
- Docker
- dpm (DAML SDK 3.4.11)

## Running it

```bash
pnpm install
./scripts/dev-stack.sh up
```

Then build and upload the contract:

```bash
pnpm run build-dar
pnpm run deploy-dar -- dapp/daml/.daml/dist/note-1.0.0.dar
```

- The app runs on http://localhost:3012
- The Wallet Gateway runs on http://localhost:3030. Log in with the client secret `unsafe`.
- You need two parties, both created with `wallet-kernel` as the signing provider.
