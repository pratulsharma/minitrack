"""Reference solution — Day 29: Merge Intervals. Try practice first.
"""

def solve(intervals):
    if not intervals:
        return []
    intervals = sorted(intervals)
    merged = [intervals[0][:]]  # independent mutable copy
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged
