const API_URL = `http://localhost:3000`;
type TGioiThieu = { 
    id:number;
    ten:string;
    hinh:string;
} 
type TSanPham = { 
    id:number;  
    ten:string; Í
    hinh:string; 
}
type TDichVu = { 
    id:number;  
    ten:string; 
    hinh:string; 
}
type TLienHe = { 
    id:number;  
    ten:string;
    hinh:string; 
}
const showlistgioithieu = async ()=>{
    let arr:TGioiThieu[] = await fetch(API_URL + "/gioi_thieu")
    .then (res => res.json())
    .then (data => data as TGioiThieu[]);
    let str=``;
    arr.forEach ( row => str+= show1gioithieu(row) )
    return str;
}

const show1gioithieu = (row:TGioiThieu) => {
    return `<div>
    <img src="${row.hinh}">
    <h4>${row.ten}</h4>
    </div> `;
}

const showlistsanpham = async ()=>{
    let arr:TSanPham[] = await fetch(API_URL + "/san_pham")
    .then (res => res.json())
    .then (data => data as TSanPham[]);
    let str=``;
    arr.forEach ( row => str+= show1sanpham(row) )
    return str;
}
const show1sanpham = (sp:TSanPham) => {
    return `<div>
    <img src="${sp.hinh}">
    <h4>${sp.ten}</h4>
    </div> `;
}

const showlistdichvu = async ()=>{
    let arr:TDichVu[] = await fetch(API_URL + "/dich_vu")
    .then (res => res.json())
    .then (data => data as TDichVu[]);
    let str=``;
    arr.forEach ( row => str+= show1dichvu(row) )
    return str;
}
const show1dichvu = (dv:TDichVu) => {
    return `<div>
    <img src="${dv.hinh}">
    <h4>${dv.ten}</h4>
    </div> `;
}

const showlistlienhe = async ()=>{
    let arr:TLienHe[] = await fetch(API_URL + "/lien_he")
    .then (res => res.json())
    .then (data => data as TLienHe[]);
    let str=``;
    arr.forEach ( row => str+= show1lienhe(row) )
    return str;
}
const show1lienhe = (lh:TLienHe) => { 
    return `<div>
    <img src="${lh.hinh}">
    <h4>${lh.ten}</h4>
    </div> `;
}
export {showlistgioithieu, showlistsanpham, showlistdichvu }
export{showlistlienhe}
