import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowUpRight, Check, CircleDashed } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/sections/CtaBand';
import PageHero from '../components/sections/PageHero';
import BrowserFrame from '../components/product/BrowserFrame';
import { FEATURES, type Feature } from '../content/features';
import { color, radius, shadow, motion } from '../theme/tokens';
import dashboardHero from '../assets/images/dashboard-hero.png';

function StatusNote({ status }: { status: Feature['status'] }) {
  if (status === 'confirmed') return null;
  return <Box sx={{ mt: 2 }}><Badge tone="warning" size="sm" icon={<CircleDashed strokeWidth={2.2} />}>{status === 'placeholder' ? 'Placeholder copy — pending product' : 'Needs product confirmation'}</Badge></Box>;
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const flip = index % 2 === 1;
  const Icon = feature.icon;
  return (
    <Reveal>
      <Box sx={{ position: 'relative', py: { xs: 5, md: 8 }, borderTop: index === 0 ? 'none' : `1px solid ${color.neutral[200]}` }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { md: flip ? 2 : 1 } }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
              <Box sx={{ width: 50, height: 50, borderRadius: `${radius.lg}px`, display: 'grid', placeItems: 'center', bgcolor: color.brand[50], border: `1px solid ${color.brand[100]}`, color: color.brand[600] }}><Icon size={23} strokeWidth={1.9} /></Box>
              <Box><Typography variant="overline" sx={{ color: color.neutral[400], letterSpacing: '0.12em' }}>{feature.index} · {feature.category}</Typography><Typography variant="h3" component="h2">{feature.title}</Typography></Box>
            </Stack>
            <Typography variant="h5" sx={{ maxWidth: '25ch', mb: 1.5 }}>{feature.headline}</Typography>
            <Typography variant="body1" sx={{ color: color.neutral[600], maxWidth: '54ch', lineHeight: 1.75, mb: 2.5 }}>{feature.description}</Typography>
            <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}><Box sx={{ width: 20, height: 20, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: color.success[50], color: color.success[600] }}><Check size={12} strokeWidth={3} /></Box><Typography variant="body2" sx={{ fontWeight: 700 }}>{feature.outcome}</Typography></Stack>
            <StatusNote status={feature.status} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { md: flip ? 1 : 2 } }}>
            <Box sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: `${radius['2xl']}px`, bgcolor: index % 3 === 0 ? color.neutral[50] : color.neutral[0], border: `1px solid ${color.neutral[200]}`, boxShadow: shadow.sm, transition: `transform ${motion.base} ${motion.ease}, box-shadow ${motion.base} ${motion.ease}`, '&:hover': { transform: 'translateY(-4px)', boxShadow: shadow.lg } }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}><Typography variant="overline" sx={{ color: color.neutral[400] }}>What it includes</Typography><ArrowUpRight size={17} color={color.neutral[300]} /></Stack>
              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', m: 0, p: 0 }}>
                {feature.details.map((d) => <Stack key={d} component="li" direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}><Box sx={{ mt: '8px', width: 6, height: 6, flexShrink: 0, borderRadius: '50%', bgcolor: color.brand[400] }} /><Typography variant="body2" sx={{ color: color.neutral[700], lineHeight: 1.65 }}>{d}</Typography></Stack>)}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Reveal>
  );
}

export default function Features() {
  const confirmed = FEATURES.filter((f) => f.status === 'confirmed').length;
  return <>
    <PageHero eyebrow="Features" title="Every payment workflow, connected." description="From fee creation to collection, visibility and reconciliation — give every team one clear place to manage school payments." tags={FEATURES.slice(0, 5).map((f) => f.category)}>
      <Box sx={{ mt: { xs: 5, md: 7 }, position: 'relative' }}><Box sx={{ position: 'absolute', inset: '15% 5%', background: 'radial-gradient(circle, rgba(99,102,241,.22), transparent 65%)', filter: 'blur(28px)' }} /><Box sx={{ position: 'relative' }}><BrowserFrame onDark><Box component="img" src={dashboardHero} alt="School portal dashboard showing payable and received amounts with a monthwise dues collection chart" loading="lazy" decoding="async" sx={{ display: 'block', width: '100%', height: 'auto' }} /></BrowserFrame></Box></Box>
    </PageHero>

    <Section tone="light">
      <SectionHeading eyebrow="The platform" title="Ten capabilities. One operating system for payments." description={`${confirmed} of ${FEATURES.length} capabilities are confirmed against the current product brief. Unconfirmed content stays clearly marked.`} />
      <Box>{FEATURES.map((f, i) => <FeatureRow key={f.slug} feature={f} index={i} />)}</Box>
    </Section>

    <Section tone="subtle" width="md">
      <Reveal><Box sx={{ p: { xs: 3.5, md: 5 }, borderRadius: `${radius['2xl']}px`, background: `linear-gradient(135deg, ${color.brand[50]}, #fff 55%)`, border: `1px solid ${color.brand[100]}`, boxShadow: shadow.md }}>
        <Badge tone="warning" size="sm" icon={<CircleDashed strokeWidth={2.2} />}>Copy pending</Badge>
        <Typography variant="h3" component="h2" sx={{ mt: 2.5, mb: 1.5 }}>Merchant Panel</Typography>
        <Typography variant="body1" sx={{ color: color.neutral[600], maxWidth: '60ch', lineHeight: 1.7 }}>Manage payment activity, transaction visibility and operational controls from a centralized merchant panel.</Typography>
      </Box></Reveal>
    </Section>
    <CtaBand title="See the platform against your own fee structure." secondaryLabel="How It Works" secondaryTo="/how-it-works" />
  </>;
}
