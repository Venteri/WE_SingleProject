import './styles/style.css';
import { printMessage } from './scripts/test.ts';
// import axios from "axios";
// index.js
const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

printMessage(user);
printMessage(['susan', 'eric', 'john']);
