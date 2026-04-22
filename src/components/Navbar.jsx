import {navLinks,navIcons} from "#constants/index.js";
import dayjs from 'dayjs'
const Navbar=()=>{const today = dayjs().format('DD MM YYYY');
    return (
        <nav>
            <div>
              <img src="/images/logo.svg"/>
                <p>Vansh's porfolio </p>
                <ul>
                    {
                        navLinks.map(({id,name})=>(
                        <li key={id}>
                            <p> {name} </p>
                            </li> ))
                   }
                </ul>
            </div>
                <div>
                   <ul>
                        {
                            navIcons.map(({id,img})=>(
                                <li key={id}>
                                    <img src={img} className="icon-hover" alt={`icon-${id}}`} />
                                </li>
                            ))
                        }
                </ul>
                    <tiime>{today}</tiime>
                </div>
        </nav>

    );
};
export default Navbar;