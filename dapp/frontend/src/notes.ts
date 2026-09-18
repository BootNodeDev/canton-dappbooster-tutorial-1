// A template id in `#package-name:Module:Template` form. The participant resolves it to whichever
// package id it holds, so a rebuild of the DAR needs no edit here.
export const NOTE_TEMPLATE_ID = '#note:Note:Note'

// JSON Ledger API v2 create command.
export const createNoteCommand = (author: string, reader: string, text: string) => ({
  CreateCommand: {
    templateId: NOTE_TEMPLATE_ID,
    createArguments: { author, reader, text },
  },
})
