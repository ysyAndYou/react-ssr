//这里是node的代码。会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'
import {StaticRouter} from 'react-router-dom'
import {Provider} from "react-redux"
import store from '../src/store/store'

const app = express();
app.use(express.static('public'));
app.get('*',(req,res)=>{
    //把react组件，解析成html
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
              {App}
        </StaticRouter>
      </Provider>
      
    );
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