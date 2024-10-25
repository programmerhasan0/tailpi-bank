// * Getting the elements
const balance: HTMLSpanElement = document.getElementById("balance")!;
const deposit: HTMLSpanElement = document.getElementById("deposit")!;
const withdraw: HTMLSpanElement = document.getElementById("withdraw")!;

// * Deposit and Withdraw Amounts
const depositAmount = document.getElementById(
    "depositAmount"
) as HTMLInputElement;

const withdrawAmount = document.getElementById(
    "withdrawAmount"
) as HTMLInputElement;

// * Buttons
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const withdrawBtn = document.getElementById("withdrawBtn") as HTMLButtonElement;

// * Deposit the money
addBtn.addEventListener("click", (): void => {
    const depositValue: number = parseFloat(depositAmount.value);

    if (depositValue > 0) {
        const newDeposit: number = depositValue + parseFloat(deposit.innerText);
        deposit.innerText = "" + newDeposit;

        const oldBalance: number = parseFloat(balance.innerText);
        balance.innerText = String(oldBalance + depositValue);

        depositAmount.value = "";
    } else alert("Please Enter the deposit amount");
});

// * Withdraw the money
withdrawBtn.addEventListener("click", (): void => {
    const withdrawValue: number = parseFloat(withdrawAmount.value);

    if (withdrawValue > 0) {
        const oldWithDraw: number = parseFloat(withdraw.innerText);
        withdraw.innerText = String(withdrawValue + oldWithDraw);

        const oldBalance: number = parseFloat(balance.innerText);
        balance.innerText = String(oldBalance - withdrawValue);

        withdrawAmount.value = "";
    } else alert("Please Enter withdrw amount");
});
