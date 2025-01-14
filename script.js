document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password').value = password;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allCharacters = '';
    if (includeLowercase) allCharacters += lowercase;
    if (includeUppercase) allCharacters += uppercase;
    if (includeNumbers) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}
