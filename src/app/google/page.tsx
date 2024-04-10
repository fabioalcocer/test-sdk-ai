'use client'
import { useCompletion } from 'ai/react'

export const runtime = 'edge'

export default function Page() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/completion-google',
  })

  return (
    <div className='flex flex-col items-center justify-center min-h-[90vh]'>
      <p>{completion}</p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center gap-3'
      >
        <label>Say something...</label>
        <input
          value={input}
          onChange={handleInputChange}
          className='text-slate-900'
        />
        <button type='submit' className='bg-slate-600 text-white px-4 py-2 rounded'>Send</button>
      </form>
    </div>
  )
}
