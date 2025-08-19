let start = 1000;       // סכום התחלתי
let rate = 0.10;        // 10% ריבית
let years = 10;         // כמה שנים
let amount = start;

let output = "<h1>חישוב עלייה שנתית 10%</h1>";
output += "<table border='1' style='border-collapse: collapse; text-align:center;'>";
output += "<tr><th>שנה</th><th>סכום בסוף השנה</th></tr>";

for (let i = 1; i <= years; i++) {
  amount = amount * (1 + rate); // ריבית דריבית
  output += `<tr><td>${i}</td><td>${amount.toFixed(2)} ₪</td></tr>`;
}

output += "</table>";

document.body.innerHTML = output;
