import { Dict } from 'src/app/core/models/dict.model';
import { ButtonInfo } from '../models/button-info.model';

export const buttons: Dict<ButtonInfo[]> = {
  content: [
    {
      type: 'experience',
      label: 'Experience',
      icon: 'bi bi-briefcase-fill',
    },
    {
      type: 'education',
      label: 'Education',
      icon: 'bi bi-bank2',
    },
    {
      type: 'projects',
      label: 'Projects',
      icon: 'bi bi-code-slash',
    },
    {
      type: 'custom',
      label: 'Custom',
      icon: 'bi bi-cc-square-fill',
    },
  ],
  item: [
    {
      type: 'item',
      label: 'Add item',
      icon: 'bi bi-plus-square-fill',
    },
  ]
};
