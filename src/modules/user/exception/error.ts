import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductNotFound extends HttpException{
    constructor(){
        super("user not found!", HttpStatus.NOT_FOUND)
    }
}