function tinhTienThue() {
  let ten = document.getElementById("inputTen").value;
  let thuNhapNam = document.getElementById("inputThuNhapNam").value;
  let nguoiPhuThuoc = document.getElementById("inputNguoiPhuThuoc").value;

  let THUE_60 = 0.05;
  let THUE_61_120 = 0.1;
  let THUE_121_210 = 0.15;
  let THUE_211_384 = 0.2;
  let THUE_385_624 = 0.25;
  let THUE_625_960 = 0.3;
  let THUE_TREN_960 = 0.35;

  let thuNhapChiuThue = thuNhapNam - 4e6 - nguoiPhuThuoc * 16e5;

  let thue = 0;
  if (thuNhapChiuThue <= 60e6) {
    thue = thuNhapChiuThue * THUE_60;
  } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
    thue = 60e6 * THUE_60 + (thuNhapChiuThue - 60e6) * THUE_61_120;
  } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
    thue =
      60e6 * THUE_60 + 60e6 * THUE_61_120 + (thuNhapChiuThue - 120e6) * 0.15;
  } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
    thue =
      60e6 * THUE_60 +
      60e6 * THUE_61_120 +
      90e6 * THUE_121_210 +
      (thuNhapChiuThue - 210e6) * 0.2;
  } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
    thue =
      60e6 * THUE_60 +
      60e6 * THUE_61_120 +
      90e6 * THUE_121_210 +
      174e6 * THUE_211_384 +
      (thuNhapChiuThue - 384e6) * 0.25;
  } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
    thue =
      60e6 * THUE_60 +
      60e6 * THUE_61_120 +
      90e6 * THUE_121_210 +
      174e6 * THUE_211_384 +
      240e6 * THUE_385_624 +
      (thuNhapChiuThue - 624e6) * 0.3;
  } else {
    thue =
      60e6 * THUE_60 +
      60e6 * THUE_61_120 +
      90e6 * THUE_121_210 +
      174e6 * THUE_211_384 +
      240e6 * THUE_385_624 +
      336e6 * THUE_625_960 +
      (thuNhapChiuThue - 960e6) * THUE_TREN_960;
  }

  document.getElementById("txtTienThue").innerHTML =
    "Họ tên: " +
    ten +
    "; Tiền thuế thu nhập cá nhân: " +
    thue.toLocaleString() +
    " VND";
}
document.getElementById("btnTinhThue").onclick = tinhTienThue;
