import { Socket } from 'dgram';
import {IClient} from './Interfaces';

export class Server
{
    private _port: number;
    private _socket: Socket;
    private _clients;

    public constructor()
    {
        this._port = 8080;
        this._socket;
        this._clients = {[id: number] : IClient};
    }
}