import React, {Component} from 'react';
import posed from "react-pose"

const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtStart: {
            display: "none"
        }
    }
});

class About extends Component{
    state= {
        images:{
            url1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3e%2FFresh_journey.jpg%2F1200px-Fresh_journey.jpg&f=1&nofb=1",
            url2:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.blogto.com%2Farticles%2F20160411-crossfitykv2048-06.jpg%3Fwidth%3D1300%26quality%3D70&f=1&nofb=1",
            url3:"https://img.haberler.com/haber/052/ozel-havalandirma-sistemli-atis-poligonu-hizmete-5504052_4781_o.jpg",
            url4:"https://www.uzungol.net.tr/wp-content/uploads/2019/06/dag-tirmanisi.jpg"
        },
        visibleHb:false,
        visibleEtk:false
        };

    ChangeHobies=()=>{
        this.setState({
            visibleHb:!this.state.visibleHb
        })
    };

    ChangeEtk=()=>{
        this.setState({
            visibleEtk:!this.state.visibleEtk
        })
    };

    render(){
        const {visibleHb,visibleEtk}=this.state;
        return (
            <div id={"about"}>
                <div style={{paddingTop:"100px"}} className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <div className={"card"}>
                                <div  style={{cursor:"pointer"}}
                                     className={"card-header d-flex justify-content-between"}>
                                    <p>Hobiler</p>
                                    <button onClick={this.ChangeHobies}
                                            className={"btn btn-primary"}>{!visibleHb ?"Gizle":"Göster"}</button>
                                </div>
                                <Animation pose={!visibleHb ?"visible":"hidden"}>
                                    {
                                        <div className={"card-body"}>
                                            <ul className={"list-group"}>
                                                <li className={"list-group-item"}>
                                                    Yüzme Sporu
                                                    <img id={"image"} src={this.state.images.url1} alt=""/>
                                                </li>
                                                <li className={"list-group-item"}>
                                                    Crossfit
                                                    <img id={"image"} src={this.state.images.url2} alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    }

                                </Animation>
                            </div>

                        </div>
                        <div className={"col-md-6"}>
                            <div className={"card"}>
                                <div style={{cursor:"pointer"}} className={"card-header d-flex justify-content-between"}>
                                    <p>
                                        Etkinlikler
                                    </p>

                                    <button onClick={this.ChangeEtk}
                                            className={"btn btn-primary"}>{!visibleEtk ?"Gizle":"Göster"}</button>
                                </div>
                                <Animation pose={!visibleEtk ?"visible":"hidden"}>
                                    {
                                        <div className={"card-body"}>
                                            <ul className={"list-group"}>
                                                <li className={"list-group-item"}>
                                                    Poligonda Atış
                                                    <img id={"image"} src={this.state.images.url3} alt=""/>
                                                </li>
                                                <li className={"list-group-item"}>
                                                    Dağ Tırmanışı
                                                    <img id={"image"} src={this.state.images.url4} alt=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    }

                                </Animation>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

};

export default About;
