import { Request, Response } from 'express';
import service from './service';

const getByIdentifier = async (req: Request, res: Response) => {
  const identifier = req.params.identifier;
  const result = await service.getByIdentifier(identifier);

  if (!result) {
    return res.status(404).send('not found');
  }
  return res.send(result);
};

const create = async (req: Request, res: Response) => {
  const entity = req.body;

  const result = await service.create(entity);

  if (!result) {
    return res.status(404).send('not found');
  }
  return res.send(result);
};

const update = async (req: Request, res: Response) => {
  const identifier = req.params.identifier;
  const updatedFields = req.body;
  const result = await service.update(identifier, updatedFields);

  if (!result) {
    return res.status(404).send('not found');
  }
  return res.send(result);
};

const remove = async (req: Request, res: Response) => {
  const identifier = req.params.identifier;
  const result = await service.remove(identifier);

  if (!result) {
    return res.status(404).send('not found');
  }
  return res.send(result);
};

export default { getByIdentifier, create, update, remove };
