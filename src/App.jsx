import Cost from './components/Cost/Cost'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ProductList from './components/ProductList/ProductList'
import Support from './components/Support/Support'
import './styles/main.css'
const App = () => {
  return (
    <div className="">
      <Header />
      <Main />
      <ProductList />
      <Support />
      <Cost />
    </div>
  )
}

export default App
