import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Section from './components/section/Section'
import ListaPhones from './components/smartphones/ListaPhones';
import Accesorios from './components/accesorios/Accesorios';
import Servicios from './components/servicios/Servicios';
import Registro from './components/sectionUser/RegistroUser';
import Login from './components/sectionUser/Login';
import Cuenta from './components/sectionUser/Cuenta';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <main>
          <Routes>
            <Route path='/' element={<Section />} />
            <Route path='/smartphones' element={<ListaPhones />} />
            <Route path='/accesorios' element={<Accesorios/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
            <Route path='/registro' element={<Registro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cuenta' element={<Cuenta />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
export default App
