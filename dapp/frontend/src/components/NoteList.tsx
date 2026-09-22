import { useAccount, useExecute } from '@bootnodedev/canton-connect'
import { partyHint } from '@bootnodedev/canton-dappbooster'
import { acknowledgeCommand } from '@/notes'
import { useNotes } from '@/useNotes'

export const NoteList = (): React.JSX.Element | null => {
  const { account } = useAccount()
  const { notes } = useNotes()
  const { execute } = useExecute()

  return account === undefined ? null : (
    <section className="space-y-3 rounded-lg border border-border p-4">
      <h2 className="font-semibold">Notes</h2>
      {notes.length === 0 ? (
        <p className="text-sm text-fg-muted">Nothing here yet.</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              className="flex items-center justify-between gap-4 rounded border border-border p-3"
              key={note.contractId}
            >
              <div>
                <p>{note.text}</p>
                <p className="text-xs text-fg-muted">from {partyHint(note.author)}</p>
              </div>
              {note.reader === account.partyId && (
                <button
                  className="rounded bg-primary px-3 py-1 text-sm text-primary-fg"
                  onClick={() => void execute({ commands: [acknowledgeCommand(note.contractId)] })}
                  type="button"
                >
                  Acknowledge
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
