import { Request, Response } from 'express';

export const getAllProducts = (_req: Request, res: Response) => {
  // Demo: productos mock
  const products = [
    { id: 1, name: 'Aceite Esencial', price: 19.99 },
    { id: 2, name: 'Vela Aromática', price: 14.99 },
    { id: 3, name: 'Piedras Calientes', price: 29.99 }
  ];
  res.json(products);
};
