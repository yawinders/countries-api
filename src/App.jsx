import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import SelectMenu from "./Components/SelectMenu"
import CountriesList from "./Components/CountriesList"
import { useState } from "react"
import './App.css'
import './Components/countryListShimmer.css'
import CountryListShimmer from "./Components/countryListShimmer"


function App() {

  const [query, setQuery] = useState('');
  return (
    <>

      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        {/* {<CountryListShimmer />} */}
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default App
