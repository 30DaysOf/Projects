import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="#30DaysOfPWA"
        description="Learn to build Progressive Web Apps. Go from Core Concepts and Advanced Capabilities to 
        Developer Tools and Best Practices and get your app published in App Stores - in #30Days"
        link="https://aka.ms/30DaysOfPWA"
        img={{
          src: '/assets/images/30-pwa.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Progressive Web Apps</Tags>
            <Tags color={ColorTags.LIME}>Beginner</Tags>
            <Tags color={ColorTags.SKY}>JavaScript</Tags>
            <Tags color={ColorTags.ROSE}>Web Dev</Tags>
          </>
        }
      />
      <Project
        name="#30DaysOfSWA"
        description="Build and deploy full-stack modern web apps to Azure - automatically - from your codebase. Learn core concepts, explore usage examples & developer tools, and adopt best practices - in #30Days!"
        link="https://aka.ms/30DaysOfSWA"
        img={{ src: '/assets/images/30-swa.png', alt: '30 Days Of SWA' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Static Web Apps</Tags>
            <Tags color={ColorTags.LIME}>Beginner</Tags>
            <Tags color={ColorTags.SKY}>JavaScript</Tags>
            <Tags color={ColorTags.ROSE}>Web Dev</Tags>
          </>
        }
      />
      <Project
        name="#30DaysOfServerless"
        description="Learn to build Serverless Architectures on Azure! Go from Functions-as-a-Service to Containers-as-a-Service, Distributed Application Runtimes, and Serverless Integrations for End-to-End Scenarios - in #30Days"
        link="https://azure.github.io/Cloud-Native/blog"
        img={{ src: '/assets/images/30-serverless.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Functions</Tags>
            <Tags color={ColorTags.VIOLET}>Container Apps</Tags>
            <Tags color={ColorTags.TEAL}>Logic Apps</Tags>
            <Tags color={ColorTags.ORANGE}>Event Grid</Tags>
            <Tags color={ColorTags.LIME}>Beginner</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
