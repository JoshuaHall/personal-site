import React, { ReactElement } from 'react';

import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { DefaultLayout } from '../components/DefaultLayout';
import { CustomIcon } from '../components/CustomIcon';
import { ChildrenProps } from '../childrenProps';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default function Resume(): ReactElement {
  const { myLinkedIn, myEmail, myGitHub, myFormattedPhone, myPhone } = useSiteMetadata();

  const skillsList = [
    'Design patterns and principles',
    'Technical analysis',
    'Web user interfaces',
    'Code delivery review',
    'Quality Assurance',
    'Software best practices',
  ];

  const languagesList = ['JavaScript and TypeScript', 'HTML and CSS', 'C#', 'Elm', 'Python'];

  const toolsAndFrameworksList = [
    'React',
    'Elm Architecture',
    'Angular 2',
    'GatsbyJS',
    'Git',
    'GitHub',
    'Code linters and analyzers',
  ];

  return (
    <DefaultLayout title="Resume">
      <div className="columns is-centered">
        <div className="column">
          <h1 className="title is-2 has-text-centered">Joshua Hall</h1>
        </div>
      </div>
      <div className="columns is-multiline is-centered">
        <ResumeSubtitleColumn>
          <CustomIcon icon={faHome} alignWithText /> Kansas City, MO
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={`tel:+${myPhone}`}>
            <CustomIcon icon={faPhone} alignWithText /> {myFormattedPhone}
          </a>
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={`mailto:${myEmail}`}>
            <CustomIcon icon={faEnvelope} alignWithText /> {myEmail}
          </a>
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={myLinkedIn}>
            <CustomIcon icon={faLinkedin} alignWithText /> LinkedIn
          </a>
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={myGitHub}>
            <CustomIcon icon={faGithub} alignWithText /> GitHub
          </a>
        </ResumeSubtitleColumn>
      </div>

      <hr />

      <div className="columns is-centered">
        <div className="column">
          <h2 className="title">Professional Summary</h2>
          <p className="content">
            Software Developer welcoming challenging projects and enjoying working with all sorts of personalities.
            Committed to writing high quality code that results in a smooth end user experience.
          </p>
        </div>
      </div>
      <HeaderWithColumnsWithBoxes header="Skills" columnTexts={skillsList} />
      <HeaderWithColumnsWithBoxes header="Languages" columnTexts={languagesList} />
      <HeaderWithColumnsWithBoxes header="Tools and Frameworks" columnTexts={toolsAndFrameworksList} />

      <h2 className="title">Work History</h2>

      <ResumeJob
        title="Web Developer"
        duration="11/2018 to 03/2020"
        companyName="Tributes Software, Inc."
        location="Liberty, MO"
      >
        <ul>
          <li>Tested websites and performed troubleshooting prior to deployment.</li>
          <li>
            Analyzed requirements and designed, developed and implemented software applications for multiple websites.
          </li>
          <li>
            Built and styled 3 new mobile-friendly websites and transitioned an old site into mobile-friendly version.
          </li>
        </ul>
      </ResumeJob>
      <ResumeJob title="KCIT Apprentice" duration="06/2016 to 10/2016" companyName="Cerner" location="Kansas City, KS">
        <ul>
          <li>Helped hospitals and healthcare professionals troubleshoot issues related to Cerner products.</li>
          <li>Triaged issues and prioritized work to ensure a smooth and satisfactory customer experience.</li>
        </ul>
      </ResumeJob>
      <ResumeJob
        title="Northland CAPS Intern"
        duration="01/2016 to 04/2016"
        companyName="Dazium Design Solutions"
        location="Kansas City, MO"
      >
        <ul>
          <li>Cleaned and maintained school district technology equipment.</li>
          <li>Worked in a team on installing technology equipment in multiple school district locations.</li>
        </ul>
      </ResumeJob>
      <div className="columns">
        <div className="column">
          <h2 className="title">Education</h2>
          <div className="box">
            <p className="content">
              <strong>University of Missouri-Kansas City</strong> - Some College (No Degree)
            </p>
            <p>Focus: Computer Science</p>
          </div>
          <div className="box">
            <p className="content">
              <strong>Park Hill South High School</strong> - High School Diploma (3.8 GPA)
            </p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="title">Accomplishments</h2>
          <div className="content">
            <ul>
              <li>Eagle Scout rank in the Boy Scouts of America</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="title">Certifications</h2>
          <div className="content">
            <ul>
              <li>FreeCodeCamp.org JavaScript Algorithms and Data Structures</li>
              <li>FreeCodeCamp.org Front End Libraries Developer Certification</li>
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

function ResumeSubtitleColumn({ children }: ChildrenProps): ReactElement<ChildrenProps> {
  return (
    <div className="column is-narrow">
      <p className="content has-text-centered">{children}</p>
    </div>
  );
}

interface SkillsColumnProps {
  text: string;
}

function SkillsColumn({ text }: SkillsColumnProps): ReactElement<SkillsColumnProps> {
  return (
    <div className="column is-4">
      <div className="box">
        <p className="content has-text-centered">{text}</p>
      </div>
    </div>
  );
}

interface ColumnsWithBoxesProps {
  columnTexts: string[];
}

function ColumnsWithBoxes({ columnTexts }: ColumnsWithBoxesProps): ReactElement<ColumnsWithBoxesProps> {
  return (
    <div className="columns is-centered is-multiline">
      {columnTexts.map((text) => (
        <SkillsColumn key={text} text={text} />
      ))}
    </div>
  );
}

interface HeaderWithColumnsWithBoxesProps extends ColumnsWithBoxesProps {
  header: string;
}

function HeaderWithColumnsWithBoxes({
  header,
  columnTexts,
}: HeaderWithColumnsWithBoxesProps): ReactElement<HeaderWithColumnsWithBoxesProps> {
  return (
    <div className="columns is-centered">
      <div className="column">
        <h2 className="title">{header}</h2>

        <ColumnsWithBoxes columnTexts={columnTexts} />
      </div>
    </div>
  );
}

interface ResumeJobProps extends ChildrenProps {
  title: string;
  duration: string;
  companyName: string;
  location: string;
}

function ResumeJob({ title, duration, companyName, location, children }: ResumeJobProps): ReactElement<ResumeJobProps> {
  return (
    <div className="card resume-job">
      <div className="card-header">
        <div className="card-header-title">
          {title}, {duration} - {companyName}, {location}
        </div>
      </div>
      <div className="card-content">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
