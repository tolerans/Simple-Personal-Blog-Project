import React, {Component} from 'react';
import SimpleImageSlider from "react-simple-image-slider";



class MyCity extends Component {
    state={
        images:{
            img1:"https://organicatour.com/uploads/p/dims/848x476/rize-gunubirlik-turlar.jpg",
            img2:"https://cdn.islamansiklopedisi.org.tr/madde/35/rize-2.jpg",
            img3:"https://res.cloudinary.com/stay-list/image/upload/b_rgb:000000,co_rgb:ffffff,o_90,w_2800,f_auto/v1549609635/area/turkey/rize-l",
            img4:"https://lh3.googleusercontent.com/proxy/-ka3OCjpGSUZYZjlOzGMQE8rze3i_8zy5BM_bpXcVrOqTljXlymc2qwM7CaxGlgrYWTKdLCAeRKLYYXsJ6xf66ysih3OKnjtxv9HbeiroK66-nGJHolG-adjuEsFY6vY"
        }
    };
    render() {
        const images=[
            {url:"https://organicatour.com/uploads/p/dims/848x476/rize-gunubirlik-turlar.jpg"},
            {url:"https://cdn.islamansiklopedisi.org.tr/madde/35/rize-2.jpg"},
            {url:"https://res.cloudinary.com/stay-list/image/upload/b_rgb:000000,co_rgb:ffffff,o_90,w_2800,f_auto/v1549609635/area/turkey/rize-l"},
            {url:"https://lh3.googleusercontent.com/proxy/-ka3OCjpGSUZYZjlOzGMQE8rze3i_8zy5BM_bpXcVrOqTljXlymc2qwM7CaxGlgrYWTKdLCAeRKLYYXsJ6xf66ysih3OKnjtxv9HbeiroK66-nGJHolG-adjuEsFY6vY"},
        ];
        return (
            <div id={"city"} style={{paddingTop:"150px"}}>
                <div className={"container"}>
                    <SimpleImageSlider
                        width={1100}
                        height={400}
                        style={{objectFit:"cover"}}
                        images={images}
                    />
                    <section id={"sectionCity"}>
                        <h2 className={"ml-5 mt-5"}>RİZE HAKKINDA BİLİNMESİ GEREKENLER</h2>
                        <p className={"mt-3"}>
                            Rize ili, Türkiye'nin kuzeydoğusunda yeralan ve Karadeniz'e sahili olan bir il. Doğu Karadeniz Bölgesi'nde yeralan Rize'nin batısında Trabzon doğusunda Artvin, Güneybatısında Bayburt, güneyinde Erzurum illeri bulunur. Türkiye'nin en çok yağış alan ilidir. En önemli ürünü çay olan Rize'de kivi meyvesi yetiştiriciliği de başlamış durumdadır. Fakat kivi üretimi fazla olmadığı için ancak şehrin kendi ihtiyacını karşılar.<br />

                            Rize'de yaz mevsimi ılık geçer. Sonbahar ve kış mevsimleri ise yağışlı geçer. Doğu Karadeniz Bölgesinde yer alan Rize, bölgenin en karakteristik özelliklerini gösterir. Anadolu'nun diğer bölgelerinden coğrafi yapısıyla olduğu gibi kültürel yapısı ile de ayrılır. Dik yamaçlı vadileri, zirvelere ulaşılabilir dağları, buzul gölleri, zümrüt yeşili yaylaları, tarihi kemer köprüleri ve kaleleri, coşkun akan dereleri ile çok özel bir turizm beldesidir.<br/>

                            Osmanlı döneminde liman, nahiye ve kaza merkezi olarak önemini korumuştur. 1640 yılında buraya gelen Evliya Çelebi Rize’den şöyle söz etmiştir: “Trabzon’a bağlı deniz kıyısında bahçeli güzel bir yerdir”. Osmanlı döneminde Batum Kalesi muhafızı Tuzcuoğlu Memiş Ağa (1814-1817) ve Trabzon ağalarının isyanı (1835) gibi isyanlar olmuş ve bastırılmıştır. Rize 19. yüzyılda önemli bir kaza merkezidir. Berlin Antlaşması ile (1878) Lazistan sancağının merkezi olan Batum Rusya’ya bırakılınca Rize Trabzon Vilayetine bağlı sancağın merkezi olmuştur.
                        </p>
                        <h4 className={"ml-5 mt-3"}>Yeryüzü Şekilleri</h4>
                        <p>
                            Doğu Karadeniz kıyı sıradağları yayının kuzey yamacında yer alan Rize toprakları genel ifade ile dağlık ve engebelidir.
                        </p>
                        <h4 className={"ml-5 mt-3"}>Jeolojik özellikleri</h4>
                        <p>
                            Doğu Karadeniz dağlık sistemine dahil olan Rize arazisi esas itibariyle Paleozoik zaman (I. zaman) bir temel üzerinde ve Kretase'de (III. zaman ara devresi) başlayan büyük orojenezle (Dağ oluşumu) yüzeye çıkmış Granodiorit ve kertase flişlerinden ibaret olmakla birlikte yer yer Neojen depolarına da rastlanır.

                            Bütün kıyı kesimi yüzeyde üst Kretase serisi volkanik örtü ve tüflerin fazlalığı ile dikkati çeker. Kıyıya yakın yamaçlarda ise Kretase sedimanları yaygın olmakla beraber, bu sedimanların üzeri yer yer Eosen fliş serileri tarafından örtülmüştür.

                            Yüksek dağlık sahada ise daha çok magmatik elemanlar hakim durumdadır. Granit, andezit ve bazalt kütleleri yüksekliği 3000 m’yi aşan hemen her yerde hakim durumdadır.

                            Yörede alüvyonlara, büyük akarsu vadilerinin denizden itibaren en çok 10 km’ye kadar olan kesimlerinde rastlanır.
                        </p>
                        <img width={800} height={300} src="https://nn-images.global.ssl.fastly.net/images/bus/city/rize.jpg" alt=""/>
                    </section>
                </div>

            </div>
        );
    }
}

export default MyCity;
