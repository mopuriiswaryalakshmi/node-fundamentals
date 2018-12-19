var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/tickets?api_key=fe694992d9810eb2';

function Ticket(data){
    this.name = data.name;
    this.department = data.department;
    this.priority = data.priority;
    this.message = data.message;
    this.viewDetails = function(){
        return this.name +'-'+this.department+'-'+this.priority+'-'+this.message    
    }
    // this.save = function(){
    //     axios.post(`${url}?api_key=${key}`,this.toJSON).then((response) => {

    //     }),catch((err)=>{

    //     })
    this.toJSON = {
        name: 'ishu',
        department: 'Technical',
        priority: 'High',
        message: 'Need Support'
    }
    // this.save = function(){
    //     axios.post(`${url}`,{name: 'viji',department: 'Non Technical',priority: 'High',message: 'Need Support'
    //     }).then((response) => {
    //         console.log(response.data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // }
    this.save = function(){
        axios.post(`${url}`,this.toJSON).then((response) => {
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    }

}

var t1 = new Ticket({name: 'Rahul',department: 'Technical',priority: 'High',message: 'Need Support'});
console.log(t1.viewDetails());

console.log(t1.save());



// axios.post(`${url}?api_key=${key}`).then((response)=>{
//     var tickets = response.data;
//     tickets.save;
// })

// npm init
// this.save = function(){
//     axios.post(`${url},object).then((response) => {

//     }),catch((err)=>{

//     })