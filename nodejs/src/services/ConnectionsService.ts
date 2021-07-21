import { getCustomRepository, Repository } from "typeorm";
import Connection from "../entities/Connection";
import ConnectionsRepository from "../repositories/ConnectionsRepository";

interface IRequest {
  id?: string;
  socket_id: string;
  user_id: string;
  admin_id?: string;
}

export default class ConnectionsService {
  private connectionsRepository: Repository<Connection>

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ id, socket_id, user_id, admin_id }: IRequest) {
    const connection = this.connectionsRepository.create({
      id,
      socket_id,
      user_id,
      admin_id
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionsRepository.findOne({
      user_id
    });

    return connection;
  }
}