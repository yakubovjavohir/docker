
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserDetailsEntity, productSchema } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserDetailsEntity.name, schema: productSchema }])],
  controllers: [ProductController],
  providers: [
    {provide:"IProductRepository", useClass:ProductRepository},
    {provide:"IProductService", useClass:ProductService}
  ]
  
})
export class UserDetailModule {}
