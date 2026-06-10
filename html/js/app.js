const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// Nút Add trong popup
const addBtn = document.querySelector(".add-btn");

// Input
const managerInput =
document.querySelectorAll(".popup-content input")[0];

const addressInput =
document.querySelectorAll(".popup-content input")[1];

// Mở popup
openPopup.addEventListener("click", function () {

    popup.style.display = "block";

});

// Đóng popup
closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});

// Thêm Store
addBtn.addEventListener("click", function () {

    let manager = managerInput.value.trim();
    let address = addressInput.value.trim();

    if (manager === "" || address === "") {

        alert("Vui lòng nhập đầy đủ thông tin");

        return;
    }

    let tbody =
    document.querySelector("tbody");

    let rowCount =
    tbody.rows.length + 1;

    let today =
    new Date().toLocaleString();

    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>
            <button class="view">👁</button>
            <button class="edit">✏</button>
            <button class="delete">✖</button>
        </td>

        <td>${rowCount}</td>

        <td>${manager}</td>

        <td>${address}</td>

        <td>${today}</td>
    `;

    tbody.appendChild(newRow);

    managerInput.value = "";
    addressInput.value = "";

    popup.style.display = "none";
});