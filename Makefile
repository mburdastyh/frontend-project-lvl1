install:
	npm install
start:
	node bin/brain-games.js

even:
	node bin/brain-even.js

calc:
	node bin/brain-calc.js

gcd:
	node bin/brain-gcd.js

progr:
	node bin/brain-progression.js

publish:
	npm publish --dry-run
lint:
	npx eslint .
