/*-
 *
 *  Pothen-filler - Functions for filling Greek wealth declaration forms
 *
 *  Copyright 2024 Diomidis Spinellis
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * Wait for the browser to handle pending events.
 */
const sync = () => new Promise(resolve => setTimeout(resolve, 0));

/**
 * Set the value of a dropdown to a specified option by its visible text.
 * @param {string} selectId - The ID of the <select> element.
 * @param {string} optionText - The visible text of the desired option.
 */
async function setDropdownValueByText(selectId, optionText) {
  // Get the dropdown element
  const selectElement = document.querySelector(`#${selectId}`);
  if (!selectElement) {
    console.error(`No <select> element found with ID: ${selectId}`);
    return;
  }

  // Find and set the matching option
  const option = Array.from(selectElement.options).find(opt => opt.text.trim() === optionText);
  if (option) {
    selectElement.selectedIndex = option.index; // Set the value
    // Trigger a change event
    selectElement.dispatchEvent(new Event('change'));
    await sync();
    console.log(`Set the select value to "${option.value} for "${optionText}".`);
  } else {
    console.error(`Option "${optionText}" not found in #${selectId}`);
  }
}

/**
 * Set the value of an input field by its ID and triggers an input event.
 * @param {string} parentId - The ID of a parent of the input field.
 * @param {string} inputId - The ID of the input field.
 * @param {string|number} value - The value to set.
 */
async function setInputValue(parentId, inputId, value) {
  // Locate the input element by its ID

  const parent = document.querySelector(parentId);
  const inputElement = parent.querySelector(`input[name="${inputId}"]`);

  // Check if the input element exists
  if (inputElement) {
    // Set the value
    inputElement.value = value;

    // Trigger an input event to notify the application (if required)
    inputElement.dispatchEvent(new Event('change', { bubbles: true }));
    await sync();
    inputElement.blur();
    await sync();

    console.log(`Input with ID "${inputId}" set to "${value}".`);
  } else {
    console.error(`Input element with ID "${inputId}" not found.`);
  }
}

/*
 * Fill-in the missing data for investment products uploaded by the banks,
 * namely the fields κατάσταση, μονάδα μέτρησης, τρόπος κτήσης,
 * προέλευση.
 */
async function setInvestmentProductMissingData() {
  // Process selected element
  document.querySelector('button.btn.btn-info').click();
  await sync();

  // Κατάσταση
  await setDropdownValueByText('metabolhT079-select-input', 'ΑΠΟΚΤΗΣΗ ΣΕ ΠΡΟΗΓΟΥΜΕΝΗ ΧΡΗΣΗ');

  // Μονάδα μέτρησης
  await setDropdownValueByText('monadaMetrhshsT075-select-input', 'ΤΕΜΑΧΙΑ');

  // Προέλευση
  document.querySelector('#metoxhProeleyshT077Collection-base-table p.h8.mb-0').click();
  await sync();

  await setDropdownValueByText('proeleueshT011-select-input', 'ΑΛΛΗ ΠΕΡΙΠΤΩΣΗ');
  await sync();

  await setInputValue('#create-internal-modal___BV_modal_body_', 'posoCalc-form-input', '0');
  await sync();

  document.querySelector('#create-internal-modal___BV_modal_footer_').querySelector('#modal-submit').click()
  await sync();

  // Τρόπος κτήσης
  document.querySelector('#troposKthshsT028Collection-base-table p.h8.mb-0').click();
  await sync();
  await setDropdownValueByText('troposKthshs-select-input', 'ΑΓΟΡΑ');
  document.querySelector('#create-internal-modal___BV_modal_footer_').querySelector('#modal-submit').click()
  await sync();
}
