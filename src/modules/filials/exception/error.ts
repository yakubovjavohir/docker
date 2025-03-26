import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductNotFound extends HttpException{
    constructor(){
        super("filial topilmadi!", HttpStatus.NOT_FOUND)
    }
}

export class BrandExsist extends HttpException{
    constructor(){
        super("bu filial mavjud!", HttpStatus.BAD_REQUEST)
    }
}