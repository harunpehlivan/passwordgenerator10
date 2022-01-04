(function() {

  let form = document.getElementById('app');
  let inputCaracters = document.getElementById('number-caracters');
  let btns = document.getElementsByClassName('btn');
  
  let configuration = {
    caracters: parseInt(inputCaracters.value),
    minuscule: true,
    capital: false,
    numbers: false,
    symbols: false,
    emojis: false
  };
  
  let caracters = {
    minuscule: 'a b c d e f g h i j k l m n o p q r s t v w y z',
    capital: 'A B C D E F G H I J K L M N O P Q R S T V W Y Z',
    numbers: '0 1 2 3 4 5 6 7 8 9',
    symbols: '! @ & # $ % & ^ > < _ - + * = ( ) { } [ ] ; : , . ¿ ? / |',
    emojis: '😀 😄 😁 😅 🤣 😇 🙂 🙃 😉 😌 😍 😘 😗 😚 😛 😝 😜 😏 😒 😞 😔 😕 😫 😩 😢 😭 😤' +
            '😠 😡 😳 😱 😨 😰 😥 😓 🤗 🤔 😶 😑 🙄 😧 😵 👿 👹 👺 👻 ☠ 👽 🎃 👐 👏 🤝 👍 👎' +
            '👊 ✊ 🤘 👈 👉 ☝ ✋ 🤚 🖐 🖖 👋 🤙 ✍ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 👤 👥 👶 👧 👩' +
            '👵 👚 👕 👖 👔 👘 👢 🎩 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🌂 🐶 🐱 🐭 🐹 🐰 🦊 🐻' +
            '🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝' +
            '🐛 🐌 🐚 🐞 🐜 🕷 🕸 🦂 🐢 🐍 🦎 🐙 🦑 🦐  🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦍 🐘' +
            '🦏 🐪 🐫 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🐾 🐉 🐲 🌵 🎄 🌲' +
            '🌳 🌴 🌱 🌿 ☘ 🍀 🎍 🎋 🍂 🍁 🍄 💐 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌘 🌑 🌒 🌓' +
            '🌔 🌍 🌏🌙 🌎 💫 ⭐ 🌟 ✨ ⚡ ☄ 💥 🔥 🌪 🌈 ☀ 🌤 🌥 ☁ 🌦 🌧 ⛈ 🌩 🌨 ❄ 💨 💧 💦 ☔' +
            '☂ 🌊 ⛸ ⛷ 🌫 ☃ ⛄ 🌬 ⚽ 🏓 🏸 🏀 🥅 🏈 🏒 🏂 🏋‍ 🏄‍ ⛹‍ 🤺 🤾‍ 🤸‍ 🏇 🏌‍ 🎫 🎟 🎪 🤹‍' +
            '🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎲 🎳 🎮 🎰 ❤ 💔 ❣ 💕 💞 💓 💗 💘 🍏 🍎 🍊 🍋 🍌 🍉' +
            '🍇 🍓 🍈 🍒 🍑 🍍 🥝 🍅 🍆 🥑 🥒 🌶 🌽 🥕 🥔 🥐 🍞 🥖 🧀 🥚 🍳 🥞 🥓 🍗 🍖 🍖 🌭 🍔' +
            '🍟 🍕 🌮 🌯 🥗 🥘 🍝 🍜 🍲 🍛 🍣 🍱 🍤 🍙 🍚 🍘 🍢 🍡 🍧 🍨 🍦 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩' +
            '🍪 🌰 🥜 🥛 🍼 ☕ 🍵 🍶 🍺 🍻 🥂 🍸 🥄 🍴 🍽'
  };

  /* Eventos */
  // Evento para evitar que haga app un submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  let maxCaracters = 30;
  form.elements.namedItem('btn-plus-one').addEventListener('click', function() {
    if (configuration.caracters < maxCaracters) {
      configuration.caracters++;
      inputCaracters.value = configuration.caracters;
    }
  });

  let minCaracters = 2;
  form.elements.namedItem('btn-minus-one').addEventListener('click', function() {
    if (configuration.caracters > minCaracters) {
      configuration.caracters--;
      inputCaracters.value = configuration.caracters;
    }
  });

  form.elements.namedItem('btn-symbols').addEventListener('click', function() {
    btnToggle(this);
    configuration.symbols = !configuration.symbols;
  });

  form.elements.namedItem('btn-numbers').addEventListener('click', function() {
    btnToggle(this);
    configuration.numbers = !configuration.numbers;
  });

  form.elements.namedItem('btn-capital').addEventListener('click', function() {
    btnToggle(this);
    configuration.capital = !configuration.capital;
  });

  form.elements.namedItem('btn-emojis').addEventListener('click', function() {
    btnToggle(this);
    configuration.emojis = !configuration.emojis;
    // Si eligen emojis, se cambia el caracter a 5 y lo máximo de caracteres pasa a 10 de lo contrario no
    if (configuration.emojis == true) {
        inputCaracters.value = 5;
        configuration.caracters = 5;
        maxCaracters = 10;
    } else {
        maxCaracters = 30;
      }
  });

  form.elements.namedItem('btn-generate').addEventListener('click', function() {
    // Si escogen mas de 20 caracteres la letra de la calve generada se hace pequeña mediante una clase de lo contrario no
    if (configuration.caracters > 20) {
      document.getElementById('input-password').classList.add('small');
    } else {
        document.getElementById('input-password').classList.remove('small');
      }
    generatePassword();
  });

  form.elements.namedItem('input-password').addEventListener('click', function() {
    this.select();
    document.execCommand('copy');
    document.getElementById('alert-copy').classList.add('active');
    // 7ms después del click se deselecciona el input de generar y se remueve la clase active para que se oculte la alerta
    setTimeout(function() {
      this.getSelection().removeAllRanges();
      document.getElementById('alert-copy').classList.remove('active');
    }, 700);
  });

  // Un ciclo para contar cuantos elementos con la clase btn hay, para luego que detecte al que le da click y ejecutar la función blurBtn
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', blurBtn, false);
  }

  /* Funciones */
  function blurBtn() {
    this.blur();
  }

  function btnToggle(e) {
    e.classList.toggle('false');
    e.childNodes[1].classList.toggle('fa-check');
    e.childNodes[1].classList.toggle('fa-times');
  }

  function generatePassword() {
    let caractersEnd = '';
    let password = '';

    for (property in configuration) {
      if (configuration[property] == true) {
        caractersEnd += caracters[property] + ' ';
      }
    }
		console.log(caractersEnd);
    caractersEnd = caractersEnd.trim();
    caractersEnd = caractersEnd.split(' ');
    for (let i = 0; i < configuration.caracters; i++) {
      password += caractersEnd[Math.floor(Math.random() * caractersEnd.length)];
    }

    form.elements.namedItem('input-password').value = password;
  }

  generatePassword();
  
}());