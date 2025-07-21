// hmm what's this?
// dev_note: make sure to scrub this before pushing live
// flag{hackera_madebyNichole}
// Enhanced interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    const helloBtn = document.getElementById('hello-btn');
    const consoleBtn = document.getElementById('console-btn');
    if (helloBtn) {
        helloBtn.addEventListener('click', function() {
            sayHello();
            // Visual feedback
            this.innerHTML = 'Hello Sent! ✨';
            setTimeout(() => {
                this.innerHTML = 'Say Hello 👋';
            }, 2000);
        });
    }
    if (consoleBtn) {
        consoleBtn.addEventListener('click', function() {
            console.log('🔍 Check the source code for hidden secrets...');
            console.log('💡 Hint: Look for interesting comments in the JavaScript');
            // Visual feedback
            this.innerHTML = 'Checked! 🎯';
            setTimeout(() => {
                this.innerHTML = 'Check Console 🔍';
            }, 2000);
        });
    }
    // Add some startup-like console messages
    console.log('%c🚀 Epic Startup Loading...', 'color: #6366F1; font-size: 16px; font-weight: bold;');
    console.log('%c⚡ Looking for easter eggs? You\'re on the right track!', 'color: #8B5CF6; font-size: 12px;');
});
