document.getElementById('linkForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const link = document.getElementById('linkInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Checking...';

    fetch(link, {
            method: 'HEAD',
            mode: 'no-cors'
        })
        .then(() => {
            resultDiv.textContent = 'The link appears to be reachable (or no CORS error).';
        })
        .catch(() => {
            resultDiv.textContent = 'The link may be unreachable or blocked.';
        });
});