import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IProductService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { ProductRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';
import { ID } from 'src/common/type';
import { ProductNotFound } from './exception/error';

@Injectable()
export class UserService implements IProductService{
  constructor(@Inject("IProductRepository") private readonly productRepository:ProductRepository){}
  async create(dto: CreateUserDto): Promise<ResData<UserEntity>> {
    const data = await this.productRepository.create(dto)
    const resdata = new ResData<UserEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<UserEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<Array<UserEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async update(id: ID, dto: UpdateUserDto): Promise<ResData<UserEntity>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<UserEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.productRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<UserEntity>> {
    const data = await this.productRepository.findById(id)
    if(!data){
      throw new ProductNotFound()
    }
    const resdata = new ResData<UserEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
