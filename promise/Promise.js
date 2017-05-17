console.log('start');

var promise = new Promise(function(resolve, reject){
    if(true){
        //resolve函数的作用：将Promise对象的状态从“未完成” 变为“成功”。
        //在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
        resolve(value);
    }else{
        //reject函数的作用：将Promise对象的状态从“未完成” 变为“失败”。
        //在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
        reject(error);
    }
});

//Promise实例生成之后，可以用then方法分别指定Resolved状态和Reject状态的回调函数
promise.then(function(value){
    // success
},function(error){
    // failure
})

//Promise对象的简单例子
// function timeout(ms){
//     return new Promise((resolve, reject) =>{
//         setTimeout(resolve, ms, 'done');
//     })
// }

// timeout(100).then((value)=>{
//     console.log(value);
// });

//Promise 新建后就会立即执行
var promiseStart = new Promise(function(resolve, reject){
    console.log("PromiseStart");
    resolve();
});

promiseStart.then(function(){
    console.log('Resolved!');
});

//异步加载图片的例子
function loadImageAsync(url){
    return new Promise(function(resolve, reject){
        var image = new Image();
        image.onload = function(){
            resolve(image);
        }
        image.onerror = function(){
            reject(new Error("Could not load image at " + url));
        }
        image.src = url;
    })
}

//用Promise对象实现的Ajax操作的例子
var getJOSN = function(url){
    var promiseAjax = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept","application/json");
        client.send();
        function handler(){
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
    });
    return promiseAjax;
}

getJOSN("./Promise.json").then(function(json){
    console.log("Conents:"+json);
},function(error){
    console.log('ErrorText:', error)
})

console.info("complete");


