const head = require("../head");


//Test code
assertEqual(head([5,6,7]), 5); 
// in "actual" [5,6,7], the head function calls to return the 1st element in that array ie [0] which is 5. this 5 is also what's "expected" therefore this ASSERTION PASSED.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
