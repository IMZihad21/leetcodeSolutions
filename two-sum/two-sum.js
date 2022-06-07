/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    for (let i = start; i < end; i++) {
        for (let j = end; j > i; j--) {
            if (nums[ i ] + nums[ j ] === target) {
                return [ i, j ]
            }
        }
    }
};
