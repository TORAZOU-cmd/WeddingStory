import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'WeddingStory API is running' });
});

// API endpoint for couple information
app.get('/api/couple', (req, res) => {
  res.json({
    bride: {
      name: '花子',
      description: '優しくて美しい花嫁'
    },
    groom: {
      name: '太郎',
      description: '頼りになる優しい新郎'
    }
  });
});

// API endpoint for timeline events
app.get('/api/timeline', (req, res) => {
  res.json([
    {
      id: 1,
      time: '14:00',
      title: '受付開始',
      description: 'ゲストの皆様をお迎えいたします'
    },
    {
      id: 2,
      time: '14:30',
      title: '挙式',
      description: '愛を誓う神聖な儀式'
    },
    {
      id: 3,
      time: '15:30',
      title: '披露宴',
      description: '皆様と一緒にお食事とお祝い'
    }
  ]);
});

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});