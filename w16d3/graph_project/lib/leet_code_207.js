// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function buildGraph(list) {
  let graph = {};
  list.forEach(prereq => {
    let [ course, pre ] = prereq.map(String);
    
    if (course in graph) {
      graph[course].push(pre);
    } else {
      graph[course] = [ pre ];
    }

    if (!(pre in graph)) {
      graph[pre] = [];
    }
  });

  return graph;
}

function canFinish(numCourses, prerequisites) {
  let graph = buildGraph(prerequisites);

  let totalCourses = Object.keys(graph).length;

  let visited = new Set();

  let eligibleNodeExists = true;
  while (eligibleNodeExists) {
    eligibleNodeExists = false;

    for (let node in graph) {
      let isEveryParentVisited = graph[node].every(parent => visited.has(parent));
      if (!visited.has(node) && isEveryParentVisited) {
        eligibleNodeExists = true;
        visited.add(node);
      }
    }
  }
  return visited.size == totalCourses;
}