
import { GoogleGenerativeAI } from '@google/generative-ai'
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')

export const runtime = 'edge'

// Build a prompt
function buildGoogleGenAIPrompt(prompt: string) {
  return { contents: [{ role: 'user', parts: [{ text: prompt }] }] }
}

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json()

  // Request the Google API for the response based on the prompt
  const response = await genAI
    .getGenerativeModel({ model: 'gemini-1.0-pro-latest' })
    .generateContentStream(buildGoogleGenAIPrompt(prompt))

  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
