var url = `http://dct-api-data.herokuapp.com/tickets`;
var apiKey = 'fe694992d9810eb2'

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');

var ticketFormHandle =  document.getElementById('ticketForm');
var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var messageHandle = document.getElementById('message');
// var messageHandle = document.querySelector('#message');
var highHandle = document.getElementById('high');
var mediumHandle = document.getElementById('medium');
var lowHandle = document.getElementById('low');
var progressHandle = document.getElementById('progress');
/* <td>${ticket.status}</td> */
var statusHandle = document.getElementById('status');
var checkbox = document.querySelector("input[name=checkbox]");


function buildRow(ticket){
    return `
    <tr>
    <td>${ticket.ticket_code}</td>
    <td>${ticket.name}</td>
    <td>${ticket.department}</td>
    <td>${ticket.priority}</td>
    <td>${ticket.message}</td>
    <td><input type="checkbox" name="checkbox" id="status" onclick="myFunction()"></td>
    <td>${ticket.status}</td>
</tr>
    `;
}

function calculatePercentage(tickets){
    var completedTickets = tickets.filter(function(ticket){
        return ticket.status = 'completed'
    });
    var result = Math.round((completedTickets.length/tickets.length)*100)     //0/10
    return result;
}

function statusCheck(tickets){
    var completedTickets = tickets.filter(function(ticket){
        ticket.status = 'completed';
    });
        // return completedTickets.document.getElementById("status").checked = true;
        return statusHandle.checked = true;
    // });
}

axios.get(`${url}?api_key=${apiKey}`).then(function(response){

    var tickets = response.data;
    console.log(tickets);
    countHandle.innerHTML = tickets.length;
    var output = '';
    tickets.forEach(function(ticket){
        output += buildRow(ticket);
    });
    tableBodyHandle.innerHTML = output;
    calculatePercentage(tickets);
    progressHandle.setAttribute('value',calculatePercentage(tickets));
    // var ticketstatus = tickets.filter(ticket=>ticket.status == "closed");
}).catch(function(error){

});

ticketFormHandle.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e);
    var data = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: highHandle.checked ? highHandle.value : (mediumHandle.checked ? mediumHandle.value : lowHandle.value),
        message: messageHandle.value
    };

    axios.post(`${url}?api_key=${apiKey}`,data).then(function(response){
        var ticket = response.data;
        countHandle.innerHTML = Number(countHandle.innerHTML) + 1;
        ticketFormHandle.reset();
        tableBodyHandle.innerHTML += buildRow(ticket);
    }).catch(function(err){
        console.log(err);
    });
},false);

console.log(statusHandle);

// statusHandle.patch()
function myFunction(e) {
    console.log(this);
// checkbox.addEventListener('change',function(){
    if(this.checked) {     
        var code = this.ticket_code;
        var updateTicket = {
            status: 'completed'
        }
    }else{
        var code = this.ticket_code;
        var updateTicket = {
            status: 'open'
        }

    }
    axios.patch(`${url}/${code}?api_key=${apiKey}`,updateTicket).then(function(response){ 
        result = response.data;
        console.log(result);
    }).catch(function(err){
        console.log(err);
    });
// })

axios.delete(`${url}/${code}?api_key=${apiKey}`).then(function(response){ 
    result = response.data;
    console.log(result);
}).catch(function(err){
    console.log(err);
});


}

