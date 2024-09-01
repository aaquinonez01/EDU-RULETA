import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';
import { CommonModule } from './common/common.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      ssl:
        process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    }),
    AuthModule,
    CoursesModule,
    CommonModule,
    TopicsModule,
  ],
})
export class AppModule {}
