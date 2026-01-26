'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Check } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 500,
    description: 'up to $50 referral ARR',
    features: [
      'Basic Features',
      'Email Support',
      'Limited Marketing',
      '50 student reach per month',
      'Standard access to AI',
      'Basic customization',
      'Limited chat feature',
      'Basic resources access',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 1000,
    description: 'up to $100 referral ARR',
    features: [
      'Advanced Features',
      'Email Support',
      'Enhanced Marketing',
      '150 student reach per month',
      'Extended access to AI',
      'Enhanced customization',
      'Full chat feature',
      'Full resources access',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1500,
    description: 'up to $150 referral ARR',
    features: [
      'Advanced Features',
      'Email Support',
      'Advanced Marketing',
      '80 student reach per month',
      'Unlimited access to AI',
      'Advanced customization',
      'Unlock the direct chat feature with parents',
      'Get access of previous resources',
    ],
  },
];

export default function PricingSlider() {
  return (
    <div className="w-full bg-background dark:bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-foreground mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Scale as you grow.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pricing-swiper"
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="bg-card dark:bg-card border border-border dark:border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold text-accent dark:text-accent">
                        ${plan.price}
                      </span>
                      <span className="text-foreground dark:text-foreground">/mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent dark:text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground dark:text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-[#FF5A5F] dark:bg-[#FF5A5F] text-white dark:text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 bg-accent dark:bg-accent text-accent-foreground dark:text-accent-foreground p-2 rounded-full hover:opacity-90 transition-opacity z-10"
            aria-label="Previous plans"
          >
            &#8249;
          </button>

          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 bg-accent dark:bg-accent text-accent-foreground dark:text-accent-foreground p-2 rounded-full hover:opacity-90 transition-opacity z-10"
            aria-label="Next plans"
          >
            &#8250;
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom mt-8 flex justify-center gap-2" />
        </div>

        {/* Info Text */}
        <div className="text-center mt-12 text-muted-foreground dark:text-muted-foreground">
          <p>All plans include access to core features. Upgrade anytime to unlock more.</p>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background-color: var(--accent);
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-button-prev-custom::before,
        .swiper-button-next-custom::before {
          font-size: 28px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
