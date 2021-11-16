import {Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Users from './components/Users';
import Login from './pages/Login';
function App() {
  return (
		<div>
			<main>
				<MainHeader />
        <Routes>
          <Route path='/' element={<Login  />} />
					<Route path="/welcome" element={<Welcome />} />
					<Route path="users" element={<Users />}>
						<Route path=":id" element={<h1>hi1</h1>} />
						<Route path="me" element={<h1>Sudharshan KR</h1>} />
					</Route>
					<Route path="/products" element={<Products />} />
					<Route path="/products/:ProductId" element={<ProductDetail />} />
				</Routes>
			</main>
			<MainFooter />
		</div>
	);
}


export default App;
