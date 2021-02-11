let form = document.querySelector('#contact-form');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value
  };

  let request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    // В этой части кода можно обрабатывать ответ от сервера
    console.log(request.response);
    alert('Ваша заявка успешно отправлена!');
    // form.innerHTML = '<h2>Спасибо за заявку!</h2>';
  });

  request.open('POST', '/send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email) 
  + '&message=' + encodeURIComponent(formData.message));

});