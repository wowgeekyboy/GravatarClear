const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const md5 = require('md5');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/avatar', async (req, res) => {
    const input = req.body.text.trim();

    if (!input) {
        return res.status(400).json({ error: 'Please enter an email address or website domain.' });
    }

    let avatarUrl = '';

    if (validateEmail(input)) {
        avatarUrl = getGravatarUrl(input);
    } else if (validateDomain(input)) {
        avatarUrl = await getClearbitLogo(input);
    } else {
        return res.status(400).json({ error: 'Invalid input format. Please enter a valid email address or website domain.' });
    }

    if (!avatarUrl) {
        return res.status(404).json({ error: 'Avatar not found for the given input.' });
    }

    res.json({ input, type: avatarUrl.startsWith('https://www.gravatar.com') ? 'email' : 'website', avatarUrl });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateDomain(domain) {
    const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/)?$/;
    return domainRegex.test(domain);
}

function getGravatarUrl(email) {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
}

async function getClearbitLogo(domain) {
    try {
        const response = await fetch(`https://logo.clearbit.com/${domain}`);
        if (!response.ok) {
            throw new Error('Failed to fetch logo from Clearbit');
        }
        return response.url;
    } catch (error) {
        console.error('Error fetching logo from Clearbit:', error);
        return null;
    }
}
