// calculateCapacity関数の更新
function calculateCapacity() {
  var w = document.getElementById("w").value;
  var number = document.getElementById("number").value;
  var hours = document.getElementById("hours").value;

  fetch("/calculate_capacity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      w: w,
      number: number,
      hours: hours,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("system_capacity").value = data.capacity;
    });
}

// calculateIncome関数の更新
function calculateIncome() {
  var system_capacity = document.getElementById("system_capacity").value;
  var annual_generation = document.getElementById("annual_generation").value;
  var sale_ratio = document.getElementById("sale_ratio").value;
  var sale_price = document.getElementById("sale_price").value;
  var custom_sale_price = document.getElementById("custom_sale_price").value;

  // カスタム売電単価が入力されている場合はそれを使用
  if (custom_sale_price) {
    sale_price = custom_sale_price;
  }

  fetch("/calculate_income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      system_capacity: system_capacity,
      annual_generation: annual_generation,
      sale_ratio: sale_ratio,
      sale_price: sale_price,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result2").innerText =
        "結果: " + data.income + " 円 / 年";
    });
}
