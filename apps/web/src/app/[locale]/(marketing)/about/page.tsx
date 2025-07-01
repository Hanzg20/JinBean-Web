// import { setRequestLocale } from 'next-intl/server';
import React from 'react';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export default async function About(props: { params: Promise<{ locale: string }> }) {
  const { locale: _locale } = await props.params;
  // setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">About JinBean</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            JinBean is a modern platform dedicated to connecting communities through housekeeping services and innovative tools. We believe in creating sustainable, efficient solutions that make everyday life easier.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To provide reliable, high-quality housekeeping services while fostering strong community connections. We strive to make professional cleaning and maintenance accessible to everyone.
          </p>

          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Quality:</strong>
              <br />
              We maintain the highest standards in all our services
            </li>
            <li>
              <strong>Community:</strong>
              <br />
              We believe in building strong, supportive neighborhoods
            </li>
            <li>
              <strong>Innovation:</strong>
              <br />
              We continuously improve our tools and processes
            </li>
            <li>
              <strong>Sustainability:</strong>
              <br />
              We use eco-friendly products and practices
            </li>
            <li>
              <strong>Reliability:</strong>
              <br />
              You can always count on us to deliver on our promises
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
