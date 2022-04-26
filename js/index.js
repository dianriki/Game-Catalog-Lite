$(document).ready(function () {
    $.ajax({
        'url': 'https://api.rawg.io/api/games?key=36aac5b975144102a260d3508ee33476&dates=2019-09-01,2019-09-30&platforms=18,1,7Eiger%20Cloud4',
        'type': 'GET',
        'dataType': 'json',
        'async': false,
        'success': function (res) {
            $('#next_page').val(res.next) 
            $('#div_load_more').removeAttr('hidden') 
            let cat = '';
            for (i = 0; i < res.results.length; i++) {
                if (res.results[i].rating_top == 4) {
                    icon = 'assets/recomended.png'
                } else if (res.results[i].rating_top == 3) {
                    icon = 'assets/exceptional.png'
                } else if (res.results[i].rating_top == 2) {
                    icon = 'assets/meh.webp'
                } else {
                    icon = 'assets/skip.png'
                }
                cat += ` <div class="col-lg-3" style="margin-bottom: 20px;">
                <div class="card bg-dark" style="border-top-left-radius: 15px;border-top-right-radius: 15px;">
                    <img src="${res.results[i].background_image}" class="card-img-top" alt="${res.results[i].name}" style="max-height: 200px;border-top-left-radius: 15px;border-top-right-radius: 15px;">
                    <div class="card-body" style="color: #fff;">
                        <h3 class="card-title">${res.results[i].name}</h3>
                        <button type="button" class="btn btn-secondary">Rating Top<span class="badge badge-warning" style="margin-left: 5px;">${res.results[i].rating_top}</span>
                        </button> 
                        <img src="${icon}" width=24> 
                        
                        <div class="row float-right">
                        <button type="button" class="btn btn-light"><i class="fa fa-plus"></i> ${res.results[i].ratings_count}</button> 
                        <button type="button" class="btn btn-danger" style="margin-left: 5px;"><i class="fa fa-minus"></i></button> 
                        </div>
                    </div>
                </div>
            </div>`
            }
            $('#catalog_1').empty()
            $('#catalog_1').append(cat)
        },
        'error': function (err) {
            alert(JSON.stringify(err))
        },

    }) 
    
});

function next_page() {
    uri_ = $('#next_page').val() 
    $('#icon').append('<i class="fa fa-spinner fa-spin"></i>');
    $.ajax({
        'url': uri_,
        'type': 'GET',
        'dataType': 'json',
        'async': false,
        'success': function (res) {
            $('#next_page').val(res.next) 
            $('#icon').empty();
            icon = '';  
            let cat = '';
            for (i = 0; i < res.results.length; i++) {
                if (res.results[i].rating_top == 4) {
                    icon = 'assets/recomended.png'
                } else if (res.results[i].rating_top == 3) {
                    icon = 'assets/exceptional.png'
                } else if (res.results[i].rating_top == 2) {
                    icon = 'assets/meh.webp'
                } else {
                    icon = 'assets/skip.png'
                }
                cat += ` <div class="col-lg-3" style="margin-bottom: 20px;">
                <div class="card bg-dark" style="border-top-left-radius: 15px;border-top-right-radius: 15px;">
                    <img src="${res.results[i].background_image}" class="card-img-top" alt="${res.results[i].name}" style="max-height: 200px;border-top-left-radius: 15px;border-top-right-radius: 15px;">
                    <div class="card-body" style="color: #fff;">
                        <h3 class="card-title">${res.results[i].name}</h3>
                        <button type="button" class="btn btn-secondary">Rating Top<span class="badge badge-warning" style="margin-left: 5px;">${res.results[i].rating_top}</span>
                        </button> 
                        <img src="${icon}" width=24> 
                        
                        <div class="row float-right">
                        <button type="button" class="btn btn-light"><i class="fa fa-plus"></i> ${res.results[i].ratings_count}</button> 
                        <button type="button" class="btn btn-danger" style="margin-left: 5px;"><i class="fa fa-minus"></i></button> 
                        </div>
                    </div>
                </div>
            </div>`
            }
            $('#catalog_2').empty()
            $('#catalog_2').append(cat)
        },
        'error': function (err) {
            alert(JSON.stringify(err))
        },

    })
}
