/*
    The Key Concept: Top-Level Code Runs Once
    When you import a module using type="module", all of the top-level code in that module
    (code not inside a function or class) runs immediately the first time the module is loaded by the browser.
    Subsequent imports do not re-run the code; they reuse the existing module instance from a cache.
    
    TOP-LEVEL code is the code on the root, IT IS NOT inside FUNCTIONS or CLASSES
*/

/* This script (gallery.js) is included only in gallery.html */

// When ./common.js is loaded the updateYear() executes (from the listener in common.js).
import { galleryMediaLoad } from './common.js';

// Only galleryMediaLoad() is executed here, because only gallery.html needs it.
document.addEventListener('DOMContentLoaded', (event) => {   
    galleryMediaLoad();
});

/*
    Both DOMContentLoaded listeners run.
    copyrightYear() executes (from the listener in common.js).
    galleryMediaLoad() executes (from the listener in this file - gallery.js)
*/