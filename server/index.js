//这里是node的代码。会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
    //const Page = <App title="learn01,ssr环境配置~"></App>;
    const content = renderToString(App);
    res.send(`
     <html>
       <meta charset="utf-8"/>
       <title>react ssr</title>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
     </html>
    `)
})
app.listen("8082",()=>{
    console.log("监听结束...");
})