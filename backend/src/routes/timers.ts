import { Router, Request, Response } from 'express';

const router = Router();

interface Timer {
  id: string;
  label: string;
  duration: number;
  remaining: number;
  isRunning: boolean;
  preset?: string;
  createdAt: Date;
}

const timers: Timer[] = [];

// GET all timers
router.get('/', (req: Request, res: Response) => {
  res.json({ success: true, data: timers });
});

// POST create timer
router.post('/', (req: Request, res: Response) => {
  const { label, duration, preset } = req.body;
  
  if (!duration || duration <= 0) {
    return res.status(400).json({ success: false, error: 'Invalid duration' });
  }
  
  const timer: Timer = {
    id: Date.now().toString(),
    label: label || 'Timer',
    duration,
    remaining: duration,
    isRunning: false,
    preset: preset || 'custom',
    createdAt: new Date()
  };
  
  timers.push(timer);
  res.json({ success: true, data: timer });
});

// PUT update timer
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const timer = timers.find(t => t.id === id);
  
  if (!timer) {
    return res.status(404).json({ success: false, error: 'Timer not found' });
  }
  
  Object.assign(timer, req.body);
  res.json({ success: true, data: timer });
});

// DELETE timer
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = timers.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Timer not found' });
  }
  
  const deleted = timers.splice(index, 1);
  res.json({ success: true, data: deleted[0] });
});

// POST start/pause timer
router.post('/:id/toggle', (req: Request, res: Response) => {
  const { id } = req.params;
  const timer = timers.find(t => t.id === id);
  
  if (!timer) {
    return res.status(404).json({ success: false, error: 'Timer not found' });
  }
  
  timer.isRunning = !timer.isRunning;
  res.json({ success: true, data: timer });
});

export default router;
