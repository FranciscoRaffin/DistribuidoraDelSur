//import { useState } from 'react'
import './App.css'
import { Camion } from './assets/Camion'
import { Content } from './assets/Content'
import { Search }  from './assets/Search'


function App() {

  
  return (
    
    <>
  
      <header >
        <section id='camion-container'> <Camion/></section>
      </header>
      
      <nav>  
        <Search id="search" />
      </nav>

      <main>
          <Content/>

      </main>

      <footer>
      </footer>
    </>
  )
}

export default App
