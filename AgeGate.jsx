import React, { useState } from 'react'

function AgeGate({ onVerify }) {
    const [age, setAge] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userAge = parseInt(age)

        if (!age || isNaN(userAge)) {
            setError('Please enter your age')
            return
        }

        if (userAge >= 18) {
            onVerify()
        } else {
            setError('🔞 Sorry, this platform is for 18+ readers only')
        }
    }

    return (
        <div className="age-gate">
            <div className="age-card">
                <h1>🔞 18+ Only</h1>
                <p className="subtitle">Mature stories for adult readers</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="age-input"
                    />
                    <button type="submit" className="verify-btn">
                        Verify Age
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>
                <p className="terms">
                    By continuing, you agree to our Terms of Service
                </p>
            </div>
        </div>
    )
}

export default AgeGate