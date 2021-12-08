// ここからコードを書きます🤗
// alert(111);
console.log("はじめてのジャバスクリプト")

// Syntax errorは打ち間違いの場合に生じる
console.log(23+5)
console.log(2000-1800)
console.log(18+5)

const test = "aaaa";
const morita = "MORITA"
const num = 1;

console.log(test)
console.log(num)

if(test === "aaaa"){
    console.log("箱の名前はaaaaです")
}else{
    console.log("これはaaaaではありません")
}

if(morita === "MORITA"){
    console.log("箱の中身はモリタです")
}else{
    console.log("これはモリタではありません")
}

const point = 90;
if(point >= 80){
    console.log("素晴らしい！おめでとう！")
}else{
    console.log("もっと頑張りましょう")
}

// const random = Math.floor(Math.random()*5)
// console.log(random,"ランダムな数字")



// button tag
$("#aa").on("click",function(){
    const omikuji = Math.floor(Math.random()*6)
if(omikuji === 0){
    $("h1").html("大吉");
    $("h1").css("color","red");
    console.log("大吉");
    alert("おめでとう！")
}else if(omikuji === 1){
    $("h1").html("中吉");
    console.log("中吉")
}else if(omikuji === 2){
    $("h1").html("小吉");
    console.log("小吉")
}else if(omikuji === 3){
    $("h1").html("吉");
    console.log("吉")
}else if(omikuji === 4){
    $("h1").html("凶");
    console.log("凶")
}else if(omikuji === 5){
    $("h1").html("大凶");
    console.log("大凶")
}
    // alert(111)
})