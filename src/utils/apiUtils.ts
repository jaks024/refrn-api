import { Response } from 'express';

export const respond = (res: Response, data: any) => {
  if (data === null) {
    res.status(404).send('not found');
  } else {
    res.status(200).send(data);
  }
};
