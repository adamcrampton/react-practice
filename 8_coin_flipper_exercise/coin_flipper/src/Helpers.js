class Helpers {
    coinFlip() {
        return Math.round(Math.random()) ? "heads" : "tails";
    }
}

// This is how you export a class method.
export const coinFlip = Helpers.prototype.coinFlip;