import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Learn something new  <GradientText>
            <span className="text-pink-400 hover:underline"> in #30Days </span>
          </GradientText> 👋
        </>
      }
      description={
        <>
        Technology changes fast and we can't stand still. A {' '}
          <a className="text-pink-400 hover:underline" href="/">
            continuous learning mindset</a>{' '} keeps us relevant and ready {' '} for every challenge. 
            I like to think of it as mountain-climbing. Make the summit
          <a className="text-pink-400 hover:underline" href="/"> in #30Days </a>{' '}, document your journey, 
          then share it to help make the next climber's road a little easier.
           
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/nitya">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          {/* 
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          */}
          <a href="https://linkedin.com/in/nityan">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/nitya">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
          <a href="https://dev.to/nitya">
            <HeroSocial
              src="/assets/images/devto-icon.png"
              alt="dev.to icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
