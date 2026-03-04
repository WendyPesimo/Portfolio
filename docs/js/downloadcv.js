
    document.getElementById('downloadCV').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = './images/WendyPesimo_Resume.pdf'; 
        link.download = 'WendyPesimo_Resume.pdf'; //file name
        link.click(); // triggers the download
    });

