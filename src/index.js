/**
 * isNumeric
 *
 * determines if a thing is numeric. Unlike _.isNumber, this returns
 * true for numeric strings like "1.01".
 *
 * This function is taken directly from jQuery:
 * https://github.com/jquery/jquery/blob/c869a1ef8a031342e817a2c063179a787ff57239/src/core.js#L214
 *
 * @param  {*}  n - a value to be tested
 *
 * @return {Boolean} whether it is numeric
 */
export default function isNumeric(n) {
  // parseFloat NaNs numeric-cast false positives (null|true|false|"")
  // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
  // subtraction forces infinities to NaN
  // adding 1 corrects loss of precision from parseFloat (#15100)
  return !Array.isArray( n ) && (n - parseFloat( n ) + 1) >= 0;
}
