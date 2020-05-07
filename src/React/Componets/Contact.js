import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {emailChanged,nameChanged,numberChanged,topicChanged,messageChanged,dateChanged} from "../../Redux/actions/inputActions";
import {showInfo} from "../../Redux/actions/showInfosAction";
import alertify from "alertifyjs"

const Contact =()=> {

    const dispatch=useDispatch();
    const inputs=useSelector(state=>state.inputReducer);

    const {name,email,number,topic,message,date}=inputs;

    const add=(e)=>{
        if(name==="" || email==="" || number==="" ||topic==="" || message===""){
            alertify.error("Boş alanları doldurunuz")
        }
        const user={
            name,email,number,topic,message,date
        };
        dispatch(showInfo(user));
        e.preventDefault()
    };

    //console.log(inputs);
        return (
            <div id={"contact"} style={{paddingTop:"150px"}}>
               <div  className={"container "}>
                   <div id={"contactContainer"} className={"card"}>
                       <div className={"card-header"}>
                           <h3>İletişim Bilgilerinizi Giriniz</h3>
                       </div>
                       <div className={"card-body"}>
                           <form action="" onSubmit={add}>
                               <div className={"form-group col-md-8"}>
                                   <label htmlFor="name">İsim</label>
                                   <input type="name" value={name} onChange={name=>dispatch(nameChanged(name.currentTarget.value))} name={"name"}
                                          className={"form-control"} placeholder={"Ad Soyad"}/>
                               </div>
                               <div className={"form-group col-md-8"}>
                                   <label htmlFor="email">E-Mail</label>
                                   <input type="email" value={email} onChange={email=>dispatch(emailChanged(email.currentTarget.value))} name={"email"}
                                          className={"form-control"} placeholder={"E-mail Adres"}/>
                               </div>
                               <div className={"form-group col-md-8"}>
                                   <label htmlFor="number">Cep/Telefon</label>
                                   <input type="text" value={number} onChange={number=>dispatch(numberChanged(number.currentTarget.value))} name={"number"}
                                          className={"form-control"} placeholder={"Telefon No"}/>
                               </div>
                               <div className={"form-group col-md-8"}>
                                   <label htmlFor="konu">Konu</label>
                                   <input type="text" value={topic} onChange={topic=>dispatch(topicChanged(topic.currentTarget.value))} name={"topic"}
                                          className={"form-control"} placeholder={"Konu"}/>
                               </div>
                               <div className={"form-group col-md-8"}>
                                   <label htmlFor="date">Doğum tarihi</label>
                                   <input type="date" value={date} onChange={date=>dispatch(dateChanged(date.currentTarget.value))}
                                          className={"form-control"} min={"210-01-02"}/>
                               </div>

                               <div className={"form-group col-md-8"}>
                                   <label htmlFor="message">Mesajınız</label>
                                   <textarea value={message} onChange={message=>dispatch(messageChanged(message.currentTarget.value))}
                                       className={"form-control"} placeholder={""}/>
                               </div>
                               <div className={"d-flex justify-content-between col-md-8"}>
                                   <button onClick={()=>{}} type={"submit"}
                                           className={"btn btn-danger"}>Gönder</button>
                                   <button className={"btn btn-danger"}>Temizle</button>
                               </div>
                           </form>
                       </div>
                   </div>

               </div>
            </div>
        );
};


export default Contact ;
