import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { PomodoroClock } from 'pomodoro-clock';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

interface PomodoroClockPageProps {
  data: {
    github: {
      viewer: {
        repository: {
          name: string;
          description: string;
        };
      };
    };
  };
}

export default function PomodoroClockPage({ data }: PomodoroClockPageProps): ReactElement<PomodoroClockPageProps> {
  return (
    <PortfolioPageLayout
      element={
        <PomodoroClock
          beepLengthMs={3500}
          initialSession={25}
          initialBreak={5}
          beepSrcUrl="http://soundbible.com/mp3/Loud_Alarm_Clock_Buzzer-Muk1984-493547174.mp3"
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
