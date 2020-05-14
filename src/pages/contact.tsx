import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { CustomIcon } from '../components/CustomIcon';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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
                    <CustomIcon icon={faEnvelope} alignWithText /> Email
                  </a>
                </li>
                <li>
                  <a href={myLinkedIn}>
                    <CustomIcon icon={faLinkedin} alignWithText /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`tel:+${myPhone}`}>
                    <CustomIcon icon={faPhone} alignWithText /> {myFormattedPhone}
                  </a>
                </li>
                <li>
                  <a href={myGitHub}>
                    <CustomIcon icon={faGithub} alignWithText /> GitHub
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
