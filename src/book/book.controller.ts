import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from "./book.service";

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  get(): string {
    return this.bookService.get();
  }
  @Post()
  post(): string {
    return this.bookService.post();
  }
  @Put()
  put(): string {
    return this.bookService.put();
  }
  @Delete()
  delete(): string {
    return this.bookService.delete();
  }
 
}