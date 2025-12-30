# BASE64IMAGE Conversion Counter API

This API tracks the total number of conversions performed across all BASE64IMAGE tools.

## Endpoint

`/api/counter.php`

## Methods

### GET - Get Current Count

Returns the current total conversion count.

**Request:**
```bash
GET /api/counter.php
```

**Response:**
```json
{
  "count": 12847
}
```

### POST - Increment Count

Increments the counter and returns the new count.

**Request:**
```bash
POST /api/counter.php
```

**Response:**
```json
{
  "count": 12848,
  "incremented": true
}
```

## Implementation Details

- Counter data is stored in `counter.txt` file
- Uses file locking to prevent race conditions
- Supports CORS for cross-origin requests
- Initial count starts at 12,847
- Thread-safe atomic operations

## Data Storage

The counter value is persisted in `/api/counter.txt`. This file is automatically created with the initial count if it doesn't exist.

## Security

- Read-only GET requests
- POST increments are logged
- File permissions set to 755
- No authentication required (public counter)
