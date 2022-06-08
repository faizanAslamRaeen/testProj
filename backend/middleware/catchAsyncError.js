module.exports = theFunc =>(req,res,next)=>{
  Promise.resolve(theFunc(req,res,next)).catch((next))
}

  // FOR BEST PARACTICE
// trycatch error above 
// because we use async await 
// then we must be use 
// try catch 