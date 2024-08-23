
import { Router } from "express";
import { home } from "../controllers/homeController.js"

const rotas = new Router();

rotas
    .get("/userHome", home)
    ;

export { rotas };
