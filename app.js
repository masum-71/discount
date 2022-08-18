function getInputeValue(input) {
  const inputValue = document.getElementById(input).value;
  return inputValue;
}

document.getElementById("btn").addEventListener("click", () => {
  const price = parseFloat(getInputeValue("price"));
  const discount = parseFloat(getInputeValue("discount"));
  const coupon = getInputeValue("coupon");
  const discountedPrice = document.getElementById("discounted-price");
  if (getInputeValue("price") === "") {
    alert("Please Enter Your Price");
  } else {
    if (getInputeValue("discount") === "") {
      alert("Please Enter Your Discount Rate");
    } else {
      if (coupon !== "DOM") {
        alert("Please Enter a Valid Coupon Code");
      } else {
        discountedPrice.innerText = price - (price * discount) / 100;
      }
    }
  }
});
