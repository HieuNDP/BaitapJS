const hoten = 'Nguyễn Đình Phúc Hiếu'
const tuoi = `22`
const lasinhvien = 1
const sothich = ['xem phim', 'Đọc sách', 'Chơi game']
const jsonsothich = JSON.stringify(sothich)
const diachi = {
    Tinhthanh: 'Thừa Thiên Huế',
    Phuong: 'An Cựu'
}
const diemtrungbinh = 8.5
const nullvalue = null
let undefinedvalue;

console.log(`${hoten} =`, typeof hoten)
console.log(`${tuoi} =`, typeof tuoi)
console.log(`${lasinhvien} =`, typeof lasinhvien)
console.log(`${sothich} =`, typeof jsonsothich)
console.log(`${diachi} =`, typeof diachi)
console.log(`${diemtrungbinh} =`, typeof diemtrungbinh)
console.log(`${nullvalue} =`, typeof nullvalue)
console.log(`${undefinedvalue} =`, typeof undefinedvalue)

function updateInfo() {
    document.getElementById("hoten").innerHTML = hoten;
    document.getElementById("tuoi").innerHTML = tuoi;
    document.getElementById("sinhvien").innerHTML = lasinhvien ? 'Yes' : 'No';
    document.getElementById("sothich").innerHTML = sothich;
    document.getElementById("diachi").innerHTML = `Tỉnh thành: ${diachi.Tinhthanh}, Phường: ${diachi.Phuong}`;
    document.getElementById("diem").innerHTML = diemtrungbinh;
}


updateInfo();



