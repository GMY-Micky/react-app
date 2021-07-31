import Footer from './components/footer';
import Header from './components/header';
import Products from './components/products';
import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [prods, setProds] = useState([]);

  const getProds = () => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {
          setProds(json);
      })
  }

  useEffect(() => {
      getProds();
  }, [])

  return (
    <div>
      <Header />
      <Button>React bootstrap button</Button>
      <Products products={prods}/>
      <Footer/>
    </div>
  )
}

export default App;
