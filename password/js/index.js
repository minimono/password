$(function(){
  let password;
  $('.generate button').on('click', function(){
    const length = Number($('.setting .word-num').val());
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const source = letters + letters.toUpperCase() + numbers;
    password = '';
    for(let i = 0; i < length; i++){
      password += source.charAt(Math.floor(Math.random()*source.length))
    }
    $('.result').val(password);
    $('.copy button').text('コピーする！');
    $('.copy').show();
  });
  $('.copy button').on('click', function(){
    $('.result').select();
    document.execCommand('copy');
    $('.result').blur();
    $('.copy button').text('コピーしたよ！');
  });
});