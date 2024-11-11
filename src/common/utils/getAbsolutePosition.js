function getAbsolutePosition(domElement, left= 0, top= 0) {
    if (!parseInt(left)) {
        left = 0;
    } else {
        left = parseInt(left);
    }
    if (!parseInt(top)) {
        top = 0;
    } else {
        top = parseInt(top);
    }

    const box = domElement.getBoundingClientRect();
    const body = document.body;
    const docElem = document.documentElement;
    const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    const clientTop = docElem.clientTop || body.clientTop || 0;
    const clientLeft = docElem.clientLeft || body.clientLeft ||0;

    const attr = {};
    attr.y = box.top +  scrollTop - clientTop + top; 
    attr.x = box.left + scrollLeft - clientLeft + left;
    attr.width = box.width;
    attr.height = box.height;

    return attr;
}

export default getAbsolutePosition;