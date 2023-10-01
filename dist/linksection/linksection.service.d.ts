import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';
import { Linksection } from './schemas/linksection.schema';
import { CreateLinksectionDto } from './dto/create-linksection.dto';
import { UpdateLinksectionDto } from './dto/update-linksection.dto';
export declare class LinksectionService {
    private linksectionModel;
    constructor(linksectionModel: mongoose.Model<Linksection>);
    findAll(query: Query): Promise<Linksection[]>;
    findLinksectionsByUser(user: User): Promise<Linksection[]>;
    create(linksection: CreateLinksectionDto, user: User): Promise<Linksection>;
    findById(id: string): Promise<Linksection>;
    updateById(id: string, linksection: UpdateLinksectionDto, user: User): Promise<Linksection>;
    deleteById(id: string, user: User): Promise<Linksection>;
}
