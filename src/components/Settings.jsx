import { useState, useEffect } from 'react'
import { getApiKey, setApiKey, testConnection } from '../utils/groqService'
import './Settings.css'

function Settings({ isOpen, onClose }) {
    const [apiKey, setApiKeyState] = useState('')
    const [status, setStatus] = useState('idle') // idle, testing, success, error
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        if (isOpen) {
            setApiKeyState(getApiKey() || '')
            setStatus('idle')
        }
    }, [isOpen])

    const handleSave = async () => {
        if (!apiKey.trim()) {
            setApiKey('')
            onClose()
            return
        }

        setStatus('testing')
        setApiKey(apiKey.trim())

        const result = await testConnection()

        if (result.success) {
            setStatus('success')
            setTimeout(() => onClose(), 1000)
        } else {
            setStatus('error')
            setErrorMsg(result.error || 'Invalid API key')
        }
    }

    const handleClear = () => {
        setApiKey('')
        setApiKeyState('')
        setStatus('idle')
    }

    if (!isOpen) return null

    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✕</button>

                <h2>⚙️ Settings</h2>

                <div className="setting-group">
                    <label htmlFor="apiKey">Groq API Key</label>
                    <p className="setting-desc">
                        Required for voice transcription and AI answer evaluation.
                        <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer">
                            Get your free API key →
                        </a>
                    </p>

                    <div className="api-key-input">
                        <input
                            type="password"
                            id="apiKey"
                            value={apiKey}
                            onChange={(e) => setApiKeyState(e.target.value)}
                            placeholder="gsk_xxxxxxxxxxxxxxxxxxxx"
                        />
                        {apiKey && (
                            <button className="clear-btn" onClick={handleClear}>✕</button>
                        )}
                    </div>

                    {status === 'success' && (
                        <div className="status-message success">
                            ✅ API key verified successfully!
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="status-message error">
                            ❌ {errorMsg}
                        </div>
                    )}
                </div>

                <div className="settings-actions">
                    <button
                        className="save-btn"
                        onClick={handleSave}
                        disabled={status === 'testing'}
                    >
                        {status === 'testing' ? 'Verifying...' : 'Save'}
                    </button>
                    <button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </button>
                </div>

                <div className="settings-info">
                    <h3>About Groq</h3>
                    <ul>
                        <li>🆓 Free tier: 2 hours of transcription per hour</li>
                        <li>🔒 Your API key is stored locally in your browser</li>
                        <li>🚀 Uses Whisper v3 for transcription & Llama 3 for evaluation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Settings
