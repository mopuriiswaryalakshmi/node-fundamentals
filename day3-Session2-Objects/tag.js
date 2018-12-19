var tag = {
    value: 'travel explore discovery',
    generateHashTag: function(){
        var words = this.value.split(' ');
        var output = '#';
        words.forEach(function(word){
           output += word[0].toUpperCase()+word.toUpperCase().slice(1);
        // output += word[0].toUpperCase();

        });
        return output;
    }
}

tag.generateHashTag();