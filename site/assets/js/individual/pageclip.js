var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) {
    console.log('submitting');
  },
  onResponse: function (error, response) {
    console.log('response');
    window.location.href='/thanks'
  }
})
