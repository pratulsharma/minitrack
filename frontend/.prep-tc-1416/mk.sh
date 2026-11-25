# usage: mk.sh DIR  -> copies stubs into DIR and writes tsconfig
rm -rf "$1"; mkdir -p "$1"; cp -R stubs/. "$1"/
cat > "$1/tsconfig.json" <<'J'
{ "compilerOptions": { "target": "ES2022", "lib": ["dom","dom.iterable","esnext"], "strict": true, "noEmit": true,
  "module": "esnext", "moduleResolution": "bundler", "jsx": "react-jsx", "skipLibCheck": true, "isolatedModules": true,
  "types": ["node", "react", "react-dom"],
  "paths": { "@/*": ["./*"] } }, "include": ["**/*.ts", "**/*.tsx", "../../next-env.d.ts"] }
J
