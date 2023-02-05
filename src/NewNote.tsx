import { NoteForm } from "./NoteForm";
import { NoteData } from "./App";

type NewNoteProps = {
    onSumbit: (data: NoteData) => void
}

export function NewNote({onSumbit}: NewNoteProps) {
    return (
        <>
            <h1 className="mb-4">New Note</h1>
            <NoteForm  onSubmit={onSumbit}/>
        </>
    )
}