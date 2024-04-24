import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  const body = document.querySelector("body")

  body.classList.toggle("dark", darkMode)  // toggling dark mode (if it is on, bg color changes to black)
  // doing this to remove fast scrolling effect on dark bg color 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <section className={`${darkMode ? "dark" : ""}`}>
      <div className="toggle">
        <p className="toggle-light">Light</p>
        <div className="toggle-btn" onClick={toggleDarkMode}>
          <div className="toggle-slider" />
        </div>
        <p className="toggle-dark"> Dark </p>
      </div>
      <div className="container">
        <div className="App">
          <div className="profile-card">
            <img src="/profile_pic.png" alt="profile-pic" className="profile-pic" />
            <h1> Nikhil Bhaladhare</h1>
            <p className="location"> Nagpur, India</p>
            <p className="description">  "Front-end developer and space enthusiast." </p>
            <div className="social-links">
              <p onClick={() => {}}> GitHub </p>
              <p onClick={() => {}}> Frontend Mentor </p>
              <p onClick={() => {}}> LinkedIn </p>
              <p onClick={() => {}}> Twitter </p>
              <p onClick={() => {}}> Instagram </p>
            </div>
          </div>        
        </div>
      </div>
    </section>
  )
}

export default App
