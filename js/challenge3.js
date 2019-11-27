$("#ch3form").submit(function(event){
    var counter=0;

    $('input').each(function(){
        if ($(this).prop("checked")){
            counter+=1;
        }
    })

    if (counter!=2){
        alert("You must choose both");
        event.pereventDefault();
    }



})

// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  // }