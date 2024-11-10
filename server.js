const http = require('http');
const roundRobin = require('./roundRobin');
const leastConnections = require('./leastConnections');
const serverConfig = require("./config.json").servers

const servers= serverConfig.map(server => ({
        ...server,
        connections:0
}))

const loadBalancingAlgorithm = 'leastConnections'

const server = http.createServer((req,res) =>{
    if(loadBalancingAlgorithm==='roundRobin'){
        roundRobin(servers,req,res)
    }
    else if(loadBalancingAlgorithm==='leastConnections'){
        leastConnections(servers,req,res)
    }
    else{
        res.writeHead(500)
        res.end('Load balancing algorithm is not supported.')
    }
})

server.listen(3000,()=>{
    console.log('Load balancer running on port 3000')
})