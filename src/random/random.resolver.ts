import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RandomModel } from './random.model';

@Resolver(() => RandomModel)
export class RandomResolver {
  constructor() {}

  @Query(() => RandomModel)
  async me1(): Promise<RandomModel> {
    var ret = new RandomModel();

    ret.Field1 = '123';
    ret.Field2 = new Date().toISOString();

    return ret;
  }
}

//   @ResolveField('posts')
//   posts(@Parent() author: User) {
//     return this.prisma.user.findUnique({ where: { id: author.id } }).posts();
//   }
// }
