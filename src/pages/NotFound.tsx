import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '../components/ui/Button';
import PageHero from '../components/sections/PageHero';
import Section from '../components/ui/Section';
import { color } from '../theme/tokens';

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="That page moved on."
        description="The link you followed does not point anywhere on this site."
      />

      <Section tone="light" width="sm">
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="body1" sx={{ color: color.neutral[600] }}>
            Try the product pages instead, or get in touch and we will point you at the right place.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button to="/">Back to home</Button>
            <Button to="/features" variant="secondary">
              Explore features
            </Button>
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
