import {Subject} from './Subject.js';
import {StrategyByFrequency} from './Strategy.js';


const subject = new Subject();
const sortF = new StrategyByFrequency();


const idle = document.getElementById("idle-button");
if(idle) idle.addEventListener("click", () => {subject.triggerActivity('idle')});

const run = document.getElementById("run-button");
if(run) run.addEventListener("click", () => {subject.triggerActivity('run')});

const jump = document.getElementById("jump-button");
if(jump) jump.addEventListener("click", () => {subject.triggerActivity('jump')});

const lay = document.getElementById("lay-button");
if(lay) lay.addEventListener("click", () => {subject.triggerActivity('lay')});




const sortB = document.getElementById("sort")
if(sortB) sortB.addEventListener("click", () => {sortF.sort(Subject.observers, "standard")})

const sortReverse = document.getElementById("sort-reversed")
if(sortReverse) sortReverse.addEventListener("click", () => {sortF.sort(Subject.observers, "reverse")})

