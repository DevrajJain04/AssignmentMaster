// Groq API Service for Voice Transcription and Answer Evaluation
// Uses Whisper v3 for transcription and Llama/Mixtral for evaluation

const GROQ_API_URL = 'https://api.groq.com/openai/v1'

// Get API key from localStorage
export const getApiKey = () => localStorage.getItem('groq_api_key')
export const setApiKey = (key) => localStorage.setItem('groq_api_key', key)
export const hasApiKey = () => !!getApiKey()

// Transcribe audio using Whisper
export async function transcribeAudio(audioBlob) {
    const apiKey = getApiKey()
    if (!apiKey) {
        throw new Error('Groq API key not set. Please add your API key in Settings.')
    }

    const formData = new FormData()
    formData.append('file', audioBlob, 'recording.webm')
    formData.append('model', 'whisper-large-v3-turbo')
    formData.append('response_format', 'json')

    const response = await fetch(`${GROQ_API_URL}/audio/transcriptions`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
        body: formData,
    })

    if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.error?.message || `Transcription failed: ${response.status}`)
    }

    const data = await response.json()
    return data.text
}

// Evaluate user's answer against expected key points
export async function evaluateAnswer(question, description, userAnswer, keyPoints) {
    const apiKey = getApiKey()
    if (!apiKey) {
        throw new Error('Groq API key not set. Please add your API key in Settings.')
    }

    const systemPrompt = `You are a senior software engineer conducting a technical interview. 
Evaluate the candidate's answer fairly but rigorously.

You must respond in this exact JSON format:
{
  "score": <0-100>,
  "verdict": "correct" | "partial" | "incorrect",
  "feedback": "<2-3 sentences of constructive feedback>",
  "missedPoints": ["<key point they missed>"],
  "modelAnswer": "<a concise, ideal answer in 3-4 sentences>"
}

Be encouraging but honest. Focus on technical accuracy.`

    const userPrompt = `**Interview Question:** ${question}

**Context (how an interviewer would ask it):** ${description}

**Key points expected in a good answer:**
${keyPoints.map(p => `- ${p}`).join('\n')}

**Candidate's Answer:**
"${userAnswer}"

Evaluate this answer and provide structured feedback in JSON format.`

    const response = await fetch(`${GROQ_API_URL}/chat/completions`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            temperature: 0.3,
            max_tokens: 500,
            response_format: { type: 'json_object' },
        }),
    })

    if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.error?.message || `Evaluation failed: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices[0]?.message?.content

    try {
        return JSON.parse(content)
    } catch {
        return {
            score: 50,
            verdict: 'partial',
            feedback: content || 'Unable to parse evaluation',
            missedPoints: [],
            modelAnswer: 'Please try again.',
        }
    }
}

// Test API connection
export async function testConnection() {
    const apiKey = getApiKey()
    if (!apiKey) return { success: false, error: 'No API key' }

    try {
        const response = await fetch(`${GROQ_API_URL}/models`, {
            headers: { 'Authorization': `Bearer ${apiKey}` },
        })

        if (response.ok) {
            return { success: true }
        } else {
            return { success: false, error: 'Invalid API key' }
        }
    } catch (err) {
        return { success: false, error: err.message }
    }
}
