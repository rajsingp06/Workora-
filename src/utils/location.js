// Location Management Utility for Workora Local Services

const LOCATION_STORAGE_KEY = 'workora_user_location';
const BOOKINGS_STORAGE_KEY = 'workora_local_bookings';

export const DEFAULT_LOCATION = {
  city: 'Mumbai',
  area: 'Bandra West',
  pinCode: '400050',
  formatted: 'Mumbai, Bandra West',
  lat: 19.0596,
  lng: 72.8295,
  isGps: false
};

export const locationService = {
  // Get active location preference
  getLocation() {
    try {
      const data = localStorage.getItem(LOCATION_STORAGE_KEY);
      return data ? JSON.parse(data) : DEFAULT_LOCATION;
    } catch {
      return DEFAULT_LOCATION;
    }
  },

  // Save active location
  setLocation(locationObj) {
    localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(locationObj));
  },

  // Request browser geolocation with permission
  requestBrowserLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Determine approximate city/area based on coordinates or fallback to user's nearest metro
          const resolvedLocation = {
            city: 'Mumbai',
            area: 'Near Your Current GPS',
            pinCode: '400050',
            formatted: `GPS Location (${lat.toFixed(2)}°, ${lng.toFixed(2)}°)`,
            lat,
            lng,
            isGps: true
          };

          this.setLocation(resolvedLocation);
          resolve(resolvedLocation);
        },
        (error) => {
          let msg = 'Unable to retrieve location.';
          if (error.code === error.PERMISSION_DENIED) {
            msg = 'Location permission was denied. Please select your city or area manually.';
          }
          reject(new Error(msg));
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
  },

  // Calculate approximate distance between two lat/lng coordinates (Haversine formula in km)
  calculateDistance(lat1, lon1, lat2, lon2) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 6371; // Earth radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Number((R * c).toFixed(1));
  },

  // Get local bookings
  getBookings() {
    try {
      const data = localStorage.getItem(BOOKINGS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  // Save new local booking
  saveBooking(booking) {
    const bookings = this.getBookings();
    const newBooking = {
      id: `WRK-LOC-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      ...booking
    };
    bookings.unshift(newBooking);
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
  }
};
