import React from 'react'

const Notes = (props) => {
  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="flex min-h-48 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className="mb-3 break-words text-lg font-bold text-gray-800">
        {props.title || 'Untitled Note'}
      </h2>

      <p className="mb-5 flex-1 whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
        {props.content}
      </p>

      <div className="flex justify-end border-t border-gray-100 pt-3">
        <button
          onClick={handleClick}
          className="rounded-lg px-4 py-2 text-sm font-semibold text-red-500 transition duration-200 hover:bg-red-50 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Notes

