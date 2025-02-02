import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Role } from '@prisma/client';

@ObjectType()
export class RandomModel {
  @Field()
  Field1: string;

  @Field({ nullable: true })
  Field2?: string;
}
