'use client'
import { useCompletion } from 'ai/react'

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion',
  })

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder='Enter your prompt...'
          onChange={handleInputChange}
          className='text-zinc-900'
        />
        <p>Completion result: {completion}</p>
        <div className='flex gap-4 mt-5'>
          <button
            type='button'
            onClick={stop}
            className='rounded-md bg-slate-800 py-2 px-5'
          >
            Stop
          </button>
          <button
            disabled={isLoading}
            type='submit'
            className='rounded-md bg-slate-200 text-black py-2 px-5'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

// 'use client'

// import { useCompletion } from 'ai/react'
// import { useState, useCallback } from 'react'

// export default function PostEditorPage() {
//   // Locally store our blog posts content
//   const [content, setContent] = useState('')
//   const { complete } = useCompletion({
//     api: '/api/completion',
//   })

//   const checkAndPublish = useCallback(
//     async (c: string) => {
//       const completion = await complete(c)
//       if (!completion) throw new Error('Failed to check typos')
//       const typos = JSON.parse(completion)
//       // you should add more validation here to make sure the response is valid
//       if (typos?.length && !window.confirm('Typos found… continue?')) return
//       else alert('Post published')
//     },
//     [complete]
//   )

//   return (
//     <div className='flex flex-col'>
//       <h1>Post Editor</h1>
//       <textarea value={content} onChange={(e) => setContent(e.target.value)} className='text-slate-900 resize-y py-5 mx-auto w-full max-w-xl' />
//       <button onClick={() => checkAndPublish(content)}>Publish</button>
//     </div>
//   )
// }
