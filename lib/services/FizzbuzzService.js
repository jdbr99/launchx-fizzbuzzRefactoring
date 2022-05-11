module.exports = class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 == 0) {
            if (explorer.score % 3 == 0)
                explorer.trick = "FIZZBUZZ"
            else
                explorer.trick = "BUZZ"
        } else if (explorer.score % 3 == 0) {
            explorer.trick = "FIZZ"
        } else {
            explorer.trick = explorer.score
        }
        return explorer
    }
}