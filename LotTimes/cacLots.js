const cacLots = [
    
    //College Ave
    { name: "Lot 20", time: "Monday - Friday, 6AM - 2AM; Saturday - Sunday, 6AM - 2AM", 
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 26", time: "Monday - Friday, 6AM - 2AM; Saturday - Sunday, 6AM - 2AM" , 
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ]},
    { name: "Lot 30", time: "Monday - Friday, 6AM - 2AM; Saturday - Sunday, 6AM - 2AM", 
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 505/CAC Parking Deck", time: "Monday - Friday, 6AM - 2AM; Saturday - Sunday, 6AM - 2AM", 
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },

    { name: "Lot 11 NB", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ]  },
    { name: "Gated Lot 16", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ]  },
    { name: "Lot 32", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ]  },
    { name: "Lot 33", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ]  },

    { name: "Lot 13", time: "Monday - Thursday, 6PM - 8AM; Friday 6PM - Monday 8AM", //double check this one
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            startTime: "6:00 PM",
            endTime: "8:00 AM"
        },
        ,
        {
            days: ["Friday"],
            startTime: "6:00 PM",
            endTime: "11:59 PM"
        },
        {
            days: ["Saturday","Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
        },
        {
            days: ["Monday"],
            startTime: "12:00 AM",
            endTime: "8:00AM"
        }
    ] },

    //Busch
    { name: "Lot 67", time: "Monday - Thursday, 6PM - 8AM; Friday 6PM - Monday 8AM", //double check this one
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            startTime: "6:00 PM",
            endTime: "8:00 AM"
        },
        ,
        {
            days: ["Friday"],
            startTime: "6:00 PM",
            endTime: "11:59 PM"
        },
        {
            days: ["Saturday","Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
        },
        {
            days: ["Monday"],
            startTime: "12:00 AM",
            endTime: "8:00AM"
        }
    ] },
    { name: "Lot 50", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 51", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 51B", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 53A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 54", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 58", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 58A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 59", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 60A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 60B", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 61", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 63", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 63B", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 63C", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 64", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 66B", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 613/Stadium West", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Gated Lot 55", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },

    //Cook
    { name: "Lot 97", time: "Monday - Thursday, 6PM - 8AM; Friday 6PM - Monday 8AM", //double check this one
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            startTime: "6:00 PM",
            endTime: "8:00 AM"
        },
        ,
        {
            days: ["Friday"],
            startTime: "6:00 PM",
            endTime: "11:59 PM"
        },
        {
            days: ["Saturday","Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
        },
        {
            days: ["Monday"],
            startTime: "12:00 AM",
            endTime: "8:00AM"
        }
    ] },
    { name: "Lot 94", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 95", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 98A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 98B", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 805/Lipman Drive", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },

    //Douglass
    { name: "Lot 82", time: "Monday - Thursday, 6PM - 8AM; Friday 6PM - Monday 8AM", //double check this one
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            startTime: "6:00 PM",
            endTime: "8:00 AM"
        },
        ,
        {
            days: ["Friday"],
            startTime: "4:00 PM",
            endTime: "11:59 PM"
        },
        {
            days: ["Saturday","Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
        },
        {
            days: ["Monday"],
            startTime: "12:00 AM",
            endTime: "8:00AM"
        }
    ] },
    { name: "Lot 70", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 71A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 74A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 75", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 76", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 79", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 81", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 83", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 84", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 86", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 88", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 96", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 96A", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Douglas Deck", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 709/Corwin", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Gated Lot 79A", time: "Monday - Friday, 7:30PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "7:30 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },

    //Livingston
    { name: "Lot 101", time: "Monday - Thursday, 6PM - 8AM; Friday 6PM - Monday 8AM" , //double check this one
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            startTime: "6:00 PM",
            endTime: "8:00 AM"
        },
        ,
        {
            days: ["Friday"],
            startTime: "6:00 PM",
            endTime: "11:59 PM"
        },
        {
            days: ["Saturday","Sunday"],
            startTime: "12:00 AM",
            endTime: "11:59 PM"
        },
        {
            days: ["Monday"],
            startTime: "12:00 AM",
            endTime: "8:00AM"
        }
    ]},
    { name: "Lot 107", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 108", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 110", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 111", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 112", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 914/Scarlet Lot", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 915/Yellow Lot", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },
    { name: "Lot 916/Green Lot", time: "Monday - Friday, 6PM - 2AM; Saturday - Sunday, 6AM - 2AM",
    schedule: [
        {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            startTime: "6:00 PM",
            endTime: "2:00 AM"
        },
        {
            days: ["Saturday", "Sunday"],
            startTime: "6:00 AM",
            endTime: "2:00 AM"
        }
    ] },



];
module.exports = cacLots;