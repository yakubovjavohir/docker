import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductNotFound extends HttpException{
    constructor(){
        super("xona topilmadi!", HttpStatus.NOT_FOUND)
    }
}

export class BrandExsist extends HttpException{
    constructor(){
        super("bu xona mavjud!", HttpStatus.BAD_REQUEST)
    }
}