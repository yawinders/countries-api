import { useState } from "react"
import { useEffect } from "react"

export default function Header() {
    // let click = true
    const data = localStorage.getItem('isDarkMode')
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

    if (isDark) {
        document.body.classList.add("dark")
    }
    else {
        document.body.classList.remove("dark")

    }

    return (
        <header className="header-container">
            <div className="header-content">
                <h2 className="title">
                    <a href="/">Where in the world?</a>
                </h2>
                <p className="theme-changer" onClick={() => {


                    setIsDark(!isDark)
                    localStorage.setItem('isDarkMode', !isDark)
                }}>
                    <i className={`fa-regular fa-${isDark ? 'moon' : 'sun'}`} />
                    &nbsp;&nbsp;{isDark ? 'Dark' : 'Light'} Mode
                </p>
            </div>
        </header>
    )
}