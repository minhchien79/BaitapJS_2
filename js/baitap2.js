function tinhTienDien() {
  let hoTen = document.getElementById("inputHoTen").value;
  let soKw = document.getElementById("inputSoKw").value;

  let KW_50_DAU = 500;
  let KW_51_100 = 650;
  let KW_101_200 = 850;
  let KW_201_350 = 1100;
  let KW_TREN_350 = 1300;

  let tongTien = 0;
  if (soKw <= 50) {
    tongTien = soKw * KW_50_DAU;
  } else if (50 < soKw && soKw <= 100) {
    tongTien = KW_50_DAU * 50 + (soKw - 50) * KW_51_100;
  } else if (100 < soKw && soKw <= 200) {
    tongTien = KW_50_DAU * 50 + 50 * KW_51_100 + (soKw - 100) * KW_101_200;
  } else if (200 < soKw && soKw <= 350) {
    tongTien =
      KW_50_DAU * 50 +
      50 * KW_51_100 +
      100 * KW_101_200 +
      (soKw - 200) * KW_201_350;
  } else {
    tongTien =
      KW_50_DAU * 50 +
      50 * KW_51_100 +
      100 * KW_101_200 +
      150 * KW_201_350 +
      (soKw - 350) * 1300;
  }
  document.getElementById("txtTienDien").innerHTML =
    "Tên khách hàng: " +
    hoTen +
    "; Tiền điện là: " +
    tongTien.toLocaleString() +
    "đ";
}

document.getElementById("btnTinhTienDien").onclick = tinhTienDien;
