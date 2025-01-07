# Pothen-filler

The file `functions.js` contains examples of JavaScript functions that
may help automate some of the work required for filling the [Greek personal
wealth declaration forms (Πόθεν Έσχες)](https://www.pothen.gr/).
The functions are to be executed from the web browser console,
after navigating to the corresponding part of the declaration
and selecting an appropriate element.
The functions are likely to be useful only to users who are familiar
with JavaScript, the DOM, and the browser's web console.
They are provided only as a starting point and require tailoring and
adjustment for individual circumstances.

## Usage

* Login to the application.
* Open the browser's JavaScript console.
* Paste the provided JavaScript functions.

### Complete existing investment products
* Import the data provided by the banks.
* Select each row of the investment products table.
* Call from the browser console the function `setInvestmentProductMissingData()`
  to complete missing data, which prevents the form's final submission.

### Add new investment products
To add a new investment product call from the browser console the function
`addInvestmentProduct` as in the following example.

```js
await addInvestmentProduct('Υπόχρεος', 'isTritoi-checkbox-input',
  'ΕΛΛΑΔΑ', 'Τράπεζα Λιμνούπολης', 'ΜΕΤΟΧΕΣ',
  'ACME ΑΕ', 'GR00X63SZQ33', 42, 3.14, 'ΕΥΡΩ');
```
### Complete missing bank account data
* Import the data provided by the banks.
* Select each row of the bank accounts table.
* Call from the browser console the function `setBankAccountMissingData()`
  to complete missing data, which prevents the form's final submission.

## License and disclaimer
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contributing
Contributions via GitHub pull requests are welcomed.
Particularly useful would be functions that enter new records
with data provided in their arguments.
Calls to such functions can then be easily crafted in an spreadsheet
in order to upload the data stored in it.
