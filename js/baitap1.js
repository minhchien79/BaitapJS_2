function ketQua() {
  let diemChuan = document.getElementById("inputDiemChuan").value;
  console.log("Điểm chuẩn", diemChuan);
  let radioA = document.getElementById("khuVucA");
  let radioB = document.getElementById("khuVucB");
  let radioC = document.getElementById("khuVucC");

  let checkbox1 = document.getElementById("doiTuong1");
  let checkbox2 = document.getElementById("doiTuong2");
  let checkbox3 = document.getElementById("doiTuong3");

  let mon1 = document.getElementById("inputDiemMon1").value;
  let mon2 = document.getElementById("inputDiemMon2").value;
  let mon3 = document.getElementById("inputDiemMon3").value;

  let khuVuc = "";
  if (radioA.checked) {
    khuVuc = "A";
  } else if (radioB.checked) {
    khuVuc = "B";
  } else if (radioC.checked) {
    khuVuc = "C";
  } else {
    khuVuc = "X";
  }
  console.log(khuVuc);

  let diemKhuVuc = 0;
  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    case "X":
      diemKhuVuc = 0;
      break;

    default:
      diemKhuVuc = 0;
      break;
  }
  let doiTuong = "";
  if (checkbox1.checked) {
    doiTuong = 1;
  } else if (checkbox2.checked) {
    doiTuong = 2;
  } else if (checkbox3.checked) {
    doiTuong = 3;
  } else {
    doiTuong = 0;
  }
  console.log(doiTuong);

  let diemDoiTuong = 0;
  switch (doiTuong) {
    case 1:
      diemDoiTuong = 2.5;
      break;
    case 2:
      diemDoiTuong = 1.5;
      break;
    case 3:
      diemDoiTuong = 1;
      break;
    case 0:
      diemDoiTuong = 0;
      break;

    default:
      diemDoiTuong = 0;
      break;
  }
  let diemTongKet =
    Number(mon1) + Number(mon2) + Number(mon3) + diemKhuVuc + diemDoiTuong;
  console.log(diemTongKet);

  let hienThiKetQua = 0;
  if (mon1 > 10 || mon2 > 10 || mon3 > 10 || diemChuan > 30) {
    alert("Vui lòng nhập đúng thông tin");
  } else if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
    hienThiKetQua = "Bạn đã rớt do có môn bằng 0";
  } else if (diemTongKet >= diemChuan) {
    hienThiKetQua = "Bạn đã đậu với điểm tổng là: " + diemTongKet;
  } else {
    hienThiKetQua = "Bạn đã rớt với điểm tổng là: " + diemTongKet;
  }

  document.getElementById("txtDiemTong").innerHTML =
    "Kết quả: " + hienThiKetQua;
}
document.getElementById("btnTinhDiemTong").onclick = ketQua;
