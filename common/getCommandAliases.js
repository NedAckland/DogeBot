module.exports = function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value?.aliases?.includes(searchValue)){
            return key;
        }
    }
}