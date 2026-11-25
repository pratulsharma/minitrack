import re, sys, pathlib
md = pathlib.Path(sys.argv[1]).read_text()
blocks = re.findall(r"```(\w*)\n(.*?)```", md, re.S)
lang = sys.argv[2]
out = [b for l, b in blocks if l == lang]
for i, b in enumerate(out):
    print(f"--- block {i} ({len(b.splitlines())} lines): {b.splitlines()[0][:70] if b.strip() else ''}")
if len(sys.argv) > 3:
    for spec in sys.argv[3:]:
        idx, name = spec.split('=')
        p = pathlib.Path(name); p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(out[int(idx)])
