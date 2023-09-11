import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        notice: 'rgb(var(--color-accent) / <alpha-value>)',
        shopPay: 'rgb(var(--color-shop-pay) / <alpha-value>)',
      },
      screens: {
      sm: '20em',                                 // min: 320 px - ..
      md: '36em',                                 // min: 576 px - ..
      lg: '48em',                                 // min: 768 px - ..
      xl: '62em',                                 // min: 992 px - ..
      '2xl': '75em',                              // min: 1200px - ..
      'sm-max': { max: '36em' },                  // min: ... max: 576 px
      'md-max': { max: '48em' },                  // min: ... max: 768 px
      'lg-max': { max: '62em' },                  // min: ... max: 992 px
      'sm-only': { min: '20em', max: '36em' },    // min: 320 px -- max: 576 px
      'md-only': { min: '36em', max: '48em' },    // min: 576 px -- max: 768 px
      'lg-only': { min: '48em', max: '62em' },    // min: 768 px -- max: 992 px
      'xl-only': { min: '62em', max: '75em' },    // min: 992 px -- max: 1200 px
      '2xl-only': { min: '75em' },                // min: 1200 px -- ..
    },

      // screens: {
      //   sm: '32em',
      //   md: '48em',
      //   lg: '64em',
      //   xl: '80em',
      //   'xs': '16em',
      //   '2xl': '96em',
      //   'xs-only': {min: '16em', max: '32em'},
      //   'sm-max': {max: '48em'},
      //   'sm-only': {min: '32em', max: '48em'},
      //   'md-only': {min: '48em', max: '64em'},
      //   'lg-only': {min: '64em', max: '80em'},
      //   'xl-only': {min: '80em', max: '96em'},
      //   '2xl-only': {min: '96em'},
      // },

      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
        marcellus: ['Marcellus', 'sans'],
        
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
