// var keys = ['key1', 'key2', 'key3']

// var object = Object.assign({}, ...Object.entries({...keys}).map(([a,b]) => ({ [b]: 'someValue' })))

$(document).ready(function(){
    
    const p1 = {Name:"Jhon", Phone:23950, Address:"white"};
    const p2 = {Name:"Alex", Phone:2345238, Address:"black"};
    const phoneBook = [];
    phoneBook.push(p1);
    phoneBook.push(p2);

    

    $('#savebtn').click((ev)=>{
        ev.preventDefault();
        
        let info = {
            Name: $("#firstName").val(),
            Phone: $("#phone").val(),
            Address: $("#address").val()
        }

        phoneBook.push(info);
        
        $('#inputForm')[0].reset();

        phoneBook.forEach(dispaly);
        function dispaly(value,index,array){
             //console.log(value);
            for (data in value) {
                console.log(value[data]);
            }
        }

    });

});