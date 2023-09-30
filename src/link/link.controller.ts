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
import { LinkService } from './link.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { Link } from './schemas/link.schema';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
@Controller('links')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllLinks(@Query() query: ExpressQuery): Promise<Link[]> {
    return this.linkService.findAll(query);
  }

  @Get('/section/:id')
  @UseGuards(AuthGuard())
  async getLinks(
    @Param('id')
    id: string,
  ): Promise<Link[]> {
    return this.linkService.findLinksBySection(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createLink(
    @Body()
    link: CreateLinkDto,
    @Req() req,
  ): Promise<Link> {
    return this.linkService.create(link, req.user);
  }

  @Get('/link/:id')
  @UseGuards(AuthGuard())
  async getLink(
    @Param('id')
    id: string,
  ): Promise<Link> {
    return this.linkService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateLink(
    @Param('id')
    id: string,
    @Body()
    link: UpdateLinkDto,
    @Req() req,
  ): Promise<Link> {
    return this.linkService.updateById(id, link, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteLink(
    @Param('id')
    id: string,
    @Req() req,
  ): Promise<Link> {
    return this.linkService.deleteById(id, req.user);
  }
}
