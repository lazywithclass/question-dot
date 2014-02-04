test:
	./node_modules/.bin/sjs --module ./macro.sjs ./test/test.sjs -o ./test/test.js && ./node_modules/.bin/mocha --reporter spec --require should

.PHONY: test
