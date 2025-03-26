import { Inject, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { IBrandService } from './interface/user.service';
import { BrandRepository } from './brand.repository';
import { ResData } from 'src/lib/resData';
import { ID } from 'src/common/type';
import { BrandEntity } from './entities/brand.entity';
import { BrandExsist, ProductNotFound } from './exception/error';

@Injectable()
export class BrandsService implements IBrandService{
  constructor(@Inject("IProductRepository") private readonly productRepository:BrandRepository){}
  async create(dto: CreateBrandDto): Promise<ResData<BrandEntity>> {
    const allData = await this.productRepository.findAll()

    const find = allData.find((el)=>{
      return el.brandName === dto.brandName
    })

    if(find){
      throw new BrandExsist()
    }

    const data = await this.productRepository.create(dto)
    const resdata = new ResData<BrandEntity>(201, "malumot yaratildi.", data)
    return resdata
  }
  async findAll(): Promise<ResData<Array<BrandEntity>>> {
    const data = await this.productRepository.findAll()
    const resdata = new ResData<Array<BrandEntity>>(200, "malumotlar olindi.", data)
    return resdata
  }
  async update(id: ID, dto: UpdateBrandDto): Promise<ResData<BrandEntity>> {
    await this.findById(id)
    const data = await this.productRepository.update(id, dto)
    const resdata = new ResData<BrandEntity>(200, "malumot yangilandi.", data)
    return resdata
  }
  async delete(id: ID): Promise<ResData<void>> {
    await this.findById(id)
     await this.productRepository.delete(id)
     const resdata = new ResData<null>(200, "malumot o'chirildi.")
     return resdata
  }
  async findById(id: ID): Promise<ResData<BrandEntity>> {
    const data = await this.productRepository.findById(id)
    if(!data){
      throw new ProductNotFound()
    }
    const resdata = new ResData<BrandEntity>(200, "malumot olindi.", data)
    return resdata
  }
}
