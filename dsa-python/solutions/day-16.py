"""Reference solution — Day 16: Maximum Depth of Binary Tree. Try practice first.
"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    if root is None:
        return 0
    return 1 + max(solve(root.left), solve(root.right))
