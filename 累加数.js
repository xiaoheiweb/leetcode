/*
 * @Author: haorongzheng
 * @Date: 2022-01-10 10:20:14
 * @LastEditTime: 2022-01-10 10:26:52
 * @LastEditors: haorongzheng
 * @Description: 
 * @FilePath: /leetcode/累加数.js
 * 保佑代码永无bug
 */

/**
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/additive-number
 * 
 * 累加数 是一个字符串，组成它的数字可以形成累加序列。
 * 一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 * 给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。
 * 说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 * 
    示例 1：

    输入："112358"
    输出：true 
    解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

    示例 2：

    输入："199100199"
    输出：true 
    解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
     
    提示：

    1 <= num.length <= 35
    num 仅由数字（0 - 9）组成
     

    进阶：你计划如何处理由过大的整数输入导致的溢出?
 */

var isAdditiveNumber = function(num) {
    for (let i = 0; i < num.length - 2; i++) {
        for (let j = i + 1; j < num.length - 1; j++) {
        const a = num.slice(0, i + 1);
        const b = num.slice(i + 1, j + 1);
        if (a[0] === '0' && a.length > 1 || b[0] === '0' && b.length > 1) continue;
        if (j + 1 === num.length) continue;
        if (dfs(num, j + 1, a, b)) return true;
        }
    }
    return false;
    
    function dfs(str, startIndex, add1, add2) {
        if (startIndex === num.length) {
        return true;
        }
        const shouldBeNext = (add1 - 0) + (add2 - 0) + '';
        const nextNum = num.slice(startIndex, startIndex + shouldBeNext.length);
        if (nextNum === shouldBeNext && dfs(str, startIndex + shouldBeNext.length, add2, nextNum)) {
        return true;
        }
        return false;
    }
};