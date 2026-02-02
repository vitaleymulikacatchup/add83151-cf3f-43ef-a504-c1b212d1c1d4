"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Users, Car, MapPin, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="VioBIBKA"
          navItems={[
            { name: "Vehicles", id: "vehicles" },
            { name: "Pricing", id: "pricing" },
            { name: "How It Works", id: "process" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Premium Car Rental at Your Fingertips"
          description="Experience effortless car rental with VioBIBKA. Choose from our premium fleet of vehicles, enjoy competitive pricing, and drive in style."
          tag="Fast & Reliable"
          imageSrc="https://img.b2bpic.net/free-photo/it-has-few-special-functions-female-customer-modern-stylish-bearded-businessman-automobile-saloon_146671-16061.jpg"
          imageAlt="Premium car rental fleet"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Explore Fleet", href: "vehicles" },
            { text: "Book Now", href: "contact" }
          ]}
        />
      </div>

      <div id="vehicles" data-section="vehicles">
        <ProductCardFour
          title="Our Premium Fleet"
          description="Discover our carefully selected collection of premium vehicles for every occasion"
          tag="New Arrivals"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          products={[
            {
              id: "1",              name: "Luxury Sedan",              price: "$85/day",              variant: "Premium - 4 Colors Available",              imageSrc: "https://img.b2bpic.net/free-photo/young-couple-choosing-car-car-showroom_1303-22834.jpg",              imageAlt: "Premium sedan rental"
            },
            {
              id: "2",              name: "Executive SUV",              price: "$120/day",              variant: "Full Size - Spacious Interior",              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-choosing-car-car-showroom_1303-17456.jpg",              imageAlt: "Executive SUV rental"
            },
            {
              id: "3",              name: "Sports Coupe",              price: "$150/day",              variant: "High Performance - 2 Seater",              imageSrc: "https://img.b2bpic.net/free-photo/young-business-woman-sitting-car_1303-22819.jpg",              imageAlt: "Sports coupe rental"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose VioBIBKA"
          description={[
            "At VioBIBKA, we believe car rental should be simple, transparent, and reliable. With over a decade of experience in the automotive rental industry, we've built a reputation for exceptional service and premium vehicle options.",            "Our mission is to provide you with the perfect vehicle for every journey. Whether you need a comfortable sedan for business travel, a spacious SUV for family adventures, or a thrilling sports car for special occasions, we have the right option for you."
          ]}
          buttons={[
            { text: "Learn More", href: "vehicles" }
          ]}
          useInvertedBackground="noInvert"
          showBorder={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="How It Works"
          description="Simple, straightforward rental process from booking to driving"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              id: "01",              title: "Browse & Select",              description: "Explore our fleet of premium vehicles and select the perfect car for your needs",              imageSrc: "https://img.b2bpic.net/free-photo/it-has-few-special-functions-female-customer-modern-stylish-bearded-businessman-automobile-saloon_146671-16061.jpg",              imageAlt: "Browse vehicle selection"
            },
            {
              id: "02",              title: "Book Instantly",              description: "Complete your reservation online in minutes with our secure booking system",              imageSrc: "https://img.b2bpic.net/free-photo/young-couple-choosing-car-car-showroom_1303-22834.jpg",              imageAlt: "Fast booking process"
            },
            {
              id: "03",              title: "Drive & Enjoy",              description: "Pick up your vehicle and enjoy your journey with full insurance coverage included",              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-choosing-car-car-showroom_1303-17456.jpg",              imageAlt: "Enjoying rental vehicle"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Transparent Pricing Plans"
          description="Choose the plan that fits your rental needs. All prices include insurance and 24/7 roadside assistance."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          plans={[
            {
              id: "daily",              tag: "Daily Rental",              price: "$85",              period: "/day",              description: "Perfect for short-term rentals and daily commutes",              button: {
                text: "Book Now",                href: "contact"
              },
              featuresTitle: "What's Included:",              features: [
                "24-hour rental period",                "Full insurance coverage",                "Unlimited mileage",                "24/7 roadside assistance",                "Free cancellation up to 24 hours"
              ]
            },
            {
              id: "weekly",              tag: "Weekly Rental",              price: "$450",              period: "/week",              description: "Great value for week-long rentals with additional benefits",              button: {
                text: "Book Now",                href: "contact"
              },
              featuresTitle: "What's Included:",              features: [
                "7-day rental period",                "Full insurance coverage",                "Unlimited mileage",                "24/7 roadside assistance",                "Free vehicle upgrade (based on availability)",                "Free fuel top-up"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="VioBIBKA by the Numbers"
          description="Trusted by thousands of satisfied customers worldwide"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          metrics={[
            {
              id: "1",              icon: Users,
              title: "Happy Customers",              value: "50,000+"
            },
            {
              id: "2",              icon: Car,
              title: "Premium Vehicles",              value: "500+"
            },
            {
              id: "3",              icon: MapPin,
              title: "Locations",              value: "25+"
            },
            {
              id: "4",              icon: Award,
              title: "5-Star Rating",              value: "4.9/5"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="VioBIBKA made my business trip seamless. The booking process was straightforward, the vehicle was immaculate, and the customer service was exceptional. I'll definitely rent from them again for all my future travel needs."
          rating={5}
          author="Michael Chen, Business Executive"
          avatars={[
            {
              src: "https://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              alt: "Michael Chen"
            },
            {
              src: "https://img.b2bpic.net/free-photo/happy-business-woman-standing-outdoors_1262-20546.jpg",              alt: "Sarah Johnson"
            },
            {
              src: "https://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",              alt: "James Rodriguez"
            },
            {
              src: "https://img.b2bpic.net/free-photo/middle-aged-businesswoman-smiling_1262-21181.jpg",              alt: "Emily Watson"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Vehicle Today"
          description="Fill out the form below to reserve your premium rental vehicle. Our team will confirm your booking within 24 hours."
          inputs={[
            {
              name: "fullName",              type: "text",              placeholder: "Full Name",              required: true
            },
            {
              name: "email",              type: "email",              placeholder: "Email Address",              required: true
            },
            {
              name: "phone",              type: "tel",              placeholder: "Phone Number",              required: true
            },
            {
              name: "rentalDate",              type: "date",              placeholder: "Rental Start Date",              required: true
            }
          ]}
          textarea={{
            name: "message",            placeholder: "Vehicle preference, special requests, or additional information...",            rows: 5,
            required: false
          }}
          useInvertedBackground="invertDefault"
          imageSrc="https://img.b2bpic.net/free-photo/transportation-ownership-concept-customer-salesman-with-car-key_1423-183.jpg"
          imageAlt="Car rental booking process"
          mediaPosition="right"
          buttonText="Reserve Now"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VioBIBKA"
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Our Fleet", href: "vehicles" },
                { label: "Pricing", href: "pricing" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Insurance Info", href: "insurance" },
                { label: "Rental Terms", href: "terms" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cookie Policy", href: "cookies" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Facebook", href: "https://facebook.com/vibibka" },
                { label: "Instagram", href: "https://instagram.com/vibibka" },
                { label: "Twitter", href: "https://twitter.com/vibibka" },
                { label: "LinkedIn", href: "https://linkedin.com/company/vibibka" }
              ]
            }
          ]}
          copyrightText="© 2025 VioBIBKA Car Rental. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}