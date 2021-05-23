let startTime = null;//startTime変数
let displayArea = document.getElementById('display-area');
function start(){
    startTime = Date.now();//上で用意した変数startTimeへ現在時刻のミリ秒を代入
    document.body.onkeydown = stop;//何かキーが押された時、onkeydown関数を実行してくれる
                                   //関数を上書きして、定義した処理が行われるようにした
                                   //ここでのstopは、関数ではなく、ただの値を代入している
                                   //関数という値をonkeydownに代入
    document.body.touchstart = stop;
}
function stop() {
    let currentTime = Date.now();
    let seconds = (currentTime - startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
        displayArea.innerText = `${seconds}秒でした！おめでとう！！
        *･゜ﾟ･*:.｡..｡.:*･'v(*ﾟ▽ﾟ*)v'･*:.｡. .｡.:*･゜ﾟ･*`;
    }else{
        displayArea.innerText = `${seconds}秒でした！
        (*>ω<)惜しい！ `;
    }
  document.body.onkeydown = null;
}
if(confirm('OKを押して10秒経ったと思ったら何かキーを押してください。')){
　　　　　//confirm関数は、戻り値が意味を持ち、OKを押されるとtrue、キャンセルが押されると
        //falseが返る
  start();
}
//表示エリアをもう一つ作ったら秒数表示させられる  setInterval(stop,50);


/* document.body.onkeydown = stop;の説明
 function square (n){
    return n*n;
      }
    //square関数
    > square(5);//関数名()で関数を実行
    < 25
    > square//これだけでは、
    < function square(n){
    return n*n;
      }
    //関数の実行ではなく、値としてのsquareを参照するだけ
    //なので、何にでも代入ができる
    > let abc = square;
    < undefined
    > abc(6);
    < 36                   

つまり、document.body.onkeydown = function (){};
無名関数を代入 関数を宣言 使い回ししない場合はそれでもok
    
    
    */
//View In Browserというアドオン
