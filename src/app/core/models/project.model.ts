import { DateRange } from './date-range.model';

export interface Project {
  name: string;
  dateRange: DateRange;
  link: string;
  summary: string;
  technologies: string[];
  projectFor: string;
}
