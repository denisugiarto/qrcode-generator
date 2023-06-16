const input = document.querySelector('input');
const qrImage = document.querySelector('img');
const generateBtn = document.querySelector('#generate');
const downloadBtn = document.querySelector('#download');
const loading = document.querySelector('#loading');

generateBtn.addEventListener('click', async () => {
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
  const response = await fetch(qrImage.src);
  if (qrImage.src === qrCode) return;
  qrImage.src = '';
  loading.classList.toggle('hide');
  if (response) {
    loading.classList.toggle('hide');
    qrImage.src = qrCode;
  }
});

downloadBtn.addEventListener('click', async () => {
  const response = await fetch(qrImage.src);
  const blob = await response.blob();
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'qrcode.jpg';
  downloadLink.click();
});
