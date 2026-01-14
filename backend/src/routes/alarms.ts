import { Router, Request, Response } from 'express';

const router = Router();

interface Alarm {
  id: string;
  label: string;
  time: string;
  enabled: boolean;
  recurring: boolean;
  days: string[];
  sound: string;
  snooze: number;
  createdAt: Date;
}

const alarms: Alarm[] = [];

// GET all alarms
router.get('/', (req: Request, res: Response) => {
  res.json({ success: true, data: alarms });
});

// POST create alarm
router.post('/', (req: Request, res: Response) => {
  const { label, time, recurring, days, sound, snooze } = req.body;
  
  const alarm: Alarm = {
    id: Date.now().toString(),
    label: label || 'Alarm',
    time,
    enabled: true,
    recurring: recurring || false,
    days: days || [],
    sound: sound || 'default',
    snooze: snooze || 5,
    createdAt: new Date()
  };
  
  alarms.push(alarm);
  res.json({ success: true, data: alarm });
});

// PUT update alarm
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const alarm = alarms.find(a => a.id === id);
  
  if (!alarm) {
    return res.status(404).json({ success: false, error: 'Alarm not found' });
  }
  
  Object.assign(alarm, req.body);
  res.json({ success: true, data: alarm });
});

// DELETE alarm
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = alarms.findIndex(a => a.id === id);
  
  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Alarm not found' });
  }
  
  const deleted = alarms.splice(index, 1);
  res.json({ success: true, data: deleted[0] });
});

// POST trigger alarm
router.post('/:id/trigger', (req: Request, res: Response) => {
  const { id } = req.params;
  const alarm = alarms.find(a => a.id === id);
  
  if (!alarm) {
    return res.status(404).json({ success: false, error: 'Alarm not found' });
  }
  
  res.json({ success: true, message: `Alarm "${alarm.label}" triggered!` });
});

export default router;
