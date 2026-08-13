import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus } from 'lucide-react';
import { color, font, motion, radius } from '../../theme/tokens';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  /** Index of the item open on first render. `null` for all closed. */
  defaultOpen?: number | null;
}

/**
 * Keyboard-accessible FAQ list. MUI's AccordionSummary renders a real
 * `<button aria-expanded>` with `aria-controls`, so Tab / Enter / Space work
 * without extra handlers. The icon rotates 45° to become a close affordance.
 */
export default function FaqAccordion({ items, defaultOpen = null }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <Stack spacing={1.5}>
      {items.map((item, i) => {
        const expanded = open === i;

        return (
          <Accordion
            key={item.question}
            expanded={expanded}
            onChange={(_, isExpanded) => setOpen(isExpanded ? i : null)}
            slotProps={{ transition: { timeout: 240 } }}
            sx={{
              position: 'relative',
              borderColor: expanded ? color.brand[200] : color.surface.line,
              // Brand rail on the open item — the active state readable at a
              // glance while scanning a long list.
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                borderRadius: '3px 0 0 3px',
                bgcolor: color.brand[600],
                opacity: expanded ? 1 : 0,
                transition: `opacity ${motion.base} ${motion.ease}`,
              },
              '&:hover': { borderColor: expanded ? color.brand[200] : color.surface.lineStrong },
            }}
          >
            <AccordionSummary
              aria-controls={`faq-panel-${i}`}
              id={`faq-header-${i}`}
              expandIcon={
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: `${radius.sm}px`,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: expanded ? color.brand[600] : color.surface.muted,
                    color: expanded ? color.neutral[0] : color.brand[600],
                    transition: `background ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease}`,
                  }}
                >
                  <Plus size={16} strokeWidth={2.5} aria-hidden />
                </Box>
              }
              sx={{
                px: { xs: 2.5, md: 3 },
                minHeight: 68,
                '& .MuiAccordionSummary-expandIconWrapper': {
                  transition: `transform ${motion.base} ${motion.ease}`,
                },
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(45deg)',
                },
              }}
            >
              <Typography
                sx={{
                  pr: 2,
                  fontFamily: font.display,
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.45,
                  color: expanded ? color.brand[700] : color.neutral[950],
                  transition: `color ${motion.base} ${motion.ease}`,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails id={`faq-panel-${i}`} sx={{ px: { xs: 2.5, md: 3 }, pb: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: color.neutral[600], maxWidth: '64ch', lineHeight: 1.75 }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
}
