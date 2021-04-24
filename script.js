const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('name');
const downloadBtn = document.getElementById('download-btn');

const image = new Image();
image.src = 'Vue.png';
image.onload = function () {
	drawImage();
};

function WDclose(){
    window.close();
}

function drawImage() {
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.font = "20px 'Open sans', sans-serif";
	ctx.fillStyle = '#000';
	ctx.fillText(nameInput.value, 320, 265);
}

nameInput.addEventListener('input', function () {
	drawImage();
});

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg');
	downloadBtn.download = 'Certificate - Flutter ' + nameInput.value;
});
