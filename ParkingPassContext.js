import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the Context
export const ParkingPassContext = createContext();

export const ParkingPassProvider = ({ children }) => {
  const [currPass, setCurrPass] = useState("Busch Commuter");
  const [currCity, setCurrCity] = useState("New Brunswick");
  const [currListViewInfo, setCurrListViewInfo] = useState(null);
  const [currMapViewID, setCurrMapViewID] = useState(null);
  const [lotInfo, setLotInfo] = useState([
    {
      pass: "Busch Commuter",
      id: "bccLots",
      campuses: [
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 613/Stadium West",
              timeslots: ["Monday - Friday, 6AM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Gated Lot 55",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97, Lot 82",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Busch Off-Campus Living",
      id: "nboclrbsLots",
      campuses: [
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 51, Lot 58B, Lot 58C, Lot 58d, Lot 62, Lot 65A, Lot 65D, Lot 66A, Lot 67, Lot 67A, Johnson Apartment Lot 603, Johnson Apartment Lot 604, Johnson Apartment Lot 605, Johnson Apartment Lot 606, Lot 623/Marvin Apts",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 50, Lot 51B, Lot 53A, Lot 54, Gated Lot 55, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 613/Stadium West",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive, Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97, Lot 82",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Busch Resident",
      id: "nbrbrsLots",
      campuses: [
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 51, Lot 58B, Lot 58C, Lot 58d, Lot 62, Lot 65A, Lot 65D, Lot 66A, Lot 67, Lot 67A, Johnson Apartment Lot 603, Johnson Apartment Lot 604, Johnson Apartment Lot 605, Johnson Apartment Lot 606, Lot 623/Marvin Apts",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 50, Lot 51B, Lot 53A, Lot 54, Gated Lot 55, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive, Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97, Lot 82",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "College Ave Commuter",
      id: "cacLots",
      campuses: [
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 20, Lot 26, Lot 30, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 32, Lot 33",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 97, Lot 82",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive, Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Cook Commuter",
      id: "cccLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 98A, Lot 98B, Lot 99C, Lot 99D",
              timeslots: ["Monday - Friday, 6AM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Thursday, 6PM - 2AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 94, Lot 95, Lot 805/Lipman Drive, Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 82",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Cook Off-Campus Living",
      id: "nboclcLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 99A, Lot 99B, Lot 99C, Lot 99D",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 98A, Lot 98B, Lot 805/Lipman Drive, Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM"]
            },
            {
              name: "Lot 82, Lot 13",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 8PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51B, Lot 53A, Lot 54, Gated Lot 55, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 613/Stadium West",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Cook Resident",
      id: "nbr99Lots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 99A, Lot 99B, Lot 99C, Lot 99D",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM"]
            },
            {
              name: "Lot 82, Lot 13",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 8PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Douglass Commuter",
      id: "dccLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 79, Douglas Deck",
              timeslots: ["Monday - Friday, 6AM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Lot 709/Corwin, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 82, Lot 97",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Gibbons Resident",
      id: "nbrgibLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 99C, Lot 99D, Lot 74A",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 8PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Helyar Resident",
      id: "nbrhelLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Helyar House Lot",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 82",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 8PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Henderson Resident",
      id: "nbrhndLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 99C, Lot 99D",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Jameson Resident",
      id: "nbrjamLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 99C, Lot 99D",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Katzenbach Resident",
      id: "nbrkatLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 712/Katzenbach, Lot 76",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Lippincott Resident",
      id: "nbrlipLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 711/Lippincott, Lot 76",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Livingston Commuter",
      id: "lccLots",
      campuses: [
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 915/ Yellow Lot",
              timeslots: ["Monday - Friday, 6AM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 82, Lot 97",
              timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday 8AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Livingston Off-Campus Living",
      id: "nbocllivLots",
      campuses: [
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 103, Lot 105",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 8PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51B, Lot 53A, Lot 54, Gated Lot 55, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 613/Stadium West",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 82, Lot 97",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Livingston Resident",
      id: "nbrlivLots",
      campuses: [
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 103, Lot 105",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 101",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 8PM - Monday 8AM"]
            },
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 97",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 82",
              timeslots: ["Monday - Friday, 8PM - 8AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "New Brunswick Night Commuter",
      id: "nbncLots",
      campuses: [
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 4PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55, Rodkin Center Lot",
              timeslots: ["Monday - Friday, 4PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 50",
              timeslots: ["Monday - Friday, 4PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 13",
              timeslots: ["Monday - Thursday, 4PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Friday, 4PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 82, Lot 97",
              timeslots: ["Monday - Thursday, 4PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglas Deck, Lot 709/Corwin, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 4PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Gated Lot 79A",
              timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 4PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/Yellow Lot",
              timeslots: ["Monday - Friday, 4PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 4PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Lot 509B Eagle West, Lot 506 Essex, Golden Dome Lot 507, Lot 508",
              timeslots: ["Monday - Friday, 4PM - 12AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {}
          ]
        }         
      ]
    },
    {
      pass: "Nicholas Resident",
      id: "nbrnlsLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 76, Lot 99C, Lot 99D",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 109, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    },
    {
      pass: "Woodbury Resident",
      id: "nbrwooLots",
      campuses: [
        {
          campus: "Cook/Douglass",
          lots: [
            {
              name: "Lot 76, Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive",
              timeslots: ["24 hours, 7 days a week"]
            },
            {
              name: "Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 79, Gated Lot 79A, Lot 81, Lot 82, Lot 83, Lot 84, Lot 86, Lot 88, Lot 94, Lot 95, Lot 96, Lot 96A, Douglas Deck, Lot 97",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 97",
              timeslots: ["Monday - Friday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Busch",
          lots: [
            {
              name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 613/Stadium West, Gated Lot 55",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 67",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "College Ave",
          lots: [
            {
              name: "Lot 11 NB, Gated Lot 16, Lot 26, Lot 30, Lot 33",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 13, Lot 20, Lot 505/ CAC Parking Deck",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 6PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Livingston",
          lots: [
            {
              name: "Lot 101",
              timeslots: ["Monday - Thursday, 8PM - 8AM", "Friday 4PM - Monday 8AM"]
            },
            {
              name: "Lot 107, Lot 108, Lot 109, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/Yellow Lot",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Health - Piscataway",
          lots: [
            {
              name: "Lot A, Lot B, Lot C",
              timeslots: ["Monday - Friday, 8PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            }
          ]
        },
        {
          campus: "Newark",
          lots: [
            {
              name: "Deck 3, P1 Norfolk Parking Deck",
              timeslots: ["Monday - Friday, 6AM - 12AM"]
            },
            {
              name: "Lot 506 Essex, Golden Dome Lot 507",
              timeslots: ["Monday - Friday, 3:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
            },
            {
              name: "Lot 508",
              timeslots: ["Monday - Thursday, 3:30PM - 8AM", "Friday 3:30PM - Monday 8AM"]
            }
          ]
        },
        {
          campus: "Camden",
          lots: [
            {
              name: "Lot C15, Lot C16",
              timeslots: ["Monday - Friday, 7AM - 9:30PM"]
            },
            {
              name: "Lot C1, Lot C2, Lot C3, Lot C14",
              timeslots: ["Friday 3:30PM - Monday 8AM"]
            }
          ]
        }
      ]
    }
  ]);
  

  const getData = async () => {
    try {
      const parkingPass = await AsyncStorage.getItem('parkingPass');
      const city = await AsyncStorage.getItem('city');
      if (parkingPass !== null) {
        setCurrCity(city);
        setCurrPass(parkingPass);
        const match = lotInfo.find(info => info.pass === parkingPass);
        setCurrListViewInfo(match.campuses);
        if (match) {
          setCurrMapViewID(match.id);
        }
      }
      else{
        setCurrCity("New Brunswick")
        setCurrPass("Busch Commuter")
        setCurrMapViewID("bccLots")
        setCurrListViewInfo(lotInfo[0].campuses)
      }
      
    } 
    catch (e) {
      console.error("Error retrieving parking pass:", e);
    }
  };

  // Function to update the parking pass and store it in AsyncStorage
  const updateParkingPass = async (newPass) => {
    try {
      await AsyncStorage.setItem('parkingPass', newPass);
      setCurrPass(newPass);
      const match = lotInfo.find(info => info.pass === newPass); // ✅ Use newPass here
      setCurrListViewInfo(match.campuses);
      if (match) {
        setCurrMapViewID(match.id);
      }
    } catch (e) {
      console.error("Error saving parking pass:", e);
    }
  };

  // Function to update the city and store it in AsyncStorage
  const updateCity = async (newCity) => {
    try {
      await AsyncStorage.setItem('city', newCity);
      setCurrCity(newCity);
    } catch (e) {
      console.error("Error saving new city:", e);
    }
  };
  

    // Retrieve parking pass from AsyncStorage when the app loads
    useEffect(() => {
      getData();
    }, []);

  return (
    <ParkingPassContext.Provider value ={{ currPass, currCity, currListViewInfo, currMapViewID, updateParkingPass, updateCity}}>
      {children}
    </ParkingPassContext.Provider>
  );
};