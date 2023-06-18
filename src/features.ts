export const feature = process.env.NEXT_PUBLIC_FEATURES?.split(',') ?? [];
console.log(feature);
