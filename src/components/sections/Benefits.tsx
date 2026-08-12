import Grid from '@mui/material/Grid';
import FeatureCard from '../ui/FeatureCard';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../content/home';

export default function Benefits() {
  return (
    <Section id="benefits" tone="light">
      <SectionHeading
        eyebrow="Why institutions choose it"
        title="Built around better payment outcomes"
        description="Four things change the day an institution moves fee collection onto one platform."
      />

      <Grid container spacing={3}>
        {BENEFITS.map((b, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={b.title}>
            <Reveal delay={i * 80} sx={{ height: '100%' }}>
              <FeatureCard icon={b.icon} title={b.title} description={b.description} />
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
