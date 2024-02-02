import { color } from './color.js';
import { striker } from './strike.js';
import { createAlignButtons } from './preview.js';

document.addEventListener("DOMContentLoaded", function () {
    color();
    striker();
    createAlignButtons();
});