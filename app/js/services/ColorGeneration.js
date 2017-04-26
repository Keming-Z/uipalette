app.service('GenerateColor', ['ConverColor',function(ConverColor) {
    var service = {
        initColor: initColor
    }
    return service;

    function initColor(hslArr, rows) {
        initHslArr(hslArr);
        for(let i = 0; i < 9; i++) {
            setHsl(rows[0][i], hslArr[0], i);
            setHsl(rows[1][i], hslArr[1], i);
            setHsl(rows[2][i], hslArr[2], i);
        }
    }

    function initHslArr(hslArr) {
        for(let i = 0; i < 9; i++) {
            hslArr[0].push("hsla(0, 0%, 85%, 0."+i*10+")");
            hslArr[1].push("hsla(0, 0%, 55%, 0."+i*10+")");
            hslArr[2].push("hsla(0, 0%, 25%, 0."+i*10+")");
        }
    }

    function setHsl(elem, arr, i) {
        elem.style.backgroundColor = arr[i];
    }
}]);
