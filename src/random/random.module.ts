import { Module } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { RandomResolver } from './random.resolver';

@Module({
  imports: [],
  providers: [RandomResolver],
})
export class RandomModule {}
