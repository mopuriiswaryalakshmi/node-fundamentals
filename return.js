function somefunction(){
    return (function(){
        return (function(){
            return 'from innner iffe'
        }())
    }())
}

console.log(somefunction())