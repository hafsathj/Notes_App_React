import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Notes from './components/Notes/Notes'
import Footer from './components/Footer/Footer'
import CreatArea from './components/CreateArea/CreatArea'

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
  setNotes(prevNotes => [
    ...prevNotes,
    {
      ...newNote,
      id: crypto.randomUUID()
    }
  ])
}

  function deleteNote(id) {
  setNotes(prevNotes => {
    return prevNotes.filter(noteItem => {
      return noteItem.id !== id
    })
  })
}
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-12">
        <CreatArea onAdd={addNote} />

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              My Notes
            </h2>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-gray-700">
              {notes.length} {notes.length === 1 ? 'Note' : 'Notes'}
            </span>
          </div>

          {notes.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white px-6 py-12 text-center">
              <div className="mb-3 text-5xl">📒</div>

              <h3 className="text-lg font-semibold text-gray-700">
                No notes yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Start by writing your first note above!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {notes.map(noteItem => (
                <Notes
                  key={noteItem.id}
                  id={noteItem.id}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App