const div1 = document.createElement("div1");
div1.innerHTML = "1";
const div2 = document.createElement("div2");
div2.innerHTML = "2";
const div3 = document.createElement("div3");
div3.innerHTML = "3";
const div4 = document.createElement("div4");
div4.innerHTML = "4";

//路由表
const routeTable = {
    "1":div1,
    "2":div2,
    "3":div3,
    "4":div4
};


function route() {
    console.log(window.location)
    //获取用户想去哪里
    let number = window.location.hash.substr(1);
    let app = document.querySelector("#app")

    //如果刚开始能获得路由，就获取，如果没有就默认是1
    //默认路由
    number = number || 1

    //获取用户界面
    let div = routeTable[number.toString];

    if (!div) {
        div = document.querySelector("#div404")
    }
    div.style.display = "block";

    // if (app.children.length > 0) {
    //     app.children[0].style.display = "none";
    //     console.log(app.children.length);
    //     //这里把获取到的在app里面的内容重新获取到塞回到body里，
    //     document.body.appendChild(app.children[0])
    // }

    //设置了app里的HTML的div标签为空，这样就省略了判断这一步，直接设置为空，反正都是创建div
    app.innerHTML = "";
    app.appendChild(div);

}
route()

//检测，如果网址后面的地址变化了，就监听它，并执行定义的函数
window.addEventListener("hashchange", () => {
    console.log("hash 变了");
    route();

})