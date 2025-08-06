const cardNumberInput = document.getElementById('cardNumber');
const cardNameInput = document.getElementById('cardName');
const expDateInput = document.getElementById('expDate');
const cvvInput = document.getElementById('cvv');

const displayCardNumber = document.getElementById('displayCardNumber');
const displayName = document.getElementById('displayName');
const displayExpiry = document.getElementById('displayExpiry');
const displayCvv = document.getElementById('displayCvv');
const cardInner = document.getElementById('cardInner');

// Format Card Number
cardNumberInput.addEventListener('input', function () {
  let value = this.value.replace(/\D/g, '').substring(0, 16);
  value = value.replace(/(.{4})/g, '$1 ').trim();
  displayCardNumber.textContent = value.padEnd(19, '*');
});

// Update Name
cardNameInput.addEventListener('input', function () {
  displayName.textContent = this.value.toUpperCase() || 'JANE APPLESEED';
});

// Expiration Date Format
expDateInput.addEventListener('input', function () {
  let value = this.value.replace(/\D/g, '');
  if (value.length >= 3) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4);
  }
  this.value = value;
  displayExpiry.textContent = value || '00/00';
});

// Flip on CVV focus
cvvInput.addEventListener('focus', () => {
  cardInner.classList.add('flipped');
});
cvvInput.addEventListener('blur', () => {
  cardInner.classList.remove('flipped');
});

// Update CVV
cvvInput.addEventListener('input', function () {
  displayCvv.textContent = this.value || '*';
});