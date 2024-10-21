import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProductScreen from './screens/ProductScreen';
import FaqScreen from './screens/FaqScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/abouts" element={<AboutScreen />} />
          <Route path="/contacts" element={<ContactScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/faq" element={<FaqScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
