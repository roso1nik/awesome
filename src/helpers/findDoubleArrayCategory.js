export default function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][1].replace(/\//g, "") === item) {
            return array[i][0]; // Found it
        }
    }
    return false; // Not found
}
