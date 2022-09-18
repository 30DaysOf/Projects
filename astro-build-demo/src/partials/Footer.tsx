import { FooterCopyright, Section } from 'astro-boilerplate-components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <hr/>
    <div> © Copyright 2022 |  {AppConfig.site_name} </div>
  </Section>
);

export { Footer };
