# Monday Morning Punchlines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/qaxgg895/monday-morning-punchlines/rank.svg)](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/qaxgg895/monday-morning-punchlines/reward.svg)](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc)

An entry for the [Monday Morning Punchlines](https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc) competition on make.fun.

## The joke

> I asked my Monday alarm for five more minutes. It gave me a performance review instead.

## How it works

`main.ts` (run with Node 22+) writes one original joke about Monday mornings —
no longer than 200 characters — to `/output/entry.txt`. Before writing, it
validates the joke: 1–200 characters, not only whitespace, a single line, no
control characters, and no leading or trailing whitespace. If validation
fails, nothing is written and the program exits non-zero.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
