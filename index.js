$(document).ready(function() {    
    var apiKey = "5460d1a1682f9524e2c2e0e7bf7dbd77"; // Enter your API Key here        
    //console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    $.each(state_info, function(key){
        console.log("key in state_info: " + key);
    
        var state_obj = state_info[key];
        var latitude = state_obj.lat;
        console.log("latitude: " + latitude);

        var longitude = state_obj.lng;
        console.log("longitude: " + longitude);

        var url ="https://api.darksky.net/forecast/5460d1a1682f9524e2c2e0e7bf7dbd77/"+ latitude +","+longitude;
        console.log("url: " + url);
        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                    
                    //console.log("data: "+ data);
                    var temperature = null;
                    // TODO
                    // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                    // var temperature = 
                    var temperature = (data.currently.temperature);

                    console.log("lat: "+ data.latitude + ", longitude: " + longitude +  ", temperature: " +temperature);

                    //TODO 
                    // Default color gray
                    
                    // Create a series of if else blocks to set the color for the state based on the temperature
                    // Less than equal to 10 should be blue
                    if(temperature <= 10){
                        $( '#' + key ).css('fill', "blue");
                    }

                    // Between 11 and 30 should be cyan
                    else if(temperature > 11 && temperature <= 30){
                        $( '#' + key ).css('fill', "cyan");
                    }
                    // Between 31 and 50 should be green
                    else if (temperature > 30 && temperature <= 50){
                        $( '#' + key ).css('fill', "green");
                    }
                    // Between 51 and 80 should be orange
                    else if(temperature > 50 && temperature <= 80){
                        $( '#' + key ).css('fill', "orange");
                    }
                    // Greater than 80 should be red

                    else if(temperature > 80){
                        $( '#' + key ).css('fill', "orange");
                    }
                    else{
                        $( '#' + key ).css('fill', "gray");
                    }
                    /*$( '#CO' ).css('fill', "blue");   // Example on how to fill colors for your state.    
                    $( '#AK' ).css('fill', "blue");*/

    });

    });

});