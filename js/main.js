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
            html+='<td><button class="dlt" id="dltbtn" >Delete</button></td>';
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
        //console.log(phoneBook);

    });

    $('#dltbtn').click((ev)=>{
        ev.preventDefault();
        alert('Are you sure to delete this ?');
    });
    


    $('#searchbar').keyup(function(){
        //console.log($(this).val());

        var td, serachval;
        var search = $("#searchbar").val();
        //let filter = typeof search === 'string' ? search.value.toUpperCase() : '';
        let filter = search.value.toUpperCase();
        let table = $("#print").val();
        let tr = table.getElementByTagName("tr");

        for(let i=0; i<tr.length; i++){
            td = tr[i].getElementByTagName("td")[0];
            if(td){
                serachval = td.textContent || td.innerText;
                if(serachval.toUpperCase().indexOf(filter) > -1){
                    tr[i].style.display = "";
                }else{
                    tr[i].style.display = "none";
                }
                
            }
        }
    });

   
});