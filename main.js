import './style.scss'
import { greetUser } from './greetings.js';
import json from './data.json';

const app = document.getElementById("app");
greetUser(app, json.homepage.greeting);