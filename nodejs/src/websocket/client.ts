import { io } from '../http';
import ConnectionsService from '../services/ConnectionsService';
import MessagesService from '../services/MessagesService';
import UsersService from '../services/UsersService';

interface IParams {
  email: string;
  text: string;
}

io.on('connect', (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesServece = new MessagesService();

  socket.on('client_first_access', async (params: IParams) => {
    const socket_id = socket.id;
    const { email, text } = params;

    let user = await usersService.findByEmail(email);

    if (!user) {
      user = await usersService.create({ email });
    }

    const connection = await connectionsService.findByUserId(user.id);

    if (connection) {
      // Se existir, atualiza o socket_id
      connection.socket_id = socket_id;
      await connectionsService.create(connection);
      return;
    }

    await connectionsService.create({
      socket_id,
      user_id: user.id,
    });

    await messagesServece.create({
      user_id: user.id,
      text
    })
  });
});
