console.log( 'js' );

$(document).ready(onReady);

function onReady() {
$('#requestButton').on('click', plantain);
}//END onReady

function plantain () {
    console.log('plantain chips');
    $.ajax ({
        method: 'GET',
        url: '/bananas',
        success: function(response) {
            console.log('banana muffin!', response);
            
        }

    })//END ajax request
    

}//END plantain