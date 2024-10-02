import { Options } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ require: true })
  public id: number;
  
  @Prop({ require: true })
  public title: string;

  @Prop()
  public description: string;

  @Prop()
  public authors: string;

  @Prop()
  public favorite: false;

  @Prop()
  public fileCover: string;

  @Prop()
  public fileName: string;

  @Prop()
  public fileBook: string;
}

export const BookShema = SchemaFactory.createForClass(Book);