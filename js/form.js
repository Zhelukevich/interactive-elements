var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+375 (99)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 9
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
})
