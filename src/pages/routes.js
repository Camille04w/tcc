
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './Home'
import Catalogo from './Catalogo'
import Contato from './Contato'
import Sugestoes from './Sugestoes'
import Header from '../components/Header'


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/catalogo" element={<Catalogo />}/>
            <Route path="/catalogo" element={<Sugestoes />}/>
            <Route path="/catalogo" element={<Contato />}/>
        </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;