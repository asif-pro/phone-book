const phoneBook = [];
function dispaly(){
    var html ="";
        html+='<tr>';
        html+='<th>Name</th>';
        html+='</tr>';
    for(var i = 0; i<phoneBook.length; i++){
        html+='<tr>';
        html+='<td onclick="details('+i+')">'+phoneBook[i].Name+'</td>';
        html+='</tr>';
    }
    if(phoneBook.length < 1){
        let msg = "No Records / Empty Book";
        html+='<tr>';
        html+='<td>'+msg+'</td>';
        html+='</tr>';
    }

    document.getElementById("print").innerHTML = html;
}
function dispalyindiviaual(){
    
}



$(document).ready(function(){
    $('#second').hide();
    dispaly();

    $('#savebtn').click((ev)=>{
        ev.preventDefault();
        let fname = $("#firstName").val().trim();

        if(fname === null || fname === "" ){
            alert ("Name can't be empty");
            return;
        }
        
        let info = {
            Name: $("#firstName").val(),
            Surname: $("#surname").val(),
            Phone: $("#phone").val(),
            Address: $("#address").val()
        }
        phoneBook.push(info);
        $('#inputForm')[0].reset();
        dispaly();

    });
   
});

function deleteContact(i){
    let name = phoneBook[i].Name;
    let txt1 = "Are you sure to delete";
    let txt2 = "'s info. ?";
    let msg = txt1.concat(" ", name,txt2);

    if(confirm(msg)){
        phoneBook.splice(i, 1);
        $('#first').show();
        $('#inputf').show();
        $('#second').hide();
        dispaly();
    }
    return false;
}
function details(i){
    $('#first').hide();
    $('#inputf').hide();
    $('#second').show();

    var html ="";
        html+='<tr>';
        html+='<th>Name</th>';
        html+='<th>Surname</th>';
        html+='<th>Phone</th>';
        html+='<th>Address</th>';
        html+='<th>Action</th>';
        html+='</tr>';
  
        html+='<tr>';
        html+='<td onclick="details('+i+')">'+phoneBook[i].Name+'</td>';
        html+='<td>'+phoneBook[i].Surname+'</td>';
        html+='<td>'+phoneBook[i].Phone+'</td>';
        html+='<td>'+phoneBook[i].Address+'</td>';
        html+='<td><button class="dlt" onclick="deleteContact('+i+')" >Delete</button></td>';
        html+='</tr>';
    

    document.getElementById("print2").innerHTML = html;

}
function backtoHome(){
    $('#first').show();
    $('#inputf').show();
    $('#second').hide();
    dispaly();
}

$('#searchbar').keyup(function(){

    var td, serachval;
    var search = $("#searchbar").val().toLowerCase();
    var table = $("#print");
    var tr = table.find('tr');
    search.each((index)=>{
        if(index !==0 ){
             $row = $(this);
            let value = $row.find('td:first').text();
            if (value.indexOf(search)!==0){
            }else{
                $row.show();
            }
        }
    })
});