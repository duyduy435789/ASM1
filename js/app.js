const API_URL = `http://localhost:3000`;
const showlistgioithieu = async () => {
    let arr = await fetch(API_URL + "/gioi_thieu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1gioithieu(row));
    return str;
};
const show1gioithieu = (row) => {
    return `<div>
    <img src="${row.hinh}">
    <h4>${row.ten}</h4>
    </div> `;
};
const showlistsanpham = async () => {
    let arr = await fetch(API_URL + "/san_pham")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1sanpham(row));
    return str;
};
const show1sanpham = (sp) => {
    return `<div>
    <img src="${sp.hinh}">
    <h4>${sp.ten}</h4>
    </div> `;
};
const showlistdichvu = async () => {
    let arr = await fetch(API_URL + "/dich_vu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1dichvu(row));
    return str;
};
const show1dichvu = (dv) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    </div> `;
};
const showlistlienhe = async () => {
    let arr = await fetch(API_URL + "/lien_he")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1lienhe(row));
    return str;
};
const show1lienhe = (lh) => {
    return `<div>
    <h4>${lh.ten}</h4>
    </div> `;
};
export { showlistgioithieu, showlistsanpham, showlistdichvu };
export { showlistlienhe };
