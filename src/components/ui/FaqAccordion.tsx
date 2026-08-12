import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus } from 'lucide-react';
import { color, motion } from '../../theme/tokens';

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
      {items.map((item, i) => (
        <Accordion
          key={item.question}
          expanded={open === i}
          onChange={(_, isExpanded) => setOpen(isExpanded ? i : null)}
          slotProps={{ transition: { timeout: 220 } }}
        >
          <AccordionSummary
            aria-controls={`faq-panel-${i}`}
            id={`faq-header-${i}`}
            expandIcon={
              <Plus
                size={18}
                strokeWidth={2.25}
                aria-hidden
                style={{ color: color.brand[600] }}
              />
            }
            sx={{
              '& .MuiAccordionSummary-expandIconWrapper': {
                transition: `transform ${motion.base} ${motion.ease}`,
              },
              '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(45deg)',
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 650, pr: 2 }}>
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails id={`faq-panel-${i}`}>
            <Typography variant="body2" sx={{ color: color.neutral[600], maxWidth: '62ch' }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
