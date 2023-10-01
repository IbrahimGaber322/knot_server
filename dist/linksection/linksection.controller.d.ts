import { Query as ExpressQuery } from 'express-serve-static-core';
import { Linksection } from './schemas/linksection.schema';
import { LinksectionService } from './linksection.service';
import { CreateLinksectionDto } from './dto/create-linksection.dto';
import { UpdateLinksectionDto } from './dto/update-linksection.dto';
export declare class LinksectionController {
    private linksectionService;
    constructor(linksectionService: LinksectionService);
    getAllLinksections(query: ExpressQuery): Promise<Linksection[]>;
    getLinksectionsByUser(req: any): Promise<Linksection[]>;
    createLinksection(linksection: CreateLinksectionDto, req: any): Promise<Linksection>;
    getLinksection(id: string): Promise<Linksection>;
    updateLinksection(id: string, linksection: UpdateLinksectionDto, req: any): Promise<Linksection>;
    deleteLinksection(id: string, req: any): Promise<Linksection>;
}
