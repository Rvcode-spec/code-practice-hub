'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/lib/sanity/config';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
