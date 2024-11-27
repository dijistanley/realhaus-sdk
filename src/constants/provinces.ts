export interface ProvinceInfo {
  name: string;
  abbreviation: string;
  timeZone?: string;
}

export const provinces: ProvinceInfo[] = [
  {
    name: "Alberta",
    abbreviation: "AB",
    timeZone: 'Canada/Mountain'
  },
  {
    name: "British Columbia",
    abbreviation: "BC",
    timeZone: 'Canada/Pacific'
  },
  {
    name: "Manitoba",
    abbreviation: "MB",
    timeZone: 'Canada/Central'
  },
  {
    name: "New Brunswick",
    abbreviation: "NB",
    timeZone: 'Canada/Atlantic'
  },
  {
    name: "Newfoundland and Labrador",
    abbreviation: "NL",
    timeZone: 'Canada/Newfoundland'
  },
  {
    name: "Northwest Territories",
    abbreviation: "NT",
    timeZone: 'Canada/Mountain'
  },
  {
    name: "Nova Scotia",
    abbreviation: "NS",
    timeZone: 'Canada/Atlantic'
  },
  {
    name: "Nunavut",
    abbreviation: "NU",
    timeZone: 'Canada/Mountain'
  },
  {
    name: "Ontario",
    abbreviation: "ON",
    timeZone: 'Canada/Eastern'
  },
  {
    name: "Prince Edward Island",
    abbreviation: "PE",
    timeZone: 'Canada/Atlantic'
  },
  {
    name: "Quebec",
    abbreviation: "QC",
    timeZone: 'Canada/Eastern'
  },
  {
    name: "Saskatchewan",
    abbreviation: "SK",
    timeZone: 'Canada/Saskatchewan'
  },
  {
    name: "Yukon Territory",
    abbreviation: "YT",
    timeZone: 'Canada/Yukon'
  }
]
