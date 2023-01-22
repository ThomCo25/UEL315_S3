/* Ce fichier provient de ma semaine 2 de l'UE L314 */

import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users, UsersRepository } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let usersRepository: Repository<Users>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            delete: jest.fn(),
            update: jest.fn()
          },
        },
        UsersRepository
      ]
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
    usersRepository = app.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('Find all Users', () => {
    it('should return an array of users', async () => {
      const data = usersController.findAll();
      expect(usersController.findAll()).toBe(data);
      console.log('Test Controller : Should find all users => 200');
    });
  });

  describe('Find one User', () => {
    it('should return one user', async () => {
      const data = usersController.findOne('1');
      expect(usersController.findOne('1')).toBe(data);
      console.log('Test Controller : Should find one user => 200');
    });
  });

  describe('Update users', () => {
    it('should update users', async () => {
      const data = usersController.update('1', {firstName: 'Nad'});
      expect(usersController.update('1', {lastName: 'Lie'})).toBe(data);
      console.log('Test Controller : Should update users => 200');
    });
  });

  describe('Create an user', () => {
    it('should create an user', async () => {
      const data = usersController.create({firstName: 'Tho', lastName: 'Mas'});
      expect(usersController.create({firstName: 'Tho', lastName: 'Mas'})).toBe(data);
      console.log('Test Controller : should create an user => 200');
    });
  });

  describe('Delete an user', () => {
    it('should delete an user', async () => {
      const data = usersController.remove('1');
      expect(usersController.remove('1')).toBe(data);
      console.log('Test Controller : should delete an user => 200');
    });
  });

});
