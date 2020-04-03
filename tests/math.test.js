const { tipCal, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../src/math')

test('Should Calculate Tip', () => {
  const total = tipCal(50, .2)
  expect(total).toBe(60)
})

test('Should Caclutae tip with default', () => {
  const total = tipCal(10)
  expect(total).toBe(12)
})

test('Should Convert Celcius To Fahrenheit', () => {
  const temp = celsiusToFahrenheit(0)
  expect(temp).toBe(32)
})

test('Should convert fahrenhiet to celcius', () => {
  const temp = fahrenheitToCelsius(32)
  expect(temp).toBe(0)
})

test('should add two numbers async/await', async () => {
  const sum = await add(10, 22)
  expect(sum).toBe(32)
})