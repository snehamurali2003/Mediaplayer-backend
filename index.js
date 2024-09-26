const JSONServer =require ('json-server')
const MPSServer =JSONServer.create()
const router =JSONServer.router('db.json')
const middleware = JSONServer.defaults()

const PORT = 3000 || process.env.PORT

MPSServer.use(middleware)
MPSServer.use(router)

MPSServer.listen(PORT,()=>{
    console.log(`media player server running at PORT:${PORT}  & the client is waiting for the client request....`);
    
})