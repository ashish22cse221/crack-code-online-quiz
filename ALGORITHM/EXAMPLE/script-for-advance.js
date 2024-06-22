const questions = [
    {
      question: "Write a function to implement binary search on a sorted array.",
      options: [
        "function binarySearch(arr, target) { let start = 0; let end = arr.length - 1; while (start <= end) { let mid = Math.floor((start + end) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) start = mid + 1; else end = mid - 1; } return -1; }",
        "function searchBinary(arr, target) { let start = 0; let end = arr.length - 1; while (start <= end) { let mid = Math.floor((start + end) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) start = mid + 1; else end = mid - 1; } return -1; }",
        "function findBinary(arr, target) { let start = 0; let end = arr.length - 1; while (start <= end) { let mid = Math.floor((start + end) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) start = mid + 1; else end = mid - 1; } return -1; }",
        "function binaryFind(arr, target) { let start = 0; let end = arr.length - 1; while (start <= end) { let mid = Math.floor((start + end) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) start = mid + 1; else end = mid - 1; } return -1; }"
      ],
      answer: "function binarySearch(arr, target) { let start = 0; let end = arr.length - 1; while (start <= end) { let mid = Math.floor((start + end) / 2); if (arr[mid] === target) return mid; else if (arr[mid] < target) start = mid + 1; else end = mid - 1; } return -1; }",
      explanation: "This function performs binary search on a sorted array to find the index of the target element."
    },
    {
      question: "Write a function to implement quicksort algorithm for sorting an array.",
      options: [
        "function quickSort(arr) { if (arr.length <= 1) return arr; let pivot = arr[Math.floor(Math.random() * arr.length)]; let left = []; let right = []; for (let i = 1; i < arr.length; i++) { if (arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]); } return [...quickSort(left), pivot, ...quickSort(right)]; }",
        "function sortQuick(arr) { if (arr.length <= 1) return arr; let pivot = arr[0]; let left = []; let right = []; for (let i = 1; i < arr.length; i++) { if (arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]); } return [...sortQuick(left), pivot, ...sortQuick(right)]; }",
        "function quickSortArray(arr) { if (arr.length <= 1) return arr; let pivot = arr[Math.floor(Math.random() * arr.length)]; let left = []; let right = []; for (let i = 1; i < arr.length; i++) { if (arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]); } return [...quickSortArray(left), pivot, ...quickSortArray(right)]; }",
        "function sortArrayQuick(arr) { if (arr.length <= 1) return arr; let pivot = arr[0]; let left = []; let right = []; for (let i = 1; i < arr.length; i++) { if (arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]); } return [...sortArrayQuick(left), pivot, ...sortArrayQuick(right)]; }"
      ],
      answer: "function quickSort(arr) { if (arr.length <= 1) return arr; let pivot = arr[Math.floor(Math.random() * arr.length)]; let left = []; let right = []; for (let i = 1; i < arr.length; i++) { if (arr[i] < pivot) left.push(arr[i]); else right.push(arr[i]); } return [...quickSort(left), pivot, ...quickSort(right)]; }",
      explanation: "This function implements the quicksort algorithm to sort an array efficiently."
    },
    {
      question: "Write a function to find the longest increasing subsequence of an array of integers.",
      options: [
        "function longestIncreasingSubsequence(nums) { if (nums.length === 0) return 0; let dp = new Array(nums.length).fill(1); for (let i = 1; i < nums.length; i++) { for (let j = 0; j < i; j++) { if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1); } } return Math.max(...dp); }",
        "function findLongestIncreasingSubsequence(nums) { if (nums.length === 0) return 0; let dp = new Array(nums.length).fill(1); for (let i = 1; i < nums.length; i++) { for (let j = 0; j < i; j++) { if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1); } } return Math.max(...dp); }",
        "function getLongestIncreasingSubsequence(nums) { if (nums.length === 0) return 0; let dp = new Array(nums.length).fill(1); for (let i = 1; i < nums.length; i++) { for (let j = 0; j < i; j++) { if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1); } } return Math.max(...dp); }",
        "function calculateLongestIncreasingSubsequence(nums) { if (nums.length === 0) return 0; let dp = new Array(nums.length).fill(1); for (let i = 1; i < nums.length; i++) { for (let j = 0; j < i; j++) { if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1); } } return Math.max(...dp); }"
      ],
      answer: "function longestIncreasingSubsequence(nums) { if (nums.length === 0) return 0; let dp = new Array(nums.length).fill(1); for (let i = 1; i < nums.length; i++) { for (let j = 0; j < i; j++) { if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1); } } return Math.max(...dp); }",
      explanation: "This function finds the length of the longest increasing subsequence in an array of integers."
    },
    {
      question: "Write a function to implement Dijkstra's algorithm for finding the shortest path in a weighted graph.",
      options: [
        "function dijkstra(graph, start) { let distances = {}; let pq = new PriorityQueue(); for (let vertex in graph) { distances[vertex] = vertex === start ? 0 : Infinity; pq.enqueue(vertex, distances[vertex]); } while (!pq.isEmpty()) { let shortestPathNode = pq.dequeue().value; for (let neighbor in graph[shortestPathNode]) { let weight = distances[shortestPathNode] + graph[shortestPathNode][neighbor]; if (weight < distances[neighbor]) { distances[neighbor] = weight; pq.enqueue(neighbor, weight); } } } return distances; }",
        "function findShortestPath(graph, start) { let distances = {}; let pq = new PriorityQueue(); for (let vertex in graph) { distances[vertex] = vertex === start ? 0 : Infinity; pq.enqueue(vertex, distances[vertex]); } while (!pq.isEmpty()) { let shortestPathNode = pq.dequeue().value; for (let neighbor in graph[shortestPathNode]) { let weight = distances[shortestPathNode] + graph[shortestPathNode][neighbor]; if (weight < distances[neighbor]) { distances[neighbor] = weight; pq.enqueue(neighbor, weight); } } } return distances; }",
        "function shortestPathDijkstra(graph, start) { let distances = {}; let pq = new PriorityQueue(); for (let vertex in graph) { distances[vertex] = vertex === start ? 0 : Infinity; pq.enqueue(vertex, distances[vertex]); } while (!pq.isEmpty()) { let shortestPathNode = pq.dequeue().value; for (let neighbor in graph[shortestPathNode]) { let weight = distances[shortestPathNode] + graph[shortestPathNode][neighbor]; if (weight < distances[neighbor]) { distances[neighbor] = weight; pq.enqueue(neighbor, weight); } } } return distances; }",
        "function implementDijkstra(graph, start) { let distances = {}; let pq = new PriorityQueue(); for (let vertex in graph) { distances[vertex] = vertex === start ? 0 : Infinity; pq.enqueue(vertex, distances[vertex]); } while (!pq.isEmpty()) { let shortestPathNode = pq.dequeue().value; for (let neighbor in graph[shortestPathNode]) { let weight = distances[shortestPathNode] + graph[shortestPathNode][neighbor]; if (weight < distances[neighbor]) { distances[neighbor] = weight; pq.enqueue(neighbor, weight); } } } return distances; }"
      ],
      answer: "function dijkstra(graph, start) { let distances = {}; let pq = new PriorityQueue(); for (let vertex in graph) { distances[vertex] = vertex === start ? 0 : Infinity; pq.enqueue(vertex, distances[vertex]); } while (!pq.isEmpty()) { let shortestPathNode = pq.dequeue().value; for (let neighbor in graph[shortestPathNode]) { let weight = distances[shortestPathNode] + graph[shortestPathNode][neighbor]; if (weight < distances[neighbor]) { distances[neighbor] = weight; pq.enqueue(neighbor, weight); } } } return distances; }",
      explanation: "This function implements Dijkstra's algorithm to find the shortest path in a weighted graph."
    },
    {
      question: "Write a function to calculate the edit distance between two strings.",
      options: [
        "function editDistance(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 0; i <= m; i++) { dp[i][0] = i; } for (let j = 0; j <= n; j++) { dp[0][j] = j; } for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1]; else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1; } } return dp[m][n]; }",
        "function calculateEditDistance(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 0; i <= m; i++) { dp[i][0] = i; } for (let j = 0; j <= n; j++) { dp[0][j] = j; } for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1]; else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1; } } return dp[m][n]; }",
        "function findEditDistance(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 0; i <= m; i++) { dp[i][0] = i; } for (let j = 0; j <= n; j++) { dp[0][j] = j; } for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1]; else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1; } } return dp[m][n]; }",
        "function getEditDistance(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 0; i <= m; i++) { dp[i][0] = i; } for (let j = 0; j <= n; j++) { dp[0][j] = j; } for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1]; else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1; } } return dp[m][n]; }"
      ],
      answer: "function editDistance(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 0; i <= m; i++) { dp[i][0] = i; } for (let j = 0; j <= n; j++) { dp[0][j] = j; } for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1]; else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1; } } return dp[m][n]; }",
      explanation: "This function calculates the minimum number of operations required to convert one string into another, where the operations are insertion, deletion, or substitution of a single character."
    },
    {
      question: "Write a function to solve the longest common subsequence problem between two strings.",
      options: [
        "function longestCommonSubsequence(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); } } return dp[m][n]; }",
        "function solveLongestCommonSubsequence(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); } } return dp[m][n]; }",
        "function commonLongestSubsequence(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); } } return dp[m][n]; }",
        "function findLongestCommonSubsequence(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); } } return dp[m][n]; }"
      ],
      answer: "function longestCommonSubsequence(str1, str2) { let m = str1.length; let n = str2.length; let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0)); for (let i = 1; i <= m; i++) { for (let j = 1; j <= n; j++) { if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); } } return dp[m][n]; }",
      explanation: "This function finds the length of the longest common subsequence between two strings."
    },
    {
      question: "Write a function to implement the Floyd-Warshall algorithm for finding all-pairs shortest paths in a weighted graph.",
      options: [
        "function floydWarshall(graph) { let dist = []; let n = graph.length; for (let i = 0; i < n; i++) { dist[i] = []; for (let j = 0; j < n; j++) { if (i === j) dist[i][j] = 0; else if (graph[i][j] === 0) dist[i][j] = Infinity; else dist[i][j] = graph[i][j]; } } for (let k = 0; k < n; k++) { for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j]; } } } return dist; }",
        "function allPairsShortestPaths(graph) { let dist = []; let n = graph.length; for (let i = 0; i < n; i++) { dist[i] = []; for (let j = 0; j < n; j++) { if (i === j) dist[i][j] = 0; else if (graph[i][j] === 0) dist[i][j] = Infinity; else dist[i][j] = graph[i][j]; } } for (let k = 0; k < n; k++) { for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j]; } } } return dist; }",
        "function implementFloydWarshall(graph) { let dist = []; let n = graph.length; for (let i = 0; i < n; i++) { dist[i] = []; for (let j = 0; j < n; j++) { if (i === j) dist[i][j] = 0; else if (graph[i][j] === 0) dist[i][j] = Infinity; else dist[i][j] = graph[i][j]; } } for (let k = 0; k < n; k++) { for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j]; } } } return dist; }",
        "function shortestPathsFloydWarshall(graph) { let dist = []; let n = graph.length; for (let i = 0; i < n; i++) { dist[i] = []; for (let j = 0; j < n; j++) { if (i === j) dist[i][j] = 0; else if (graph[i][j] === 0) dist[i][j] = Infinity; else dist[i][j] = graph[i][j]; } } for (let k = 0; k < n; k++) { for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j]; } } } return dist; }"
      ],
      answer: "function floydWarshall(graph) { let dist = []; let n = graph.length; for (let i = 0; i < n; i++) { dist[i] = []; for (let j = 0; j < n; j++) { if (i === j) dist[i][j] = 0; else if (graph[i][j] === 0) dist[i][j] = Infinity; else dist[i][j] = graph[i][j]; } } for (let k = 0; k < n; k++) { for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j]; } } } return dist; }",
      explanation: "This function implements the Floyd-Warshall algorithm to find the shortest paths between all pairs of vertices in a weighted graph."
    },
    {
      question: "Write a function to implement the Knuth-Morris-Pratt algorithm for string searching.",
      options: [
        "function kmpSearch(text, pattern) { let m = text.length; let n = pattern.length; let lps = computeLPSArray(pattern); let i = 0; let j = 0; while (i < m) { if (pattern[j] === text[i]) { i++; j++; } if (j === n) { return i - j; } else if (i < m && pattern[j] !== text[i]) { if (j !== 0) j = lps[j - 1]; else i++; } } return -1; } function computeLPSArray(pattern) { let len = 0; let lps = [0]; let i = 1; while (i < pattern.length) { if (pattern[i] === pattern[len]) { len++; lps[i] = len; i++; } else { if (len !== 0) len = lps[len - 1]; else { lps[i] = 0; i++; } } } return lps; }",
        "function knuthMorrisPratt(text, pattern) { let m = text.length; let n = pattern.length; let lps = computeLPSArray(pattern); let i = 0; let j = 0; while (i < m) { if (pattern[j] === text[i]) { i++; j++; } if (j === n) { return i - j; } else if (i < m && pattern[j] !== text[i]) { if (j !== 0) j = lps[j - 1]; else i++; } } return -1; } function computeLPSArray(pattern) { let len = 0; let lps = [0]; let i = 1; while (i < pattern.length) { if (pattern[i] === pattern[len]) { len++; lps[i] = len; i++; } else { if (len !== 0) len = lps[len - 1]; else { lps[i] = 0; i++; } } } return lps; }",
        "function searchKnuthMorrisPratt(text, pattern) { let m = text.length; let n = pattern.length; let lps = computeLPSArray(pattern); let i = 0; let j = 0; while (i < m) { if (pattern[j] === text[i]) { i++; j++; } if (j === n) { return i - j; } else if (i < m && pattern[j] !== text[i]) { if (j !== 0) j = lps[j - 1]; else i++; } } return -1; } function computeLPSArray(pattern) { let len = 0; let lps = [0]; let i = 1; while (i < pattern.length) { if (pattern[i] === pattern[len]) { len++; lps[i] = len; i++; } else { if (len !== 0) len = lps[len - 1]; else { lps[i] = 0; i++; } } } return lps; }",
        "function implementKnuthMorrisPratt(text, pattern) { let m = text.length; let n = pattern.length; let lps = computeLPSArray(pattern); let i = 0; let j = 0; while (i < m) { if (pattern[j] === text[i]) { i++; j++; } if (j === n) { return i - j; } else if (i < m && pattern[j] !== text[i]) { if (j !== 0) j = lps[j - 1]; else i++; } } return -1; } function computeLPSArray(pattern) { let len = 0; let lps = [0]; let i = 1; while (i < pattern.length) { if (pattern[i] === pattern[len]) { len++; lps[i] = len; i++; } else { if (len !== 0) len = lps[len - 1]; else { lps[i] = 0; i++; } } } return lps; }"
      ],
      answer: "function kmpSearch(text, pattern) { let m = text.length; let n = pattern.length; let lps = computeLPSArray(pattern); let i = 0; let j = 0; while (i < m) { if (pattern[j] === text[i]) { i++; j++; } if (j === n) { return i - j; } else if (i < m && pattern[j] !== text[i]) { if (j !== 0) j = lps[j - 1]; else i++; } } return -1; } function computeLPSArray(pattern) { let len = 0; let lps = [0]; let i = 1; while (i < pattern.length) { if (pattern[i] === pattern[len]) { len++; lps[i] = len; i++; } else { if (len !== 0) len = lps[len - 1]; else { lps[i] = 0; i++; } } } return lps; }",
      explanation: "This function implements the Knuth-Morris-Pratt algorithm for efficient string searching."
    },
    {
      question: "Write a function to implement the A* algorithm for finding the shortest path in a weighted graph with heuristic function.",
      options: [
        "function aStar(graph, start, goal) { let openSet = new PriorityQueue(); openSet.enqueue(start, 0); let cameFrom = {}; let gScore = {}; let fScore = {}; for (let node in graph) { gScore[node] = Infinity; fScore[node] = Infinity; } gScore[start] = 0; fScore[start] = heuristic(start, goal); while (!openSet.isEmpty()) { let current = openSet.dequeue().value; if (current === goal) return reconstructPath(cameFrom, current); for (let neighbor in graph[current]) { let tentativeGScore = gScore[current] + graph[current][neighbor]; if (tentativeGScore < gScore[neighbor]) { cameFrom[neighbor] = current; gScore[neighbor] = tentativeGScore; fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal); if (!openSet.includes(neighbor)) openSet.enqueue(neighbor, fScore[neighbor]); } } } return null; } function heuristic(node, goal) { /* Heuristic function implementation */ } function reconstructPath(cameFrom, current) { /* Reconstruct path implementation */ }",
        "function aStarSearch(graph, start, goal) { let openSet = new PriorityQueue(); openSet.enqueue(start, 0); let cameFrom = {}; let gScore = {}; let fScore = {}; for (let node in graph) { gScore[node] = Infinity; fScore[node] = Infinity; } gScore[start] = 0; fScore[start] = heuristic(start, goal); while (!openSet.isEmpty()) { let current = openSet.dequeue().value; if (current === goal) return reconstructPath(cameFrom, current); for (let neighbor in graph[current]) { let tentativeGScore = gScore[current] + graph[current][neighbor]; if (tentativeGScore < gScore[neighbor]) { cameFrom[neighbor] = current; gScore[neighbor] = tentativeGScore; fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal); if (!openSet.includes(neighbor)) openSet.enqueue(neighbor, fScore[neighbor]); } } } return null; } function heuristic(node, goal) { /* Heuristic function implementation */ } function reconstructPath(cameFrom, current) { /* Reconstruct path implementation */ }",
        "function aStarShortestPath(graph, start, goal) { let openSet = new PriorityQueue(); openSet.enqueue(start, 0); let cameFrom = {}; let gScore = {}; let fScore = {}; for (let node in graph) { gScore[node] = Infinity; fScore[node] = Infinity; } gScore[start] = 0; fScore[start] = heuristic(start, goal); while (!openSet.isEmpty()) { let current = openSet.dequeue().value; if (current === goal) return reconstructPath(cameFrom, current); for (let neighbor in graph[current]) { let tentativeGScore = gScore[current] + graph[current][neighbor]; if (tentativeGScore < gScore[neighbor]) { cameFrom[neighbor] = current; gScore[neighbor] = tentativeGScore; fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal); if (!openSet.includes(neighbor)) openSet.enqueue(neighbor, fScore[neighbor]); } } } return null; } function heuristic(node, goal) { /* Heuristic function implementation */ } function reconstructPath(cameFrom, current) { /* Reconstruct path implementation */ }",
        "function aStarAlgorithm(graph, start, goal) { let openSet = new PriorityQueue(); openSet.enqueue(start, 0); let cameFrom = {}; let gScore = {}; let fScore = {}; for (let node in graph) { gScore[node] = Infinity; fScore[node] = Infinity; } gScore[start] = 0; fScore[start] = heuristic(start, goal); while (!openSet.isEmpty()) { let current = openSet.dequeue().value; if (current === goal) return reconstructPath(cameFrom, current); for (let neighbor in graph[current]) { let tentativeGScore = gScore[current] + graph[current][neighbor]; if (tentativeGScore < gScore[neighbor]) { cameFrom[neighbor] = current; gScore[neighbor] = tentativeGScore; fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal); if (!openSet.includes(neighbor)) openSet.enqueue(neighbor, fScore[neighbor]); } } } return null; } function heuristic(node, goal) { /* Heuristic function implementation */ } function reconstructPath(cameFrom, current) { /* Reconstruct path implementation */ }"
      ],
      answer: "function aStar(graph, start, goal) { let openSet = new PriorityQueue(); openSet.enqueue(start, 0); let cameFrom = {}; let gScore = {}; let fScore = {}; for (let node in graph) { gScore[node] = Infinity; fScore[node] = Infinity; } gScore[start] = 0; fScore[start] = heuristic(start, goal); while (!openSet.isEmpty()) { let current = openSet.dequeue().value; if (current === goal) return reconstructPath(cameFrom, current); for (let neighbor in graph[current]) { let tentativeGScore = gScore[current] + graph[current][neighbor]; if (tentativeGScore < gScore[neighbor]) { cameFrom[neighbor] = current; gScore[neighbor] = tentativeGScore; fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal); if (!openSet.includes(neighbor)) openSet.enqueue(neighbor, fScore[neighbor]); } } } return null; } function heuristic(node, goal) { /* Heuristic function implementation */ } function reconstructPath(cameFrom, current) { /* Reconstruct path implementation */ }",
      explanation: "This function implements the A* algorithm for finding the shortest path in a weighted graph with a heuristic function."
    },
    {
      question: "Write a function to implement the Bellman-Ford algorithm for finding the shortest path in a weighted graph with negative edges.",
      options: [
        "function bellmanFord(graph, start) { let distances = {}; let vertices = Object.keys(graph); let edges = []; vertices.forEach(vertex => { distances[vertex] = vertex === start ? 0 : Infinity; Object.keys(graph[vertex]).forEach(neighbor => { edges.push({ u: vertex, v: neighbor, weight: graph[vertex][neighbor] }); }); }); for (let i = 0; i < vertices.length - 1; i++) { edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { distances[v] = distances[u] + weight; } }); } edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { throw new Error('Graph contains negative cycle'); } }); return distances; }",
        "function implementBellmanFord(graph, start) { let distances = {}; let vertices = Object.keys(graph); let edges = []; vertices.forEach(vertex => { distances[vertex] = vertex === start ? 0 : Infinity; Object.keys(graph[vertex]).forEach(neighbor => { edges.push({ u: vertex, v: neighbor, weight: graph[vertex][neighbor] }); }); }); for (let i = 0; i < vertices.length - 1; i++) { edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { distances[v] = distances[u] + weight; } }); } edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { throw new Error('Graph contains negative cycle'); } }); return distances; }",
        "function bellmanFordShortestPath(graph, start) { let distances = {}; let vertices = Object.keys(graph); let edges = []; vertices.forEach(vertex => { distances[vertex] = vertex === start ? 0 : Infinity; Object.keys(graph[vertex]).forEach(neighbor => { edges.push({ u: vertex, v: neighbor, weight: graph[vertex][neighbor] }); }); }); for (let i = 0; i < vertices.length - 1; i++) { edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { distances[v] = distances[u] + weight; } }); } edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { throw new Error('Graph contains negative cycle'); } }); return distances; }",
        "function findShortestPathBellmanFord(graph, start) { let distances = {}; let vertices = Object.keys(graph); let edges = []; vertices.forEach(vertex => { distances[vertex] = vertex === start ? 0 : Infinity; Object.keys(graph[vertex]).forEach(neighbor => { edges.push({ u: vertex, v: neighbor, weight: graph[vertex][neighbor] }); }); }); for (let i = 0; i < vertices.length - 1; i++) { edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { distances[v] = distances[u] + weight; } }); } edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { throw new Error('Graph contains negative cycle'); } }); return distances; }"
      ],
      answer: "function bellmanFord(graph, start) { let distances = {}; let vertices = Object.keys(graph); let edges = []; vertices.forEach(vertex => { distances[vertex] = vertex === start ? 0 : Infinity; Object.keys(graph[vertex]).forEach(neighbor => { edges.push({ u: vertex, v: neighbor, weight: graph[vertex][neighbor] }); }); }); for (let i = 0; i < vertices.length - 1; i++) { edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { distances[v] = distances[u] + weight; } }); } edges.forEach(edge => { let { u, v, weight } = edge; if (distances[u] + weight < distances[v]) { throw new Error('Graph contains negative cycle'); } }); return distances; }",
      explanation: "This function implements the Bellman-Ford algorithm for finding the shortest path in a weighted graph with negative edges."
    },
    {
      question: "Explain dynamic programming and its applications in computer science.",
      answer: "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the results and reusing them whenever that subproblem is encountered again. It is applicable in various fields of computer science such as optimization problems, combinatorial problems, string processing, and graph algorithms. Dynamic programming is particularly useful when the problem exhibits overlapping subproblems and optimal substructure properties. Some classic examples of dynamic programming applications include the knapsack problem, the longest common subsequence problem, and the shortest path problems.",
      explanation: "Dynamic programming is a powerful technique used to solve problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the results and reusing them whenever that subproblem is encountered again. It has wide applications in computer science, especially in problems where solutions of smaller subproblems can be combined to solve larger instances efficiently. Dynamic programming is particularly useful when the problem exhibits overlapping subproblems and optimal substructure properties."
    },
    {
      question: "What is the difference between dynamic programming and greedy algorithms?",
      answer: "The main difference between dynamic programming and greedy algorithms lies in their approach to problem-solving and the optimality of solutions. Dynamic programming involves breaking down a problem into smaller overlapping subproblems and solving each subproblem only once, storing the results and reusing them whenever that subproblem is encountered again. It aims to find an optimal solution by considering all possible choices. In contrast, greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. Greedy algorithms are simpler and often faster than dynamic programming but may not always provide the most optimal solution for every problem.",
      explanation: "Dynamic programming and greedy algorithms are both algorithmic paradigms used to solve optimization problems, but they differ in their approach and the optimality of solutions. Dynamic programming breaks down problems into smaller overlapping subproblems and aims to find an optimal solution by considering all possible choices. Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. While dynamic programming guarantees an optimal solution, greedy algorithms may not always provide the most optimal solution but are generally simpler and faster."
    },
  {
    question: "Explain the concept of memoization and its role in dynamic programming.",
    answer: "Memoization is a technique used in dynamic programming to optimize the performance of recursive algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It involves maintaining a table (often implemented as a dictionary or an array) that maps function arguments to their corresponding results. When the function is called with a set of arguments, the algorithm first checks if the result is already stored in the table. If found, it returns the cached result; otherwise, it computes the result recursively and stores it in the table for future use. Memoization helps avoid redundant computations and significantly improves the efficiency of dynamic programming algorithms.",
    explanation: "Memoization is a key concept in dynamic programming, where the results of expensive function calls are stored and reused to avoid redundant computations. By caching results, memoization reduces the time complexity of recursive algorithms and improves overall efficiency."
  },
  {
    question: "Discuss the time and space complexity of dynamic programming algorithms.",
    answer: "The time and space complexity of dynamic programming algorithms depend on the specific problem being solved and the implementation details. In general, dynamic programming algorithms have two key attributes: overlapping subproblems and optimal substructure. The time complexity of a dynamic programming algorithm is typically determined by the number of distinct subproblems that need to be solved and the time taken to solve each subproblem. The space complexity is influenced by the storage requirements for storing intermediate results, which often involves creating a table or array to store solutions to subproblems. Dynamic programming algorithms can have polynomial time complexity in the number of inputs and polynomial space complexity in the size of the input.",
    explanation: "The time and space complexity of dynamic programming algorithms are influenced by the problem characteristics and the implementation details. While the time complexity depends on the number of subproblems and their solutions, the space complexity is determined by the storage requirements for storing intermediate results."
  },
  {
    question: "Explain the concept of top-down and bottom-up approaches in dynamic programming.",
    answer: "Top-down and bottom-up are two common approaches used in dynamic programming to solve problems. In the top-down approach, also known as memoization, the problem is solved recursively by breaking it down into smaller subproblems, and solutions to subproblems are cached to avoid redundant computations. The recursion starts with the original problem and gradually solves smaller subproblems until reaching the base cases. In the bottom-up approach, also known as tabulation, the problem is solved iteratively by solving all subproblems in a predefined order, usually starting from the smallest subproblems and building up to the larger ones. The solutions to subproblems are stored in a table or array, and the final solution is computed based on previously computed values. Both approaches have their advantages and are applicable in different scenarios.",
    explanation: "Top-down (memoization) and bottom-up (tabulation) approaches are two strategies used in dynamic programming to solve problems. While the top-down approach starts with the original problem and recursively breaks it into smaller subproblems, caching results along the way, the bottom-up approach iteratively solves subproblems in a predefined order and stores solutions in a table."
  },
  {
    question: "What is the principle of optimality in dynamic programming?",
    answer: "The principle of optimality is a key concept in dynamic programming, stating that an optimal solution to a problem contains optimal solutions to its subproblems. In other words, if a problem can be divided into smaller subproblems, and the optimal solution to each subproblem is known, then the optimal solution to the original problem can be constructed from these optimal subproblem solutions. This principle allows dynamic programming algorithms to efficiently solve complex optimization problems by breaking them down into simpler subproblems and leveraging the optimality property to find the overall optimal solution.",
    explanation: "The principle of optimality asserts that an optimal solution to a problem incorporates optimal solutions to its subproblems. By leveraging this property, dynamic programming algorithms efficiently solve complex optimization problems by breaking them down into smaller subproblems and constructing the overall optimal solution."
  },
  {
    question: "Discuss the concept of state transition in dynamic programming algorithms.",
    answer: "State transition refers to the process of transitioning between different states or stages in dynamic programming algorithms. In the context of dynamic programming, a state typically represents a unique configuration or set of parameters that define the problem at a particular point in the algorithm. The transition between states involves moving from one state to another based on the problem constraints and the choices made at each stage of the algorithm. State transitions are crucial for defining the recurrence relations that govern the behavior of dynamic programming algorithms, allowing them to efficiently explore the solution space and compute optimal solutions.",
    explanation: "State transition is fundamental to dynamic programming algorithms, involving the movement between different problem configurations or states based on the problem constraints and algorithm choices. By defining appropriate state transitions, dynamic programming algorithms efficiently explore the solution space and compute optimal solutions."
  },
  {
    question: "Explain the concept of overlapping subproblems in dynamic programming.",
    answer: "Overlapping subproblems are a characteristic of problems that exhibit repetitive or redundant computation of subproblems during the execution of a dynamic programming algorithm. In such problems, the same subproblems are encountered multiple times, leading to inefficient computations if solutions to these subproblems are not stored and reused. Dynamic programming addresses this issue by storing the solutions to subproblems in a table or array, ensuring that each subproblem is solved only once and its solution is reused whenever needed. By avoiding redundant computations, dynamic programming algorithms achieve efficiency and scalability in solving complex optimization problems.",
    explanation: "Overlapping subproblems occur when the same subproblems are encountered multiple times during the execution of a dynamic programming algorithm. To avoid redundant computations, dynamic programming algorithms store solutions to subproblems and reuse them when needed, ensuring efficiency and scalability in solving complex optimization problems."
  },
  {
    question: "Discuss the importance of optimal substructure in dynamic programming.",
    answer: "Optimal substructure is a key property of problems that allows dynamic programming algorithms to efficiently solve complex optimization problems by breaking them down into smaller subproblems. A problem exhibits optimal substructure if an optimal solution to the problem can be constructed from optimal solutions to its subproblems. This property enables dynamic programming algorithms to recursively solve subproblems and combine their solutions to find the overall optimal solution. By leveraging optimal substructure, dynamic programming algorithms avoid redundant computations and compute solutions in a systematic and efficient manner.",
    explanation: "Optimal substructure is critical for dynamic programming algorithms, as it enables the decomposition of complex problems into smaller subproblems whose optimal solutions can be combined to find the overall optimal solution. By exploiting this property, dynamic programming algorithms efficiently solve optimization problems and avoid redundant computations."
  },
  {
    question: "Explain the process of backtracking and its relationship with dynamic programming.",
    answer: "Backtracking is a systematic algorithmic technique used to explore all possible solutions to a problem by iteratively making choices and backtracking from paths that lead to dead ends. It involves recursively trying different options and undoing those choices when they do not lead to a valid solution. While backtracking exhaustively searches the solution space, dynamic programming focuses on efficiently solving problems by breaking them down into smaller subproblems and storing the results to avoid redundant computations. However, backtracking can be used within dynamic programming algorithms to explore certain solution paths or verify the validity of solutions, especially in scenarios where exhaustive search is necessary.",
    explanation: "Backtracking is an algorithmic technique that systematically explores all possible solutions to a problem by making choices and backtracking from dead ends. While dynamic programming aims to efficiently solve problems by breaking them down into subproblems and storing results, backtracking exhaustively searches the solution space. Although they have different approaches, backtracking can complement dynamic programming by exploring solution paths or verifying solutions."
  },
  {
    question: "Discuss the limitations and challenges of dynamic programming.",
    answer: "Dynamic programming, while a powerful technique for solving complex optimization problems, has certain limitations and challenges. One limitation is the requirement for problems to exhibit both overlapping subproblems and optimal substructure properties to apply dynamic programming effectively. Not all problems meet these criteria, making dynamic programming inapplicable in such cases. Additionally, dynamic programming algorithms may suffer from high space complexity, especially when solving problems with large input sizes or when storing intermediate results in tables or arrays. Furthermore, designing and implementing dynamic programming algorithms can be non-trivial, requiring careful analysis of the problem structure and the definition of appropriate recurrence relations. Despite these challenges, dynamic programming remains a valuable tool in algorithm design, offering efficient solutions to a wide range of optimization problems.",
    explanation: "Dynamic programming, while effective for solving optimization problems, faces challenges and limitations. Problems must exhibit overlapping subproblems and optimal substructure for dynamic programming to be applicable. High space complexity can arise, particularly for problems with large inputs. Designing dynamic programming algorithms requires careful consideration of the problem structure and recurrence relations. Despite these challenges, dynamic programming is a valuable tool for solving a variety of optimization problems efficiently."
  }
];



let score = 0;
let timeLeft = 0;
let timer;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("time-left");
const startBtn = document.getElementById("start-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const usernameInput = document.getElementById("username");
const exitBtn = document.getElementById("exit-btn");
const explanationDiv = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

startBtn.addEventListener("click", startQuiz);
exitBtn.addEventListener("click", exitQuiz);
nextBtn.addEventListener("click", loadNextQuestion);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("user-input").style.display = "none";
    startBtn.style.display = "none";
    exitBtn.style.display = "none";
    explanationDiv.style.display = "none";
    nextBtn.style.display = "none";
    score = 0;
    timeLeft = 60;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    shuffledQuestions = shuffledQuestions.slice(0, 10);
    loadQuestion();
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        timeLeft--;
    }
}

function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        endQuiz();
        return;
    }
    explanationDiv.style.display = "none"; // Hide explanation
    nextBtn.style.display = "none";
    const question = shuffledQuestions.pop();
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => {
            if (option === question.answer) {
                score++;
                scoreElement.textContent = score;
                button.classList.add("correct");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            } else {
                button.classList.add("wrong");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            }
            // Disable all options after selecting one
            document.querySelectorAll('.option').forEach(button => button.disabled = true);
        });
        optionsElement.appendChild(button);
    });
}

function showExplanation(explanation) {
    explanationDiv.style.display = "block";
    explanationText.textContent = explanation;
}

function loadNextQuestion() {
    explanationDiv.style.display = "none";
    loadQuestion();
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = "";
    clearInterval(timer);
    document.getElementById("user-input").style.display = "block";
    exitBtn.style.display = "inline-block";
    nextBtn.style.display = "none"; // Hide the Next button
    updateLeaderboard(usernameInput.value.trim(), score);
}

function updateLeaderboard(username, score) {
    let leaderboard = localStorage.getItem("leaderboard");
    leaderboard = leaderboard ? JSON.parse(leaderboard) : [];
    leaderboard.push({ username, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5); // Keep only top 5 scores
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1}: ${entry.username} - ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

  const leftEye = document.querySelector(".eye-left");
  const rightEye = document.querySelector(".eye-right");
  const mouth = document.querySelector(".mouth");

  nextBtn.addEventListener("click", () => {
    // Blink eyes
    setTimeout(() => {
      leftEye.style.transform = "scaleY(0)";
      rightEye.style.transform = "scaleY(0)";
    }, 100);

    setTimeout(() => {
      leftEye.style.transform = "scaleY(1)";
      rightEye.style.transform = "scaleY(1)";
    }, 500);

    // Talk mouth
    mouth.style.transform = "translateY(5px)";
    setTimeout(() => {
      mouth.style.transform = "translateY(0)";
    }, 500);
  });

function exitQuiz() {
    location.reload();
}
