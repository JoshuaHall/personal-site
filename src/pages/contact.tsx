import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { CustomIcon } from '../components/CustomIcon';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact(): ReactElement {
  return (
    <DefaultLayout title="Contact">
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="card">
            <header className="card-header">
              <h1 className="card-header-title">Contact</h1>
            </header>
            <div className="card-content">
              <div className="content">
                <p>You can reach me in a couple different ways:</p>
                <ul>
                  <li>
                    Email{' '}
                    <a href="mailto:joshuahallmail@gmail.com" className="icon-with-text">
                      <CustomIcon icon={faEnvelope} size="lg" />
                    </a>
                  </li>
                  <li>
                    LinkedIn{' '}
                    <a href="https://www.linkedin.com/in/joshuadouglashall/" className="icon-with-text">
                      <CustomIcon icon={faLinkedin} size="lg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
