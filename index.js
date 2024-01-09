const jsonServer = require('json-server')
const docServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware =jsonServer.defaults()

const port=4000
docServer.use(middleware)

docServer.use(router)

docServer.listen(port,()=>{
    console.log("docServer is listening........."+port);
})
 

