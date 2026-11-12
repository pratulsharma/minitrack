"""Reference solution — Day 30: Meeting Rooms II. Try practice first.
"""

import heapq

def solve(intervals):
    heap = []  # end times of currently occupied rooms
    peak = 0
    for start, end in sorted(intervals):
        while heap and heap[0] <= start:
            heapq.heappop(heap)
        heapq.heappush(heap, end)
        peak = max(peak, len(heap))
    return peak
