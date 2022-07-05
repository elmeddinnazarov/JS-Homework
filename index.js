/* let count = 0
console.log("5 saniye sonra bu program bağlanacaq!");
function timeMachine() {
    const myTimeOut=setTimeout(timeMachine, 1000)
    count++
    console.log(count);

    function stop(){
        if (count===5) {
            console.log("5 saniye bitti!");
            clearTimeout(myTimeOut)
        }
    }
    stop()
}
timeMachine()

 */

/* 
let count = 101
console.log("100 Saniye vaxt başladı!");
function timeMachine() {
    const myTimeOut=setTimeout(timeMachine, 1000)
    count--
    console.log(count);

    function stop(){
        if (count===0) {
            console.log("Geri Sayım Bitti");
            clearTimeout(myTimeOut)
        }
    }
    stop()
}
timeMachine()

 */


/* 
let st = true

while (st) {
    const input = prompt("Yuvarlaqlaşdırmaq istediyin reqemi yaz!");
    let rounderedNumber = Math.round(input)
    alert(rounderedNumber)
    if (input == 0) {
        st = false
    }
}

 */


/* function random(){
    let randomNumer =Math.floor(Math.random() * (10 - 1)) 
    console.log(randomNumer);
}
random()

 */

/* 
function currentDate() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let crntDate = `${day}-${month}-${year}`;
    let crntTime = `${hour}:${minute}:${second}`;


    console.log("Tarix: "+crntDate);
    console.log("Vaxt: "+crntTime);

}

currentDate()
 */

/* 
const weekDays=["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
const d1 = new Date();
const d2 = new Date("June 4, 2023");

let day1 = d1.getDay();
let day2 = d2.getDay();

console.log("Bu gün: "+weekDays[day1]);
console.log("Gelen il bu gün: "+weekDays[day2]);
 */

/* 
let st = true
alert("Bu programda 2 eded daxil edeceksiniz! ilk daxil etdiyiniz eded (x), ikinci daxil etdiyiniz eded (y). Program x üstü y'ni hesablayacaq. Hazır olduğunuzda 'Tamam' düymesine basın.")
while (st) {
    let x = prompt("x'i Daxil edin!");
    let y = prompt("y'ni Daxil edin!");
    let n1 = parseInt(x)
    let n2 = parseInt(y)
    let netice = Math.pow(n1, n2);
    st = false
    alert("Netice: " + netice);
}

 */
/* 
function hesab(){
    alert("Bu programda daxil etdiyiniz 2 eded aralığında olan ededlerin 3'e ve 5'e tam bölünenlerini ekranda gösterecek!");
    let x = prompt("Alt limiti daxil edin!");
    let y = prompt("Üst limiti daxil edin!");
    let n1 = parseInt(x)
    let n2 = parseInt(y)
    let netice=[]
    for (let i = x; i <= y; i++) {
        if (i%3==0 && i%5==0){
            netice.push(i)
        }        
    }
    alert(netice)
}

hesab()
 */


/* 
const numbers=[12,32,43,65,76,21,654,76,98,1,43,456,765,356,23,57,54,867,45,784,343,43242]

function tap(){
    let count=0
    for (const i in numbers) {
        if (i>numbers[count]) {
            console.log(i);
        }

        
    }
}
tap() */