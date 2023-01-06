function showAllItems() {
  $.getJSON('data/apparel.json', function(data) {
    let apparel = data.apparel;
    $.each(apparel, function(i, data) {
      $('.container-card').append(`
        <div class="card">
          <a href="">
            <div class="card-img">
              <img src="img/`+data.image+`" alt="" />
            </div>
            <div class="card-name-price">
              <div class="card-name">
                <p>`+data.name+`</p>
              </div>
              <div class="card-price">
                <p>`+data.price+`K</p>
              </div>
            </div>
          </a>
        </div>`)
    });
  });
}

showAllItems();

$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('nav-active');
  $(this).addClass('nav-active');

  let category = $(this).html();
  $('.product-txt').html(category);

  if(category == 'All Items') {
    $('.container-card').html('');
    showAllItems();
    return;
  }

  $.getJSON('data/apparel.json', function(data) {
    let apparel = data.apparel;
    let content = '';

    $.each(apparel, function(i, data) {
      if(data.category == category.toLowerCase()) {
        content += `
        <div class="card">
          <div class="card-img">
            <img src="img/`+data.image+`" alt="" />
          </div>
          <div class="card-name-price">
            <div class="card-name">
              <p>`+data.name+`</p>
            </div>
            <div class="card-price">
              <p>`+data.price+`K</p>
            </div>
          </div>
        </div>`
      }
    });
    $('.container-card').html(content);
  });
});