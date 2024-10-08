//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import { Camion } from './assets/elements/Camion'
import { Content } from './assets/elements/Content'
import { BrandsFilters } from './assets/elements/BrandsFilters'
import { TagsFilter } from './assets/elements/TagsFilter'
import { Search } from './assets/elements/Search'


function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    
    <>
  
      <header >
        {/*<section id='camion-container'> <Camion/></section> */}

      </header>
      
      <nav>  
        <div id="search-container"><Search onSearch={setSearchTerm} /></div>
        <BrandsFilters setSelectedBrand={setSelectedBrand} />
        <TagsFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      </nav>

      <main>
      <Content  
                      selectedBrand={selectedBrand} 
                      selectedTag={selectedTag} 
                      searchTerm={searchTerm} />

      </main>

      <footer>
      </footer>
    </>
  )
}

export default App
