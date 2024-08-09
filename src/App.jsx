//import { useState } from 'react'
import './App.css'
import { Camion } from './assets/elements/Camion'
import { Content } from './assets/elements/Content'
import { BrandsFilters } from './assets/elements/BrandsFilters'
import { TagsFilter } from './assets/elements/TagsFilter'


function App() {

  
  return (
    
    <>
  
      <header >
        <section id='camion-container'> <Camion/></section>
      </header>
      
      <nav>  
        {/*<Search id="search" />*/}
        <BrandsFilters id="brand-filter" />
        <TagsFilter/>

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
