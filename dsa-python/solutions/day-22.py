"""Reference solution — Day 22: Course Schedule. Try practice first.
"""

from collections import deque

def solve(num_courses, prerequisites):
    graph = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses
    for course, pre in prerequisites:
        graph[pre].append(course)
        indegree[course] += 1
    queue = deque(i for i, deg in enumerate(indegree) if deg == 0)
    processed = 0
    while queue:
        pre = queue.popleft()
        processed += 1
        for course in graph[pre]:
            indegree[course] -= 1
            if indegree[course] == 0:
                queue.append(course)
    return processed == num_courses
