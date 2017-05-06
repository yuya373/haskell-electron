import {get} from './api.js';

get('/users').then((res) => console.log(res)).catch((err) => console.warn(err))
