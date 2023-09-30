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
import { Linksection } from './schemas/linksection.schema';
import { CreateLinksectionDto } from './dto/create-linksection.dto';
import { UpdateLinksectionDto } from './dto/update-linksection.dto';

@Injectable()
export class LinksectionService {
  constructor(
    @InjectModel(Linksection.name)
    private linksectionModel: mongoose.Model<Linksection>,
  ) {}

  async findAll(query: Query): Promise<Linksection[]> {
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
    const linksections = await this.linksectionModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return linksections;
  }

  async findLinksectionsByUser(user: User): Promise<Linksection[]> {
    const linksections = await this.linksectionModel.find({
      userId: user._id,
    });

    return linksections;
  }

  async create(
    linksection: CreateLinksectionDto,
    user: User,
  ): Promise<Linksection> {
    const data = Object.assign(linksection, { userId: user._id });
    const res = await this.linksectionModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Linksection> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }
    const linksection = await this.linksectionModel.findById(id);
    if (!linksection) {
      throw new NotFoundException('Linksection not found.');
    }
    return linksection;
  }

  async updateById(
    id: string,
    linksection: UpdateLinksectionDto,
    user: User,
  ): Promise<Linksection> {
    const foundLinkSection = await this.linksectionModel.findById(id);
    if (user._id !== foundLinkSection.userId) {
      throw new UnauthorizedException("You can't edit this linksection.");
    }
    return await this.linksectionModel.findByIdAndUpdate(id, linksection, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, user: User): Promise<Linksection> {
    const linksection = await this.linksectionModel.findById(id);
    if (user._id !== linksection.userId) {
      throw new UnauthorizedException("You can't edit this linksection.");
    }
    return await this.linksectionModel.findByIdAndDelete(id);
  }
}
