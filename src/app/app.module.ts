import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "../users/users.controller";
import { UsersService } from "../users/users.service";
import { User } from "../users/user.entity";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forRoot()],
  providers: [UsersService],
  controllers: [UsersController],
})
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
    }),
  ],
})
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {}
