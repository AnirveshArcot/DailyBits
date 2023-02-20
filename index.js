function navBar(a){
    console.log(1);
    var dataPassed= a;
    localStorage.setItem("storageName",dataPassed);
    window.open("./index.html");
    window.close();
}


function searchButton(){
    console.log(1);
    var dataPassed= document.forms["searchForm"]["searchh"].value;
    localStorage.setItem("storageName",dataPassed);
    window.open("./index.html");
    window.close();
}



var myData = localStorage['storageName'];
localStorage.removeItem('storageName');
var searchQuery =myData;
console.log(0);
let a=0;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
let dateq=dd+'-'+mm+'-'+yyyy;
let apiKey='00e337ab4e5c43d99fb17167c3fb754f';

let finQuery=searchQuery+' english'; // post language modifier
let newsAccoridion = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/everything?q=${finQuery}&from=${dateq}&sortBy=publishedAt&apiKey=${apiKey}`,true);
xhr.onload = function(){
    if(this.status==200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml="";
        let a=1;
        articles.forEach(function(element){
        document.getElementById("para"+a+"span").innerHTML=`${element["content"]}`;
        document.getElementById("n"+a).src=`${element["urlToImage"]}`;
        document.getElementById("link"+a).href=`${element["url"]}`;
        a++;
        })
        
        
    }
    else{
        console.log("Some error has occured")
    }
}

xhr.send()