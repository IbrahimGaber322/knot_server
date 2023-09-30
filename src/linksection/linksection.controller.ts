import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { Linksection } from './schemas/linksection.schema';
import { LinksectionService } from './linksection.service';
import { CreateLinksectionDto } from './dto/create-linksection.dto';
import { UpdateLinksectionDto } from './dto/update-linksection.dto';
@Controller('linksection')
export class LinksectionController {
  constructor(private linksectionService: LinksectionService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllLinksections(
    @Query() query: ExpressQuery,
  ): Promise<Linksection[]> {
    return this.linksectionService.findAll(query);
  }

  @Get('user/:id')
  @UseGuards(AuthGuard())
  async getLinksectionsByUser(
    @Query() query: ExpressQuery,
    @Param('id')
    id: string,
  ): Promise<Linksection[]> {
    return this.linksectionService.findLinksectionsByUser(id, query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createLinksection(
    @Body()
    linksection: CreateLinksectionDto,
    @Req() req,
  ): Promise<Linksection> {
    return this.linksectionService.create(linksection, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getLinksection(
    @Param('id')
    id: string,
  ): Promise<Linksection> {
    return this.linksectionService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateLinksection(
    @Param('id')
    id: string,
    @Body()
    linksection: UpdateLinksectionDto,
    @Req() req,
  ): Promise<Linksection> {
    return this.linksectionService.updateById(id, linksection, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteLinksection(
    @Param('id')
    id: string,
    @Req() req,
  ): Promise<Linksection> {
    return this.linksectionService.deleteById(id, req.user);
  }
}
