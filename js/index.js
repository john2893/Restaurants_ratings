$(document).ready(function(){
    
    $(".btn").on('click', function(e){
        var ctx = document.getElementById('myChart');
        
        e.preventDefault();
        var api_url = 'https://developers.zomato.com/api/v2.1/search?q=Winston-Salem&apikey=a982f0cb4a2ba6601a7827e1c358ce1a&start=0&count=20';
        $.ajax({
            url:api_url,
            method:'GET',
            success: function (data){
                console.log(data.restaurants);
                for (var i=1; i < data.restaurants.length; i++){

                    var nDiv = $('<tr>');
                    var title = $('<td>');
                    var cuisine = $('<td>');
                    var address = $('<h5>', {"class": "card-subtitle address"});
                    var link = $('<a>', {"class": "subtitle link"});
                    var rating = data.restaurants[i].restaurant.user_rating.aggregate_rating;
                    
                    $(title).text(data.restaurants[i].restaurant.name);
                    $(cuisine).text(data.restaurants[i].restaurant.cuisines)
                    // $(address.text(data.restaurants[i].restaurant.location.address)).appendTo(nSdiv);
                    // $(link).attr("href", data.restaurants[i].restaurant.menu_url);
                    // $(link).text("menu link")
                    // $(link).appendTo(nSdiv);

                    $(title).appendTo(nDiv);
                    $(cuisine).appendTo(nDiv);
                    $(nDiv).appendTo(".new");
                    var myChart = new Chart(ctx, {
                        
                        type: 'bar',
                        data: {
                            labels: [],
                            datasets: [{
                                label: 'Ratings',
                                data: [],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                
                                ],
                                borderColor: [
                                    
                        
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                    data.labels.push(data.restaurants[i].restaurant.name);
                    data.datasets.data.push(data.restaurants[i].restaurant.user_rating.aggregate_rating)
                
                }
                
            }
            
        
        })
       
        
    });
    
});



    


    // $.ajax('https://developers.zomato.com/api/v2.1/search?q=Winston-Salem&apikey=a982f0cb4a2ba6601a7827e1c358ce1a&start=0&count=20')
    // .then(function(response){
    //     console.log(response.data.restaurants[5].restaurant.location.address)
    //     console.log(response.data);
    // });
    // for (var i=1; i < response.data.restaurants.length; i++){
    
    //     var nDiv = $('<div>', {"class": "card"});
    //     var nSdiv = $('<div>', {"class": "card-body"});
    //     var title = $('<h4>', {"class": "card-title"});
    //     var cuisine = $('<h5>', {"class": "card-subtitle cuisine"});
    //     var address = $('<h5>', {"class": "card-subtitle address"});
    //     var link = $('<a>', {"class": "subtitle link"});
    //     $(nSdiv).appendTo(nDiv);
    //     $(title.text(response.data.restaurants[i].restaurant.name)).appendTo(nSdiv);
    //     $(cuisine.text(response.data.restaurants[i].restaurant.cuisines)).appendTo(nSdiv)
    //     $(address.text(response.data.restaurants[i].restaurant.location.address)).appendTo(nSdiv);
    //     $(link).attr("href", response.data.restaurants[i].restaurant.menu_url);
    //     $(link).text("menu link")
    //     $(link).appendTo(nSdiv);
    //     $(nDiv).appendTo(".new");
        
    
    // }

    




