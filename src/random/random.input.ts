import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RandomInput {
  @Field({ nullable: false })
  seed?: string;
}
