import { Request, Response, NextFunction } from 'express'

import ErrorHandler from '../helpers/errorHandler.helper'

const defaultErrorMiddleware = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong'
    res
        .status(status)
        .json({
            status,
            message
        })
}

export default defaultErrorMiddleware