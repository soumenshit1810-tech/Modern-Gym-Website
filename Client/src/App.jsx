import React from 'react'

function App() {
  return (
    <div>
         <Navbar/>
      <div>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App