import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from '../Header/Header'
import HomePages from '../../Home/HomePages'
import SinglePage from '../Watch/SinglePage'
import Footer from '../Footer/Footer'

export default function Aplication() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePages />} />
          <Route exact path='/singlepage/:id' element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
