let base = document.getElementById("calc");
let all = base.getElementsByTagName("button");
for(let i=0;i<all.length;i++){
    all[i].onclick = () => {
        document.getElementById("pb").value += all[i].innerText;
    }
}
document.getElementById("au").onclick = ()=>{
    let res = document.getElementById("pb").value;
    document.getElementById("pb").value = eval(res);
}
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomColor);
let newelm = document.createElement("div");
newelm.id = "newdiv";
document.getElementById("calc").appendChild(newelm);
newelm.style = "background-color:"+randomColor+";height:100px;width:171px;color:white;border-radius: 20px;text-align:center";
newelm.innerText = "заходит улитка в бар.";

main_form.onsubmit = (event) => {
    event.preventDefault();
    let userData = new FormData(main_form);
    let obj = {
        name: userData.get("name"),
        pass: userData.get("password"),
        repass: userData.get("repass"),
        sex: userData.get("state")
    };
    if (obj.pass != obj.repass) { 
        alert ("no match password");
    }
    console.log(obj);
}
function greet() {
    return String.fromCharCode(104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33);
}
console.log(greet());
 function getAge(age) {
   
    if(age<0||age>122){
        return alert('точно клоун');
    }
    if (age<18){
        return alert('рано тебе сюда');
    }
    if(age>=18&&age<70){
        return alert(String.fromCharCode(87,101,108,99,111,109,101));
    } 
    
    
    if (age>=70){
        return alert('нечем на пенсии заняться?');
    }
     else {
        return alert('клоун!!!');
    
 }
}
 age= prompt('введи свой возраст');
getAge(age);