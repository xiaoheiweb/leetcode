/*
 * @Author: haorongzheng
 * @Date: 2022-01-18 14:34:19
 * @LastEditTime: 2022-01-18 14:34:20
 * @LastEditors: haorongzheng
 * @Description: 
 * @FilePath: /leetcode/最小时间差.js
 * 保佑代码永无bug
 */

/**
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/minimum-time-difference
 * 
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
 * 

    示例 1：

    输入：timePoints = ["23:59","00:00"]
    输出：1
    示例 2：

    输入：timePoints = ["00:00","23:59","00:00"]
    输出：0
     

    提示：

    2 <= timePoints <= 2 * 104
    timePoints[i] 格式为 "HH:MM"
 */

var findMinDifference = function(timePoints) {
    const n = timePoints.length;
    if (n > 1440) {
        return 0;
    }
    timePoints.sort();
    let ans = Number.MAX_VALUE;
    let t0Minutes = getMinutes(timePoints[0]);
    let preMinutes = t0Minutes;
    for (let i = 1; i < n; ++i) {
        const minutes = getMinutes(timePoints[i]);
        ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
        preMinutes = minutes;
    }
    ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
    return ans;
};

const getMinutes = (t) => {
    return ((t[0].charCodeAt() - '0'.charCodeAt()) * 10 + (t[1].charCodeAt() - '0'.charCodeAt())) * 60 + (t[3].charCodeAt() - '0'.charCodeAt()) * 10 + (t[4].charCodeAt() - '0'.charCodeAt());
}