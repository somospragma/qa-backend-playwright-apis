export const schemaSummaryBooking = {
    "type": "object",
    "properties": {
      "bookings": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "bookingDates": {
                "type": "object",
                "properties": {
                  "checkin": {
                    "type": "string"
                  },
                  "checkout": {
                    "type": "string"
                  }
                },
                "required": [
                  "checkin",
                  "checkout"
                ]
              }
            },
            "required": [
              "bookingDates"
            ]
          }
        ]
      }
    },
    "required": [
      "bookings"
    ]
  }