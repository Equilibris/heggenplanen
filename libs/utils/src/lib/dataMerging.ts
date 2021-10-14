import { WeekBlock, StudyDataBlock, DataBlock } from '@heggenplanen/typings';
import cloneDeep from 'lodash/cloneDeep';

export const getDataBlockPriorityIndex = (dataBlock: DataBlock): number => {
  switch (dataBlock?.type) {
    case 'class':
      return 1 + (dataBlock.priorityIncrement || 0);
    case 'study':
      return 0 + (dataBlock.priorityIncrement || 0);
    default:
      return -1;
  }
};

export const mergeDataBlock = (d1: DataBlock, d2: DataBlock): DataBlock =>
  getDataBlockPriorityIndex(d2) >= getDataBlockPriorityIndex(d1) ? d2 : d1;

export const mergeWeekBlock = (w1: WeekBlock, _w2: WeekBlock): WeekBlock => {
  const internal = cloneDeep(w1);
  const w2 = cloneDeep(_w2);

  for (let dayIndex = 0; dayIndex < w2.length; dayIndex++) {
    const day = w2[dayIndex];

    for (let lessonIndex = 0; lessonIndex < day.length; lessonIndex++) {
      const lesson = day[lessonIndex];

      if (lesson)
        internal[dayIndex][lessonIndex] = mergeDataBlock(
          w1[dayIndex][lessonIndex],
          lesson
        );
    }
  }

  return internal;
};
