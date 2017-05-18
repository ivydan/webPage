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
// var promiseStart = new Promise(function(resolve, reject){
//     console.log("PromiseStart");
//     resolve();
// });

// promiseStart.then(function(){
//     console.log('Resolved!');
// });

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
//用于发出针对json的HTTP请求，并且返回一个promise对象
// getJOSN("./Promise.json").then(function(json){
//     console.log("Conents:"+json);
// },function(error){
//     console.log('ErrorText:', error)
// })

//
// var p1 = new Promise(function(resolve, reject){
//     setTimeout(()=>reject(new Error('fail')),3000)
// });

// var p2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("p2 is ready!");
//         resolve(p1)
//     },1000)
// });

// p2.then((result) => {
//     console.log('result:',result)
// })
// .catch((error) => {
//     console.log('Error P2：', error)
// });

//Promise.prototype.then()
//promise实例具有then方法，也就是说then方法是定义在原型对象上，
//then方法的第一个参数是Resolved状态的回调函数，第二个参数是Rejected状态的回调函数
//then方法返回的是一个新的Promise实例，因此可以采用链式写法，即then方法后面再调用另一个then方法。
// getJOSN("/Promise.json").then(function(json){
//     return json.data;
// }).then(function(post){
//     console.log('data:', post)
// }) //上面的then方法，依次指定了两个回调函数，第一个回调函数完成以后，会将返回结果作为参数， 传入第二个回调函数

//采用箭头函数让代码更简洁
// getJOSN("/post.json").then(
//     post => getJOSN(post.commentURL)
// ).then(
//     comments => console.log("resolved:", comments),
//     err => console.log("Rejected: ", err)
// )

//Promise.prototype.catch()
//是.then()方法的别名， 用于指定发生错误时的回调函数
// getJOSN("/post.json").then(function(post){

// }).catch(function(error){
//     console.log("Error:", error);
// })

//一般来说， 不要在then方法里面定义Reject状态的回调函数，总是使用catch
//Good
promise.then(function(data){
    //success
}).catch(function(err){
    //error
})//理由是使用catch捕获，更接近同步的try、catch的写法。
//和传统的try/catch 不同的是，如果没有使用catch方法指定错误处理回调函数， Promise对象抛出的错误不会传递到外层代码。即不会有任何反应。


var promiseA = new Promise(function(resolve, reject){
    //resolve("ok");
    throw new Error('test')
});
// promiseA.then(function(value){
//     console.log('promiseA' , value)
// })
// .catch(function(err){
//     console.log('-----------', err)
// })

//node 有个unhandleRejection事件，专门监听为捕获的reject错误
process.on('unhandleRejection', function(err, p){
    console.log('ERR:',err.stack)
})

//Promise.all() 方法用于将多个Promise实例，包装成一个新的Promise实例
var p = Promise.all([p1, p2, p3]);
//p1, p2, p3都是Promise对象的实例如果不是就会先调用Promise.resolved方法转换成Promise实例，再进一步处理。
//Promise.all方法参数可不是数组，但是必须是具备Iterator接口， 且返回的每个成员都是Promise实例。





console.info("complete");


