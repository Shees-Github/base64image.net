// Site-wide Conversion Counter
// This script tracks conversions across all tools and updates the homepage counter

(function() {
    const STORAGE_KEY = 'base64image_conversions';
    const INITIAL_COUNT = 12847;

    // Increment conversion count
    window.incrementSiteConversions = function() {
        const current = parseInt(localStorage.getItem(STORAGE_KEY) || INITIAL_COUNT.toString(), 10);
        const newCount = current + 1;
        localStorage.setItem(STORAGE_KEY, newCount.toString());
        return newCount;
    };

    // Get current count
    window.getSiteConversions = function() {
        return parseInt(localStorage.getItem(STORAGE_KEY) || INITIAL_COUNT.toString(), 10);
    };
})();
