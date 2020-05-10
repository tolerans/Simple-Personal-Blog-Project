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
            url1:"https://i.pinimg.com/originals/91/eb/7f/91eb7fd555ce1b88de21584b0eccd486.jpg",
            url2:"https://i4.hurimg.com/i/hurriyet/75/1110x740/5b0e5ddabf49c21958da2d8a.jpg",
            url3:"https://img.haberler.com/haber/052/ozel-havalandirma-sistemli-atis-poligonu-hizmete-5504052_4781_o.jpg"
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
                                                    yüzmek
                                                    <img id={"image"} src={this.state.images.url1} alt=""/>
                                                </li>
                                                <li className={"list-group-item"}>
                                                    dans etmek
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
                                                    Kitap Okumakls
                                                    <img id={"image"} src={this.state.images.url2} alt=""/>
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
