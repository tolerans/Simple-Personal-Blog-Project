import React from 'react';

const Cv = () => {
    return (
        <div id={"cv"} style={{paddingTop:"150px"}} >
            <div  className={"container"}>
                <div  className={"card"}>
                    <div id={"cvheader"} className={"card-header d-flex justify-content-between"}>
                        <h2 id={"cvname"}>Ali Yılmaz </h2>
                        <img id={"cvimage"} src="https://miro.medium.com/max/600/1*HMwiJdVhjdIaaqh536gjGA.jpeg" alt="" />
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Kişisel Bilgiler</h4>
                                <p>Ad Soyad  : Ali Yılmaz</p>
                                <p>Doğum Tarihi  : 06.09.1995</p>
                                <p>Doğum Yeri  : Rize</p>
                                <p>Medeni Durumu  : Bekar</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>İletişim Bilgileri</h4>
                                <p>Adres  : Gazeteci kazım ertek
                                    sok/akçakoca konutları/b1
                                    blok /kat-8/daire-34/
                                    İzmit/Kocaeli</p>
                                <p>Cep  : 06.09.1995</p>
                                <p>E-Posta : ali@gmail.com</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Eğitim  Bilgileri</h4>
                                <p>Adres  : Gazeteci kazım ertek</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Yetkinlikler</h4>
                                <ul className={"list-group"}>
                                    <li className={"list-group-item"}>Python</li>
                                    <li className={"list-group-item"}>C++</li>
                                    <li className={"list-group-item"}>C#</li>
                                    <li className={"list-group-item"}>Java</li>
                                    <li className={"list-group-item"}>JavaScript</li>
                                </ul>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Sertifikalar</h4>
                                <ul className={"list-group"}>
                                    <li className={"list-group-item"}>İTÜ Çekirdek Ekibi üyeliği</li>
                                    <li className={"list-group-item"}>2020 Mustafa Akgül linux
                                        kış kampı katılım belgesi</li>
                                    <li className={"list-group-item"}>Mustafa Murat Coşkun
                                        Python programlama dili
                                        kursu belgesi</li>
                                </ul>
                            </div>

                        </div>
                        <div className={"col-md-6"}>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Özet Bilgi</h4>
                                <p>Kocaeli üniversitesi bilgisayar
                                    mühendisliği bölümünden
                                    Haziranayrıldım ,okulumun son
                                    dönemi ve mezun olduktan
                                    sonra inşaat mühendisliği
                                    alanında çalışmak
                                    istemediğimi ve kendimi
                                    yazılım alanında geliştirmek
                                    istediğimi farkettim. Bu
                                    nedenle Gebze Teknik
                                    Üniversitesi Bilişim
                                    sistemleri 2. Öğretim tezsiz
                                    alanında yüksek lisans
                                    yapmak
                                    istiyorum.Kendimden kısaca
                                    bahsedecek olursam,  ,son 6 aylık süreçte
                                    başta nesne tabanlı
                                    yazılımlardan python ile
                                    başlayıp kodlama mantığını
                                    kavradıktan sonra Big data
                                    alanına yöneldim.Big data
                                    konusunu kavrayabilmek
                                    aynı zamanda kendimi bu
                                    alanda geliştirebilmek için
                                    erken konular olan Machine
                                    learning ve deep learning
                                    yöntemlerinde gerek
                                    udemydeki kurslar gerekse
                                    bu alanda çalışma yapan
                                    arkadaşlarımın fikirleri ve
                                    beni yönlendirmesiyle ve
                                    gerçekten istekli ve ısrarlı
                                    çalışmalarımla belli bir
                                    seviyeye geldim.Amacım
                                    yazılım alanında büsbütün
                                    bir eğitim almak ve
                                    belirlediğim hedeflere bu
                                    alanda sizin gibi kaliteli
                                    hocalarımın kendisiyle ve
                                    desteğiyle birlikte yürümek.</p>
                            </div>
                            <div className={"card-body"}>
                                <h4 className={"card-title"}>Yabancı dil</h4>
                                <p>İngilizce : ADVANCED</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cv;
