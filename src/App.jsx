//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import { Camion } from './assets/elements/Camion'
import { Content } from './assets/elements/Content'
import { BrandsFilters } from './assets/elements/BrandsFilters'
import { TagsFilter } from './assets/elements/TagsFilter'


function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  
  return (
    
    <>
  
      <header >
        <section id='camion-container'> <Camion/></section>

      </header>
      
      <nav>  
        {/*<Search id="search" />*/}
        <BrandsFilters setSelectedBrand={setSelectedBrand} />
        <TagsFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      </nav>

      <main>
      <Content selectedBrand={selectedBrand} selectedTag={selectedTag} />

      </main>

      <footer>
      </footer>
    </>
  )
}

export default App
