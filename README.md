# Chrono Master Pro

> Advanced Alarm, World Clock, Stopwatch & Timer Application with Interactive UI - Full Stack (Next.js + Express.js)

## 🎯 Features

### 🕐 World Clock
- Multiple timezone support with major global cities
- Real-time clock synchronization
- 12/24 hour format toggle
- DST (Daylight Saving Time) handling
- Add/remove custom cities
- Beautiful analog and digital clock displays

### ⏱️ Stopwatch
- Start, stop, pause, and reset functionality
- Lap recording with millisecond precision
- Export lap data as CSV/JSON
- Keyboard shortcuts for quick actions
- Dark/Light theme support

### ⏲️ Timer
- Multiple simultaneous timers
- Preset timer templates (Pomodoro, workout, cooking, etc.)
- Sound & vibration notifications
- Progress visualization with animated UI
- Custom timer labels

### 🔔 Alarms
- Create, edit, delete alarms
- Recurring alarms (daily, weekly, custom patterns)
- Multiple sound options and volumes
- Snooze functionality with custom intervals
- Alarm history and statistics
- Sleep timer feature

## 📁 Project Structure

```
chrono-master-pro/
├── frontend/                 # Next.js React application
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── api/
│   ├── components/
│   │   ├── WorldClock/
│   │   ├── Stopwatch/
│   │   ├── Timer/
│   │   ├── Alarms/
│   │   └── shared/
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   ├── types/
│   └── package.json
│
├── backend/                  # Express.js Node application
│   ├── src/
│   │   ├── server.ts
│   │   ├── routes/
│   │   │   ├── alarms.ts
│   │   │   ├── timers.ts
│   │   │   └── users.ts
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   └── types/
│   ├── config/
│   ├── .env.example
│   └── package.json
│
├── shared/                   # Shared types and utilities
│   ├── types.ts
│   └── constants.ts
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:3000`
Backend will be available at `http://localhost:5000`

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **State Management**: React Context API + Zustand
- **Real-time**: Socket.io (WebSocket)
- **UI Library**: Radix UI / Headless UI
- **Animation**: Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB/PostgreSQL
- **Authentication**: JWT
- **Validation**: Zod/Joi
- **Real-time**: Socket.io

## 🔧 Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Backend
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
```

## 🎨 UI Components

- Responsive design (mobile-first)
- Accessibility (WCAG 2.1 AA compliant)
- Smooth animations and transitions
- Dark/Light theme support
- Custom themed audio player for alarm sounds

## 📝 API Endpoints

### Alarms
- `GET /api/alarms` - Get all alarms
- `POST /api/alarms` - Create alarm
- `PUT /api/alarms/:id` - Update alarm
- `DELETE /api/alarms/:id` - Delete alarm
- `POST /api/alarms/:id/trigger` - Trigger alarm

### Timers
- `GET /api/timers` - Get all timers
- `POST /api/timers` - Create timer
- `PUT /api/timers/:id` - Update timer
- `DELETE /api/timers/:id` - Delete timer

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**realarpan** - Full Stack Developer

## 🙏 Acknowledgments

- Inspired by native OS clock applications
- Thanks to open-source community
- Special thanks to all contributors
