import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
   constructor(@Inject("IProductService") private readonly productService: UserService) {}
 
   @Post()
   create(@Body(new ValidationPipe()) dto: CreateUserDto) {
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
   update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
     return this.productService.update(id, dto);
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.productService.delete(id);
   }
}
