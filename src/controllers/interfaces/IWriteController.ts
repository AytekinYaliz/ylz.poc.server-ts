import * as express from 'express';

interface IWriteController {
    post: express.RequestHandler;
    put: express.RequestHandler;
    delete: express.RequestHandler;
}

export default IWriteController;