"""Run: python3 -m unittest discover -s tests -v"""
from pathlib import Path
import unittest
import importlib.util
from copy import deepcopy

ROOT = Path(__file__).resolve().parents[1]
EXAMPLES = {1: [(([2, 7, 11, 15], 9), [0, 1]), (([3, 3], 6), [0, 1]), (([1, 2], 7), [])], 2: [(('anagram', 'nagaram'), True), (('rat', 'car'), False)], 3: [(([1, 2, 3, 1],), True), (((1, 2, 3),), False)], 4: [(([7, 1, 5, 3, 6, 4],), 5), (([7, 6, 4, 3, 1],), 0)], 5: [(('A man, a plan, a canal: Panama',), True), (('race a car',), False)], 6: [(([2, 7, 11, 15], 9), [0, 1]), (([1, 2, 4, 6], 8), [1, 3])], 7: [(('abcabcbb',), 3), (('bbbbb',), 1), (('',), 0)], 8: [((7, [2, 3, 1, 2, 4, 3]), 2), ((11, [1, 1, 1, 1, 1, 1, 1, 1]), 0)], 9: [(('()[]{}',), True), (('([)]',), False), (('(((',), False)], 10: [(([73, 74, 75, 71, 69, 72, 76, 73],), [1, 1, 4, 2, 1, 1, 0, 0])], 11: [(([-1, 0, 3, 5, 9, 12], 9), 4), (([-1, 0, 3, 5, 9, 12], 2), -1)], 12: [(([4, 5, 6, 7, 0, 1, 2], 0), 4), (([4, 5, 6, 7, 0, 1, 2], 3), -1)], 19: [(([3, 2, 1, 5, 6, 4], 2), 5), (([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4)], 20: [(([1, 1, 1, 2, 2, 3], 2), [1, 2]), (([4, 4, 4], 1), [4])], 21: [(([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']],), 2)], 22: [((2, [[1, 0]]), True), ((2, [[1, 0], [0, 1]]), False)], 23: [((0,), 1), ((2,), 2), ((5,), 8)], 24: [(([1, 2, 3, 1],), 4), (([2, 7, 9, 3, 1],), 12)], 25: [(([1, 2, 5], 11), 3), (([2], 3), -1), (([1], 0), 0)], 26: [(([],), [[]]), (([1],), [[], [1]])], 27: [(([2, 3, 6, 7], 7), [[2, 2, 3], [7]])], 28: [((['apple'], 'apple'), True), ((['apple'], 'app'), False), ((['apple'], 'app', 'prefix'), True)], 29: [(([[1, 3], [2, 6], [8, 10], [15, 18]],), [[1, 6], [8, 10], [15, 18]]), (([[1, 4], [4, 5]],), [[1, 5]])], 30: [(([[0, 30], [5, 10], [15, 20]],), 2), (([[7, 10], [2, 4]],), 1)]}

class ReferenceSolutionsTests(unittest.TestCase):
    def test_coding_days(self):
        for day in range(1,31):
            path = ROOT / 'solutions' / f'day-{day:02d}.py'
            spec = importlib.util.spec_from_file_location(f'solution_{day}', path)
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            self.assertTrue(hasattr(module,'solve'))
            for args,expected in EXAMPLES.get(day,[]):
                with self.subTest(day=day,args=args):
                    actual = module.solve(*deepcopy(args))
                    self.assertEqual(actual,expected)

    def test_linked_lists(self):
        for day in (13,14,15):
            path=ROOT/'solutions'/f'day-{day:02d}.py'
            spec=importlib.util.spec_from_file_location(f'linked_{day}',path)
            mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
            a=mod.ListNode(1); b=mod.ListNode(2); c=mod.ListNode(3)
            a.next=b;b.next=c
            if day==13:
                cur=mod.solve(a); output=[]
                while cur: output.append(cur.val);cur=cur.next
                self.assertEqual(output,[3,2,1])
            elif day==14:
                self.assertFalse(mod.solve(a));c.next=b;self.assertTrue(mod.solve(a))
            else:
                d=mod.ListNode(1,mod.ListNode(4))
                cur=mod.solve(a,d);output=[]
                while cur: output.append(cur.val);cur=cur.next
                self.assertEqual(output,[1,1,2,3,4])

    def test_tree(self):
        for day in (16,17,18):
            path=ROOT/'solutions'/f'day-{day:02d}.py'
            spec=importlib.util.spec_from_file_location(f'tree_{day}',path)
            mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
            root=mod.TreeNode(2,mod.TreeNode(1),mod.TreeNode(3))
            expected={16:2,17:[[2],[1,3]],18:True}[day]
            self.assertEqual(mod.solve(root),expected)

if __name__=='__main__': unittest.main()
