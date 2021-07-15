import { Request, Response } from 'express';
import MessagesService from '../services/MessagesService';

export default class MessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, user_id, text } = request.body;

    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      user_id,
      text
    });

    return response.json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messagesServices = new MessagesService();

    const list = await messagesServices.listByUser(id);

    return response.json(list);
  }
}