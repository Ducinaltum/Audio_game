function levelIcon(id) {
    return `<circle
        id=`+ id + `
        r="50"
        cy="100"
        cx="100"
        id="Badge"
        style="fill:#fd3333;fill-opacity:1;stroke:#000000;stroke-width:0.79374999;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />`
}

function badgeCircle(father, circleID) {
    const SVG_NS = "http://www.w3.org/2000/svg";
    let circle = document.createElementNS(SVG_NS, 'circle');
    let properties = { id: circleID, cx: 100, cy: 100, r: 50, fill: "#fd3333" }
    for (let prop in properties) {
        if (objeto.hasOwnProperty(prop)) {
            circle.setAttributeNS(null, prop, properties[prop]);
        }
    }
    father.appendChild(circle);
    //opcional: la función devuelve el circulo creado para poder utilizarlo más tarde
    return circulo;
}
