import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { MessagesModule } from './../src/messages/messages.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  // it('/messages (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/messages')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  it('/messages/:id (GET)', async () => {
    return request(app.getHttpServer()).get('/messages/318').expect(200);
  });

  // it('/messages (POST)', () => {
  //   return request(app.getHttpServer())
  //     .post('/messages')
  //     .send({
  //       content: 'first message',
  //     })
  //     .expect(201);
  // });
});
