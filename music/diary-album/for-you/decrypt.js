function decrypt(str, date) {
    return base64_decrypt(cesar_decrypt(str, date));
}

function encrypt(str) {
    return cesar_encrypt(base64_encrypt(str));
}

function cesar_decrypt(str, date) {
    let dateList = date.split("");
    var code = [];
    for(var each in dateList) {
        code.push(Number(each));
    }
    
    var cnt = 0;
    
    let start1 = "A".charCodeAt(0);
    let end1 = "Z".charCodeAt(0);
    let start2 = "a".charCodeAt(0);
    let end2 = "z".charCodeAt(0);

    var strList = str.split("");
    var judge, replace;
    for (var i = 0; i < str.length; i++) {
        judge = strList[i].charCodeAt(0);
        if (judge <= end1 && judge >= start1) {
            replace = start1 + (judge - start1 + code[cnt % 8]) % 26;
            strList[i] = String.fromCharCode(replace);
        }
        else if (judge <= end2 && judge >= start2) {
            replace = start2 + (judge - start2 + code[cnt % 8]) % 26; 8
            strList[i] = String.fromCharCode(replace);
        }
        cnt++;
    }

    secretWords = strList.join("");
    return secretWords;    
}

function base64_decrypt(str) {
    var decodedData = atob(str);
    return decodedData;
}

function cesar_encrypt(str) {
    let code = [2, 0, 0, 5, 0, 5, 1, 8];
    
    var cnt = 0;
    
    let start1 = "A".charCodeAt(0);
    let end1 = "Z".charCodeAt(0);
    let start2 = "a".charCodeAt(0);
    let end2 = "z".charCodeAt(0);

    var strList = str.split("");
    var judge, replace;
    for (var i = 0; i < str.length; i++) {
        judge = strList[i].charCodeAt(0);
        if (judge <= end1 && judge >= start1) {
            replace = start1 + (judge - start1 + code[cnt % 8]) % 26;
            strList[i] = String.fromCharCode(replace);
        }
        else if (judge <= end2 && judge >= start2) {
            replace = start2 + (judge - start2 + code[cnt % 8]) % 26;
            strList[i] = String.fromCharCode(replace);
        }
        cnt++;
    }

    secretWords = strList.join("");
    return secretWords;
}

function base64_encrypt(str) {
    var encodedData = btoa(str);
    return encodedData;
}

var str = "fGVedHCbBXNeYBet";

window.onload = function() {
    document.getElementById("letter-for-you").innerHTML = decrypt(str, "20050518");
}