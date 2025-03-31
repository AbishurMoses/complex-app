import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SubscriptionsModule]
})
export class UsersModule {}
