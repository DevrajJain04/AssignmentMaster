import { useState, useRef, useEffect } from 'react'
import { transcribeAudio } from '../utils/groqService'
import './VoiceAnswer.css'

function VoiceAnswer({ onTranscription, onCancel }) {
    const [isRecording, setIsRecording] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [duration, setDuration] = useState(0)
    const [status, setStatus] = useState('ready') // ready, recording, processing, done, error
    const [error, setError] = useState(null)

    const mediaRecorderRef = useRef(null)
    const chunksRef = useRef([])
    const timerRef = useRef(null)
    const streamRef = useRef(null)

    const MAX_DURATION = 120 // 2 minutes max

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop())
            }
        }
    }, [])

    const startRecording = async () => {
        try {
            setError(null)
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            streamRef.current = stream

            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm;codecs=opus'
            })
            mediaRecorderRef.current = mediaRecorder
            chunksRef.current = []

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data)
                }
            }

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' })
                await processAudio(audioBlob)
            }

            mediaRecorder.start(1000) // Collect data every second
            setIsRecording(true)
            setStatus('recording')

            timerRef.current = setInterval(() => {
                setDuration(d => {
                    if (d >= MAX_DURATION) {
                        stopRecording()
                        return d
                    }
                    return d + 1
                })
            }, 1000)
        } catch (err) {
            setError('Microphone access denied. Please allow microphone access.')
            setStatus('error')
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            streamRef.current?.getTracks().forEach(track => track.stop())
            clearInterval(timerRef.current)
            setIsRecording(false)
            setStatus('processing')
        }
    }

    const processAudio = async (audioBlob) => {
        try {
            setStatus('processing')
            const transcription = await transcribeAudio(audioBlob)
            setStatus('done')
            onTranscription(transcription)
        } catch (err) {
            setError(err.message)
            setStatus('error')
        }
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="voice-answer">
            {status === 'ready' && (
                <div className="voice-ready">
                    <button className="record-btn" onClick={startRecording}>
                        <span className="mic-icon">🎤</span>
                        <span>Start Recording</span>
                    </button>
                    <p className="hint">Speak your answer clearly. Max 2 minutes.</p>
                </div>
            )}

            {status === 'recording' && (
                <div className="voice-recording">
                    <div className="recording-indicator">
                        <span className="pulse-dot"></span>
                        <span className="recording-text">Recording...</span>
                    </div>
                    <div className="timer">
                        {formatTime(duration)} / {formatTime(MAX_DURATION)}
                    </div>
                    <div className="recording-controls">
                        <button className="stop-btn" onClick={stopRecording}>
                            <span>⏹️</span> Stop & Submit
                        </button>
                        <button className="cancel-btn" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                    <div className="waveform">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="wave-bar"
                                style={{
                                    animationDelay: `${i * 0.05}s`,
                                    height: `${20 + Math.random() * 30}px`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            )}

            {status === 'processing' && (
                <div className="voice-processing">
                    <div className="spinner"></div>
                    <p>Transcribing with AI...</p>
                </div>
            )}

            {status === 'error' && (
                <div className="voice-error">
                    <span className="error-icon">⚠️</span>
                    <p>{error}</p>
                    <button className="retry-btn" onClick={() => { setStatus('ready'); setDuration(0); }}>
                        Try Again
                    </button>
                </div>
            )}
        </div>
    )
}

export default VoiceAnswer
