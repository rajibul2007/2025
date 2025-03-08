function calculateEMI() {
    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let loanTenure = document.getElementById("loanTenure").value;

    if (loanAmount == "" || interestRate == "" || loanTenure == "") {
        alert("Please fill all fields");
        return;
    }

    let r = (interestRate / 100) / 12;
    let n = loanTenure;
    let emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById("emiResult").innerText = emi.toFixed(2);
}
