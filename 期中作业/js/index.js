// JavaScript Document
//屏幕滑动超过20px，出现按钮
window.onscroll=function(){scrollBtn()}
function scrollBtn(){
    if(document.body.scrollTop>180||document.documentElement.scrollTop>180)
    {
        document.getElementById("myBtn").style.display="block";
    }
    else
    {
        document.getElementById("myBtn").style.display="none";
    }
}
function toTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
}
function toShow(){
    document.body.scrollTop=300;
    document.documentElement.scrollTop=300
}
function Reg(){
    document.getElementById('reg').style.display='block';
    document.getElementById('reg').style.zIndex=999
}
function Noreg(){
    document.getElementById('reg').style.display='none';
    document.getElementById('reg').style.zIndex=0;
    ResetReg()
}
function ResetReg(){
    document.getElementById('zhanghao').value="";
    document.getElementById('mima').value=""
}
function RegTip(){
    window.alert("功能暂未实现，请谅解！");
    document.getElementById('zhanghao').value="";
    document.getElementById('mima').value=""
}
function ResetLog(){
    window.alert("功能暂未实现，请谅解！")
    document.getElementById('name').value="";
    document.getElementById('password').value=""
}
function SeaTip(){
    window.alert("功能暂未实现，请谅解！");
    document.getElementById("searchtext").value=""
}