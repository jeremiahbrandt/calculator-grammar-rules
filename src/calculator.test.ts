import { calculate } from "./calculator";

test("1 + 2", () => {
    // Arrange
    const inputString = "1 + 2"
    const expectedResult = 3

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("1 + 2 + 3", () => {
    // Arrange
    const inputString = "1 + 2 + 3"
    const expectedResult = 6

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 - 1", () => {
    // Arrange
    const inputString = "3 - 1"
    const expectedResult = 2

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 - 2 - 1", () => {
    // Arrange
    const inputString = "3 - 2 - 1"
    const expectedResult = 0

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("4 - 3 - 2", () => {
    // Arrange
    const inputString = "4 - 3 - 2"
    const expectedResult = -1

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("4 * 3", () => {
    // Arrange
    const inputString = "4 * 3"
    const expectedResult = 12

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("4 * 3 * 2", () => {
    // Arrange
    const inputString = "4 * 3 * 2"
    const expectedResult = 24

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 / 4", () => {
    // Arrange
    const inputString = "3 / 4"
    const expectedResult = 0.75

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 / 4 / 5", () => {
    // Arrange
    const inputString = "3 / 4 / 5"
    const expectedResult = 0.15

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 + 4 * 5", () => {
    // Arrange
    const inputString = "3 + 4 * 5"
    const expectedResult = 23

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 + 4 / 5", () => {
    // Arrange
    const inputString = "3 + 4 / 5"
    const expectedResult = 3.8

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 + 4 / 5 * 6", () => {
    // Arrange
    const inputString = "3 + 4 / 5 * 6"
    const expectedResult = 7.8

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})

test("3 + 4 * 5 / 2", () => {
    // Arrange
    const inputString = "3 + 4 * 5 / 2"
    const expectedResult = 13

    // Act
    const result = calculate(inputString)

    // Assert
    expect(result).toBe(expectedResult)
})