import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';
import { Link } from './schemas/link.schema';

@Injectable()
export class LinkService {
  constructor(
    @InjectModel(Link.name)
    private linkModel: mongoose.Model<Link>,
  ) {}

  async findAll(query: Query): Promise<Link[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const links = await this.linkModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return links;
  }

  async findLinksBySection(id: string, query: Query): Promise<Link[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          label: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const links = await this.linkModel
      .find({
        ...keyword,
        sectionId: id,
      })
      .limit(resPerPage)
      .skip(skip);
    return links;
  }

  async create(link: Link, user: User): Promise<Link> {
    const data = Object.assign(link, { userId: user._id });
    const res = await this.linkModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Link> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }
    const link = await this.linkModel.findById(id);
    if (!link) {
      throw new NotFoundException('link not found.');
    }
    return link;
  }

  async updateById(id: string, link: Link, user: User): Promise<Link> {
    if (user._id !== link.userId) {
      throw new UnauthorizedException("You can't edit this link.");
    }
    return await this.linkModel.findByIdAndUpdate(id, link, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, user: User): Promise<Link> {
    const link = await this.linkModel.findById(id);
    if (user._id !== link.userId) {
      throw new UnauthorizedException("You can't edit this link.");
    }
    return await this.linkModel.findByIdAndDelete(id);
  }
}
