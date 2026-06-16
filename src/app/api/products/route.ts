import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const section = searchParams.get('section');
  const search = searchParams.get('search');

  const where: Record<string, unknown> = {};

  if (category && category !== 'todos') {
    where.category = category;
  }

  if (section === 'bestSellers') {
    where.isBestSeller = true;
  } else if (section === 'offers') {
    where.isOffer = true;
  } else if (section === 'recommended') {
    where.isRecommended = true;
  } else if (section === 'digital') {
    where.isDigitalExperience = true;
  }

  if (search) {
    where.OR = [
      { name: { contains: search } },
      { description: { contains: search } },
    ];
  }

  const products = await db.product.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(products);
}
