const nbncLots = [
    { name: "Lot 67", time: "Mon - Thu, 4PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "4:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 51", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 51B", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 53A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 54", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 58", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 58A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 59", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 60A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 60B", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 61", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 63", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 63B", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 63C", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 613/Stadium West", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Gated Lot 55", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Rodkin Center Lot", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 13", time: "Mon - Thu, 4PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "4:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 11 NB", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Gated Lot 16", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 20", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 26", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 30", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 32", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 33", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 505/ CAC Parking Deck", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 94", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 95", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 98A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 98B", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 805/Lipman Drive", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 97", time: "Mon - Thu, 4PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "4:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 82", time: "Mon - Thu, 4PM - 8AM; Fri 4PM - Mon 8AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "4:00 PM", endTime: "8:00 AM" },
          { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
          { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
          { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
        ]
      },
      { name: "Lot 70", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 71A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 74A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 75", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 76", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 79", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 81", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 83", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 84", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 86", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 88", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 96", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 96A", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Douglas Deck", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 709/Corwin", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Gated Lot 79A", time: "Mon - Fri, 7:30PM - 2AM; Sat - Sun, 6AM - 2AM",
        schedule: [
          { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "7:30 PM", endTime: "2:00 AM" },
          { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
        ]
      },
      { name: "Lot 101", time: "Mon - Thu, 4PM - 8AM; Fri 4PM - Mon 8AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], startTime: "4:00 PM", endTime: "8:00 AM" },
    { days: ["Friday"], startTime: "4:00 PM", endTime: "11:59 PM" },
    { days: ["Saturday", "Sunday"], startTime: "12:00 AM", endTime: "11:59 PM" },
    { days: ["Monday"], startTime: "12:00 AM", endTime: "8:00 AM" }
  ]
},
{ name: "Lot 107", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 108", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 110", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 111", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 112", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 914/Scarlet Lot", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 916/Green Lot", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
},
{ name: "Lot 915/Yellow Lot", time: "Mon - Fri, 4PM - 2AM; Sat - Sun, 6AM - 2AM",
  schedule: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], startTime: "4:00 PM", endTime: "2:00 AM" },
    { days: ["Saturday", "Sunday"], startTime: "6:00 AM", endTime: "2:00 AM" }
  ]
}
]


module.exports = nbncLots;