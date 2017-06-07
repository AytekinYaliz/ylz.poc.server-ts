import {Router} from "express";

interface IController {
    router: Router;
    baseUrl: string;
    endPointUrl: string;

    setRoutes(): void;
}

export default IController;
