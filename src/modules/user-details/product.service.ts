import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDetailsDto } from './dto/create-product.dto';
import { IProductService } from './interface/user.service';
import { ResData } from 'src/lib/resData';
import { UserDetailsEntity } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { ProductNotFound } from './exception/error';
import { ID } from 'src/common/type';
import { UpdateUserDetailsDto } from './dto/update-product.dto';

@Injectable()
export class ProductService implements IProductService{
  constructor(@Inject("IProductRepository") private readonly productRepository:ProductRepository){}
  async create(dto: CreateUserDetailsDto): Promise<ResData<UserDetailsEntity>> {
    const data = await this.productRepository.create(dto)
    const resdata = new ResData<UserDetailsEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<UserDetailsEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<Array<UserDetailsEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async update(id: ID, dto: UpdateUserDetailsDto): Promise<ResData<UserDetailsEntity>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<UserDetailsEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.productRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<UserDetailsEntity>> {
    const data = await this.productRepository.findById(id)
    if(!data){
      throw new ProductNotFound()
    }
    const resdata = new ResData<UserDetailsEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
