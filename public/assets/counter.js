// Site-wide Conversion Counter
// This script tracks conversions across all tools using a server-side API

(function() {
    const API_ENDPOINT = '/api/counter.php';
    const CACHE_KEY = 'base64image_count_cache';
    const CACHE_DURATION = 5000; // 5 seconds

    // Cache for count to reduce API calls
    let cachedCount = null;
    let cacheTime = 0;

    // Get count from API
    async function fetchCount() {
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            cachedCount = data.count;
            cacheTime = Date.now();

            // Store in localStorage as backup
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                count: data.count,
                timestamp: Date.now()
            }));

            return data.count;
        } catch (error) {
            console.warn('Failed to fetch count from API, using cache:', error);
            // Fallback to localStorage cache
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const data = JSON.parse(cached);
                return data.count;
            }
            return 12847; // Fallback to initial count
        }
    }

    // Increment conversion count on server
    async function incrementCount() {
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            cachedCount = data.count;
            cacheTime = Date.now();

            // Update localStorage cache
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                count: data.count,
                timestamp: Date.now()
            }));

            // Trigger storage event for other tabs
            window.dispatchEvent(new CustomEvent('conversionIncremented', {
                detail: { count: data.count }
            }));

            return data.count;
        } catch (error) {
            console.error('Failed to increment count:', error);
            // Fallback: increment local cache
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const data = JSON.parse(cached);
                data.count++;
                data.timestamp = Date.now();
                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                return data.count;
            }
            return null;
        }
    }

    // Public API: Increment conversion count
    window.incrementSiteConversions = function(callback) {
        incrementCount().then(count => {
            if (callback && typeof callback === 'function') {
                callback(count);
            }
        });
    };

    // Public API: Get current count
    window.getSiteConversions = async function() {
        // Use cache if fresh
        if (cachedCount && (Date.now() - cacheTime) < CACHE_DURATION) {
            return cachedCount;
        }

        // Otherwise fetch from API
        return await fetchCount();
    };

    // Public API: Get current count synchronously (returns cached value)
    window.getSiteConversionsSync = function() {
        if (cachedCount) {
            return cachedCount;
        }

        // Try localStorage cache
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const data = JSON.parse(cached);
            cachedCount = data.count;
            return data.count;
        }

        return 12847; // Fallback
    };

    // Poll for updates every 10 seconds
    setInterval(async function() {
        const count = await fetchCount();
        if (count !== cachedCount) {
            window.dispatchEvent(new CustomEvent('conversionUpdated', {
                detail: { count: count }
            }));
        }
    }, 10000);

    // Initial fetch
    fetchCount();
})();
