import { Module } from '@nestjs/common';
import { LinksectionController } from './linksection.controller';
import { LinksectionService } from './linksection.service';
import { AuthModule } from 'src/auth/auth.module';
import { LinksectionSchema } from './schemas/linksection.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: 'Linksection', schema: LinksectionSchema },
    ]),
  ],
  controllers: [LinksectionController],
  providers: [LinksectionService],
})
export class LinksectionModule {}
