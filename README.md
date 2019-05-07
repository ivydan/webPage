/*
 * @Author: JuDandan 
 * @Date: 2019-04-23 14:56:10 
 * @Last Modified by: BG311401
 * @Last Modified time: 2019-04-24 15:59:58
 */

# js

webpack: 4.30.0

#核心概念：entry、output、loader、plugins
#使用loader有三种方式：配置、内联（在每个import语句中显示指定loader）、CLI（在shell命令中指定他们）
#内联: 可以在 import 语句或任何等效于 "import" 的方式中指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。 import Styles from 'style-loader!css-loader?modules!./styles.css';
#CLI: webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

#ERROR in The "path" argument must be of type string. Received type undefined
#html-webpack-plugin 版本过低导致


#React 别成为“用来创建用户界面的JavaScript库”

#三大特点

1.react的一切都是基于组件的 
2.JSX 
3.Virtual DOM
