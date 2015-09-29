#!/bin/sh

TESTDRIVED3="node es5/testdrived3.js"

$TESTDRIVED3 list > /dev/null

$TESTDRIVED3 help > /dev/null

$TESTDRIVED3 select "HELLO WORLD" > /dev/null
$TESTDRIVED3 run es5/exercises/hello_world/solution/solution.js > /dev/null
$TESTDRIVED3 verify es5/exercises/hello_world/solution/solution.js > /dev/null

$TESTDRIVED3 select "SELECTING AN ELEMENT" > /dev/null
$TESTDRIVED3 run es5/exercises/selecting_an_element/solution/solution.js > /dev/null
$TESTDRIVED3 verify es5/exercises/selecting_an_element/solution/solution.js > /dev/null

$TESTDRIVED3 select "CHAINING METHODS" > /dev/null
$TESTDRIVED3 run es5/exercises/chaining_methods/solution/solution.js > /dev/null
$TESTDRIVED3 verify es5/exercises/chaining_methods/solution/solution.js > /dev/null
