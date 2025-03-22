import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-use.dto';
import { UpdateUserDto } from './dto/update-use.dto';

const data = [
  {
    id:1,
    username:"javohir",
    password:"22223333"
  },
]
console.log(data);


@Injectable()
export class UserService {
  async create(dto: CreateUserDto) {
    const newdata = {
      id:data.length + 1,
      username:dto.username,
      password:dto.password
    }
    data.push(newdata)
    const resdata = {
      meta:{
        statusCode:201,
        message:"created"
      },
      data:newdata
    }
    return resdata
    
  }

  async findAll() {
     return {
      data,
      meta:{
        statusCode:200,
        message:"success"
      }
     }
  }

  findOne(id: number) {
    const findData = data.find((el)=>{
      return el.id === Number(id)
    })
console.log("find", findData);

    if(!findData){
      const resdata = {
        meta:{
          statusCode:404,
          message:"not found"
        }
      }
      return resdata
    }

    const resdata = {
      meta:{
        statusCode:201,
        message:"success"
      },
      data:findData
    }
    return resdata
  }

  async update(id: number, dto: UpdateUserDto) {
    this.findOne(id)
    const index = data.findIndex((el) => el.id === id);

    if (index !== -1) {
      data.splice(index, 1, { ...data[index], ...dto });
      return this.findOne(id)
    }
  }

  remove(id: number) {
    this.findOne(id)
    const index = data.findIndex((el) => el.id === id);

if (index !== -1) {
  data.splice(index, 1);
  const resdata = {
    meta:{
      statusCode:200,
      message:"deleted"
    },
    data:null
  }
  return resdata
}

  }
}
