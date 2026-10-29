document.getElementById('kontaktniFormular').addEventListener('submit', function (e) {
  e.preventDefault();

  var form = this;
  var btn = form.querySelector('button[type="submit"]');
  var originalLabel = btn.innerHTML;

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Odesílám…';

  var data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data
  })
    .then(function (res) {
      if (!res.ok) throw new Error('Chyba serveru: ' + res.status);
      return res.json();
    })
    .then(function () {
      form.reset();
      alert('Zpráva byla úspěšně odeslána! Ozveme se vám co nejdříve.');
    })
    .catch(function () {
      alert('Nastala chyba při odesílání. Zkuste to prosím znovu, nebo nás kontaktujte přímo na info@zachranzvire.cz');
    })
    .finally(function () {
      btn.disabled = false;
      btn.innerHTML = originalLabel;
    });
});
