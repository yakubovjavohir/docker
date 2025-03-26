import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FilialEntity, userSchema } from './entities/brand.entity';
import { BrandRepository } from './brand.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: FilialEntity.name, schema: userSchema }])],
  controllers: [BrandsController],
    providers: [
      {provide:"IProductRepository", useClass:BrandRepository},
      {provide:"IProductService", useClass:BrandsService}
    ]
})
export class FilialsModule {}
