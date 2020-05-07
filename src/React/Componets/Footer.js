import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div id={"footer"} className=" clearfix d-flex justify-content-between">

                        <div className="col">
                            <h4 className="text-uppercase">DİĞER BAĞLANTILAR</h4>
                            <p><a href={"#"}>
                                Hizmet Standartları
                            </a></p>
                            <p>
                                <a href="#">Site Ağacı</a>
                            </p>


                        </div>
                        <div className="col ">
                            <h4 className="text-uppercase">Sosyal Medya</h4>
                            <ul >

                                <li>
                                    <button className="btn btn-outline btn-social">
                                        <i className="fab fa-fw fa-facebook-f"></i>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-outline btn-social">
                                        <i className="fab fa-fw fa-google-plus-g"></i>
                                    </button>
                                </li>

                                <li>
                                    <button className="btn btn-outline btn-social">
                                        <i className="fab fa-fw fa-twitter"></i>
                                    </button>
                                </li>

                                <li>
                                    <button className="btn btn-outline btn-social">
                                        <i className="fab fa-fw fa-linkedin-in"></i>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-outline btn-social">
                                        <i className="fab fa-fw fa-dribbble"></i>
                                    </button>
                                </li>


                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="text-uppercase">İletişim</h4>
                            <p>
                                Cumhuriyet Cad.
                                İsmail Kahraman Kültür Mrk.
                                Kat:2 RİZE

                            </p>
                            <p>+90 (464) 2130426</p>
                        </div>

                    </div>
                </footer>
                <div className="copyright">
                    <div className="">
                        <small>
                            Copyright © Your Website 2018
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
