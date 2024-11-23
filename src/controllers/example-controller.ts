import { Request, Response } from "express";
import { exampleData } from "../models/exemple-model";

export const exampleController = (req: Request, res: Response) => {
  res.json({
    message: "Hello, World!",
    data: exampleData,
  });
};
