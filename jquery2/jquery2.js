$(document).ready(function(){
    $(".add-row").click(function(){
       

        var name = $("#title").val();
        var email = $("#rating").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + '</td><td><button  class= ".delete-row">  Delete Row</button></td></tr>';
        $("table tbody").append(markup)
        $("table tbody").append(kylie)


    });
    // $('table').on("click",'.delete-row',function() {
    
    // $(this).parents('tr').remove();
          
    //     })

    // Find and remove selected table rows
    $(".delete-row").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
                
            }
        });
    });
});    








