(this.webpackJsonpmycity=this.webpackJsonpmycity||[]).push([[0],{33:function(e,a,l){e.exports=l(50)},38:function(e,a,l){},39:function(e,a,l){},50:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(17),i=l.n(r),m=(l(38),l(39),l(7)),c=l(8),s=l(10),o=l(9),d=l(6),u=function(e){Object(s.a)(l,e);var a=Object(o.a)(l);function l(){return Object(m.a)(this,l),a.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return n.a.createElement("nav",{id:"navlinks",className:"navbar navbar-expand-lg "},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,n.a.createElement(d.b,{id:"title",to:"/",className:"nav-link"},"Hakk\u0131mda"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{to:"/myteam",className:"nav-link",href:"#"},"Mesajlar"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,n.a.createElement(d.b,{to:"/cv",className:"nav-link",href:"#"},"CV"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",null,n.a.createElement(d.b,{to:"/mycity",className:"nav-link",href:"#"},"\u015eehrim"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{to:"/heritage",className:"nav-link",href:"#"},"Miras\u0131m\u0131z")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{to:"/contact",className:"nav-link",href:"#"},"\u0130leti\u015fim")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{to:"/login",className:"nav-link",href:"#"},"Kay\u0131t ol"))))}}]),l}(t.Component),y=l(14),k=l(32).a.div({visible:{opacity:1,applyAtStart:{display:"block"}},hidden:{opacity:0,applyAtStart:{display:"none"}}}),p=function(e){Object(s.a)(l,e);var a=Object(o.a)(l);function l(){var e;Object(m.a)(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={images:{url1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3e%2FFresh_journey.jpg%2F1200px-Fresh_journey.jpg&f=1&nofb=1",url2:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.blogto.com%2Farticles%2F20160411-crossfitykv2048-06.jpg%3Fwidth%3D1300%26quality%3D70&f=1&nofb=1",url3:"https://img.haberler.com/haber/052/ozel-havalandirma-sistemli-atis-poligonu-hizmete-5504052_4781_o.jpg",url4:"https://www.uzungol.net.tr/wp-content/uploads/2019/06/dag-tirmanisi.jpg"},visibleHb:!1,visibleEtk:!1},e.ChangeHobies=function(){e.setState({visibleHb:!e.state.visibleHb})},e.ChangeEtk=function(){e.setState({visibleEtk:!e.state.visibleEtk})},e}return Object(c.a)(l,[{key:"render",value:function(){var e=this.state,a=e.visibleHb,l=e.visibleEtk;return n.a.createElement("div",{id:"about"},n.a.createElement("div",{style:{paddingTop:"100px"},className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{cursor:"pointer"},className:"card-header d-flex justify-content-between"},n.a.createElement("p",null,"Hobiler"),n.a.createElement("button",{onClick:this.ChangeHobies,className:"btn btn-primary"},a?"G\xf6ster":"Gizle")),n.a.createElement(k,{pose:a?"hidden":"visible"},n.a.createElement("div",{className:"card-body"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Y\xfczme Sporu",n.a.createElement("img",{id:"image",src:this.state.images.url1,alt:""})),n.a.createElement("li",{className:"list-group-item"},"Crossfit",n.a.createElement("img",{id:"image",src:this.state.images.url2,alt:""}))))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{style:{cursor:"pointer"},className:"card-header d-flex justify-content-between"},n.a.createElement("p",null,"Etkinlikler"),n.a.createElement("button",{onClick:this.ChangeEtk,className:"btn btn-primary"},l?"G\xf6ster":"Gizle")),n.a.createElement(k,{pose:l?"hidden":"visible"},n.a.createElement("div",{className:"card-body"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Poligonda At\u0131\u015f",n.a.createElement("img",{id:"image",src:this.state.images.url3,alt:""})),n.a.createElement("li",{className:"list-group-item"},"Da\u011f T\u0131rman\u0131\u015f\u0131",n.a.createElement("img",{id:"image",src:this.state.images.url4,alt:""}))))))))))}}]),l}(t.Component),E=l(15);var b=l(27),v=l.n(b),h=function(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.inputReducer})),l=a.name,t=a.email,r=a.number,i=a.topic,m=a.message,c=a.date;return n.a.createElement("div",{id:"contact",style:{paddingTop:"150px"}},n.a.createElement("div",{className:"container "},n.a.createElement("div",{id:"contactContainer",className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"\u0130leti\u015fim Bilgilerinizi Giriniz")),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{action:"",onSubmit:function(a){""!==l&&""!==t&&""!==r&&""!==i&&""!==m||v.a.error("Bo\u015f alanlar\u0131 doldurunuz"),e(function(e){return{type:"infos",payload:e}}({name:l,email:t,number:r,topic:i,message:m,date:c})),a.preventDefault()}},n.a.createElement("div",{className:"form-group col-md-8"},n.a.createElement("label",{htmlFor:"name"},"\u0130sim"),n.a.createElement("input",{type:"name",value:l,onChange:function(a){return e(function(e){return{type:"name",payload:e}}(a.currentTarget.value))},name:"name",className:"form-control",placeholder:"Ad Soyad"})),n.a.createElement("div",{className:"form-group col-md-8"},n.a.createElement("label",{htmlFor:"email"},"E-Mail"),n.a.createElement("input",{type:"email",value:t,onChange:function(a){return e(function(e){return{type:"email",payload:e}}(a.currentTarget.value))},name:"email",className:"form-control",placeholder:"E-mail Adres"})),n.a.createElement("div",{className:"form-group col-md-8"},n.a.createElement("label",{htmlFor:"number"},"Cep/Telefon"),n.a.createElement("input",{type:"text",value:r,onChange:function(a){return e(function(e){return{type:"number",payload:e}}(a.currentTarget.value))},name:"number",className:"form-control",placeholder:"Telefon No"})),n.a.createElement("div",{className:"form-group col-md-8"},n.a.createElement("label",{htmlFor:"konu"},"Konu"),n.a.createElement("input",{type:"text",value:i,onChange:function(a){return e(function(e){return{type:"topic",payload:e}}(a.currentTarget.value))},name:"topic",className:"form-control",placeholder:"Konu"})),n.a.createElement("div",{className:"form-group col-md-8"},n.a.createElement("label",{htmlFor:"date"},"Do\u011fum tarihi"),n.a.createElement("input",{type:"date",value:c,onChange:function(a){return e(function(e){return{type:"date",payload:e}}(a.currentTarget.value))},className:"form-control",min:"210-01-02"})),n.a.createElement("div",{className:"form-group col-md-8"},n.a.createElement("label",{htmlFor:"message"},"Mesaj\u0131n\u0131z"),n.a.createElement("textarea",{value:m,onChange:function(a){return e(function(e){return{type:"message",payload:e}}(a.currentTarget.value))},className:"form-control",placeholder:""})),n.a.createElement("div",{className:"d-flex justify-content-between col-md-8"},n.a.createElement("button",{onClick:function(){},type:"submit",className:"btn btn-danger"},"G\xf6nder"),n.a.createElement("button",{className:"btn btn-danger"},"Temizle")))))))},g=function(){return n.a.createElement("div",{id:"cv",style:{paddingTop:"150px"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{id:"cvheader",className:"card-header d-flex justify-content-between"},n.a.createElement("h2",{id:"cvname"},"Ali Y\u0131lmaz "),n.a.createElement("img",{id:"cvimage",src:"https://fotograf.sabis.sakarya.edu.tr/Fotograf/dd4f38aff26e854c45ee90de47edf767",alt:""})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Ki\u015fisel Bilgiler"),n.a.createElement("p",null,"Ad Soyad  : Ali Y\u0131lmaz"),n.a.createElement("p",null,"Do\u011fum Tarihi  : 01.01.1996"),n.a.createElement("p",null,"Do\u011fum Yeri  : Rize"),n.a.createElement("p",null,"Medeni Durumu  : Bekar")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"\u0130leti\u015fim Bilgileri"),n.a.createElement("p",null,"Adres  : PK:41060 \u0130zmit/Kocaeli"),n.a.createElement("p",null,"Cep  : 05xx xxx xxxx "),n.a.createElement("p",null,"E-Posta : aliyilmaazs@protonmail.ch")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"E\u011fitim  Bilgileri"),n.a.createElement("p",null,"2010 - 2014 Haydarpa\u015fa Anadolu Lisesi (\xdcsk\xfcdar/\u0130stanbul)"),n.a.createElement("p",null,"2015 - 2019 Kocaeli \xdcniversitesi Bilgisayar M\xfchendisli\u011fi")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Yetkinlikler"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Python"),n.a.createElement("li",{className:"list-group-item"},"C/C++"),n.a.createElement("li",{className:"list-group-item"},"Rust"),n.a.createElement("li",{className:"list-group-item"},"JavaScript")))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"\xd6zet Bilgi"),n.a.createElement("p",null,"Bilgisayar M\xfchendisli\u011fini tercih etmemdeki ana sebebim en ba\u015f\u0131ndan beri siber g\xfcvenlik konusu olmu\u015ftur.S\xfcrekli \xf6\u011frenimi a\xe7\u0131k kendimi geli\u015ftirmekten \xe7ekinmeyen ortam\u0131n dinamikli\u011fine kendimi haz\u0131rlamaya \xe7al\u0131\u015fan biriyim.Kariyer hedefim Zararl\u0131 yaz\u0131l\u0131m analizi ve tehtit istihbarat\u0131 konusunda ofansif alan a\u011f\u0131rl\u0131kl\u0131 kendi ara\xe7lar\u0131n\u0131 yazabilen g\xfcvenlik alan\u0131na geni\u015f a\xe7\u0131dan bakan \xf6nemli biri olmak istiyorum.Devletime bu konuda katma de\u011fer kazand\u0131rmak i\xe7in can\u0131 g\xf6n\xfclden u\u011fra\u015f\u0131yorum, Daha \xf6\u011frenicek \xe7ok \u015feyim oldu\u011funu biliyorum o y\xfczden bu alanda her tecr\xfcbeye ihtiyac\u0131m var.")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Yabanc\u0131 dil"),n.a.createElement("p",null,"\u0130ngilizce : \xc7ok iyi")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"Sertifikalar"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"A\u011f Geli\u015ftirme ve Uyum e\u011fitimi"),n.a.createElement("li",{className:"list-group-item"},"Zararl\u0131 Yaz\u0131l\u0131m Analizine Giri\u015f"),n.a.createElement("li",{className:"list-group-item"},"Linux \xc7ekirde\u011fine giri\u015f"))))))))},z=function(){var e=Object(E.c)((function(e){return e.showInfoReducer})),a=0;return e.name&&(a+=1),n.a.createElement("div",{id:"message",style:{paddingTop:"100px"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",null,"Gelen Mesajlar")),0===a?n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card-title"},"Mesaj kutunuz Bo\u015f")):n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",{className:"card-title"},"\u0130sim :  ",e.name),n.a.createElement("h3",null,"E-Posta :  ",e.email),n.a.createElement("h4",null,"Telefon Numaras\u0131 :  ",e.number),n.a.createElement("p",null,"Do\u011fum Tarihi :",e.date),n.a.createElement("p",null," Konu :  ",e.topic),n.a.createElement("p",null," Mesaj : ",e.message)))))},f=l(28),N=l.n(f),j=(l(45),l(29)),K=l.n(j),x=(l(46),K()(N.a)),R=n.a.createElement(x,{animation:"cubeAnimation"},n.a.createElement("div",{"data-src":"https://cdn3.neredekal.com/hotel/2/6W7/520x293/tX1q.jpg"}),n.a.createElement("div",{"data-src":"https://www.gezilecektarihiyerler.com/wp-content/uploads/rize-senyuva-koprusu.jpg"}),n.a.createElement("div",{"data-src":"https://seyahatdergisi.com/wp-content/uploads/2015/04/Rize-Gezilecek-Yerler.jpg"})),O=function(e){Object(s.a)(l,e);var a=Object(o.a)(l);function l(){return Object(m.a)(this,l),a.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{id:"heri",style:{paddingTop:"100px"}},n.a.createElement("div",{className:"container"},n.a.createElement("section",{id:"heriSection"},R),n.a.createElement("section",null,n.a.createElement("h2",{className:"card-title"},"Gezilecek Yerler"),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("h4",null,"Rize Kalesi"),n.a.createElement("br",null),n.a.createElement("p",null,"Kale, \u015fehir merkezinin g\xfcneybat\u0131s\u0131nda 480 m\xb2lik bir alan \xfczerine kuruludur. \u0130\xe7 ve a\u015fa\u011f\u0131 kalelerden olu\u015fur. \u0130\xe7 kalenin I. Justinianus(527-565) d\xf6neminde, a\u015fa\u011f\u0131 kalenin ise 13. y\xfczy\u0131lda in\u015fa edildi\u011fi d\xfc\u015f\xfcn\xfclmektedir. Kale \xe7evresi, yap\u0131lan \xe7evre d\xfczenlemesiyle \xe7ay bah\xe7esi olarak i\u015fletilmektedir. Kenti seyir i\xe7in kent merkezindeki ideal noktalardan biridir."),n.a.createElement("br",null),n.a.createElement("p",null,"G\xfcn\xfcm\xfczde kale d\xf6rt b\xf6l\xfcmde incelenmektedir."),n.a.createElement("ul",{style:{marginLeft:"20px"}},n.a.createElement("li",null," \u0130\xe7 Kale"),n.a.createElement("br",null),n.a.createElement("li",null,"A\u015fa\u011f\u0131 kale"),n.a.createElement("br",null),n.a.createElement("li",null,"\u0130\xe7 Kale ile Atat\xfcrk Caddesi aras\u0131ndaki D\u0131\u015f Kale kal\u0131nt\u0131lar\u0131"),n.a.createElement("br",null),n.a.createElement("li",null,"Eski SSK Hastahanesinin  do\u011fusundaki surlar"),n.a.createElement("br",null)),n.a.createElement("p",null,"1) Sur duvarlar\u0131n\u0131 g\xfc\xe7lendirmek i\xe7in yap\u0131lm\u0131\u015f destek kuleleri ve savunma ama\xe7l\u0131 yap\u0131lm\u0131\u015f savunma kuleleri mevcuttur. Savunma kuleleri sur duvarlar\u0131 ile ba\u011flant\u0131l\u0131 yap\u0131lm\u0131\u015f olup genelde yuvarlak formludur. Bu kuleler aras\u0131nda belli mesafelerde kare ve dikd\xf6rtgen ile yuvarlak formlu destek kuleleri vard\u0131r. Bu destek kuleleri sald\u0131ran d\xfc\u015fmana her y\xf6nden savunma imkan\u0131 vermek \xfczere d\u0131\u015fa \xe7\u0131k\u0131nt\u0131l\u0131 olarak yap\u0131lm\u0131\u015ft\u0131r./"),n.a.createElement("p",null,"2) Surlar\u0131n y\u0131k\u0131lan k\u0131s\u0131mlar\u0131 \xfczerine betonarme olarak in\u015fa edilmi\u015f konutlar mevcuttur. Ayr\u0131ca surlar\u0131n izlenebilen bir k\u0131sm\u0131n\u0131n \xfczerinden yol ge\xe7mektedir."),n.a.createElement("p",null,"3) Kale ve sur y\xfckseklikleri yakla\u015f\u0131k 2 metre ile 20 cm aras\u0131nda de\u011fi\u015fmektedir. Duvar kal\u0131nl\u0131klar\u0131 2-3 metre civar\u0131ndad\u0131r. Yap\u0131 malzemesi olarak yonu ta\u015f ve horasan harc\u0131 kullan\u0131lm\u0131\u015ft\u0131r. Kalenin g\xfcneyinde yer alan ve 1989 y\u0131l\u0131nda onar\u0131m g\xf6ren b\xf6l\xfcmler ise d\xfczg\xfcn yonu ta\u015f\u0131d\u0131r."),n.a.createElement("p",null,"Rize Kalesi 22.08.2011 tarih ve 175851 say\u0131l\u0131 K\xfclt\xfcr ve Turizm Bakanl\u0131\u011f\u0131m\u0131z K\xfclt\xfcr Varl\u0131klar\u0131 ve M\xfczeler Genel M\xfcd\xfcrl\xfc\u011f\xfc 2011 y\u0131l\u0131 yat\u0131r\u0131m program\u0131nda yer alm\u0131\u015f,  r\xf6l\xf6ve, restorasyon, restit\xfcsyon ve \xe7evre ve ayd\u0131nlatma projeleri tamamlanm\u0131\u015f, proje uygulanmas\u0131na ba\u015flanm\u0131\u015ft\u0131r. Restorasyon \xe7al\u0131\u015fmalar\u0131 devam etmektedir.")),n.a.createElement("hr",null),n.a.createElement("section",null,n.a.createElement("h4",null,"Botanik (Ziraat) \xc7ay Bah\xe7esi"),n.a.createElement("p",null,"Kent merkezinde do\u011fayla bulu\u015fmak isteyenlerin u\u011frak noktas\u0131 durumundaki park, Karadeniz\u2019e Rize Kalesi\u2019ne ve kente hakim panoromik manzara noktalar\u0131ndan. Cafe \u015feklinde hizmet veren \xe7ay bah\xe7esi, mekan\u0131 sadece keyifli bir manzara seyri arayanlar\u0131n de\u011fil, hafif yiyecekler at\u0131\u015ft\u0131rmak isteyenler i\xe7inde uygun bir se\xe7enek haline getiriyor. B\xf6lgede yeti\u015fen bitkilerin yan\u0131 s\u0131ra nemli iklime uyum sa\u011flam\u0131\u015f ve T\xfcrkiye\u2019nin \xe7e\u015fitli b\xf6lgelerinden getirilmi\u015f a\u011fa\xe7 ve \xe7i\xe7ekler park\u0131 cazibeli duruma getirmektedir."),n.a.createElement("p",null,n.a.createElement("h4",null,"K\xf6pr\xfcler"),"Rize\u2019de muhte\u015fem do\u011fa i\xe7inde, dereler \xfczerinde yap\u0131lm\u0131\u015f onlarca k\xf6pr\xfc var. \xc7o\u011fu ta\u015ftan yap\u0131lm\u0131\u015f olan bu k\xf6pr\xfclerin pek \xe7o\u011fu en az 100 ya\u015f\u0131nda. F\u0131rt\u0131na Deresi \xfczerinde yer alan Kemer K\xf6pr\xfcler bu k\xf6pr\xfclerin en \xfcnl\xfcleri. Mikron K\xf6pr\xfcs\xfc, \u015eenyuva K\xf6pr\xfcs\xfc, K\xf6pr\xfck\xf6y K\xf6pr\xfcs\xfc, \xc7a\u011flayan K\xf6pr\xfcs\xfc, G\xfcneyce K\xf6pr\xfcs\xfc de g\xf6rebilece\u011finiz k\xf6pr\xfcler aras\u0131nda.",n.a.createElement("h4",null,"Kaleler")," Rize\u2019de tarihi yap\u0131lar da do\u011fan\u0131n kalbinde yer al\u0131yor. Muhte\u015fem vadiler aras\u0131nda bulunan Rize kalaleri de bu tarihi yap\u0131lar aras\u0131nda. Rize Kalesi, Ciha Kalesi, Zil Kalesi, Bozuk Kale ve Yukar\u0131 Kale Rize geziniz s\u0131ras\u0131nda g\xf6rmenizi tavsiye etti\u011fimiz tarih duraklar\u0131ndan.",n.a.createElement("h4",null,"Camiler"),"\u015eim\u015firli K\xf6y\xfc Camii \u0130slampa\u015fa Camii, B\xfcy\xfck G\xfclbahar Sultan Camii, K\xfc\xe7\xfck G\xfclbahar Hatun Camii Rize\u2019de gezebilece\u011finiz tarihi camiler aras\u0131nda ilk s\u0131ralarda bulunuyor.",n.a.createElement("h4",null,"Yaylalar")," Rize denince akla ilk gelen g\xf6r\xfcnt\xfcler elbette yemye\u015fil do\u011fas\u0131 ve e\u015fsiz g\xfczellikleri ile yaylalar. Rize\u2019de yayla turizmi de olduk\xe7a geli\u015fmi\u015f; burada onlarca yayla var. D\xfcnyaca \xfcnl\xfc Ayder Yaylas\u0131 Rize\u2019de ilk g\xf6r\xfclen yerlerden biri. Ayder\u2019in yan\u0131 s\u0131ra\xc7a\u011frankaya Yaylas\u0131, Ovit Yaylas\u0131, Hazindak Yaylas\u0131, Gito Yaylas\u0131, Polakcur Yaylas\u0131, \xc7eymak\xe7ur Yaylas\u0131, Avusor Yaylas\u0131, Kavrun Yaylas\u0131, Samistal Yaylas\u0131, Kale Yaylas\u0131, Sal Yaylas\u0131, Pokut Yaylas\u0131, Palovit Yaylas\u0131, Elevit Yaylas\u0131, Anzer Yaylas\u0131 Rize\u2019de gezebilece\u011finiz yaylalardan.",n.a.createElement("h4",null,"Rize Evleri")," Rize yaylalar\u0131na \xe7\u0131kt\u0131\u011f\u0131n\u0131zda onlarcas\u0131na rastlayaks\u0131n\u0131z Rize Evleri\u2019ne. Hem\u015fin Evleri olarak da bilinen tarihi Rize Evleri konak t\xfcr\xfcnde yap\u0131lm\u0131\u015f ta\u015f ve ah\u015fap evlerdir. Hem\u015fin Evleri\u2019nin en g\xfczel \xf6rnekleri Ayder Yaylas\u0131\u2019nda bulunuyor.",n.a.createElement("h4",null,"Ka\xe7kar Da\u011f\u0131 Milli Park\u0131")," Rize\u2019nin d\xfcnyaca \xfcnl\xfc bir di\u011fer do\u011fal g\xfczelli\u011fi de Ka\xe7kar Da\u011flar\u0131 Milli Park\u0131. D\xfcnyan\u0131n ba\u015fka hi\xe7bir yerinde bulunmayan bitki ve hayvan t\xfcrlerine ev sahipli\u011fi yapan Ka\xe7kar Da\u011flar\u0131 Milli Park\u0131, Ayder Yaylas\u0131 s\u0131n\u0131rlar\u0131 i\xe7inde bulunuyor.",n.a.createElement("h4",null,"M\xfczeler")," E\u011fer Rize\u2019nin tarihine daha yak\u0131ndan tan\u0131k olmak isterseniz \u015fehirdeki m\xfczleri de gezebilirsiniz. Rize M\xfczesi ve Rize Atat\xfcrk M\xfczesi (Matarac\u0131 Mehmet Efendi Evi) g\xf6rebilece\u011finiz Rize m\xfczelerinden."))))}}]),l}(t.Component),Y=function(){return n.a.createElement("div",{style:{paddingTop:"100px"}},n.a.createElement("div",{className:"container"},n.a.createElement("section",{id:"loginSection"})))},A=l(30),w=l.n(A),C=function(e){Object(s.a)(l,e);var a=Object(o.a)(l);function l(){var e;Object(m.a)(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={images:{img1:"https://organicatour.com/uploads/p/dims/848x476/rize-gunubirlik-turlar.jpg",img2:"https://cdn.islamansiklopedisi.org.tr/madde/35/rize-2.jpg",img3:"https://res.cloudinary.com/stay-list/image/upload/b_rgb:000000,co_rgb:ffffff,o_90,w_2800,f_auto/v1549609635/area/turkey/rize-l",img4:"https://lh3.googleusercontent.com/proxy/-ka3OCjpGSUZYZjlOzGMQE8rze3i_8zy5BM_bpXcVrOqTljXlymc2qwM7CaxGlgrYWTKdLCAeRKLYYXsJ6xf66ysih3OKnjtxv9HbeiroK66-nGJHolG-adjuEsFY6vY"}},e}return Object(c.a)(l,[{key:"render",value:function(){return n.a.createElement("div",{id:"city",style:{paddingTop:"150px"}},n.a.createElement("div",{className:"container"},n.a.createElement(w.a,{width:1100,height:400,style:{objectFit:"cover"},images:[{url:"https://organicatour.com/uploads/p/dims/848x476/rize-gunubirlik-turlar.jpg"},{url:"https://cdn.islamansiklopedisi.org.tr/madde/35/rize-2.jpg"},{url:"https://res.cloudinary.com/stay-list/image/upload/b_rgb:000000,co_rgb:ffffff,o_90,w_2800,f_auto/v1549609635/area/turkey/rize-l"},{url:"https://lh3.googleusercontent.com/proxy/-ka3OCjpGSUZYZjlOzGMQE8rze3i_8zy5BM_bpXcVrOqTljXlymc2qwM7CaxGlgrYWTKdLCAeRKLYYXsJ6xf66ysih3OKnjtxv9HbeiroK66-nGJHolG-adjuEsFY6vY"}]}),n.a.createElement("section",{id:"sectionCity"},n.a.createElement("h2",{className:"ml-5 mt-5"},"R\u0130ZE HAKKINDA B\u0130L\u0130NMES\u0130 GEREKENLER"),n.a.createElement("p",{className:"mt-3"},"Rize ili, T\xfcrkiye'nin kuzeydo\u011fusunda yeralan ve Karadeniz'e sahili olan bir il. Do\u011fu Karadeniz B\xf6lgesi'nde yeralan Rize'nin bat\u0131s\u0131nda Trabzon do\u011fusunda Artvin, G\xfcneybat\u0131s\u0131nda Bayburt, g\xfcneyinde Erzurum illeri bulunur. T\xfcrkiye'nin en \xe7ok ya\u011f\u0131\u015f alan ilidir. En \xf6nemli \xfcr\xfcn\xfc \xe7ay olan Rize'de kivi meyvesi yeti\u015ftiricili\u011fi de ba\u015flam\u0131\u015f durumdad\u0131r. Fakat kivi \xfcretimi fazla olmad\u0131\u011f\u0131 i\xe7in ancak \u015fehrin kendi ihtiyac\u0131n\u0131 kar\u015f\u0131lar.",n.a.createElement("br",null),"Rize'de yaz mevsimi \u0131l\u0131k ge\xe7er. Sonbahar ve k\u0131\u015f mevsimleri ise ya\u011f\u0131\u015fl\u0131 ge\xe7er. Do\u011fu Karadeniz B\xf6lgesinde yer alan Rize, b\xf6lgenin en karakteristik \xf6zelliklerini g\xf6sterir. Anadolu'nun di\u011fer b\xf6lgelerinden co\u011frafi yap\u0131s\u0131yla oldu\u011fu gibi k\xfclt\xfcrel yap\u0131s\u0131 ile de ayr\u0131l\u0131r. Dik yama\xe7l\u0131 vadileri, zirvelere ula\u015f\u0131labilir da\u011flar\u0131, buzul g\xf6lleri, z\xfcmr\xfct ye\u015fili yaylalar\u0131, tarihi kemer k\xf6pr\xfcleri ve kaleleri, co\u015fkun akan dereleri ile \xe7ok \xf6zel bir turizm beldesidir.",n.a.createElement("br",null),"Osmanl\u0131 d\xf6neminde liman, nahiye ve kaza merkezi olarak \xf6nemini korumu\u015ftur. 1640 y\u0131l\u0131nda buraya gelen Evliya \xc7elebi Rize\u2019den \u015f\xf6yle s\xf6z etmi\u015ftir: \u201cTrabzon\u2019a ba\u011fl\u0131 deniz k\u0131y\u0131s\u0131nda bah\xe7eli g\xfczel bir yerdir\u201d. Osmanl\u0131 d\xf6neminde Batum Kalesi muhaf\u0131z\u0131 Tuzcuo\u011flu Memi\u015f A\u011fa (1814-1817) ve Trabzon a\u011falar\u0131n\u0131n isyan\u0131 (1835) gibi isyanlar olmu\u015f ve bast\u0131r\u0131lm\u0131\u015ft\u0131r. Rize 19. y\xfczy\u0131lda \xf6nemli bir kaza merkezidir. Berlin Antla\u015fmas\u0131 ile (1878) Lazistan sanca\u011f\u0131n\u0131n merkezi olan Batum Rusya\u2019ya b\u0131rak\u0131l\u0131nca Rize Trabzon Vilayetine ba\u011fl\u0131 sanca\u011f\u0131n merkezi olmu\u015ftur."),n.a.createElement("h4",{className:"ml-5 mt-3"},"Yery\xfcz\xfc \u015eekilleri"),n.a.createElement("p",null,"Do\u011fu Karadeniz k\u0131y\u0131 s\u0131rada\u011flar\u0131 yay\u0131n\u0131n kuzey yamac\u0131nda yer alan Rize topraklar\u0131 genel ifade ile da\u011fl\u0131k ve engebelidir."),n.a.createElement("h4",{className:"ml-5 mt-3"},"Jeolojik \xf6zellikleri"),n.a.createElement("p",null,"Do\u011fu Karadeniz da\u011fl\u0131k sistemine dahil olan Rize arazisi esas itibariyle Paleozoik zaman (I. zaman) bir temel \xfczerinde ve Kretase'de (III. zaman ara devresi) ba\u015flayan b\xfcy\xfck orojenezle (Da\u011f olu\u015fumu) y\xfczeye \xe7\u0131km\u0131\u015f Granodiorit ve kertase fli\u015flerinden ibaret olmakla birlikte yer yer Neojen depolar\u0131na da rastlan\u0131r. B\xfct\xfcn k\u0131y\u0131 kesimi y\xfczeyde \xfcst Kretase serisi volkanik \xf6rt\xfc ve t\xfcflerin fazlal\u0131\u011f\u0131 ile dikkati \xe7eker. K\u0131y\u0131ya yak\u0131n yama\xe7larda ise Kretase sedimanlar\u0131 yayg\u0131n olmakla beraber, bu sedimanlar\u0131n \xfczeri yer yer Eosen fli\u015f serileri taraf\u0131ndan \xf6rt\xfclm\xfc\u015ft\xfcr. Y\xfcksek da\u011fl\u0131k sahada ise daha \xe7ok magmatik elemanlar hakim durumdad\u0131r. Granit, andezit ve bazalt k\xfctleleri y\xfcksekli\u011fi 3000 m\u2019yi a\u015fan hemen her yerde hakim durumdad\u0131r. Y\xf6rede al\xfcvyonlara, b\xfcy\xfck akarsu vadilerinin denizden itibaren en \xe7ok 10 km\u2019ye kadar olan kesimlerinde rastlan\u0131r."),n.a.createElement("img",{width:800,height:300,src:"https://nn-images.global.ssl.fastly.net/images/bus/city/rize.jpg",alt:""}))))}}]),l}(t.Component),T=function(e){Object(s.a)(l,e);var a=Object(o.a)(l);function l(){return Object(m.a)(this,l),a.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("footer",null,n.a.createElement("div",{id:"footer",className:" clearfix d-flex justify-content-between"},n.a.createElement("div",{className:"col"},n.a.createElement("h4",{className:"text-uppercase"},"D\u0130\u011eER BA\u011eLANTILAR"),n.a.createElement("p",null,n.a.createElement("a",{href:"#"},"Web Teknolojileri BSM 104")),n.a.createElement("p",null,n.a.createElement("a",{href:"#"},"Site A\u011fac\u0131"))),n.a.createElement("div",{className:"col "},n.a.createElement("h4",{className:"text-uppercase"},"Sosyal Medya"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"btn btn-outline btn-social"},n.a.createElement("i",{className:"fab fa-fw fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("button",{className:"btn btn-outline btn-social"},n.a.createElement("i",{className:"fab fa-fw fa-linkedin-in"}))))),n.a.createElement("div",{className:"col"},n.a.createElement("h4",{className:"text-uppercase"},"\u0130leti\u015fim"),n.a.createElement("p",null,"Bay\u0131nd\u0131rl\u0131k Kal\u0131c\u0131 Konutlar\u0131 \u0130zmit/Kocaeli"),n.a.createElement("p",null,"+90 (XXX) XXX XX XX")))),n.a.createElement("div",{className:"copyright"},n.a.createElement("div",{className:""},n.a.createElement("small",null,"SAKARYA \xdcN\u0130VERS\u0130TES\u0130 B\u0130LG\u0130SAYAR VE B\u0130L\u0130\u015e\u0130M B\u0130L\u0130MLER\u0130 FAK\xdcLTES\u0130"))))}}]),l}(t.Component);var B=function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement(y.c,null,n.a.createElement(y.a,{path:"/",exact:!0,component:p}),n.a.createElement(y.a,{path:"/cv",exact:!0,component:g}),n.a.createElement(y.a,{path:"/mycity",exact:!0,component:C}),n.a.createElement(y.a,{path:"/heritage",exact:!0,component:O}),n.a.createElement(y.a,{path:"/myteam",exact:!0,component:z}),n.a.createElement(y.a,{path:"/contact",exact:!0,component:h}),n.a.createElement(y.a,{path:"/login",exact:!0,component:Y})),n.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=l(13),S=l(31),G=l(4),F={name:"",email:"",number:"",topic:"",message:"",date:""};var D=Object(M.c)({inputReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"name":return Object(G.a)(Object(G.a)({},e),{},{name:a.payload});case"email":return Object(G.a)(Object(G.a)({},e),{},{email:a.payload});case"number":return Object(G.a)(Object(G.a)({},e),{},{number:a.payload});case"topic":return Object(G.a)(Object(G.a)({},e),{},{topic:a.payload});case"message":return Object(G.a)(Object(G.a)({},e),{},{message:a.payload});case"date":return Object(G.a)(Object(G.a)({},e),{},{date:a.payload});case"clear":case"infos":return F;default:return e}},showInfoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"infos":return a.payload;default:return e}}});l(49);var H=Object(M.d)(D,Object(M.a)(S.a));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d.a,null,n.a.createElement(E.a,{store:H},n.a.createElement(B,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ef7333a7.chunk.js.map