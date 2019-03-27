function randomWord(randomFlag, numFlag, min, max) {
    let str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    //纯数字组合
    if (numFlag) {
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    }
    for (let i = 0; i < range; i++) {
        str += arr[Math.round(Math.random() * (arr.length - 1))];
    }
    return str;
}

export function getRand() {
    const timestamp = new Date().getTime();
    const nonce_str = timestamp + randomWord(false, false, 6);
    return nonce_str;
}