import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CrudProducts from "../pages/CrudProducts";
import MarketPlaceProducts from "../pages/MarketPlaceProducts";


const Routing =()=> {

    return(
        <Router>
            <Routes>
                <Route path="/productos" element={<CrudProducts/>}/>
                 <Route path="/market" element={<MarketPlaceProducts/>}/>
            </Routes>
        </Router>

    )

}

export default Routing