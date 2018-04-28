$(document).ready(function() {
    
    //console.log(jsonData);
    for (var i = 0; i < jsonData.length; i++) {
        var tag = "<p id='cuisine" + i + "' class='navMenu'>" + jsonData[i].nameE + "</p>";
        $('#nav').append(tag);

        $('#cuisine' + i).click(function() {
            var tag;
            var idx = $(this).attr('id').replace("cuisine", "");

            //console.log($(this).attr('id'));
            $('#info').children().remove();

            tag = "<p class='nameE'>" + jsonData[idx].nameE + "</p>";
            $('#info').append(tag);
            
            tag = "<img src='images/" + jsonData[idx].image + "' alt=''></img>";
            $('#info').append(tag);

            tag = "<p class='nameF'><strong>Farsi:</strong> " + jsonData[idx].nameF + "</p>";
            $('#info').append(tag);

            tag = "<p class='desc'>" + jsonData[idx].desc + "</p>";
            $('#info').append(tag);

            tag = "<p class='rate'>Favorite Rate: " + jsonData[idx].rate + "</p>";
            $('#info').append(tag);


        });
    }

    $('#info').css('min-height', $('#nav').css('height'));
    $('.content').css('min-height', $('#nav').css('height'));
});