# BT-RainDrops

This program converts a number to a string, the contents of which depends on the number’s prime factors.

If the number contains `3` as a prime factor, output `"Pling"`.
If the number contains `5` as a prime factor, output `"Plang"`.
If the number contains `7` as a prime factor, output `"Plong"`.
If the number does not contain `3`, `5`, or `7` as a prime factor, just pass the number’s digits straight through.

The program uses TDD method using Mocha and Chai

<p> How to run the program locally: </p>

<ol>
<li> Run <code> npm install </code> to install all needed dependencies </li>

<li> Run <code> npm test </code> to start Mocha which immediately runs babel to transpil and also test </li>
