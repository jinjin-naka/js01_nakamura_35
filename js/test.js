

$("#MSCI_AWCI").on("click",function(){
    console.clear();
    let asset = 0;
    let profit;
    let saving = 36;
    let term = 30;
    for (let i = 0; i < term; i++) {
    YENUSD = xRandomNormal(95.43,14.09); 
    rate = xRandomNormal(0.0597,0.1845);
    profit = asset * rate;
    asset = asset + profit + saving * YENUSD;
    $("h2").html("資産総額 "+Math.round(asset/YENUSD)+"万円");
    console.log(asset*YENUSD/10000);
    }
    if(asset/YENUSD >= 2000){
        alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
    }
})

$("#Deposit").on("click",function(){
    console.clear();
    let asset = 0;
    let saving = 36;
    let term = 30;
    for (let i = 0; i < term; i++) {
    asset = asset + saving;
    $("h2").html("資産総額 "+Math.round(asset)+"万円");
    console.log(asset);
    }
    if(asset >= 2000){
        alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
    }
})

$("#TOPIX").on("click",function(){
    console.clear();
    let asset = 0;
    let profit;
    let saving = 36;
    let term = 30;
    for (let i = 0; i < term; i++) {
    rate = xRandomNormal(0.0404,0.2161);
    profit = asset * rate;
    asset = asset + profit + saving;
    $("h2").html("資産総額 "+Math.round(asset)+"万円");
    console.log(asset);
    }
    if(asset >= 2000){
        alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
    }
})

$("#MSCI_EM").on("click",function(){
    console.clear();
    let asset = 0;
    let profit;
    let saving = 36;
    let term = 30;
    for (let i = 0; i < term; i++) {
    YENUSD = xRandomNormal(95.43,14.09); 
    rate = xRandomNormal(0.1365,0.2872);
    profit = asset * rate;
    asset = asset + profit + saving * YENUSD;
    $("h2").html("資産総額 "+Math.round(asset/YENUSD)+"万円");
    console.log(asset*YENUSD/10000);
    }
    if(asset/YENUSD >= 2000){
        alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
    }
})
    
$("#MSCI_Developed").on("click",function(){
    console.clear();
    let asset = 0;
    let profit;
    let saving = 36;
    let term = 30;
    for (let i = 0; i < term; i++) {
    YENUSD = xRandomNormal(95.43,14.09); 
    rate = xRandomNormal(0.0580,0.1792);
    profit = asset * rate;
    asset = asset + profit + saving * YENUSD;
    $("h2").html("資産総額 "+Math.round(asset/YENUSD)+"万円");
    console.log(asset*YENUSD/10000);
    }
    if(asset/YENUSD >= 2000){
        alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
    }
    })

$("#USBOND").on("click",function(){
    console.clear();
    let asset = 0;
    let profit;
    let saving = 36;
    let term = 30;
    for (let i = 0; i < term; i++) {
    YENUSD = xRandomNormal(95.43,14.09); 
    rate = xRandomNormal(0.0204,0.060);
    profit = asset * rate;
    asset = asset + profit + saving * YENUSD;
    $("h2").html("資産総額 "+Math.round(asset/YENUSD)+"万円");
    console.log(asset*YENUSD/10000);
    }
    if(asset/YENUSD >= 2000){
        alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
    }
    })

// button tag
// $("#aa").on("click",function(){
//     const omikuji = Math.floor(xRandomNormal(0,1)*6)
// if(omikuji === 0){
//     $("h2").html("大吉");
//     $("h2").css("color","red");
//     console.log("大吉");
//     alert("おめでとう！")
// }else if(omikuji === 1){
//     $("h2").html("中吉");
//     console.log("中吉")
// }else if(omikuji === 2){
//     $("h2").html("小吉");
//     console.log("小吉")
// }else if(omikuji === 3){
//     $("h2").html("吉");
//     console.log("吉")
// }else if(omikuji === 4){
//     $("h2").html("凶");
//     console.log("凶")
// }else if(omikuji === 5){
//     $("h2").html("大凶");
//     console.log("大凶")
// }
//     // alert(111)
// })

// // ここからコードを書きます🤗
// // alert(111);
// console.log("はじめてのジャバスクリプト")

// // Syntax errorは打ち間違いの場合に生じる
// console.log(23+5)
// console.log(2000-1800)
// console.log(18+5)

// const test = "aaaa";
// const morita = "MORITA"
// const num = 1;

// console.log(test)
// console.log(num)

// if(test === "aaaa"){
//     console.log("箱の名前はaaaaです")
// }else{
//     console.log("これはaaaaではありません")
// }

// if(morita === "MORITA"){
//     console.log("箱の中身はモリタです")
// }else{
//     console.log("これはモリタではありません")
// }

// const point = 90;
// if(point >= 80){
//     console.log("素晴らしい！おめでとう！")
// }else{
//     console.log("もっと頑張りましょう")
// }

// const random = Math.floor(Math.random()*5)
// console.log(random,"ランダムな数字")



// // button tag
// $("#aa").on("click",function(){
//     const omikuji = Math.floor(Math.random()*6)
// if(omikuji === 0){
//     $("h2").html("大吉");
//     $("h2").css("color","red");
//     console.log("大吉");
//     alert("おめでとう！")
// }else if(omikuji === 1){
//     $("h2").html("中吉");
//     console.log("中吉")
// }else if(omikuji === 2){
//     $("h2").html("小吉");
//     console.log("小吉")
// }else if(omikuji === 3){
//     $("h2").html("吉");
//     console.log("吉")
// }else if(omikuji === 4){
//     $("h2").html("凶");
//     console.log("凶")
// }else if(omikuji === 5){
//     $("h2").html("大凶");
//     console.log("大凶")
// }
//     // alert(111)
// })