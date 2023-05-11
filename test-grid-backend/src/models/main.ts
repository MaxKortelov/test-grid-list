export const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    // 'http://45.91.170.237:3000',
    // 'https://45.91.170.237:3000',
    // 'http://45.91.170.237',
    // 'https://45.91.170.237',
  ],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
  credentials: true,
};
