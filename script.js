/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};
  
  const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
  
        console.log(`
          "Sum before tip: ${formatter(locale, currency, sum)}
          Tip percentage: ${percentage}%
          Tip:            ${formatter(locale, currency, tip)}
          Total:          ${formatter(locale, currency, total)}
        `);

        alert("Your caluation is complete!!!");
  };

  let button = document.getElementById("button");
  button.addEventListener("click", function ()
  {
    let amount = document.getElementById("amount").value;
    let tip = document.getElementById("tip").value;
    let dropdownOption = document.getElementById("dropdown");
    let dropdownValue = document.getElementById("dropdown").value;
    let optionText = dropdownOption.options[dropdownOption.selectedIndex].text;
    tipCalculator(amount, tip, dropdownValue, optionText);
  }); 