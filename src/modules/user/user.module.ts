import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, userSchema } from './entities/user.entity';
import { ProductRepository } from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserEntity.name, schema: userSchema }])],
  controllers: [UserController],
    providers: [
      {provide:"IProductRepository", useClass:ProductRepository},
      {provide:"IProductService", useClass:UserService}
    ]
})
export class UserModule {}
