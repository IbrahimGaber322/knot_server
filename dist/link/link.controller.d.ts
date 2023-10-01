import { LinkService } from './link.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Link } from './schemas/link.schema';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
export declare class LinkController {
    private linkService;
    constructor(linkService: LinkService);
    getAllLinks(query: ExpressQuery): Promise<Link[]>;
    getLinks(id: string): Promise<Link[]>;
    createLink(link: CreateLinkDto, req: any): Promise<Link>;
    getLink(id: string): Promise<Link>;
    updateLink(id: string, link: UpdateLinkDto, req: any): Promise<Link>;
    deleteLink(id: string, req: any): Promise<Link>;
}
