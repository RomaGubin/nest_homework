import { Injectable } from "@nestjs/common";

interface Book {}

@Injectable()
export class BookService {
  private readonly books: Book[] = [];
}