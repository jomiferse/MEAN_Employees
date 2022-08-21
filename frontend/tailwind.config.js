module.exports = {
    prefix: '',
    content: [
      './src/**/*.{html,ts}',
      './node_modules/flowbite/**/*.js'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
};
