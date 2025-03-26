import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductNotFound extends HttpException{
    constructor(){
        super("BRAND not found!", HttpStatus.NOT_FOUND)
    }
}

export class BrandExsist extends HttpException{
    constructor(){
        super("bu brand mavjud!", HttpStatus.BAD_REQUEST)
    }
}