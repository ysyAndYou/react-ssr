//模拟接口
const express = require('express')
const app = express()

app.get('/api/course/list',(req,res)=>{
    //支持跨域
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header('Content-Type','application/json;charset=utf-8')
    res.json({
        code:0,
        list:[
            {name:"web全栈架构师",id:1},
            {name:"前端进阶课程",id:2},
            {name:"javascript高级课程",id:3},
            {name:"python高级课程",id:4},
            {name:"java高级课程",id:5}
        ]
    })
})

app.listen("9092",()=>{
  console.log("mock服务启动完成...");
})