import { Route, Routes } from 'react-router-dom'

import Dashboard from "./Components/pages/Dashbord"

import Tamplate1 from "./Components/tamplates/tamplate1"
import Tamplate2 from "./Components/tamplates/tamplate2"
import Tamplate3 from "./Components/tamplates/tamplate3"
import PageNotFound from "./Components/pages/PageNotFound"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        
        <Route path='/dashborad' element={<Dashboard/>}></Route>
        <Route path='/tamplate1' element={<Tamplate1/>}></Route>
        <Route path='/tamplate2' element={<Tamplate2/>}></Route>
        <Route path='/tamplate3' element={<Tamplate3/>}></Route>

        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App