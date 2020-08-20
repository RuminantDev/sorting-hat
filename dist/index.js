const murmurhash = require("murmurhash");
export function getFlagVal(uid, flagName, flagConfig) {
    console.log(uid, flagName, flagConfig);
    if (!flagConfig.active) {
        return flagConfig.defaultValue;
    }
    if (flagConfig.exceptIds) {
        if (flagConfig.exceptIds.indexOf(uid) >= 0) {
            return true;
        }
    }
    if (flagConfig.perc !== undefined) {
        if (flagConfig.perc === 1) {
            return true; // TODO: Look into if there should be a default value at all?????? I feel like true/false should always be the default
        }
        if (flagConfig.perc === 0) {
            return false;
        }
        const specialId = murmurhash.v3(`${uid}-${flagName}`);
        return getFlagPercVal(specialId, flagConfig.perc);
    }
    if (flagConfig.defaultValue) {
        return flagConfig.defaultValue;
    }
    return false;
}
function getFlagPercVal(hashedUid, perc) {
    const x = getBucket(hashedUid);
    console.log("X: ", x, hashedUid);
    return x < perc;
}
function getBucket(hashedUid) {
    const A = 1;
    const P = 50;
    const y = (A / P) * (P - Math.abs((hashedUid % (2 * P)) - P));
    return y;
}
