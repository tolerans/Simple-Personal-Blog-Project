


export const nameChanged=(name)=>{
    //console.log(name);
    return{type:"name",payload:name}
};
export function emailChanged(email) {
    return {type:"email",payload:email}
}
export function numberChanged(number) {
    return {type:"number",payload:number}
}
export function topicChanged(topic) {
    return {type:"topic",payload:topic}
}
export function messageChanged(message) {
    return {type:"message",payload:message}
}
export function dateChanged(date) {
    //console.log(date);
    return {type:"date",payload:date}
}
