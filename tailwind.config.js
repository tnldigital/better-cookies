module.exports = {
   content: [
      './pages/**/*.js',
      './components/**/*.js'
   ],
   theme: {
      extend: {
         maxHeight: {
            '80vh': '80vh'
         },
         backgroundImage: theme => ({
            'hero-pattern': "url('/img/bg.jpg')",
         })
      }
   },
   variants: {},
   plugins: [],
}