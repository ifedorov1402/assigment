

function nameToRequest(req,res,next ){
    req.body = { name: "rick1212"}
    next()
}




module.exports = nameToRequest