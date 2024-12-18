import 'dotenv/config';
import { env } from 'node:process';

env.MONGO_URI ??= 'mongodb://localhost:27017/ballislife';
env.PORT ??= '3000';
env.TOKEN_SECRET ??= 'MySuperMegaUltraHyperTurboSecret';
