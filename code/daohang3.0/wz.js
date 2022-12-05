/* <script src="../jquery-3.6.0.js"> </script> */
//  <script src="../jquery-3.6.0.js" type="text/javascript" charset="utf-8"></script>
// <!-- 加载json文件 -->
window.onload = function () {

    init();
  
   }

function init(){
    loadDoc();
}


       
     /*   
        
function getXhr() {
    var Xhr = null;
    // 解决兼容问题
    if (window.XMLHttpRequest) { xhr = new XMLHttpRequest(); }
    else { xhr = new ActiveXObject("Microsoft.XMLHttpRequest()"); }
    return Xhr;
}
function getAjax(url, fn) {
    var xhr = getXhr();
    // 注册于监听
// readyState（状态值）
// 0：请求初始化
// 1：服务器连接已建议
// 2：请求接受
// 3：请求处理
// 4：请求已完成，且响应已就绪
// Status 状态
// 200： “ok”
// 304： 文件未改变，页面缓存
// 404：页面未找到
// 500：后台的问题
xhr.readystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

        var datajson = eval("(" + xhr.response.Text + ")");
        fn(datajson);
    }
}
// 建立连接
xhr.open("get", url, true);
//   发送数据；      
xhr.send(null);
// xhr.send({"name":"one","age":23});

// }

getAjax("./data.json", function (data) { alert(1); console.log(data); });

*/




function loadDoc() {


    var xhttp;
    if (window.XMLHttpRequest) { xhttp = new XMLHttpRequest(); } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }



    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsoncountent = eval("(" + xhttp.responseText + ")");

            content(jsoncountent);

         
          
            // for (var i = 0; i < gs.length; i++) {

            //     var Gongs = gs[i].name;
            //     var Search = document.getElementById("Search").value;
            //     if (Gongs.indexOf(Search) != -1) {
            //         // 运行选择和颜色变动，双击赋值到input
            //         // console.log(Gongs);
                   
            //         var liNeirong = document.createElement("li");
            //         var ulNeirong = document.getElementById('ulNeirong')
            //         liNeirong.innerHTML = Gongs;
            //         ulNeirong.appendChild(liNeirong);
            //         // 添加背景颜色，不让其他文字覆盖
            //         liNeirong.style.background = "white"; 

            //     }

                

            // }

            
        }

    };

    xhttp.open("GET", "./data.json", true);

    xhttp.send(null);


   
}

function content(jsoncountent){

   
var wz=jsoncountent;

//历变对象 大类
var dalei=[];
Object.keys(wz).forEach((key, index) => {
dalei.push(key);

// l(wz);
// l(wz[key][0].name);
    // mingxi(wz[key]);
  })


//插入左侧连接大类
//main-left-tail
function tail(){
var tail=document.getElementsByClassName('main-left')[0];
//创建UL
var ul=document.createElement('ul');
//插入LI
var li=''
for(var i=0; i<dalei.length;i++){
/*


var li=document.createElement('li');
li.innerHTML=dalei[i];
//添加class
li.className=[i];
//添加单击事件
li.onclick=function(){tab(this);}
// console.log(li);
ul.appendChild(li);
document.getElementsByClassName('main-left')[0].appendChild(ul);

*/
li="<li list="+[i]+' '+"onclick= tab("+[i]+") >"+dalei[i]+"</li>";
// l(li);
ul.innerHTML+=li;
}

//把ul插入到指定的div里
document.getElementsByClassName('main-left')[0].appendChild(ul);
}
//执行
tail();








//content 主要内容插入
function content(){
    // console.log(wz.连接[0]);
    // console.log(wz.连接[0].name);

    //要记录// wz.连接[0].name   普通
  //  如果是变量，添加括号  wz[li][0].name
    
    // var ul=document.getElementsByTagName[0];
    // 获取有ul
    var ul=document.getElementsByClassName('main-left')[0].getElementsByTagName('ul')[0]
    var li=ul.getElementsByTagName('li');
    // l(ul);
// l(ul.li[0].);
    // [0].innerHTML
// var zhi=li;
// console.log(zhi);
//   console.log(wz.zhi[0]);
//   console.log(wz[li][0].name);
//   console.log(wz.[li[0]][0].name);
// 插入网址
// l(li.length);
//list 子项
var listsub='';

var content=document.getElementById('content');
  for(i=0;i<li.length;i++){
var liUrl=li[i].innerHTML;
listsub=[i];

// l(liUrl);
// var name=wz[liurl][i].name;
// l(name);
var URL=wz[liUrl];
var image='';
// 添加content的list
for(j=0;j<URL.length;j++){
    // l(URL[j].name)
    // l(URL[j].URL)
if(URL[j].ico){

   // <div class=ico style="background-image:url(./img/sougou.png)"></div>
    ico='<div class=ico style="'+'background-image:url(./img/'+URL[j].ico+')"></div>'}else{
    }
// l(ico);

    var a="<div class='content-wz' list="+listsub+"><a href="+URL[j].URL+"> "+ico+URL[j].name+" </a> </div> ";
l(a);
    content.innerHTML+=a;

}
  
}
}
content();



}



//引用

  //点击菜单执行函数
  function tab(param) {

   //清空颜色
    var liclear=document.getElementsByClassName('liactive')[0];
    // l(liclear);
    if(liclear){liclear.className='';}


//设置活动更新颜色
    var ul=document.getElementsByClassName('main-left')[0].getElementsByTagName('ul')[0]
    var li=ul.getElementsByTagName('li');
    li[param].className='liactive';

  //获取content下的span
var aUrl=document.getElementById('content').getElementsByTagName('div');

//历边list 需要显示还是隐藏
for(i=0;i<aUrl.length;i++){

    //获取list值
 var listZhi= aUrl[i].getAttribute('list')
 //如果list值和param) 大类值相同显示，不等 隐藏
if(listZhi==param){
    //隐藏
    aUrl[i].style.display="none";

}else{
    //显示
    aUrl[i].style.display="inline";
}


}



  }

