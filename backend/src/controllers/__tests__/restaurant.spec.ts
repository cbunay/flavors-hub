import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import app from '../../app';

const server = app.listen();

afterAll(() => server.close());

describe('MonsterController', () => {
  test('Get', async () => {
    const response = await request(server).get('/restaurant');
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.message).toBe('restaurant');
  });
});
