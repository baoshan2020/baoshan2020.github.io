// function init() {

// var div=document.getElementsByClassName('div')[1];
// var div=document.getElementsByTagName('div')[0];
// var div22=document.getElementsByTagName("body")[0];
// console.log(div22);
//     var id=document.getElementById("main");
// console.log(id);
//     let body=document.body;
//     console.log(1);
//     console.log(body);
//     console.log(12);
// }
// init();
function Mine(tr, td, mineNum) {
    this.tr = tr;
    this.td = td;
    this.mineNum = mineNum; //雷的数量
    this.squares = []; // 存储方块的信息
    this.tds = []; // 存储所有单元格的DOM
    this.surplusMine = mineNum; //剩余雷的数量
    this.allRight = false; //是否全是雷
    this.parent = document.getElementsByClassName('gameBox')[0];

    // getElementsByClassName('mineNum')[0].innerHTML=mineNum; //剩余雷的数量DOM
    var mineNumDom = document.getElementsByClassName('mineNum')[0];
    mineNumDom.innerHTML = this.mineNum;

    // console.log(this.parent);
}

//初始化 雷
Mine.prototype.init = function () {

    this.createDom();

    // this.randomNum(); //创建随机生成数
    // console.log(this.randomNum()); //输出随机生成数
    var rn = this.randomNum(); // 雷给格子的位置
    var n = 0; //用来找到对应格子索引
    for (i = 0; i < this.tr; i++) {
        this.squares[i] = [];
        for (j = 0; j < this.td; j++) {
            n++;
            //去一个方块。用行和列     行和列于x,y轴相仿
            if (rn.indexOf(n) != -1) {
                //   条件生成说明，现在循环到的是雷
                this.squares[i][j] = {
                    type: 'mine',
                    x: j,
                    y: i
                };
            } else {
                this.squares[i][j] = {
                    type: 'number',
                    x: j,
                    y: i,
                    value: 0
                };
            }

        }
    }

    // console.log(this.squares);

    this.updateNum();


    //阻止右键点击
    this.parent.oncontextmenu = function () {
        return false;
    }


};



//生成n个不重复的数字
Mine.prototype.randomNum = function () {
    var square = new Array(this.tr * this.td); //生成一个空数组  长度为空数组的总数
    for (var i = 0; i < square.length; i++) {
        square[i] = i;
    }
    square.sort(function () {
        return 0.5 - Math.random()
    });
    // console.log(square);
    return square.slice(0, this.mineNum);

};

//创建表格
Mine.prototype.createDom = function () {
    var This = this;
    var table = document.createElement('table');

    for (var i = 0; i < this.tr; i++) {

        var domTr = document.createElement('tr');
        this.tds[i] = []; //创建行的时候
        for (var j = 0; j < this.td; j++) {
            var domTd = document.createElement('td');
            // console.log(j);



            domTd.pos = [i, j];
            domTd.onmousedown = function () {
                // console.log(Event);
                // console.log(event);
                // this.innerHtml='1';
                // console.log(this);

                This.play(event, this); //这个this 指的是点击的td
            };


            this.tds[i][j] = domTd; // 把所有创建的td 添加到数字当中


            // domTd.innerHTML=[j];//显示数字



            //显示数字
            // if (this.squares[i][j].type == 'mine') {
            //     domTd.className = 'mine';
            // }
            // if (this.squares[i][j].type == 'number') {
            //     domTd.innerHTML = this.squares[i][j].value;
            // }

            //阻止邮件点击

            domTr.appendChild(domTd);

        }
        table.appendChild(domTr);

    }
    this.parent.innerHTML = ''; //清控上次创建的
    this.parent.appendChild(table);



};

//找格子周围的所有格子
Mine.prototype.getArund = function (square) {
    var x = square.x;
    var y = square.y;
    var result = []; //把找到的格子的坐标返回

    // 通过坐标循环9宫格
    for (var i = x - 1; i <= x + 1; i++) {
        for (var j = y - 1; j <= y + 1; j++) {

            if (i < 0 || // 超出左边的范围
                j < 0 || // 超出右边的范围
                i > this.td - 1 ||
                j > this.tr - 1 ||
                (i == x && j == y) || //格子自己
                this.squares[j][i].type == 'mine') //雷
            {

                continue; //跳出循环}
            }
            // var t=this.squares[j][i].type;
            // console.log(t);
            result.push([j, i]); //要返回行和列的关系
        }
    }

    return result;

};

// 更新正确的数字
Mine.prototype.updateNum = function () {
    for (i = 0; i < this.tr; i++) {
        for (j = 0; j < this.td; j++) {
            // 更新雷周围的数字
            if (this.squares[i][j].type == 'number') {
                continue;
            }
            // 获取雷周围的数字
            var num = this.getArund(this.squares[i][j]); //获取每一个雷周围的数字

            for (var k = 0; k < num.length; k++) {

                this.squares[num[k][0]][num[k][1]].value += 1;
                // console.log(this.squares);  
            }




        }
    }

    // console.log(mine.squares)
};



Mine.prototype.play = function (ev, obj) {
        This = this;
        var obj = obj;
        // var obj=obj;
        if (ev.which == 1  && obj.className!='flag') //座机或者点击的  当前单元格的class name=obj;
        
        {
            console.log(obj);
            // console.log('点击左键');

            var curSquare = this.squares[obj.pos[0]][obj.pos[1]];
            // console.log(this.squares[obj.pos[0]][obj.pos[1]]);
            var cl = ['zero', 'one', 'two', 'three', 'four'];

            if (curSquare.type == 'number') {



                // console.log(curSquare.value);
                // console.log(curSquare);

                //要记住HTML一定要大写
                obj.innerHTML = curSquare.value;
                // console.log('您点到数字');
                obj.className = cl[curSquare.value];


                // console.log(shuzi);

                // console.log(obj);
                // obj.innerHtml='1';


                if (curSquare.value == 0) {
                    obj.innerHTML = '';

                    function getAllZero(square) {
                        var around = This.getArund(square); //找到了周围n个格子
                        for (var i = 0; i < around.length; i++) {
                            var x = around[i][0]; //行
                            var y = around[i][1]; //列
                            This.tds[x][y].className = cl[This.squares[x][y].value];
                            if (This.squares[x][y].value == 0) {
                                if (!This.tds[x][y].check) {
                                    This.tds[x][y].check = true;
                                    getAllZero(This.squares[x][y]);
                                }


                            } else {
                                This.tds[x][y].innerHTML = This.squares[x][y].value;
                            }

                        }
                    }

                    getAllZero(curSquare);

                }



            } else {
                // alert('若溪输了');

                // setInterval( 1000); 
                // setTimeote(alert('若溪输了'), 1000); 

                this.gameOver(obj);

                // console.log(obj);


                // obj.className = 'mineRed';
                // console.log('点到雷  设置背景为红色');
                // if (this.allRight) {
                //     alert('成功');
                // } else {
                    alert('失败');
                    //？

                // }

                }

            }



//右键
            if (ev.which == 3) {

                if (obj.className && obj.className != 'flag') {

                    return
                }
                // 三木运算切换小红旗
                obj.className = obj.className == 'flag' ? '' : 'flag';

                // 运算剩余雷数
                var mineNumDom = document.getElementsByClassName('mineNum')[0];
                if (obj.className == 'flag') {
                    mineNumDom.innerHTML = --this.surplusMine;;

                } else {
                    mineNumDom.innerHTML = ++this.surplusMine;
                }





                // 判定标记的是否正确
                if (this.squares[obj.pos[0]][obj.pos[1]].type == 'mine') {
                    this.allRight = true;
                }
                else {
                    this.allRight = false;
                }


                // 如果剩余雷，等于0 游戏结束
                if (this.surplusMine == 0) { //剩余雷为0或者点击到雷
                    if (this.allRight) {
                        alert('成功');
                    } else {
                        alert('失败');
                        this.gameOver();
                    }

                }
                





                //         var mineNumDom=document.getElementsByClassName('mineNum')[0];

                // // 判定是否为flag
                //         if(obj.className!='flag'){

                //             // console.log(this.surplusMine);
                // // 判定 flag的数量
                //        if(this.surplusMine>1){
                //         obj.className='flag';
                //         mineNumDom.innerHTML=--this.surplusMine;

                //        }
                //         //flag 等于1 自动结算
                // else if(this.surplusMine==1){obj.className='flag'; mineNumDom.innerHTML=--this.surplusMine; 




                // for(var i=0;i<=this.tr;i++){
                //     for(var j=0;j<=this.td;j++){

                //     }

                // }






                // }

                //     //    else{

                //     //     console.log(1);


                //     //    }


                //     }


                // else    {
                //         obj.className=''; 
                //         mineNumDom.innerHTML=++this.surplusMine;
                //       }



                // this.surplusMine--;

                //   var mineNum=--this.surplusMine;

                // if(this.surplusMine<0){
                //     alert(' ');
                //     // continue;
                //  }
                // console.log(this.surplusMine);
            }

            // console.log('右键点击');


        };



        Mine.prototype.gameOver = function (chickTD) {

            for (var i = 0; i < this.tr; i++) {
                for (var j = 0; j < this.td; j++) {


                    if (this.squares[i][j].type == 'mine') {
                        // console.log(1);
                        this.tds[i][j].className = 'mine'
                    }
                    // console.log(this.squares[i][j].type);
                    // console.log(this.tds[i][j].type);
                    // console.log(this.squares[i][j].type);
                    // if(this.squares[i][j].type='mine' ){
                    //     this.squares[i][j].className='mine';
                    // } 

                    this.tds[i][j].onmousedown = null; //不让单击
                }
            }
            if (chickTD) {
                chickTD.style.backgroundColor = 'red';
            }

        }


        // console.log(mine.getArund(mine.squares[0][0]));

        //     cj();
        //     function cj(){ xx(10,10,2);}
        //     function zj(){xx(50,50,200);}
        //     function gj(){xx(70,70,4900);}
        //     function reset(){ var x=Mine.x;
        //         var y=Mine.y;
        //         var d=Mine.d;
        //          xx(x,y,d);}

        //         function xx(x,y,d){
        //             var table=document.getElementsByTagName('table')[0];
        // // console.log(table);
        //             if (table === undefined){  
        //                 // console.log(1);

        //             } else{
        //                 // console.log(1);
        //                 table.remove();  //删除自身元素
        // // parentNode.removeChild(table);
        //             }
        //             // console.log(table);
        //             // removeChild(table[0]);
        //             // table.removeChild(table.parent);
        //             // parent.removeChild(table);
        //             var mine = new Mine(x, y, d)
        //             mine.init();
        //         }

    


        var btns = document.getElementsByTagName('button');
        var mine = null;
        var ln = 0;
        var arr = [
            [9, 9, 10],
            [16, 16, 40],
            [70, 70, 4900]
        ];
        for (let i = 0; i < btns.length - 1; i++) {
            // btns[ln].class='';

            btns[i].onclick = function () {
                // console.log(ln);
                btns[ln].className = '';
                // console.log(btns[ln].class);
                // console.log(i);
                // console.log(this.className);
                this.className = 'active';
                main = new Mine(...arr[i]);
                main.init();
                ln = i;
            }
        }
        //默认初始值
        btns[0].onclick();
        btns[3].onclick = function () {main.init(); }

