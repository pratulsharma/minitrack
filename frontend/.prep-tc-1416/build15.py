import re, pathlib
def blocks(path, lang):
    md = pathlib.Path(path).read_text()
    return [b for l, b in re.findall(r"```(\w*)\n(.*?)```", md, re.S) if l == lang]
import textwrap
tb14 = blocks('../../lessons/interview-prep/prep-day-14.md', 'tsx')[1]
b15 = blocks('../../lessons/interview-prep/prep-day-15.md', 'tsx')
for i, b in enumerate(b15): print(i, b.strip().splitlines()[0][:80])
actionline, ul = b15[0], b15[1]
s = tb14
old_action = [l for l in s.splitlines() if l.startswith('const actionClass')][0]
s = s.replace(old_action, actionline.strip())
start = s.index('        <ul aria-labelledby="task-list-heading"'); end = s.index('</ul>', start) + len('</ul>')
s = s[:start] + ul.rstrip('\n') + s[end:]
pathlib.Path('d15/app/TaskBoard.tsx').write_text(s)
# experiment
imp, row, cbs, use = [textwrap.dedent(b) for b in b15[2:6]]
e = s.replace("import { useEffect, useRef, useState, type FormEvent } from 'react';", imp.strip())
e = e.replace('export default function TaskBoard', row + '\nexport default function TaskBoard')
# remove old request/removeTask/startEditing
def cut(src, startpat, endpat):
    a = src.index(startpat); b = src.index(endpat, a) + len(endpat); return src[:a] + src[b:]
e = cut(e, '  // One helper for every request.', '      setBusy(false);\n    }\n  }\n')
e = cut(e, '  async function removeTask', '    if (ok) listHeadingRef.current?.focus();\n  }\n')
e = cut(e, '  function startEditing', "    setEditError('');\n  }\n")
e = e.replace('  async function addTask', textwrap.indent(cbs, '  ') + '\n  async function addTask', 1)
a = e.index('                <>\n                  <span'); b = e.index('                </>\n', a) + len('                </>\n')
e = e[:a] + textwrap.indent(use, '                ') + e[b:]
pathlib.Path('d15x/app/TaskBoard.tsx').write_text(e)
