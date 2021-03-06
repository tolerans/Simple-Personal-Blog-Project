import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider=(
    <AutoplaySlider animation="cubeAnimation">
        <div data-src="https://cdn3.neredekal.com/hotel/2/6W7/520x293/tX1q.jpg" />
        <div data-src="https://www.gezilecektarihiyerler.com/wp-content/uploads/rize-senyuva-koprusu.jpg" />
        <div data-src="https://seyahatdergisi.com/wp-content/uploads/2015/04/Rize-Gezilecek-Yerler.jpg" />
    </AutoplaySlider>
);
class Heritage extends Component {
    render() {
        return (
            <div id={"heri"} style={{paddingTop:"100px"}}>
                <div className={"container"}>
                    <section id={"heriSection"}>
                        {slider}
                    </section>
                    <section>
                        <h2 className={"card-title"}>Gezilecek Yerler</h2>
                        <br/>
                        <hr/>
                        <h4>Rize Kalesi</h4>
                        <br/>
                        <p>Kale, şehir merkezinin güneybatısında 480 m²lik bir alan üzerine kuruludur. İç ve aşağı kalelerden oluşur. İç kalenin I. Justinianus(527-565) döneminde, aşağı kalenin ise 13. yüzyılda inşa edildiği düşünülmektedir. Kale çevresi, yapılan çevre düzenlemesiyle çay bahçesi olarak işletilmektedir. Kenti seyir için kent merkezindeki ideal noktalardan biridir.</p>
                        <br/>
                        <p >Günümüzde kale dört bölümde incelenmektedir.</p>
                        <ul style={{marginLeft:"20px"}}>
                            <li> İç Kale</li><br/>
                            <li>Aşağı kale</li><br/>
                            <li>İç Kale ile Atatürk Caddesi arasındaki Dış Kale kalıntıları</li><br/>
                            <li>Eski SSK Hastahanesinin  doğusundaki surlar</li><br/>
                        </ul>
                        <p>1) Sur duvarlarını güçlendirmek için yapılmış destek kuleleri ve savunma amaçlı yapılmış savunma kuleleri mevcuttur. Savunma kuleleri sur duvarları ile bağlantılı yapılmış olup genelde yuvarlak formludur. Bu kuleler arasında belli mesafelerde kare ve dikdörtgen ile yuvarlak formlu destek kuleleri vardır. Bu destek kuleleri saldıran düşmana her yönden savunma imkanı vermek üzere dışa çıkıntılı olarak yapılmıştır./
                        </p>

                        <p>
                            2) Surların yıkılan kısımları üzerine betonarme olarak inşa edilmiş konutlar mevcuttur. Ayrıca surların izlenebilen bir kısmının üzerinden yol geçmektedir.
                        </p>

                        <p>
                            3) Kale ve sur yükseklikleri yaklaşık 2 metre ile 20 cm arasında değişmektedir. Duvar kalınlıkları 2-3 metre civarındadır. Yapı malzemesi olarak yonu taş ve horasan harcı kullanılmıştır. Kalenin güneyinde yer alan ve 1989 yılında onarım gören bölümler ise düzgün yonu taşıdır.
                        </p>

                        <p>
                            Rize Kalesi 22.08.2011 tarih ve 175851 sayılı Kültür ve Turizm Bakanlığımız Kültür Varlıkları ve Müzeler Genel Müdürlüğü 2011 yılı yatırım programında yer almış,  rölöve, restorasyon, restitüsyon ve çevre ve aydınlatma projeleri tamamlanmış, proje uygulanmasına başlanmıştır. Restorasyon çalışmaları devam etmektedir.
                        </p>
                    </section>
                    <hr/>
                    <section>
                        <h4>Botanik (Ziraat) Çay Bahçesi</h4>
                        <p>
                            Kent merkezinde doğayla buluşmak isteyenlerin uğrak noktası durumundaki park, Karadeniz’e Rize Kalesi’ne ve kente hakim panoromik manzara noktalarından. Cafe şeklinde hizmet veren çay bahçesi, mekanı sadece keyifli bir manzara seyri arayanların değil, hafif yiyecekler atıştırmak isteyenler içinde uygun bir seçenek haline getiriyor. Bölgede yetişen bitkilerin yanı sıra nemli iklime uyum sağlamış ve Türkiye’nin çeşitli bölgelerinden getirilmiş ağaç ve çiçekler parkı cazibeli duruma getirmektedir.
                        </p>
                        <p>
                        <h4>Köprüler</h4>
                        
                         Rize’de muhteşem doğa içinde, dereler üzerinde yapılmış onlarca köprü var. Çoğu taştan yapılmış olan bu köprülerin pek çoğu en az 100 yaşında. Fırtına Deresi üzerinde yer alan Kemer Köprüler bu köprülerin en ünlüleri. Mikron Köprüsü, Şenyuva Köprüsü, Köprüköy Köprüsü, Çağlayan Köprüsü, Güneyce Köprüsü de görebileceğiniz köprüler arasında.

                         <h4>Kaleler</h4> Rize’de tarihi yapılar da doğanın kalbinde yer alıyor. Muhteşem vadiler arasında bulunan Rize kalaleri de bu tarihi yapılar arasında. Rize Kalesi, Ciha Kalesi, Zil Kalesi, Bozuk Kale ve Yukarı Kale Rize geziniz sırasında görmenizi tavsiye ettiğimiz tarih duraklarından.

                         <h4>Camiler</h4>Şimşirli Köyü Camii İslampaşa Camii, Büyük Gülbahar Sultan Camii, Küçük Gülbahar Hatun Camii Rize’de gezebileceğiniz tarihi camiler arasında ilk sıralarda bulunuyor.

                         <h4>Yaylalar</h4> Rize denince akla ilk gelen görüntüler elbette yemyeşil doğası ve eşsiz güzellikleri ile yaylalar. Rize’de yayla turizmi de oldukça gelişmiş; burada onlarca yayla var. Dünyaca ünlü Ayder Yaylası Rize’de ilk görülen yerlerden biri. Ayder’in yanı sıraÇağrankaya Yaylası, Ovit Yaylası, Hazindak Yaylası, Gito Yaylası, Polakcur Yaylası, Çeymakçur Yaylası, Avusor Yaylası, Kavrun Yaylası, Samistal Yaylası, Kale Yaylası, Sal Yaylası, Pokut Yaylası, Palovit Yaylası, Elevit Yaylası, Anzer Yaylası Rize’de gezebileceğiniz yaylalardan.

                         <h4>Rize Evleri</h4> Rize yaylalarına çıktığınızda onlarcasına rastlayaksınız Rize Evleri’ne. Hemşin Evleri olarak da bilinen tarihi Rize Evleri konak türünde yapılmış taş ve ahşap evlerdir. Hemşin Evleri’nin en güzel örnekleri Ayder Yaylası’nda bulunuyor.

                         <h4>Kaçkar Dağı Milli Parkı</h4> Rize’nin dünyaca ünlü bir diğer doğal güzelliği de Kaçkar Dağları Milli Parkı. Dünyanın başka hiçbir yerinde bulunmayan bitki ve hayvan türlerine ev sahipliği yapan Kaçkar Dağları Milli Parkı, Ayder Yaylası sınırları içinde bulunuyor.

                         <h4>Müzeler</h4> Eğer Rize’nin tarihine daha yakından tanık olmak isterseniz şehirdeki müzleri de gezebilirsiniz. Rize Müzesi ve Rize Atatürk Müzesi (Mataracı Mehmet Efendi Evi) görebileceğiniz Rize müzelerinden.
                        </p>
                    </section>


                </div>
            </div>
        );
    }
}

export default Heritage;
