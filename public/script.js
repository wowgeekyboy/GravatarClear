document.addEventListener('DOMContentLoaded', () => {
    const avatarForm = document.getElementById('avatarForm');
    const avatarDisplay = document.getElementById('avatarDisplay');

    avatarForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const textInput = document.getElementById('textInput');
        const text = textInput.value.trim();

        try {
            const response = await fetch('/avatar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch avatar');
            }

            const data = await response.json();

            avatarDisplay.innerHTML = `
                <p>Entered Text: ${data.input}</p>
                <p>Type: ${data.type}</p>
                <img src="${data.avatarUrl}" alt="Avatar">
            `;
        } catch (error) {
            console.error('Error fetching avatar:', error.message);
            avatarDisplay.innerHTML = '<p>Error fetching avatar. Please try again later.</p>';
        }
    });
});
