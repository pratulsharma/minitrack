"""Reference solution — Day 28: Implement Trie. Try practice first.
"""

class Trie:
    def __init__(self):
        self.root = {}

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})
        node['#'] = True  # terminal marker (assume # not in words)

    def _walk(self, text):
        node = self.root
        for ch in text:
            if ch not in node:
                return None
            node = node[ch]
        return node

    def search(self, word):
        node = self._walk(word)
        return node is not None and '#' in node

    def starts_with(self, prefix):
        return self._walk(prefix) is not None

def solve(words, query, mode='search'):
    trie = Trie()
    for word in words:
        trie.insert(word)
    return trie.search(query) if mode == 'search' else trie.starts_with(query)
