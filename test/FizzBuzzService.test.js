const FizzbuzzService = require("../lib/services/FizzbuzzService")

describe("FizzBuzzService tests", () => {
    test("Trick is score when no further action needed", () => {
        const explorer1 = { name: "Explorer1", score: 1 }
        const res = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(res.trick).toBe(1);
    })

    test("Correctly assigns 'FIZZ'", () => {
        const explorer3 = { name: "Explorer3", score: 3 }
        const res = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(res.trick).toBe("FIZZ")
    })

    test("Correctly assigns 'BUZZ'", () => {
        const explorer5 = { name: "Explorer5", score: 5 }
        const res = FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(res.trick).toBe("BUZZ")
    })

    test("Correctly assigns 'FIZZBUZZ'", () => {
        const explorer15 = { name: "Explorer15", score: 15 }
        const res = FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(res.trick).toBe("FIZZBUZZ")
    })
})