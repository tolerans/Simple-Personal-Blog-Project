import React, {Component} from 'react';
import {Link} from "react-router-dom"


class Navi extends Component {
    render() {
        return (

            <nav id={"navlinks"} className={"navbar navbar-expand-lg "}>

                    <ul className={"navbar-nav mr-auto"}>
                        <li className={"nav-item"}>
                            <div>
                                <Link id={"title"} to={"/"} className={"nav-link"} >Hakkımda</Link>
                            </div>

                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/myteam"} className="nav-link" href="#" >Mesajlar</Link>
                        </li>
                    </ul>
                    <ul className={"navbar-nav ml-auto"}>
                        <li className={"nav-item"}>
                            <div>
                                <Link to={"/cv"} className="nav-link" href="#">CV</Link>
                            </div>

                        </li>
                        <li className={"nav-item"}>
                            <div>
                                <Link to={"/mycity"} className="nav-link" href="#" >Şehrim</Link>
                            </div>

                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/heritage"} className="nav-link" href="#" >Mirasımız</Link>
                        </li>

                        <li className={"nav-item"}>
                            <Link to={"/contact"} className="nav-link" href="#" >İletişim</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/login"} className="nav-link" href="#" >Kayıt ol</Link>
                        </li>
                    </ul>


            </nav>
        );
    }
}

export default Navi;
