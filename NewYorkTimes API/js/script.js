//receive data from the form
function giveval(){
     var city = document.getElementById('city').value;
    //console.log(city);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "ec76b165acac4983b13004f88e84de13",
        'q': city
    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
            console.log(result);
            articles=result.response.docs;
                    

           for (var i=0;i<articles.length;i++){
                var article=articles[i];
                $('body').append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
                '</li>');
                
            };



        }).fail(function(err) {
  throw err;
});



}

