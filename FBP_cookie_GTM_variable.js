(function() {
  if (document.cookie.indexOf('_fbp=') === -1) {
    var domain = window.location.hostname;
    var randomId = Math.random().toString().substr(2, 10);
    var timestamp = Date.now();
    var fbpValue = 'fb.1.' + timestamp + '.' + randomId;

    document.cookie = '_fbp=' + fbpValue + '; path=/; domain=' + domain + '; expires=' + new Date(Date.now() + 90*24*60*60*1000).toUTCString() + '; SameSite=Lax';

    console.log('Set _fbp cookie: ' + fbpValue);
  } else {
    console.log('_fbp cookie already exists.');
  }
})();
