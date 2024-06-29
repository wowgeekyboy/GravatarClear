# GravatarClear

GravatarClear is a simple Node.js application that fetches and displays avatar images from Gravatar for email addresses and logo images from Clearbit for website domains. Additionally, it can autocomplete company names using Clearbit's API.

## Features

- Enter an email address to get the Gravatar image.
- Enter a website domain to get the logo from Clearbit.
- Handles errors and edge cases gracefully.
- Bonus: Autocomplete company names using Clearbit Autocomplete API.


## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/wowgeekyboy/GravatarClear.git
    cd GravatarClear
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Environment Variables:**

    Create a `.env` file in the root directory and add your Clearbit API key:
    ```
    CLEARBIT_API_KEY=your_clearbit_api_key
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Enter an email address or website domain in the text box.
- See the Gravatar image or website logo displayed on the page.

## API Details

- **Gravatar API:** Fetches avatar images for email addresses.
- **Clearbit Logo API:** Fetches logo images for website domains.
- **Clearbit Autocomplete API (Bonus):** Autocompletes company names based on partial input.

## Technologies Used

- Node.js
- Express.js
- Clearbit API
- Gravatar API

## Future Improvements

- Enhance the frontend design.
- Add more error handling scenarios.
- Improve the autocomplete feature.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

## Acknowledgements

- [Gravatar](https://en.gravatar.com/site/implement/images/)
- [Clearbit](https://clearbit.com/)
