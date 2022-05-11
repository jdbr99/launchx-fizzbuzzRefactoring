module.exports = class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 == 0) {
            if (explorer.score % 3 == 0)
                explorer.trick = "FIZZBUZZ";
            else
                explorer.trick = "BUZZ";
        } else if (explorer.score % 3 == 0) {
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = explorer.score;
        }
        return explorer;
    }

    static applyValidationInNumber(number) {
        let res = { score: number };
        if (number % 5 == 0) {
            if (number % 3 == 0)
                res.trick = "FIZZBUZZ";
            else
                res.trick = "BUZZ";
        } else if (number % 3 == 0) {
            res.trick = "FIZZ";
        } else {
            res.trick = res.score;
        }
        return res;
    }
};