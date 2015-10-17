#!/bin/sh

TESTDRIVED3="node es5/testdrived3.js"

$TESTDRIVED3 list

$TESTDRIVED3 help

$TESTDRIVED3 select "Hello, World!"
$TESTDRIVED3 run es5/exercises/hello_world/solution/solution.js
$TESTDRIVED3 verify es5/exercises/hello_world/solution/solution.js

$TESTDRIVED3 select "Selecting an element"
$TESTDRIVED3 run es5/exercises/selecting_an_element/solution/solution.js
$TESTDRIVED3 verify es5/exercises/selecting_an_element/solution/solution.js

$TESTDRIVED3 select "Chaining methods"
$TESTDRIVED3 run es5/exercises/chaining_methods/solution/solution.js
$TESTDRIVED3 verify es5/exercises/chaining_methods/solution/solution.js

$TESTDRIVED3 select "Part 1: Coding a chart, manually"
$TESTDRIVED3 run es5/exercises/part_1_coding_a_chart_manually/solution/solution.js
$TESTDRIVED3 verify es5/exercises/part_1_coding_a_chart_manually/solution/solution.js

$TESTDRIVED3 select "Part 1: Coding a chart, automatically"
$TESTDRIVED3 run es5/exercises/part_1_coding_a_chart_automatically/solution/solution.js
$TESTDRIVED3 verify es5/exercises/part_1_coding_a_chart_automatically/solution/solution.js

$TESTDRIVED3 select "Part 1: Scaling to fit"
$TESTDRIVED3 run es5/exercises/part_1_scaling_to_fit/solution/solution.js
$TESTDRIVED3 verify es5/exercises/part_1_scaling_to_fit/solution/solution.js

$TESTDRIVED3 select "Part 2: Coding a chart, manually"
$TESTDRIVED3 run es5/exercises/part_2_coding_a_chart_manually/solution/solution.js
$TESTDRIVED3 verify es5/exercises/part_2_coding_a_chart_manually/solution/solution.js

$TESTDRIVED3 select "Part 2: Coding a chart, automatically"
$TESTDRIVED3 run es5/exercises/part_2_coding_a_chart_automatically/solution/solution.js
$TESTDRIVED3 verify es5/exercises/part_2_coding_a_chart_automatically/solution/solution.js
