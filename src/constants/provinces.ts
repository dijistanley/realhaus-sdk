export interface ProvinceInfo {
  name: string;
  abbreviation: string;
}

export const provinces: ProvinceInfo[] = [
  {
    name: "Alberta",
    abbreviation: "AB"
  },
  {
    name: "British Columbia",
    abbreviation: "BC"
  },
  {
    name: "Manitoba",
    abbreviation: "MB"
  },
  {
    name: "New Brunswick",
    abbreviation: "NB"
  },
  {
    name: "Newfoundland and Labrador",
    abbreviation: "NL"
  },
  {
    name: "Northwest Territories",
    abbreviation: "NT"
  },
  {
    name: "Nova Scotia",
    abbreviation: "NS"
  },
  {
    name: "Nunavut",
    abbreviation: "NU"
  },
  {
    name: "Ontario",
    abbreviation: "ON"
  },
  {
    name: "Prince Edward Island",
    abbreviation: "PE"
  },
  {
    name: "Quebec",
    abbreviation: "QC"
  },
  {
    name: "Saskatchewan",
    abbreviation: "SK"
  },
  {
    name: "Yukon Territory",
    abbreviation: "YT"
  }
]

export const ProvinceTimeZones = {
  'ON': 'Canada/Eastern',
  'PE': 'Canada/Atlantic',
  'QC': 'Canada/Eastern',
  'SK': 'Canada/Saskatchewan',
  'YT': 'Canada/Yukon',
  'AB': 'Canada/Mountain',
  'BC': 'Canada/Pacific',
  'MB': 'Canada/Central',
  'NB': 'Canada/Atlantic',
  'NL': 'Canada/Newfoundland',
  'NT': 'Canada/Mountain',
  'NS': 'Canada/Atlantic',
  'NU': 'Canada/Mountain'
}