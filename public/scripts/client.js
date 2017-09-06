console.log( 'js' );

$(document).ready(onReady);

function onReady() {
$('#requestButton').on('click', plantain);
}//END onReady

function plantain () {
    console.log('plantain click');
    $.ajax ({
        method: 'GET',
        url: '/bananas',

    })//END ajax request
    

}//END plantain