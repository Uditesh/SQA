import './style.scss'
import { greetUser } from './greetings.js';
import json from './data.json';

const app = document.getElementById("app");
greetUser(app, "Hello folks! Hope you enjoy reding this!");