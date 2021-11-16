import {Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Routes>
        <Route path='/welcome' element={<Welcome  />} />
        <Route path='/products' element={<Products  />} />
        <Route path='/products/:ProductId' element={<ProductDetail  />} />
      </Routes>
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
