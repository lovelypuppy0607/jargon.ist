// @flow

import React from 'react';
import Link from 'gatsby-link';

import { Container } from '../../ui';

import Logo from '../Logo';

import './Footer.scss';

const Footer = () => (
  <footer className="c-footer">
    <Container>
      <div className="row">
        <div className="col col--md-8 c-footer__logos">
          <div>
            <Logo className="u-color-white u-block" />
            <small className="u-color-muted">Bu proje MIT lisansı kullanmaktadır.</small>
          </div>

          <div>
            <img
              src="https://www.algolia.com/static_assets/images/press/downloads/search-by-algolia-white.svg"
              alt="Search by Algolia"
              height="18"
            />
          </div>
        </div>

        <div className="col col--md-2">
          <h4 className="u-uppercase u-clear-gap-top u-gap-bottom-xsmall u-color-muted">Jargon</h4>
          <ul className="c-footer__menu">
            <li className="c-footer__menu-item">
              <Link to="/" className="c-footer__menu-link">
                Ana sayfa
              </Link>
            </li>
            <li className="c-footer__menu-item">
              <Link to="/dizin" className="c-footer__menu-link">
                Dizin
              </Link>
            </li>
            <li className="c-footer__menu-item">
              <Link to="/konular" className="c-footer__menu-link">
                Konular
              </Link>
            </li>
          </ul>
        </div>

        <div className="col col--md-2">
          <h4 className="u-uppercase u-clear-gap-top u-gap-bottom-xsmall u-color-muted" lang="en">
            Github
          </h4>
          <ul className="c-footer__menu">
            <li className="c-footer__menu-item">
              <a
                href={process.env.GATSBY_REPO_URL}
                className="c-footer__menu-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaynağı Görüntüle
              </a>
            </li>
            <li className="c-footer__menu-item">
              <a
                href={process.env.GATSBY_REPO_URL}
                className="c-footer__menu-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Katkıda Bulun
              </a>
            </li>
            <li className="c-footer__menu-item">
              <a
                href={`${process.env.GATSBY_REPO_URL || ''}/pulls?q=is:pr+is:open+label:new-jargon`}
                className="c-footer__menu-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Onaydaki Jargonlar
              </a>
            </li>
            <li className="c-footer__menu-item">
              <a
                href={`${process.env.GATSBY_REPO_URL || ''}/issues/new`}
                className="c-footer__menu-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sorun Bildir
              </a>
            </li>
            <li className="c-footer__menu-item">
              <a
                href={`${process.env.GATSBY_REPO_URL || ''}#katkida-bulunanlar`}
                className="c-footer__menu-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Katkıda Bulunanlar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
