install:
	npm install
start:
	node bin/brain-games.js

even:
	node bin/games/brain-even.js

calc:
	node bin/games/brain-calc.js

publish:
	npm publish --dry-run
lint:
	npx eslint .
