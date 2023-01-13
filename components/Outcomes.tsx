import React from 'react';

import Card from './Card';
import Headline from './Headline';
import { PUBLIC_DATE_FORMAT } from '../constants';
import { toFormatted } from '../utils';
import { OutcomesState } from '../types';

export default function Outcomes({
  fertileWindow,
  ovulationDate,
  nextPeriod,
  pregnancyTestDay,
  expectedDueDate,
}: OutcomesState) {
  return (
    <>
      <Headline
        primary="Outcomes"
        secondary="Start tracking your ovulation today and take control of your fertility journey."
      />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          date={`${toFormatted(
            fertileWindow?.[0],
            PUBLIC_DATE_FORMAT
          )} - ${toFormatted(fertileWindow?.[1], PUBLIC_DATE_FORMAT)}`}
          title="Fertile Window"
          description="The fertile window is the time period in which a woman is most likely to conceive, typically occurring around the time of ovulation."
        />

        <Card
          date={toFormatted(ovulationDate, PUBLIC_DATE_FORMAT)}
          title="Ovulation Date"
          description="Ovulation date is the day in a woman's menstrual cycle when an egg is released from the ovary and can potentially be fertilized."
        />

        <Card
          date={toFormatted(nextPeriod, PUBLIC_DATE_FORMAT)}
          title="Next Period Date"
          description="The Next Period Date is the date when a women's menstrual cycle is expected to begin again after the previous period."
        />

        <Card
          date={toFormatted(pregnancyTestDay, PUBLIC_DATE_FORMAT)}
          title="Pregnancy Test Date"
          description="A pregnancy test date refers to the date on which a woman takes a pregnancy test to determine if she is pregnant."
        />

        <Card
          date={toFormatted(expectedDueDate, PUBLIC_DATE_FORMAT)}
          title="Expected Due Date"
          description="The expected due date (EDD) is the date that a pregnant woman's baby is expected to be born. The actual due date may vary by a few days or weeks."
        />
      </div>
    </>
  );
}
