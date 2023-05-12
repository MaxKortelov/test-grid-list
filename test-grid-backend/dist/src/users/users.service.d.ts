import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): string;
    findOneByEmail(email: string): Promise<User>;
    findOne(id: number): Promise<User[]>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
