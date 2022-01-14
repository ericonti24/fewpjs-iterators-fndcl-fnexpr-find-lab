function superbowlWin(array) {
    const game = array.find(game => game.result === "W");
    if (game) {
        return game.year;
    }
}
