import React from 'react';

const Cv = () => {
    return (
        <div id={"cv"} style={{paddingTop:"150px"}} >
            <div  className={"container"}>
                <div  className={"card"}>
                    <div id={"cvheader"} className={"card-header d-flex justify-content-between"}>
                        <h2 id={"cvname"}>Ali Yılmaz </h2>
                        <img id={"cvimage"} src="https://fotograf.sabis.sakarya.edu.tr/Fotograf/dd4f38aff26e854c45ee90de47edf767" alt="" />
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Kişisel Bilgiler</h4>
                                <p>Ad Soyad  : Ali Yılmaz</p>
                                <p>Doğum Tarihi  : 01.01.1996</p>
                                <p>Doğum Yeri  : Rize</p>
                                <p>Medeni Durumu  : Bekar</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>İletişim Bilgileri</h4>
                                <p>Adres  : PK:41060
                                    İzmit/Kocaeli</p>
                                <p>Cep  : 05xx xxx xxxx </p>
                                <p>E-Posta : aliyilmaazs@protonmail.ch</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Eğitim  Bilgileri</h4>
                                <p>2010 - 2014 Haydarpaşa Anadolu Lisesi (Üsküdar/İstanbul)</p>
                                <p>2015 - 2019 Kocaeli Üniversitesi Bilgisayar Mühendisliği</p>
                               
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Yetkinlikler</h4>
                                <ul className={"list-group"}>
                                    <li className={"list-group-item"}>Python</li>
                                    <li className={"list-group-item"}>C/C++</li>
                                    <li className={"list-group-item"}>Rust</li>
                                    <li className={"list-group-item"}>JavaScript</li>
                                </ul>
                            </div>
                           

                        </div>
                        <div className={"col-md-6"}>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Özet Bilgi</h4>
                                <p>Bilgisayar Mühendisliğini tercih etmemdeki ana sebebim en
                                    başından beri siber güvenlik konusu olmuştur.Sürekli öğrenimi
                                    açık kendimi geliştirmekten çekinmeyen ortamın dinamikliğine
                                    kendimi hazırlamaya çalışan biriyim.Kariyer hedefim Zararlı
                                    yazılım analizi ve tehtit istihbaratı konusunda ofansif alan ağırlıklı
                                    kendi araçlarını yazabilen güvenlik alanına geniş açıdan bakan
                                    önemli biri olmak istiyorum.Devletime bu konuda katma değer
                                    kazandırmak için canı gönülden uğraşıyorum, Daha öğrenicek
                                    çok şeyim olduğunu biliyorum o yüzden bu alanda her tecrübeye
                                    ihtiyacım var.
                                </p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Yabancı dil</h4>
                                <p>İngilizce : Çok iyi</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Sertifikalar</h4>
                                <ul className={"list-group"}>
                                    <li className={"list-group-item"}>Ağ Geliştirme ve Uyum eğitimi</li>
                                    <li className={"list-group-item"}>Zararlı Yazılım Analizine Giriş</li>
                                    <li className={"list-group-item"}>Linux Çekirdeğine giriş</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cv;
