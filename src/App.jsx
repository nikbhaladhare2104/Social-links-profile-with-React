

function App() {

  return (
    <>
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
    </>
  )
}

export default App
