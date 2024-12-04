// Fungsi untuk mengubah warna tema website
function changeTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(theme);
}

// Fungsi untuk mengaktifkan/menonaktifkan tombol
function toggleButton(button, enabled) {
  if (enabled) {
    button.disabled = false;
    button.classList.remove('disabled');
  } else {
    button.disabled = true;
    button.classList.add('disabled');
  }
}

// Fungsi untuk mengirimkan pesan kesalahan
function showError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.style.display = 'block';
  setTimeout(() => {
    errorElement.style.display = 'none';
  }, 3000);
}

// Fungsi untuk mengirimkan pesan sukses
function showSuccess(message) {
  const successElement = document.getElementById('success-message');
  successElement.textContent = message;
  successElement.style.display = 'block';
  setTimeout(() => {
    successElement.style.display = 'none';
  }, 3000);
}

// Fungsi untuk mengambil nilai dari elemen form
function getFormValue(formId, inputName) {
  const form = document.getElementById(formId);
  const input = form.elements[inputName];
  return input.value;
}

// Fungsi untuk mengatur nilai elemen form
function setFormValue(formId, inputName, value) {
  const form = document.getElementById(formId);
  const input = form.elements[inputName];
  input.value = value;
}

// Fungsi untuk menghapus semua nilai elemen form
function clearForm(formId) {
  const form = document.getElementById(formId);
  form.reset();
}

// Fungsi untuk mengaktifkan/menonaktifkan elemen
function toggleElement(element, enabled) {
  if (enabled) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Fungsi untuk mengambil tanggal dan waktu saat ini
function getCurrentDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
