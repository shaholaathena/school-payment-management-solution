import Box from '@mui/material/Box';
import dashboardSrc from '../../assets/images/dashboard-hero.png';

export interface DashboardScreenshotProps {
  /**
   * Scale of the screenshot relative to its container, per breakpoint.
   *
   * The source capture is 3566px wide. Fitted to a ~620px hero column it would
   * render at ~17% scale and every value in it would be illegible. Scaling past
   * the frame and cropping keeps the numbers readable and reads as a real
   * screen continuing beyond the edge.
   */
  zoom?: { xs: number; md: number };
  /** Frame aspect ratio (width / height) per breakpoint. */
  aspect?: { xs: number; md: number };
}

/**
 * Real product capture — `src/assets/images/dashboard.png`, downscaled to
 * `dashboard-hero.png` for weight.
 *
 * PRIVACY: this capture is aggregate-only (payable, received, applicant and
 * student counts against "EPMS Test College"). It carries no student names,
 * IDs, contact details or card data, which is why it is publishable — unlike
 * `students-list.png` and `app-home.png`. See docs/DESIGN_PLAN.md §8.
 *
 * NOTE: the capture is branded "eEducation", which does not match this site's
 * wordmark. Reshoot under the launch brand before go-live.
 */
/**
 * Both presets deliberately keep the visible slice under ~50% of the source
 * height, which crops above the sidebar's printed helpline number so that
 * contact detail is not published as a side effect of the composition.
 *
 * - md+  240% / 16:11 — sidebar, stat row and the Admissions row
 * - xs   190% / 16:8.8 — a shorter band, so the stat cards are not cut
 *   mid-label on a narrow screen
 */
export default function DashboardScreenshot({
  zoom = { xs: 190, md: 240 },
  aspect = { xs: 16 / 8.8, md: 16 / 11 },
}: DashboardScreenshotProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        aspectRatio: { xs: String(aspect.xs), md: String(aspect.md) },
      }}
    >
      <Box
        component="img"
        src={dashboardSrc}
        alt="School portal dashboard showing payable and received fee amounts, admission figures and a monthwise dues collection chart"
        width={2000}
        height={1157}
        loading="eager"
        decoding="async"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 'auto',
          display: 'block',
          width: { xs: `${zoom.xs}%`, md: `${zoom.md}%` },
        }}
      />
    </Box>
  );
}
