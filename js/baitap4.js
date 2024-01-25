function hienThiNhapKetNoi() {
  let loaiKH = document.getElementById("loaiKH").value;
  console.log("loại KH", loaiKH);
  let hienSoKetNoi = document.getElementById("hienSoKetNoi");
  console.log(hienSoKetNoi);
  if (loaiKH === "doanhNghiep") {
    hienSoKetNoi.style.display = "block";
  } else {
    hienSoKetNoi.style.display = "none";
  }
}
function tinhTienCap() {
  let loaiKhachHang = document.getElementById("loaiKH").value;
  let maKH = document.getElementById("inputMaKH").value;
  let soKenh = document.getElementById("inputSoKenh").value;
  let soKetNoi = document.getElementById("inputSoKetNoi").value;

  let phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap;

  let tongTien = 0;
  if (loaiKhachHang != "nhaDan" && loaiKhachHang != "doanhNghiep") {
    alert("Vui lòng chọn loại khách hàng");
  } else if (loaiKhachHang == "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenhCaoCap = 7.5 * soKenh;
  } else if (soKetNoi > 10) {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    phiThueKenhCaoCap = 50 * soKenh;
  } else {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75;
    phiThueKenhCaoCap = 50 * soKenh;
  }

  tongTien = phiDichVuCoBan + phiXuLyHoaDon + phiThueKenhCaoCap;
  document.getElementById("txtTienCap").innerHTML =
    "Mã khách hàng: " + maKH + " $" + tongTien;
}
document.getElementById("btnTinhTienCap").onclick = tinhTienCap;
