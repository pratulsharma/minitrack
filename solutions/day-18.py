"""Reference solution — Day 18: Validate Binary Search Tree. Try practice first.
"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    def valid(node, lower, upper):
        if node is None:
            return True
        if not (lower < node.val < upper):
            return False
        return (valid(node.left, lower, node.val)
                and valid(node.right, node.val, upper))
    return valid(root, float('-inf'), float('inf'))
