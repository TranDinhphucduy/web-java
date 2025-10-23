document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSinhVien");
    const tbody = document.querySelector("tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const maSV = document.getElementById("maSV").value.trim();
        const hoTen = document.getElementById("hoTen").value.trim();
        const diemTB = document.getElementById("diemTB").value.trim();

        if (maSV === "" || hoTen === "" || diemTB === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${maSV}</td>
            <td>${hoTen}</td>
            <td>${diemTB}</td>
            <td>
                <button class="sua">Sửa</button>
                <button class="xoa">Xóa</button>
            </td>
        `;

        tbody.appendChild(newRow);
        form.reset();

       
        const btnXoa = newRow.querySelector(".xoa");
        btnXoa.addEventListener("click", function () {
            if (confirm("Bạn có chắc muốn xóa sinh viên này?")) {
                newRow.remove();
            }
        });

        const btnSua = newRow.querySelector(".sua");
        btnSua.addEventListener("click", function () {
            document.getElementById("maSV").value = maSV;
            document.getElementById("hoTen").value = hoTen;
            document.getElementById("diemTB").value = diemTB;
            newRow.remove();
        });
    });
});