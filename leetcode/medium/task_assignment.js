// O(nlog(n)) time | O(n) space - where n is the number of tasks
function taskAssignment(k, tasks) {
  const pairedTasks = [];
	const taskDurationToIndices = getTaskDurationToIndices(tasks);
	
	const sortedTasks = tasks.sort((a, b) => a - b);
	for (let i = 0; i < k; i++) {
		const task1Duration = sortedTasks[i];
		const indicesWithTask1Duration = taskDurationToIndices[task1Duration];
		const task1Index = indicesWithTask1Duration.pop();
		
		const task2SortedIndex = tasks.length - 1 - i;
		const task2Duration = sortedTasks[task2SortedIndex];
		const indicesWithTask2Duration = taskDurationToIndices[task2Duration];
		const task2Index = indicesWithTask2Duration.pop();
		
		pairedTasks.push([task1Index, task2Index]);
	}
	
	return pairedTasks;
}

function getTaskDurationToIndices(tasks) {
	const taskDurationToIndices = {};
	
	for (let i = 0; i < tasks.length; i++) {
		const taskDuration = tasks[i];
		if (taskDuration in taskDurationToIndices) {
			taskDurationToIndices[taskDuration].push(i);
		} else {
			taskDurationToIndices[taskDuration] = [i];
		}
	}
	return taskDurationToIndices;
}
