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
    await new Promise(resolve => setTimeout(resolve, 0));
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
    await new Promise(resolve => setTimeout(resolve, 0));
    inputElement.blur();
    await new Promise(resolve => setTimeout(resolve, 0));

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
  await new Promise(resolve => setTimeout(resolve, 0));

  // Κατάσταση
  await setDropdownValueByText('metabolhT079-select-input', 'ΑΠΟΚΤΗΣΗ ΣΕ ΠΡΟΗΓΟΥΜΕΝΗ ΧΡΗΣΗ');

  // Μονάδα μέτρησης
  await setDropdownValueByText('monadaMetrhshsT075-select-input', 'ΤΕΜΑΧΙΑ');

  // Προέλευση
  document.querySelector('#metoxhProeleyshT077Collection-base-table p.h8.mb-0').click();
  await new Promise(resolve => setTimeout(resolve, 0));

  await setDropdownValueByText('proeleueshT011-select-input', 'ΑΛΛΗ ΠΕΡΙΠΤΩΣΗ');
  await new Promise(resolve => setTimeout(resolve, 0));

  await setInputValue('#create-internal-modal___BV_modal_body_', 'posoCalc-form-input', '0');
  await new Promise(resolve => setTimeout(resolve, 0));

  document.querySelector('#create-internal-modal___BV_modal_footer_').querySelector('#modal-submit').click()
  await new Promise(resolve => setTimeout(resolve, 0));

  // Τρόπος κτήσης
  document.querySelector('#troposKthshsT028Collection-base-table p.h8.mb-0').click();
  await new Promise(resolve => setTimeout(resolve, 0));
  await setDropdownValueByText('troposKthshs-select-input', 'ΑΓΟΡΑ');
  document.querySelector('#create-internal-modal___BV_modal_footer_').querySelector('#modal-submit').click()
  await new Promise(resolve => setTimeout(resolve, 0));
}
