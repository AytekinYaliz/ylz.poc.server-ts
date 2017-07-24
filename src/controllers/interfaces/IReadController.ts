import * as express from 'express';

interface IReadController {
    getAll: express.RequestHandler;
    getOne: express.RequestHandler;
}

export default IReadController;