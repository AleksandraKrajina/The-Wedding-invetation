// utils/geoDetection.js

// List of Balkan country codes (including Kosovo which has XK as its ISO code)
const BALKAN_COUNTRIES = [
    'RS', // Serbia
    'HR', // Croatia
    'BA', // Bosnia and Herzegovina
    'ME', // Montenegro
    'MK', // North Macedonia
    'SI', // Slovenia
    'AL', // Albania
    'BG', // Bulgaria
    'XK'  // Kosovo
  ];
  
  // Function to detect user's country using IP geolocation
  // Only runs on client-side
  export const detectUserCountry = async () => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return null;
    
    try {
      // Free IP geolocation API with fallback
      const response = await fetch('https://ipapi.co/json/', { 
        headers: { 'Accept': 'application/json' },
        // Using short timeout to avoid long page load times
        signal: AbortSignal.timeout(3000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Country detected:', data.country_code);
      return data.country_code;
    } catch (error) {
      console.error('Error detecting country:', error);
      return null;
    }
  };
  
  // Determine if the user is in a Balkan country
  // Only runs on client-side
  export const isInBalkanRegion = async () => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return false;
    
    try {
      const countryCode = await detectUserCountry();
      const result = BALKAN_COUNTRIES.includes(countryCode);
      console.log('Is in Balkan region:', result);
      return result;
    } catch (error) {
      console.error('Error detecting region:', error);
      return false;
    }
  };
  
  // Save the user's language preference
  // Only runs on client-side
  export const saveLocalePreference = (locale) => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem('preferred-locale', locale);
      console.log('Locale preference saved:', locale);
    } catch (error) {
      console.warn('Could not save locale preference', error);
    }
  };
  
  // Get the user's saved language preference
  // Only runs on client-side
  export const getSavedLocale = () => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return null;
    
    try {
      const locale = localStorage.getItem('preferred-locale');
      console.log('Retrieved saved locale:', locale);
      return locale;
    } catch (error) {
      console.warn('Could not get saved locale', error);
      return null;
    }
  };