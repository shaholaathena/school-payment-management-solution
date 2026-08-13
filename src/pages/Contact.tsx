import { useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, ShieldCheck, Users } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CheckboxField from '../components/ui/CheckboxField';
import FormField from '../components/ui/FormField';
import SelectField from '../components/ui/SelectField';
import Toast from '../components/ui/Toast';
import Reveal from '../components/ui/Reveal';
import Section from '../components/ui/Section';
import PageHero from '../components/sections/PageHero';
import { color, radius, shadow } from '../theme/tokens';

const INSTITUTION_TYPES = [
  { value: 'school', label: 'School' },
  { value: 'college', label: 'College' },
  { value: 'madrasah', label: 'Madrasah' },
  { value: 'university', label: 'University' },
  { value: 'coaching', label: 'Coaching centre' },
  { value: 'other', label: 'Other' },
];

interface FormState {
  name: string;
  email: string;
  institution: string;
  phone: string;
  institutionType: string;
  message: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: '',
  email: '',
  institution: '',
  phone: '',
  institutionType: '',
  message: '',
  consent: false,
};

/** Bangladesh mobile numbers, with or without country code. */
const PHONE_RE = /^(?:\+?880|0)1[3-9]\d{8}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: FormState): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name';
  if (!v.email.trim()) e.email = 'Please enter your work email';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That does not look like a valid email address';
  if (!v.institution.trim()) e.institution = 'Please enter your institution';
  if (!v.phone.trim()) e.phone = 'Please enter a contact number';
  else if (!PHONE_RE.test(v.phone.replace(/[\s-]/g, '')))
    e.phone = 'Enter a valid Bangladesh mobile number, e.g. 01XXXXXXXXX';
  if (!v.institutionType) e.institutionType = 'Please select an institution type';
  if (!v.consent) e.consent = 'Please confirm before submitting';
  return e;
}

const HIGHLIGHTS = [
  { icon: Clock, title: '30-minute walkthrough', body: 'Focused on your fee structure, not a generic tour.' },
  { icon: Users, title: 'Bring your team', body: 'Finance, admin and IT usually all have questions.' },
  { icon: ShieldCheck, title: 'No payment setup needed', body: 'Nothing is connected to a live gateway for the demo.' },
];

export default function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [toastOpen, setToastOpen] = useState(false);

  const set = <K extends keyof FormState>(key: K) => (val: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    // Clear the field's error as soon as the user edits it
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');

    // No backend is wired up yet — this simulates the round trip so the
    // loading and success states are real.
    //
    // TODO: POST to the lead endpoint. Do not log form values: this payload
    // carries personal contact details.
    //
    // The failure path is opt-in via `?simulateError=1` rather than random,
    // so a visitor can never be shown a spurious error by chance.
    const shouldFail = new URLSearchParams(window.location.search).has('simulateError');

    try {
      await new Promise<void>((resolve, reject) => {
        window.setTimeout(() => (shouldFail ? reject(new Error('simulated')) : resolve()), 1200);
      });
      setStatus('success');
      setValues(EMPTY);
      setToastOpen(true);
    } catch {
      setStatus('error');
      setToastOpen(true);
    }
  };

  if (status === 'success') {
    return (
      <>
        <PageHero
          eyebrow="Request received"
          title="Thanks — we will be in touch."
          description="A member of the team will reach out to arrange a walkthrough against your institution's setup."
        />

        <Section tone="light" width="sm">
          <Reveal>
            <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: `${radius.lg}px`,
                  display: 'grid',
                  placeItems: 'center',
                  bgcolor: color.success[50],
                  color: color.success[600],
                }}
              >
                <CheckCircle2 size={26} strokeWidth={2} aria-hidden />
              </Box>

              <Typography variant="h3" component="h2">
                What happens next
              </Typography>

              <Stack component="ol" spacing={2} sx={{ m: 0, pl: 2.5, color: color.neutral[600] }}>
                <Typography component="li" variant="body1">
                  We review your institution type and fee setup.
                </Typography>
                <Typography component="li" variant="body1">
                  We schedule a 30-minute walkthrough at a time that suits your team.
                </Typography>
                <Typography component="li" variant="body1">
                  We map your fee heads and payment methods live in the demo.
                </Typography>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                <Button to="/features">Explore features</Button>
                <Button variant="secondary" onClick={() => setStatus('idle')}>
                  Submit another request
                </Button>
              </Stack>
            </Stack>
          </Reveal>
        </Section>

        <Toast
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          tone="success"
          title="Demo request sent"
          description="We will contact you at the email you provided."
        />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="See how your school can simplify payments"
        description="Tell us about your institution and we will walk you through fee structures, payment methods and reporting against your actual setup."
      />

      <Section tone="light">
        <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: 'flex-start' }}>
          {/* Supporting rail */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 112 } }}>
              <Badge tone="brand" size="sm" icon={<CalendarCheck strokeWidth={2.1} />}>
                Typically within 2 working days
              </Badge>

              <Typography variant="h3" component="h2" sx={{ mt: 2.5, mb: 2 }}>
                What to expect
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 4 }}>
                {HIGHLIGHTS.map((h) => (
                  <Stack key={h.title} direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        flexShrink: 0,
                        borderRadius: `${radius.md}px`,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: color.brand[50],
                        border: `1px solid ${color.brand[100]}`,
                        color: color.brand[700],
                      }}
                    >
                      <Box component={h.icon} sx={{ width: 18, height: 18 }} aria-hidden />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {h.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: color.neutral[600] }}>
                        {h.body}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Box
                sx={{
                  p: 2.5,
                  borderRadius: `${radius.lg}px`,
                  bgcolor: color.neutral[50],
                  border: `1px solid ${color.neutral[200]}`,
                }}
              >
                <Typography variant="caption" sx={{ color: color.neutral[600] }}>
                  We only ask for what we need to arrange the demo. Do not send student records,
                  card details or account numbers through this form.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: `${radius['2xl']}px`,
                bgcolor: color.neutral[0],
                border: `1px solid ${color.neutral[200]}`,
                boxShadow: shadow.lg,
              }}
            >
              <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                Request a demo
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField
                    label="Full name"
                    name="name"
                    value={values.name}
                    onChange={set('name')}
                    error={errors.name}
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField
                    label="Work email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={set('email')}
                    error={errors.email}
                    autoComplete="email"
                    placeholder="you@institution.edu.bd"
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField
                    label="Institution"
                    name="institution"
                    value={values.institution}
                    onChange={set('institution')}
                    error={errors.institution}
                    autoComplete="organization"
                    placeholder="Institution name"
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={set('phone')}
                    error={errors.phone}
                    autoComplete="tel"
                    placeholder="01XXXXXXXXX"
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <SelectField
                    label="Institution type"
                    name="institutionType"
                    value={values.institutionType}
                    onChange={set('institutionType')}
                    options={INSTITUTION_TYPES}
                    error={errors.institutionType}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <FormField
                    label="Message"
                    name="message"
                    value={values.message}
                    onChange={set('message')}
                    placeholder="How do you currently collect fees? Anything specific you want to see?"
                    helper="Optional"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <CheckboxField
                    label="I agree to be contacted about this request. No student data has been included in this form."
                    name="consent"
                    checked={values.consent}
                    onChange={set('consent')}
                    error={errors.consent}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={status === 'submitting'}
                    endIcon={
                      status === 'submitting' ? (
                        <CircularProgress size={16} thickness={5} sx={{ color: 'inherit' }} />
                      ) : (
                        <ArrowRight size={17} strokeWidth={2.25} />
                      )
                    }
                  >
                    {status === 'submitting' ? 'Sending request…' : 'Request a Demo'}
                  </Button>

                  {status === 'error' && (
                    <Typography
                      role="alert"
                      variant="caption"
                      sx={{ display: 'block', mt: 1.5, textAlign: 'center', color: color.danger[600], fontWeight: 600 }}
                    >
                      Something went wrong sending your request. Please try again.
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Toast
        open={toastOpen && status === 'error'}
        onClose={() => setToastOpen(false)}
        tone="error"
        title="Request not sent"
        description="A network error stopped the submission. Please try again."
      />
    </>
  );
}
