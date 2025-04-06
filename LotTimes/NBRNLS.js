const nbrnlsLots = [
    { name: "Lot 76", time: "24 hours, 7 days a week",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
          }
        ]
      },
      { name: "Lot 70", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 71A", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 74A", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 75", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 79", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Gated Lot 79A", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 81", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 82", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 83", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 84", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 86", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 88", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 94", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 95", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 96", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 96A", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Douglas Deck", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 99C", time: "24 hours, 7 days a week",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
          }
        ]
      },
      { name: "Lot 99D", time: "24 hours, 7 days a week",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
          }
        ]
      },
      { name: "Lot 94", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 95", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 98A", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 98B", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 805/Lipman Drive", time: "Monday - Friday, 8PM - 2AM; Saturday - Sunday, 6AM - 2AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "8:00 PM",
            endTime: "2:00 AM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
          }
        ]
      },
      { name: "Lot 97", time: "Mon - Fri 8PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            startTime: "8:00 PM",
            endTime: "8:00 AM"
          },
          {
            days: ["Friday"],
            startTime: "8:00 PM",
            endTime: "8:00 AM"
          },
          {
            days: ["Friday"],
            startTime: "4:00 PM",
            endTime: "11:59 PM"
          },
          {
            days: ["Saturday", "Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
          },
          {
            days: ["Monday"],
            startTime: "12:00 AM",
            endTime: "8:00 AM"
          }
        ]
      },
      { name: "Lot 50", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 51", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 51B", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 53A", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 54", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 58", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 58A", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 59", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 60A", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 60B", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 61", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 63", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 63B", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 63C", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 613/Stadium West", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Gated Lot 55", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 67", time: "Mon - Thu, 8PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "8:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 11 NB", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Gated Lot 16", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 26", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 30", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 33", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 13", time: "Mon - Thu, 8PM - 8AM; Fri 6PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "8:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "6:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 20", time: "Mon - Thu, 8PM - 8AM; Fri 6PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "8:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "6:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 505/ CAC Parking Deck", time: "Mon - Thu, 8PM - 8AM; Fri 6PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "8:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "6:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 101", time: "Mon - Thu, 8PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "8:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 107", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 108", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 109", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 110", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 111", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 112", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 914/Scarlet Lot", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 916/Green Lot", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 915/ Yellow Lot", time: "Mon - Fri, 8PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "8:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      }  
]


module.exports = nbrnlsLots;