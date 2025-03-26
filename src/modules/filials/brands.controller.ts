import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Inject } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateFilialDto } from './dto/create-brand.dto';
import { UpdateFilialDto } from './dto/update-brand.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("filials")
@Controller('filials')
export class BrandsController {
   constructor(@Inject("IProductService") private readonly productService: BrandsService) {}
 
   @Post()
   create(@Body(new ValidationPipe()) dto: CreateFilialDto) {
     return this.productService.create(dto);
   }
   @Get()
   findAll() {
     return this.productService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.productService.findById(id);
   }
 
   @Patch(':id')
   update(@Param('id') id: string, @Body(new ValidationPipe()) dto: UpdateFilialDto) {
     return this.productService.update(id, dto);
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.productService.delete(id);
   }
}
