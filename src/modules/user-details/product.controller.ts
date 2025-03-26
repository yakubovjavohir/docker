import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateUserDetailsDto } from './dto/create-product.dto';
import { UpdateUserDetailsDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("User-details")
@Controller('user-details')
export class ProductController {
  constructor(@Inject("IProductService") private readonly productService: ProductService) {}

  @Post()
  create(@Body(new ValidationPipe()) dto: CreateUserDetailsDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateUserDetailsDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
