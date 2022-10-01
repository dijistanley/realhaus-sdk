import { CreditScoreLevel } from '../enums/creditScore';
import { CreditScoreRange } from '../interfaces/creditReport';

export const creditScoreRanges: CreditScoreRange[] = [
  {
    level: CreditScoreLevel.EXCELLENT,
    upper: 900,
    lower: 833,
    color: 'rgb(67, 224, 193)'
  },
  {
    level: CreditScoreLevel.VERYGOOD,
    upper: 832,
    lower: 790,
    color: 'rgb(72, 176, 229)'
  },
  {
    level: CreditScoreLevel.GOOD,
    upper: 789,
    lower: 743,
    color: 'rgb(248, 211, 69)'
  },
  {
    level: CreditScoreLevel.FAIR,
    upper: 742,
    lower: 693,
    color: 'rgb(255, 136, 56)'
  },
  {
    level: CreditScoreLevel.POOR,
    upper: 692,
    lower: 300,
    color: 'rgb(255, 98, 101)'
  },
]