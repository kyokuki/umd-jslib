// trezor-connest.js

let isOutpurDebugLog = false;

export function closeDebugLog() {
    isOutpurDebugLog = false;
}

export function openDebugLog() {
    isOutpurDebugLog = true;
}

function debug_log(...args) {
    if (isOutpurDebugLog) {
        console.log(...args);
    }
}

function fromHexStringToInt(paramArg) {
    return parseInt(paramArg, 16)
}
function toMessageTypeHexString(paramArg) {
    const tmpStr = "0000" +(parseInt(paramArg, 10) >>> 0).toString(16);
    return tmpStr.slice(-4)
}

function toMessageLenHexString(paramArg) {
    const tmpStr = "00000000" +(parseInt(paramArg, 10) >>> 0).toString(16);
    return tmpStr.slice(-8)
}

function toHexString(arrayBuffer) {
    return Array.prototype.map.call(
        new Uint8Array(arrayBuffer),
        n => ("0" + n.toString(16)).slice(-2)
    ).join("");
}

function fromHexString(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

