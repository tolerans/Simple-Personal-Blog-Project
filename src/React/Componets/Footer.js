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
                                Web Teknolojileri BSM 104
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
                                        <i className="fab fa-fw fa-twitter"></i>
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-outline btn-social">
                                        <i className="fab fa-fw fa-linkedin-in"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="text-uppercase">İletişim</h4>
                            <p>
                                Bayındırlık Kalıcı Konutları
                                İzmit/Kocaeli

                            </p>
                            <p>+90 (XXX) XXX XX XX</p>
                        </div>

                    </div>
                </footer>
                <div className="copyright">
                    <div className="">
                        <small>
                            SAKARYA ÜNİVERSİTESİ BİLGİSAYAR VE BİLİŞİM BİLİMLERİ FAKÜLTESİ
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
