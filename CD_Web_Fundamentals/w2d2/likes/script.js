// First Like Button

var countArr = [0,0,0];

var countElement1 = document.querySelector("#likes-counter1");
console.log(countElement1);

function add1()
{
    countArr[0]++;
    countElement1.innerText = countArr[0] + " Like(s)";
    console.log(countArr[0]);
}


// Second Like Button

var count2 = countArr[1];
var countElement2 = document.querySelector("#likes-counter2");
console.log(countElement2);

function add2()
{
    count2++;
    countElement2.innerText = count2 + " Like(s)";
    console.log(count2);
}


// Third Like Button

var count3 = countArr[2];
var countElement3 = document.querySelector("#likes-counter3");
console.log(countElement3);

function add3()
{
    count3++;
    countElement3.innerText = count3 + " Like(s)";
    console.log(count3);
}