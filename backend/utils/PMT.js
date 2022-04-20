function pmt(
  number_of_payments,
  rate_per_period,
  present_value,
  future_value,
  type
) {
  future_value = typeof future_value !== "undefined" ? future_value : 0;
  type = typeof type !== "undefined" ? type : 0;

  if (rate_per_period != 0.0) {
    var q = Math.pow(1 + rate_per_period, number_of_payments);
    return (
      -(rate_per_period * (future_value + q * present_value)) /
      ((-1 + q) * (1 + rate_per_period * type))
    );
  } else if (number_of_payments != 0.0) {
    return -(future_value + present_value) / number_of_payments;
  }

  return 0;
}

module.exports = pmt;
