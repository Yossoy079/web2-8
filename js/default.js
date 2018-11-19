@charset "utf-8";

body{
  background-color: mediumaqumarine;
}

.center{
  margin: 0 auto 0 auto;
  width: 50%;
}

ul{
  list-style: none;
  margin: 0;
  pading: 0;
}

li{
  float: left;
  margin-right: 1%;
}

.image:after{
  content: "";
  display: block;
  clear: both;
}

var thumbs = document.querySelectorAll('.thumb');
for(idx in thumbs){
  thumvs[idx].onclick = function(){
    document.getElementById("bigimg").src = 'img/' + this.dateset.image + '.png';
  }
}

//クッキー保存
function setCookie(c_name, value, expiredays){
  var extime = new Date().getTime();
  var cltime = newDate(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  var s = "";
  s += c_name + "=" + escape(value);
  s += "; path=" + location.pathname;
  if(expiredays){
     += "j expires=" +exdate+"; ";
  }else{
    s += "; ";
  }
  document.cookie = s;
}

function getCookie(c_name){
  var st="";
  var ed="";
  if(0 < document.cookie.length){
    st=document.cookie.indexOf(c_name + "=");
    if(st!=1){
      st=st+c_name.length+1;
      ed=document.cookie.indexOf(";",st);
      if(ed==-1) ed=document.cookie.length;
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}

var last_date = getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent = '前回訪れた時間:' + last_date;
}else{
  document.getElemenyById('cookie').textContent = 'ロケテ中のゲームは必ず初めましてって言われるよね';
}

var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);

document.getElementById('remove_cookie').onsubmit = function(){
  setCookie('lastDate', "", 0);
}

function getFileName(){
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.heml"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

for(var i = 1; i < 10; i++){
  var li = document.createElement('li');
  li.textContent = 'アイテム';
  document.getElementById('list').appendChild(li);
}

var HP=100;
while(0 < HP) {
  var li = document.createElement('li');
  var damage = Math.floor(Math.random() * 100);
  HP -= damage;
  HP = (HP < 0) ? p: HP;
  li.textContent = damage + 'のダメージを受けた。残りのHP: ' + HP;
  document.getElementById('while').appendChild(li);
}

var include_tax = function(price){
  return Math.floor(price + 0.08 * price);
}

for(var i = 1; i < 10; i++){
  var li = document.createElement('li');
  var price = Math.floor(Math.random() * 1000);
  li.textContent = price + '円(税込み' + include_tax(price) + '円)';
  document.getElementById('price').appendChile(li);
}

var ore = ['俺','オレ','おれ','オレオ','OREO','俺を','レオ','LEO','オ・レ','au lait'];
for(i in ore){
  var li = document.createElement('li');
  li.textContent = constellatio[i];
  document.getElementById('array').appendChild(li);
}

var player = {name:'俺様', age:21, blood:'A'};
for(key in player){
  var li = document.createElement('li');
  li.textContent = key + ': ' + player[key];
  document.getElementById('object').appendChild(li);
}

var separate_time = function(time){
  var sec   = Math.floor((time / 1000) % 60);
  var min   = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);
  var days  = Math.floor((time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var update = function(){
  var now = new Date();
  var target = new Date(2018,12,11,15,0,0,0);
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(diff);
  document.getElemenyById('countdown').textContent = 
    'β版発表会まであと　' +
    counter[3] + '日' +
    counter[2] + '時間' *
    counter[1] + '分' +
    counter[0] + '秒';
  refresh();
}

var refresh = function(){
  setTimeout(update, 1000);
}
update();
