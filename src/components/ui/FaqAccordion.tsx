import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Plus } from 'lucide-react';
import { color, font, motion } from '../../theme/tokens';

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
 * Ruled rows, not cards: a bottom hairline per item, an indigo question when
 * open, and a chevron that rotates. MUI's AccordionSummary renders a real
 * `<button aria-expanded>` with `aria-controls`, so keyboard support comes free.
 */
export default function FaqAccordion({ items, defaultOpen = null }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <Box>
      {items.map((item, i) => {
        const expanded = open === i;

        return (
          <Accordion
            key={item.question}
            expanded={expanded}
            onChange={(_, isExpanded) => setOpen(isExpanded ? i : null)}
            slotProps={{ transition: { timeout: 240 } }}
          >
            <AccordionSummary
              aria-controls={`faq-panel-${i}`}
              id={`faq-header-${i}`}
              expandIcon={
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: expanded ? color.brand[600] : color.brand[50],
                    color: expanded ? color.surface.canvas : color.brand[700],
                    transition: `background-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease}`,
                  }}
                >
                  <Plus size={16} strokeWidth={2.5} aria-hidden />
                </Box>
              }
              sx={{
                // The Plus rotates 45° into a × when the row opens.
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
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '-0.012em',
                  lineHeight: 1.45,
                  color: expanded ? color.brand[700] : color.neutral[900],
                  transition: `color ${motion.base} ${motion.ease}`,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails id={`faq-panel-${i}`}>
              <Typography
                variant="body2"
                sx={{ color: color.neutral[500], maxWidth: '68ch', lineHeight: 1.7 }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
