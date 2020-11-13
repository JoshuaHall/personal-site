import React from 'react';
import type { ReactElement } from 'react';

// FA SOLID
import envelopeIcon from '@iconify/icons-fa-solid/envelope';
import homeIcon from '@iconify/icons-fa-solid/home';
import phoneIcon from '@iconify/icons-fa-solid/phone';
import searchIcon from '@iconify/icons-fa-solid/search';
import medalIcon from '@iconify/icons-fa-solid/medal';

// FA BRANDS
import linkedinIcon from '@iconify/icons-fa-brands/linkedin';
import githubIcon from '@iconify/icons-fa-brands/github';
import html5Icon from '@iconify/icons-fa-brands/html5';
import css3Icon from '@iconify/icons-fa-brands/css3';
import sassIcon from '@iconify/icons-fa-brands/sass';
import javaScriptIcon from '@iconify/icons-fa-brands/js';
import pythonIcon from '@iconify/icons-fa-brands/python';
import reactIcon from '@iconify/icons-fa-brands/react';
import angularIcon from '@iconify/icons-fa-brands/angular';
import gitAltIcon from '@iconify/icons-fa-brands/git-alt';
import nodeJsIcon from '@iconify/icons-fa-brands/node-js';

// SIMPLE ICONS
import typeScriptIcon from '@iconify/icons-simple-icons/typescript';
import gatsbyIcon from '@iconify/icons-simple-icons/gatsby';
import eslintIcon from '@iconify/icons-simple-icons/eslint';

// ICONS LOGOS
import cSharpIcon from '@iconify/icons-logos/c-sharp';
import elmIcon from '@iconify/icons-logos/elm';

// ICONS CLARITY
import designIcon from '@iconify/icons-clarity/design-solid';

// ICONS IC
import userInterfaceIcon from '@iconify/icons-ic/round-web';
import roundRateReviewIcon from '@iconify/icons-ic/round-rate-review';
import roundHighQualityIcon from '@iconify/icons-ic/round-high-quality';

import { DefaultLayout } from '../components/DefaultLayout';
import { CustomIcon } from '../components/CustomIcon';
import type { ChildrenProps } from '../childrenProps';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { ExternalLinkNewTabWithIcon } from '../components/ExternalLink';
import type { IconifyIcon } from '@iconify/types';

type ListWithIcons = [string, IconifyIcon][];

export default function Resume(): ReactElement {
  const { myLinkedIn, myEmail, myGitHub, myFormattedPhone, myPhone } = useSiteMetadata();

  const skillsList: ListWithIcons = [
    ['Design patterns and principles', designIcon],
    ['Technical analysis', searchIcon],
    ['Web user interfaces', userInterfaceIcon],
    ['Code delivery review', roundRateReviewIcon],
    ['Quality Assurance', roundHighQualityIcon],
    ['Software best practices', medalIcon],
  ];

  const languagesList: ListWithIcons = [
    ['HTML5', html5Icon],
    ['CSS3', css3Icon],
    ['Sass', sassIcon],
    ['JavaScript', javaScriptIcon],
    ['TypeScript', typeScriptIcon],
    ['C#', cSharpIcon],
    ['Elm', elmIcon],
    ['Python', pythonIcon],
  ];

  const toolsAndFrameworksList: ListWithIcons = [
    ['React', reactIcon],
    ['Elm Architecture', elmIcon],
    ['Node.js', nodeJsIcon],
    ['Angular 2', angularIcon],
    ['GatsbyJS', gatsbyIcon],
    ['Git', gitAltIcon],
    ['GitHub', githubIcon],
    ['Code linters and analyzers', eslintIcon],
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
          <CustomIcon icon={homeIcon} alignWithText /> Kansas City, MO
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={`tel:+${myPhone}`}>
            <CustomIcon icon={phoneIcon} alignWithText /> {myFormattedPhone}
          </a>
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={`mailto:${myEmail}`}>
            <CustomIcon icon={envelopeIcon} alignWithText /> {myEmail}
          </a>
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={myLinkedIn}>
            <CustomIcon icon={linkedinIcon} alignWithText /> LinkedIn
          </a>
        </ResumeSubtitleColumn>
        <ResumeSubtitleColumn>
          <a href={myGitHub}>
            <CustomIcon icon={githubIcon} alignWithText /> GitHub
          </a>
        </ResumeSubtitleColumn>
      </div>

      <hr />

      <div className="columns is-centered">
        <div className="column">
          <h2 className="title">Professional Summary</h2>
          <p className="content is-size-5">
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
          <div className="box">
            <p className="content has-text-weight-bold">2016 - Eagle Scout rank in the Boy Scouts of America</p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="title">Certifications</h2>
          <div className="content">
            <ul>
              <li>
                <ExternalLinkNewTabWithIcon href="https://www.freecodecamp.org/certification/joshuahall/javascript-algorithms-and-data-structures">
                  FreeCodeCamp.org JavaScript Algorithms and Data Structures
                </ExternalLinkNewTabWithIcon>
              </li>
              <li>
                <ExternalLinkNewTabWithIcon href="https://www.freecodecamp.org/certification/joshuahall/front-end-libraries">
                  FreeCodeCamp.org Front End Libraries Developer Certification
                </ExternalLinkNewTabWithIcon>
              </li>
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
  icon: IconifyIcon;
}

function SkillsColumn({ text, icon }: SkillsColumnProps): ReactElement<SkillsColumnProps> {
  return (
    <div className="column is-4">
      <div className="box">
        <p className="content has-text-centered">
          <CustomIcon icon={icon} alignWithText /> {text}
        </p>
      </div>
    </div>
  );
}

interface ColumnsWithBoxesProps {
  columnTexts: ListWithIcons;
}

function ColumnsWithBoxes({ columnTexts }: ColumnsWithBoxesProps): ReactElement<ColumnsWithBoxesProps> {
  return (
    <div className="columns is-centered is-multiline">
      {columnTexts.map(([text, icon]: [string, IconifyIcon]) => (
        <SkillsColumn key={text} text={text} icon={icon} />
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
          {title}, {companyName} - {duration} - {location}
        </div>
      </div>
      <div className="card-content">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
