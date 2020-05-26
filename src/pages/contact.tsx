import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { CustomIcon } from '../components/CustomIcon';

import envelopeIcon from '@iconify/icons-fa-solid/envelope';
import phoneIcon from '@iconify/icons-fa-solid/phone';
import linkedinIcon from '@iconify/icons-fa-brands/linkedin';
import githubIcon from '@iconify/icons-fa-brands/github';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default function Contact(): ReactElement {
  const { myEmail, myLinkedIn, myPhone, myFormattedPhone, myGitHub } = useSiteMetadata();

  return (
    <DefaultLayout title="Contact">
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="card">
            <header className="card-header">
              <h1 className="card-header-title">Contact</h1>
            </header>
            <div className="card-content">
              <ul>
                <li>
                  <a href={`mailto:${myEmail}`}>
                    <CustomIcon icon={envelopeIcon} alignWithText /> Email
                  </a>
                </li>
                <li>
                  <a href={myLinkedIn}>
                    <CustomIcon icon={linkedinIcon} alignWithText /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`tel:+${myPhone}`}>
                    <CustomIcon icon={phoneIcon} alignWithText /> {myFormattedPhone}
                  </a>
                </li>
                <li>
                  <a href={myGitHub}>
                    <CustomIcon icon={githubIcon} alignWithText /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
