"""Check a single exercise; solutions are NOT imported from here."""
from pathlib import Path
import ast
import importlib.util
import sys
from copy import deepcopy

ROOT = Path(__file__).resolve().parents[1]
EXAMPLES = {1: [(([2, 7, 11, 15], 9), [0, 1]), (([3, 3], 6), [0, 1]), (([1, 2], 7), [])], 2: [(('anagram', 'nagaram'), True), (('rat', 'car'), False)], 3: [(([1, 2, 3, 1],), True), (((1, 2, 3),), False)], 4: [(([7, 1, 5, 3, 6, 4],), 5), (([7, 6, 4, 3, 1],), 0)], 5: [(('A man, a plan, a canal: Panama',), True), (('race a car',), False)], 6: [(([2, 7, 11, 15], 9), [0, 1]), (([1, 2, 4, 6], 8), [1, 3])], 7: [(('abcabcbb',), 3), (('bbbbb',), 1), (('',), 0)], 8: [((7, [2, 3, 1, 2, 4, 3]), 2), ((11, [1, 1, 1, 1, 1, 1, 1, 1]), 0)], 9: [(('()[]{}',), True), (('([)]',), False), (('(((',), False)], 10: [(([73, 74, 75, 71, 69, 72, 76, 73],), [1, 1, 4, 2, 1, 1, 0, 0])], 11: [(([-1, 0, 3, 5, 9, 12], 9), 4), (([-1, 0, 3, 5, 9, 12], 2), -1)], 12: [(([4, 5, 6, 7, 0, 1, 2], 0), 4), (([4, 5, 6, 7, 0, 1, 2], 3), -1)], 19: [(([3, 2, 1, 5, 6, 4], 2), 5), (([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4)], 20: [(([1, 1, 1, 2, 2, 3], 2), [1, 2]), (([4, 4, 4], 1), [4])], 21: [(([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']],), 2)], 22: [((2, [[1, 0]]), True), ((2, [[1, 0], [0, 1]]), False)], 23: [((0,), 1), ((2,), 2), ((5,), 8)], 24: [(([1, 2, 3, 1],), 4), (([2, 7, 9, 3, 1],), 12)], 25: [(([1, 2, 5], 11), 3), (([2], 3), -1), (([1], 0), 0)], 26: [(([],), [[]]), (([1],), [[], [1]])], 27: [(([2, 3, 6, 7], 7), [[2, 2, 3], [7]])], 28: [((['apple'], 'apple'), True), ((['apple'], 'app'), False), ((['apple'], 'app', 'prefix'), True)], 29: [(([[1, 3], [2, 6], [8, 10], [15, 18]],), [[1, 6], [8, 10], [15, 18]]), (([[1, 4], [4, 5]],), [[1, 5]])], 30: [(([[0, 30], [5, 10], [15, 20]],), 2), (([[7, 10], [2, 4]],), 1)]}

def main():
    if len(sys.argv) != 2:
        print('Usage: python3 scripts/check_practice.py DAY_NUMBER')
        return 2
    day = int(sys.argv[1])
    path = ROOT / 'practice' / f'day-{day:02d}.py'
    if not path.exists():
        print('Practice files exist for Days 1–30; Days 31–45 are mock sessions.')
        return 2
    spec = importlib.util.spec_from_file_location(f'practice_day_{day}', path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    cases = EXAMPLES.get(day, [])
    if not cases:
        print('This problem uses linked-list/tree structures; write your own object-based tests.')
        return 0
    for idx, (args, expected) in enumerate(cases, 1):
        try:
            actual = module.solve(*deepcopy(args))
        except NotImplementedError:
            print('Not implemented yet. Write solve() in',path)
            return 1
        if actual != expected:
            print(f'Case {idx} FAILED: expected {expected!r}, got {actual!r}')
            return 1
        print(f'Case {idx} passed')
    print('All supplied cases passed. Add edge cases of your own!')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
