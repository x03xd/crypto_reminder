import {Subject} from './Subject.js';
import {SortingByAlpha, SortingByFrequency} from './Strategy.js';


const sortAlpha = new SortingByAlpha();
const sortFreq = new SortingByFrequency();

const idle = document.getElementById("idle-button");
if(idle) idle.addEventListener("click", () => {Subject.triggerActivity('idle')});

const run = document.getElementById("run-button");
if(run) run.addEventListener("click", () => {Subject.triggerActivity('run')});

const jump = document.getElementById("jump-button");
if(jump) jump.addEventListener("click", () => {Subject.triggerActivity('jump')});

const lay = document.getElementById("lay-button");
if(lay) lay.addEventListener("click", () => {Subject.triggerActivity('lay')});



const sortAlphaStandard = document.getElementById("sort")
if(sortAlphaStandard) sortAlphaStandard.addEventListener("click", () => {sortAlpha.sort("standard")})

const sortAlphaReverse = document.getElementById("sort-reversed")
if(sortAlphaReverse) sortAlphaReverse.addEventListener("click", () => {sortAlpha.sort("reverse")})

const sortFreqStandard = document.getElementById("sort-fr")
if(sortFreqStandard) sortFreqStandard.addEventListener("click", () => {sortFreq.sort("standard")})

const sortFreqReverse = document.getElementById("sort-fr-reversed")
if(sortFreqReverse) sortFreqReverse.addEventListener("click", () => {sortFreq.sort("reverse")})

