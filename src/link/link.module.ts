import { Module } from '@nestjs/common';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkSchema } from './schemas/link.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Link', schema: LinkSchema }]),
  ],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
