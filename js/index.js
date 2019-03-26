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
                var labelsArray = [];
                var dataArray = [];
                var rating = data.restaurants[i];
                for (var i=1; i < data.restaurants.length; i++){
                 
                    var nDiv = $('<tr>');
                    var title = $('<td>');
                    var cuisine = $('<td>');
                    // var address = $('<h5>', {"class": "card-subtitle address"});
                    // var link = $('<a>', {"class": "subtitle link"});
                    // var rating = data.restaurants[i].restaurant.user_rating.aggregate_rating;
                    
                    $(title).text(data.restaurants[i].restaurant.name);
                    $(cuisine).text(data.restaurants[i].restaurant.cuisines)
                    // $(address.text(data.restaurants[i].restaurant.location.address)).appendTo(nSdiv);
                    // $(link).attr("href", data.restaurants[i].restaurant.menu_url);
                    // $(link).text("menu link")
                    // $(link).appendTo(nSdiv);

                    $(title).appendTo(nDiv);
                    $(cuisine).appendTo(nDiv);
                    $(nDiv).appendTo(".new");
                   
                    var name = data.restaurants[i].restaurant.name
                    var dataA = data.restaurants[i].restaurant.user_rating.aggregate_rating
                    if (dataA == 0){
                      dataA = dataA + 0.2
                      dataArray.push(dataA)
                    } else {
                      dataArray.push(dataA)
                    }
                    labelsArray.push(name)
                    // dataArray.push(dataA)
                
                }
                var data = {
                  labels: labelsArray,
                  datasets: [{
                    
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 2,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: dataArray,
                  }]
                };
                
                var options = {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [{
                      stacked: true,
                      gridLines: {
                        display: true,
                        ticks: {mirror: true},
                        color: "rgba(255,99,132,0.2)"
                      }
                    }],
                    xAxes: [{
                      stacked: true,
                      gridLines: {
                        display: false
                      }
                      
                    }]
                  }
                };
                var ctx = $('#myChart');
                var myBar = new Chart(ctx, {
                  type: 'horizontalBar',
                  data: data,
                  options: options
                });
                // Chart.Bar('myChart', {
                //   type:'horizontalBar',
                //   options: options,
                //   data: data
                // });
                
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

    




