import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';
import { Link } from './schemas/link.schema';
import { CreateLinkDto } from './dto/create-link.dto';
export declare class LinkService {
    private linkModel;
    constructor(linkModel: mongoose.Model<Link>);
    findAll(query: Query): Promise<Link[]>;
    findLinksBySection(id: string): Promise<Link[]>;
    create(link: CreateLinkDto, user: User): Promise<Link>;
    findById(id: string): Promise<Link>;
    updateById(id: string, link: Link, user: User): Promise<Link>;
    deleteById(id: string, user: User): Promise<Link>;
}
