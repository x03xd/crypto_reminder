import {Subject} from './Subject.js';
import {SortingByAlpha} from './Strategy.js';


const sortAlpha = new SortingByAlpha();


const idle = document.getElementById("idle-button");
if(idle) idle.addEventListener("click", () => {Subject.triggerActivity('idle')});

const run = document.getElementById("run-button");
if(run) run.addEventListener("click", () => {Subject.triggerActivity('run')});

const jump = document.getElementById("jump-button");
if(jump) jump.addEventListener("click", () => {Subject.triggerActivity('jump')});

const lay = document.getElementById("lay-button");
if(lay) lay.addEventListener("click", () => {Subject.triggerActivity('lay')});



const sortStandard = document.getElementById("sort")
if(sortStandard) sortStandard.addEventListener("click", () => {sortAlpha.sort("standard")})

const sortReverse = document.getElementById("sort-reversed")
if(sortReverse) sortReverse.addEventListener("click", () => {sortAlpha.sort("reverse")})

