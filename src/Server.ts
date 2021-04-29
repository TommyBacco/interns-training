import { Socket } from 'dgram';
import {IClient} from './Interfaces';
const dgram = require('dgram');

export class Server
{
    private _port: number;
    private _socket = dgram.createSocket('udp4');
    private _clients : {[id: number] : IClient};

    public constructor()
    {
        this._port = 8080;
        this._socket;
        this._clients;
    }

    public listen(port?: number | ((port: number) => void), callback?: (port: number) => void)
    {
        if(typeof(port) === 'number')
            this._port = port;
        
        this._socket.bind(this._port);
        
        if(callback)
            callback(this._port);
    }

    public shutdown(callback?)
    {
        this._socket.close();
        if(callback)
            callback();
    }
}