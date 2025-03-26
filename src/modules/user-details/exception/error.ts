import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductNotFound extends HttpException{
    constructor(){
        super("user ning malumoti topilmadi!", HttpStatus.NOT_FOUND)
    }
}