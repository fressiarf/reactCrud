import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MarketPlaceProducts from "../pages/MarketPlaceProducts";
import CrudUsuarios from "../pages/CrudUsuarios";


const Routing =()=> {

    return(
        <Router>
            <Routes>
                 <Route path="/" element={<CrudUsuarios />} />
                <Route path="/productos" element={<CrudUsuarios/>}/>
                 <Route path="/market" element={<MarketPlaceProducts/>}/>
            </Routes>
        </Router>

    )

}

export default Routing