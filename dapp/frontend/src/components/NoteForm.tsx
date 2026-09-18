import { useAccount, useExecute } from '@bootnodedev/canton-connect'
import { PartyIdInput } from '@bootnodedev/canton-dappbooster'
import { type FormEvent, useState } from 'react'
import { createNoteCommand } from '@/notes'

export const NoteForm = (): React.JSX.Element | null => {
  const { account } = useAccount()
  const { execute, error } = useExecute()
  const [reader, setReader] = useState('')
  const [text, setText] = useState('')

  if (account === undefined) {
    return null
  }

  const submit = (event: FormEvent): void => {
    event.preventDefault()
    // The wallet opens its own window to approve this. The note appears in the list once the
    // ledger has it.
    void execute({ commands: [createNoteCommand(account.partyId, reader, text)] })
    setText('')
  }

  return (
    <form className="space-y-3 rounded-lg border border-border p-4" onSubmit={submit}>
      <h2 className="font-semibold">Write a note</h2>
      <PartyIdInput onChange={setReader} placeholder="Reader party id" value={reader} />
      <input
        className="w-full rounded border border-border bg-surface px-3 py-2"
        onChange={(event) => setText(event.target.value)}
        placeholder="Your note"
        value={text}
      />
      <button
        className="rounded bg-primary px-4 py-2 text-primary-fg disabled:opacity-50"
        disabled={reader === '' || text === ''}
        type="submit"
      >
        Send
      </button>
      {error !== undefined && <p className="text-sm text-red-500">{error.message}</p>}
    </form>
  )
}
