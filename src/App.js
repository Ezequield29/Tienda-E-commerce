import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Product from './components/Product/product';
import PruebaMontaje from './components/PruebaDeMontaje/PruebaMontaje';
import ItemsCount from './components/ItemsCount';
import ItemDetailContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/detalles" element={<ItemDetailContainer />} />
        <Route path="/prueba" element={<PruebaMontaje />} />
        <Route path="/contador" element={<ItemsCount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;