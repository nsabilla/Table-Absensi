const API_URL =
  "https://api.steinhq.com/v1/storages/64224443d27cdd09f0eb1eac/21a3";

let tampilkan = ""; 
fetch(API_URL)
  .then(async (values) => await values.json())
  .then((value) => {
    value.forEach((data_a3) => {
      tampilkan += `
        <tr>
          <td>${data_a3["NO"]}</td>
          <td>${data_a3["NaMa"]}</td>
          <td>${data_a3["NIM"]}</td>
          <td>${data_a3["1"]}</td>
          <td>${data_a3["2"]}</td>
          <td>${data_a3["3"]}</td>
        </tr>
        `;
    });
    document.querySelector(".table-contents").innerHTML = tampilkan;
  });
