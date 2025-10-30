export const errorHandler = (error, req, res, next)=>{

    const statusCode = res.statusCode ? res.statusCode : 500
    res.statusCode(statusCode)

    res.js({
        message: error.message,
        stack: process.env.Mode == 'producction' ? null: error.stack
    })
}