import React from 'react'

const Header = () => {
return (
<header className="bg-yellow-400 px-6 py-5 shadow-md">
<div className="mx-auto flex max-w-7xl items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
<span className="text-2xl">📝</span>
</div>

    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Keeper
      </h1>
      <p className="text-sm text-gray-700">
        Capture your thoughts, one note at a time.
      </p>
    </div>
  </div>
</header>
)
}

export default Header