import { useWeather } from 'hooks'
import React, { useRef, useState } from 'react'
import { BiLoader, BiSearch, BiX } from 'react-icons/bi'

const Search = () => {
  const { search, isLoading } = useWeather()

  const inputRef = useRef<HTMLInputElement>(null)

  const [hasValue, setHasValue] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.target.value)
    setHasValue(!!event.target.value)
  }

  const clearSearch = () => {
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = ''
      search('')
      setHasValue(false)
    }
  }

  return (
    <div className="p-4 rounded-md bg-slate-800 flex items-center gap-4">
      {isLoading ? <BiLoader className="animate-spin" /> : <BiSearch />}
      <input
        onChange={handleChange}
        ref={inputRef}
        type="text"
        placeholder="Search your city here"
        className="outline-none border-none w-full bg-transparent text-slate-100 placeholder:text-slate-400"
      />
      {hasValue ? (
        <button onClick={clearSearch}>
          <BiX />
        </button>
      ) : null}
    </div>
  )
}

export default Search
