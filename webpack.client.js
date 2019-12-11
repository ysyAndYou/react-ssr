const path = require('path');
const nodeExternals = require('webpack-node-externals')
module.exports={
    mode:"development",
    //客户端入口
    entry:'./client/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    persets:['@babel/perset-react',['@babel/perset-env']]
                }
            }
        ]
    }
}