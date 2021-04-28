import { Socket } from 'dgram';
import { Address } from './Interfaces';

export class Client
{
    private _id: number;
    private _username: string;
    private _socket: Socket;
    private _server: Address = {ip: 'localhost', port: 8080};

    public constructor(id: number, username: string)
    {
        this._id = id;
        this._username = username;
    }

    public connect(server?: Address): Promise <Address>
    {
        if(server)
            this._server = server;

        this._socket.connect(this._server.port, this._server.ip);

        return new Promise((resolve) => {
            resolve(this._server);
        })
    }

    public disconnect(): Promise<any>
    {
        this._socket.disconnect();
    }
}