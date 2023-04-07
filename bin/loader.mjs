import { createRequire } from 'module';

x();

(async function () {
    const require = createRequire(import.meta.url);
    let successful = !0;
    try {
        console.log(`${'\x1b[31m'}Project "State Role Play" has started initialization!${'\x1b[0m'}`);
        require('./../packages/index.js');
    } catch (error) {
        console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} bin/loader:${'\x1b[0m'}`, error.message);
    }
    for (let wixcore of mp.events.getAllOf("packagesLoaded")) {
        try {
            wixcore();
        } catch (error) {
            successful = !1;
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} bin/loader:${'\x1b[0m'}`, error.message);
        }

    }
    mp.events.remove("packagesLoaded");
    mp.events.initialized = !0;
})();