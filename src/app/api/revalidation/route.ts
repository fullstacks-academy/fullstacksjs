import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = () => {
  // AUTH
  revalidatePath('/events');
  console.log('Revalidate shod');

  return NextResponse.json({ revalidate: true, date: new Date() });
};
