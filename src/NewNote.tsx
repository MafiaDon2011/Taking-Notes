import { NoteForm } from "./NoteForm";
import { NoteData, Tag } from "./App";

type NewNoteProps = {
    onSumbit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewNote({onSumbit, onAddTag, availableTags}: NewNoteProps) {
    return (
        <>
            <h1 className="mb-4">New Note</h1>
            <NoteForm  onSubmit={onSumbit} onAddTag={onAddTag} availableTags={availableTags} />
        </>
    )
}