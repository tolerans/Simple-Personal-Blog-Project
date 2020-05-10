
const initialState={
    name:"",
    email:"",
    number:"",
    topic:"",
    message:"",
    date:""
};


export default function inputReducer(state=initialState,action) {
    switch (action.type) {
        case "name":
            return {...state,name:action.payload};
        case "email":
            return {...state,email:action.payload};
        case "number":
            return {...state,number:action.payload};
        case "topic":
            return {...state,topic:action.payload};
        case "message":
            return {...state,message:action.payload};

        case "date":
            return {...state,date:action.payload};

        case "clear":
            return initialState;

        case "infos":
            return initialState;
        default:
            return state
    }
}
