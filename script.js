document.getElementById('convertButton').addEventListener('click', function() {
    const input = document.getElementById('imageInput').files[0];
    if (input) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                canvas.toBlob(function(blob) {
                    const url = URL.createObjectURL(blob);
                    document.getElementById('result').innerHTML = `
                        <img src="${url}" alt="Converted Image"><br>
                        <a id="downloadLink" href="${url}" download="converted.webp">Download WebP Image</a>
                    `;
                }, 'image/webp');
            };
        };
        reader.readAsDataURL(input);
    } else {
        alert('Please select an image file first.');
    }
});
