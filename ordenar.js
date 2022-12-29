function offsetHgrad(color) {
    const offset = 60;
    const start = 360 - offset;
    const h = color.h >= start ? color.h - start : color.h + offset;

    return {
        h,
        s: color.s,
        l: color.l,
    }
}

function rgbToHsl(color) {
    const rbgReg = /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/;
    const [, red, green, blue] = rbgReg.exec(color);
    const r = parseInt(red, 16) / 255,
        g = parseInt(green, 16) / 255,
        b = parseInt(blue, 16) / 255;
    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return {
        h: Math.floor(h * 360),
        s: Math.floor(s * 100),
        l: Math.floor(l * 100)
    };
}

function compare(color1, color2) {
    const values1 = offsetHgrad(rgbToHsl(color1));
    const values2 = offsetHgrad(rgbToHsl(color2));

    if (values1.h !== values2.h) {
        return values1.h - values2.h;
    }
    if (values1.s !== values2.s) {
        return values1.s - values2.s;
    }
    return values1.l - values2.l;
}


document.addEventListener('DOMContentLoaded', () => {
    const sample = document.getElementById('sample');
    const result = document.getElementById('result');

    function addToDoc(container, color) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = color;
        box.innerText = color;
        container.appendChild(box);
    }

    const input = ['#6818a5',
        '#eabffa',
        '#dcace8',
        '#d099e3',
        '#c586dd',
        '#b973d8',
        '#dc93f6',
        '#dc97ff',
        '#d283ff',
        '#cb5df1',
        '#bd68ee',
        '#ab51e3',
        '#b333e9',
        '#8b26c3',
        '#8013bd',
        '#7400b8',
        '#8c07dd',
        '#9f21e3',
        '#8b2fc9',
        '#f7ebfd',
    ];
    input.forEach((i) => addToDoc(sample, i));
    input.sort(compare).forEach((i) => addToDoc(result, i))
});