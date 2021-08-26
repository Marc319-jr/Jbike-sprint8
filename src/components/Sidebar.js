import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return(
        <div className = "sidebar">
            <ul>
                <li>
                    <NavLink to ="/" exact className ="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName = "active"><FaIcons.FaHome className= "me-2" />Inicio</NavLink>
                </li>
                <li>
                    <NavLink to ="/Sales" exact  className ="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName = "active"><FaIcons.FaRegChartBar className= "me-2" />Ventas</NavLink>
                </li>
                <li>
                    <NavLink to ="/Clientes" exact className ="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName = "active"><FaIcons.FaUser className= "me-2" />Clientes</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar