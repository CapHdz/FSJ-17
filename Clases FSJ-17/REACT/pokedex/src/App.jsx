import ListaPokes from './components/ListaPokes'
import './assets/css/style.css'
import HeaderPokes from './components/HeaderPokes'

function App() {
  
    return (
      <>
        <HeaderPokes />
        <div className='container'>
          <ListaPokes />
        </div>
      </>
    )
}

export default App