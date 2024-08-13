import { useState } from 'react'
import Cost from './components/Cost/Cost'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'
import ProductList from './components/ProductList/ProductList'
import Support from './components/Support/Support'
import './styles/main.css'
const App = () => {
  // const [modalActive, setModalActive] = useState(true)
  return (
    <div className="">
      <Header />
      <Main />
      <ProductList />
      <Support />
      <Cost />
      <Footer />
      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
    </div>
  )
}

export default App
