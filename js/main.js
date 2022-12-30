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
        html+='<td><button class="dlt" onclick="deleteContact('+i+')" >Delete</button></td>';
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



$(document).ready(function(){

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
    let txt = "Are you sure to delete info of";
    let msg = txt.concat(" ", name);

    if(confirm(msg)){
        phoneBook.splice(i, 1);
        dispaly();
    }
    return false;
}

$('#searchbar').keyup(function(){
    //console.log($(this).val());

    var td, serachval;
    var search = $("#searchbar").val().toLowerCase();
    var table = $("#print");
    var tr = table.find('tr');
    //console.log(tr);
    $('table tr').each((index)=>{
        if(index !==0 ){
            console.log($(this));
             $row = $(this);
            let value = $row.find('td:first').text();
            //console.log(value);
            if (value.indexOf(search)!==0){
                console.log($row);
            }else{
                $row.show();
            }
        }
    })

    //let filter = typeof search === 'string' ? search.value.toUpperCase() : '';
    // let filter = search.toUpperCase();
    // let table = $("#print").html();
    // let tr = table.getElementByTagName("tr");
    // console.log(tr);

    // for(let i=0; i<tr.length; i++){
    //     td = tr[i].getElementByTagName("td")[0];
    //     if(td){
    //         serachval = td.textContent || td.innerText;
    //         if(serachval.toUpperCase().indexOf(filter) > -1){
    //             tr[i].style.display = "";
    //         }else{
    //             tr[i].style.display = "none";
    //         }
            
    //     }
    // }
});