// Argument -> yyyy-m-d
//new Date(2018,8,29);
// deueDate = new Date("9-30-2018") --> On contructor  

tasks = [];

function Task(data){
    this.title = data.title;
    this.status = 'open';
    this.createdAt = new Date();
    this.dueDate = data.dueDate || new Date();

    this.save = function(){
        tasks.push(this);
        return this;
    }

    this.details = function(){
        return `${this.title} -${this.status} - ${this.dueDate}`
    }

    this.markAsComplete = function(){
        return this.status = "complete";
    }

    this.isOverDue = function(){
        if((this.dueDate < new Date()) && (this.status == 'open')){
            return true;
        }else{
            return false;
        }
    }

    this.destroy = function(){
        // id = this.id;
        var title_index = tasks.indexOf(this.title);
        return tasks.splice(title_index,1);
    }

}

Task.all = function(){
    return tasks;
}

Task.count = function(){
    return tasks.length;
}

// Task.openTasks = function(){
//     return tasks.filter(task => task.status == 'open');
// }

Task.openTasks = function(){
    return tasks.filter(function(task){
        return task.status == 'open';
    });
}

// this.isOverDue = function(){
//     if((this.dueDate < new Date()) && (this.status == 'open')){
//         return true;
//     }else{
//         return false;
//     }
// }

Task.listOverDue = function(){
    return tasks.filter(task => task.status == 'open' && task.dueDate < new Date());
}


var t1 = new Task({title: "AmericanSteel", status: "open",dueDate: new Date("9-30-2018")});
console.log(t1);

var t2 = new Task({title: "AmericanCarportInc", status: "open",dueDate: new Date("7-30-2018")});
console.log(t2);

var t3 = new Task({title: "CarportKingdom", dueDate: new Date("10-30-2018")});
t3.save();

console.log('Total Tasks', Task.count());

Task.all();

Task.all().forEach(function(task){
    console.log(task.details());
})

console.log(Task.openTasks().length);

t2.markAsComplete();
console.log(t2.details());

// OverDue --> Should return true if due date is  less than today  and  status is open
// else return false if status is complete
console.log("OverDue");
t2.isOverDue();
// console.log(t2.details());
t1.destroy();
