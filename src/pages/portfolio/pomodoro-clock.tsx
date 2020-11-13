import React from 'react';
import type { ReactElement } from 'react';

import { graphql } from 'gatsby';

import type { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { PomodoroClock } from 'pomodoro-clock';

export default function PomodoroClockPage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  return (
    <PortfolioPageLayout
      element={
        <PomodoroClock
          beepLengthMs={3500}
          initialSession={25}
          initialBreak={5}
          beepSrcUrl="https://soundbible.com/mp3/Loud_Alarm_Clock_Buzzer-Muk1984-493547174.mp3"
        />
      }
      {...data.github.viewer.repository}
    />
  );
}

export const query = graphql`
  query PomodoroClockQuery {
    github {
      viewer {
        repository(name: "pomodoro-clock") {
          name
          description
        }
      }
    }
  }
`;
