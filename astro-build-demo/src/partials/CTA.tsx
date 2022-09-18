import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to the <GradientText>Blog Feed</GradientText>
        </>
      }
      description="Want to know about a new #30Days adventure, or catch the latest post from my current one? Subscribe to the feed to get instant updates."
    />
  </Section>
);

export { CTA };
