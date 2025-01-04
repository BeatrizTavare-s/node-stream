
import { Request, Response } from 'express';
import  StreamService from '../service/stream.service'
export default class StreamController {
    private streamService: StreamService;

    constructor() {
        this.streamService = new StreamService();
    }

    public saveStream(req: Request, res: Response): void {
        this.streamService.save();
        res.status(200).send('Stream saved successfully');
    }
}