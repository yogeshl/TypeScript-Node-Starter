"use strict";
import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */
export let getApi = (req: Request, res: Response) => {
  res.send("hello world");
};

export let getApi1 = (req: Request, res: Response) => {
  res.send("hello world1");
};
