'use client'
import { useChat } from 'ai/react'
import Link from 'next/link'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      <Link href='/completion'>Go completion chat</Link>

      {messages.map((m) => (
        <div key={m.id} className='whitespace-pre-wrap'>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className='fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-zinc-900'
          value={input}
          placeholder='Say something...'
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
