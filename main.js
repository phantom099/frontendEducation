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
newelm.innerText = "lorem ipsum";


main_form.onsubmit = (e) => {
    e.preventDefault();
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

