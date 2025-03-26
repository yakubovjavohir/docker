import { Module } from '@nestjs/common';
import { UserDetailModule } from './modules/user-details/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsModule } from './modules/brands/brands.module';
import { UserModule } from './modules/user/user.module';
import { FilialsModule } from './modules/filials/brands.module';
import { RoomsModule } from './modules/rooms/brands.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@my_mongodb:27017/${process.env.MONGO_DB_DATABASE}?authSource=admin`), 
    UserDetailModule, BrandsModule, UserModule, FilialsModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
