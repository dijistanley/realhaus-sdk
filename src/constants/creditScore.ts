import { CreditScoreLevel } from '../enums/creditScore';
import { CreditScoreRange } from '../interfaces/creditReport';

export const creditScoreRanges: CreditScoreRange[] = [
  {
    level: CreditScoreLevel.EXCELLENT,
    upper: 900,
    lower: 800,
    color: 'rgb(30, 122, 30)'
  },
  {
    level: CreditScoreLevel.VERYGOOD,
    upper: 799,
    lower: 740,
    color: 'rgb(76, 175, 80)'
  },
  {
    level: CreditScoreLevel.GOOD,
    upper: 739,
    lower: 670,
    color: 'rgb(255, 235, 59)'
  },
  {
    level: CreditScoreLevel.FAIR,
    upper: 669,
    lower: 580,
    color: 'rgb(255, 128, 0)'
  },
  {
    level: CreditScoreLevel.POOR,
    upper: 579,
    lower: 300,
    color: 'rgb(255, 67, 54)'
  },
]