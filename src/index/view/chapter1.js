/**
 *  1.2 客户端JavaScript
 */

// 如何查找和修改基本文档的内容

// 在document中的一个指定区域输出调试信息
function debug(msg) {
    var log = document.getElementById('debuglog');

    if (!log) {
        log = document.createElement('div');
        log.id = 'debuglog';
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log);
    }

    // <pre> 元素可定义预格式化的文本，被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。
    // <pre> 标签的一个常见应用就是用来表示计算机的源代码。
    var pre = document.createElement('pre');
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}

function hide(e, reflow) {
    if (reflow) {
        e.style.display = 'none';
    } else {
        e.style.visibility = 'hidden';
    }
}

function highlight(e) {
    if (!e.className) {
        e.className = 'hilite';
    } else {
        e.className += ' hilite';
    }
}

// window.onload = function () {
//     window.hideButton = hide;
//     window.debugLog = debug;
//     debug(`This is a Error:
// {
//     'item': 'value'
// }`);
// }

export default {
    hide: hide,
    debug: debug
};