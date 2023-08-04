import {Subject} from './Subject.js';


const subject = new Subject();

const idle = document.getElementById("idle-button")
if(idle) idle.addEventListener("click", () => {subject.triggerActivity('idle')})

const run = document.getElementById("run-button")
if(run) run.addEventListener("click", () => {subject.triggerActivity('run')})

const jump = document.getElementById("jump-button")
if(jump) jump.addEventListener("click", () => {subject.triggerActivity('jump')})

const lay = document.getElementById("lay-button")
if(lay) lay.addEventListener("click", () => {subject.triggerActivity('lay')})

