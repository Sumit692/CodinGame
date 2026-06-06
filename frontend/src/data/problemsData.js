const problemsData = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    xp: 50,

    description:
      "Given an array of integers nums and a target, return indices of two numbers that add up to the target.",

    starterCode: `function twoSum(nums, target) {

}`,

    exampleInput: `nums = [2,7,11,15]
target = 9`,

    exampleOutput: `[0,1]`,

    constraints: [
      "2 <= nums.length <= 10⁴",
      "-10⁹ <= nums[i] <= 10⁹",
      "-10⁹ <= target <= 10⁹",
    ],

    hint: "Use a HashMap to store previously seen values.",

    acceptanceRate: "84%",

    tags: [
      "Arrays",
      "HashMap",
    ],
  },

  {
    id: 2,
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Arrays",
    xp: 100,

    description:
      "Find the contiguous subarray with the largest sum.",

    starterCode: `function maxSubArray(nums) {

}`,

    exampleInput: `nums = [-2,1,-3,4,-1,2,1,-5,4]`,

    exampleOutput: `6`,

    constraints: [
      "1 <= nums.length <= 10⁵",
      "-10⁴ <= nums[i] <= 10⁴",
    ],

    hint: "Try Kadane's Algorithm.",

    acceptanceRate: "63%",

    tags: [
      "Arrays",
      "Dynamic Programming",
    ],
  },

  {
    id: 3,
    title: "Binary Search",
    difficulty: "Easy",
    category: "Searching",
    xp: 75,

    description:
      "Implement binary search on a sorted array.",

    starterCode: `function binarySearch(nums, target) {

}`,

    exampleInput: `nums = [-1,0,3,5,9,12]
target = 9`,

    exampleOutput: `4`,

    constraints: [
      "1 <= nums.length <= 10⁴",
      "nums is sorted",
    ],

    hint: "Use left, right and mid pointers.",

    acceptanceRate: "78%",

    tags: [
      "Searching",
      "Binary Search",
    ],
  },

  {
    id: 4,
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Sorting",
    xp: 125,

    description:
      "Merge all overlapping intervals.",

    starterCode: `function mergeIntervals(intervals) {

}`,

    exampleInput: `[[1,3],[2,6],[8,10],[15,18]]`,

    exampleOutput: `[[1,6],[8,10],[15,18]]`,

    constraints: [
      "1 <= intervals.length <= 10⁴",
    ],

    hint: "Sort intervals before merging.",

    acceptanceRate: "55%",

    tags: [
      "Sorting",
      "Intervals",
    ],
  },

  {
    id: 5,
    title: "Dijkstra Algorithm",
    difficulty: "Hard",
    category: "Graphs",
    xp: 250,

    description:
      "Find shortest paths from source node.",

    starterCode: `function dijkstra(graph, source) {

}`,

    exampleInput: `source = 0`,

    exampleOutput: `[0,4,7,10]`,

    constraints: [
      "Graph contains non-negative weights",
    ],

    hint: "Use a Priority Queue (Min Heap).",

    acceptanceRate: "41%",

    tags: [
      "Graphs",
      "Priority Queue",
    ],
  },
];

export default problemsData;