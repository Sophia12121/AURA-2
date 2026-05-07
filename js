document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('userEmail').value;
    console.log("Lead captured:", email);
    
    this.style.display = 'none';
    document.getElementById('formFeedback').classList.remove('hidden');
});
