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
const detectUserCountry = async () => {
  if (typeof window === 'undefined') return null;

  // First attempt - use ipapi.co
  try {
    const response = await fetch('https://ipapi.co/json/', {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Country detected (ipapi.co):', data.country_code);
    return data.country_code;
  } catch (error) {
    console.warn('Error with ipapi.co, trying alternative:', error);
    
    // Second attempt - use ipinfo.io as fallback
    try {
      const response = await fetch('https://ipinfo.io/json', {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(3000),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error with backup service! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Country detected (ipinfo.io):', data.country);
      return data.country;
    } catch (backupError) {
      console.error('Error with backup geolocation service:', backupError);
      return null;
    }
  }
};


// Determine if the user is in a Balkan country
// Only runs on client-side
export const isInBalkanRegion = async () => {
  // Make sure we're on the client side
  if (typeof window === 'undefined') return false;
  
  try {
    // Check if we already detected and cached the region
    const cachedResult = localStorage.getItem('is-balkan-region');
    
    if (cachedResult !== null) {
      const result = cachedResult === 'true';
      console.log('Using cached Balkan region detection:', result);
      return result;
    }
    
    // Not cached, perform the detection
    const countryCode = await detectUserCountry();
    const result = BALKAN_COUNTRIES.includes(countryCode);
    console.log('Is in Balkan region:', result);
    
    // Cache the result for future use (24 hour expiry)
    try {
      localStorage.setItem('is-balkan-region', result.toString());
      localStorage.setItem('balkan-detection-timestamp', Date.now().toString());
    } catch (storageError) {
      console.warn('Could not cache region detection', storageError);
    }
    
    return result;
  } catch (error) {
    console.error('Error detecting region:', error);
    return false;
  }
};

// Save the user's language preference
// Only runs on client-side
export const saveLocalePreference = (locale) => {
  try {
    localStorage.setItem('preferred-locale', locale);
    console.log('Locale preference saved:', locale);
  } catch (error) {
    console.warn('Could not save locale preference', error);
  }
};

export const getSavedLocale = () => {
  try {
    return localStorage.getItem('preferred-locale') || null;
  } catch (error) {
    console.warn('Could not get saved locale', error);
    return null;
  }
};

// Explicitly clear cached geolocation data
export const clearGeolocationCache = () => {
  try {
    localStorage.removeItem('is-balkan-region');
    localStorage.removeItem('balkan-detection-timestamp');
    console.log('Geolocation cache cleared');
    return true;
  } catch (error) {
    console.warn('Could not clear geolocation cache', error);
    return false;
  }
};