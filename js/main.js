// var keys = ['key1', 'key2', 'key3']

// var object = Object.assign({}, ...Object.entries({...keys}).map(([a,b]) => ({ [b]: 'someValue' })))

$(document).ready(function(){

    const phoneBook = [];

    function dispaly(){
        var html ="";
            html+='<tr>';
            html+='<th>Name</th>';
            html+='<th>Surname</th>';
            html+='<th>Phone</th>';
            html+='<th>Address</th>';
            html+='<th>Action</th>';
            html+='</tr>';
        for(var i = 0; i<phoneBook.length; i++){
            html+='<tr>';
            html+='<td>'+phoneBook[i].Name+'</td>';
            html+='<td>'+phoneBook[i].Surname+'</td>';
            html+='<td>'+phoneBook[i].Phone+'</td>';
            html+='<td>'+phoneBook[i].Address+'</td>';
            html+='<td><button>Update</button> || <button>Delete</button></td>';
            html+='</tr>';
        }

        document.getElementById("print").innerHTML = html;
    }
    dispaly();



    $('#savebtn').click((ev)=>{
        ev.preventDefault();
        
        let info = {
            Name: $("#firstName").val(),
            Surname: $("#surname").val(),
            Phone: $("#phone").val(),
            Address: $("#address").val()
        }
        phoneBook.push(info);
        $('#inputForm')[0].reset();
        dispaly();
        console.log(phoneBook);

    });

});