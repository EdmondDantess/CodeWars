/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string 
with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/





var countSheep = function (num) {
    let arr = [];
    if (num == 0) {
        return ""
    } else {
    for (let i = 0; i < num; i++) {
        res = i + 1 + ' sheep...';
        arr[i] = res;
    }
    }
    
    arr = arr.join('').toString();
    console.log(arr);
}

countSheep(22)