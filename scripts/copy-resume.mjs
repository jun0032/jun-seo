// Copies the resume PDF from resume/ into public/ so the site serves it at /resume.pdf.
// Runs automatically before `npm run dev` and `npm run build` (see package.json).
import { copyFileSync, existsSync } from 'node:fs';

const from = 'resume/resume_web.pdf';
const to = 'public/resume.pdf';

if (existsSync(from)) {
  copyFileSync(from, to);
  console.log(`Copied ${from} → ${to}`);
} else {
  console.warn(`${from} not found; the Resume page will show the text version only.`);
}
