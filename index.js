var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("total price:", calculation);
  },
};
