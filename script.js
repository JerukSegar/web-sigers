document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('cta-button');
    
    if (button) {
        button.addEventListener('click', function() {
            alert('Halo! Project web kita sudah jalan! 🎉');
            
            // Ubah warna background sementara
            document.body.style.backgroundColor = '#f0f8ff';
            setTimeout(() => {
                document.body.style.backgroundColor = '';
            }, 1000);
        });
    }
    
    console.log('JavaScript berhasil di-load!');
});