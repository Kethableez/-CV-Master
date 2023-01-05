import { Contact } from './contact.model';
import { Education } from './eductaion.model';
import { Experience } from './experience.model';
import { MetaData } from './meta-data.model';
import { NameLevelContainer } from './name-level-container.model';
import { Project } from './project.model';

export interface CvContent {
  meta: MetaData;
  summary: string;
  contact: Contact;
  skills: NameLevelContainer<number>[];
  interests: string;
  languages: NameLevelContainer<string>[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}
