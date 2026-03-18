# MM Medical — Deploy & Test Notes

## Deploy to Vercel
```bash
cd ~/Desktop/mm-medical
vercel deploy --prod
```
That's it. Takes ~30 seconds.

## Test the Appointment Form
The form at `/schedule` saves submissions to `data/appointments.json` on the server.
On Vercel (read-only filesystem) the API silently fails but the form still shows confirmation.
For production, wire up a real backend (database, email notification, etc.)

## Test locally
```bash
cd ~/Desktop/mm-medical
npm run dev -- -p 3001
```
Then visit http://localhost:3001/schedule — submissions save to `data/appointments.json` locally.

## Notes
- DO NOT use `vercel --prod` (fails with "Unexpected error")
- USE `vercel deploy --prod` (works every time)
- GitHub repo: https://github.com/thekosz/mm-medical (public)
- Live URL: https://mm-medical.vercel.app
