import React from 'react';
import {useSelector} from "react-redux";

const Messages =()=>{

    const message=useSelector(state=>state.showInfoReducer);

    let sayi=0;

    if(message.name){
        sayi+=1
    }

        return (
            <div id={"message"} style={{paddingTop:"100px"}}>
                <div className={"container"}>
                    <div className={"card"}>
                        <div className={"card-header"}><h3>Gelen Mesajlar</h3></div>
                        {
                            sayi===0 ?
                                <div className={"card-body"}>
                                    <h3 className={"card-title"}>Mesaj kutunuz Boş</h3>
                                </div>
                             :<div className={"card-body"}>
                                <h2 className={"card-title"}>İsim :  {message.name}</h2>
                                <h3>E-Posta :  {message.email}</h3>
                                <h4>Telefon Numarası :  {message.number}</h4>
                                <p>Doğum Tarihi :{message.date}</p>
                                <p> Konu :  {message.topic}</p>
                                <p> Mesaj : {message.message}</p>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );

};

export default Messages;
