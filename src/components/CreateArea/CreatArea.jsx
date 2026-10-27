import React, { useState } from 'react'

const CreatArea = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  function handleChange(event) {
    const { name, value } = event.target

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    event.preventDefault()

    if (!note.title.trim() && !note.content.trim()) {
      return
    }

    props.onAdd(note)

    setNote({
      title: '',
      content: ''
    })
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-xl px-4">
      <form
        onSubmit={submitNote}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
          className="mb-4 w-full border-b border-gray-200 pb-3 text-xl font-semibold text-gray-800 outline-none placeholder:text-gray-400 focus:border-yellow-400"
        />

        <textarea
          name="content"
          rows="4"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          className="w-full resize-y rounded-lg bg-gray-50 p-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-yellow-300"
        />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-xl bg-yellow-400 px-6 py-2.5 font-semibold text-gray-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-md active:translate-y-0"
          >
            + Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatArea
