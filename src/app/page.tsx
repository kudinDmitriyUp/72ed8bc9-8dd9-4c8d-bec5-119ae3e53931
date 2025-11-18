"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Crown, Diamond, Gem, Quote, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Jacob & Co"
          button={{
            text: "Visit Showroom",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Exquisite Timepieces"
          description="Discover the world's most exceptional luxury watches in our exclusive showroom"
          tag="Jacob & Co Showroom"
          tagIcon={Crown}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463261333-o4zjfxc8.jpg",
              imageAlt: "Premium luxury watch"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463262094-4jopjxnl.jpg",
              imageAlt: "Diamond encrusted timepiece"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463262763-5jvx75a6.jpg",
              imageAlt: "High-end chronograph"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463263428-i4f6t1gu.jpg",
              imageAlt: "Gold luxury watch"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463264153-dfvov8kt.jpg",
              imageAlt: "Watch collection display"
            }
          ]}
          buttons={[
            {
              text: "Explore Collection",
              href: "products"
            },
            {
              text: "Book Appointment",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Where artistry meets precision, creating timepieces that transcend generations. Each Jacob & Co watch represents the pinnacle of horological excellence and innovative design."
          features={[
            {
              icon: Diamond,
              title: "Exceptional Craftsmanship",
              description: "Every timepiece is meticulously handcrafted by master watchmakers using centuries-old techniques combined with cutting-edge technology."
            },
            {
              icon: Crown,
              title: "Exclusive Collections",
              description: "Limited edition pieces and bespoke creations that represent the ultimate in luxury and exclusivity for discerning collectors."
            },
            {
              icon: Gem,
              title: "Precious Materials",
              description: "Only the finest diamonds, gold, platinum and exotic materials are selected to create these extraordinary works of art."
            },
            {
              icon: Award,
              title: "Heritage & Innovation",
              description: "Combining traditional Swiss watchmaking heritage with revolutionary complications and avant-garde design philosophy."
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Timepieces"
          description="Discover our most coveted luxury watches, each a masterpiece of horological artistry"
          tag="Exclusive Collection"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "astronomia-solar",
              name: "Astronomia Solar Gold",
              price: "$680,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463265528-5c8nvbhm.jpg",
              imageAlt: "Astronomia Solar Gold timepiece"
            },
            {
              id: "billionaire-watch",
              name: "The Billionaire Watch",
              price: "$18,000,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463266118-g5uoudz5.jpg",
              imageAlt: "The Billionaire Watch with diamonds"
            },
            {
              id: "epic-x-chrono",
              name: "Epic X Chrono Messi",
              price: "$450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463266876-qcjsi6pi.jpg",
              imageAlt: "Epic X Chrono Messi edition"
            },
            {
              id: "palatial-flying-tourbillon",
              name: "Palatial Flying Tourbillon",
              price: "$890,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463267559-3cltlsst.jpg",
              imageAlt: "Palatial Flying Tourbillon"
            },
            {
              id: "grand-complication",
              name: "Grand Complication Masterpiece",
              price: "$1,250,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463268402-iu2gb4zt.jpg",
              imageAlt: "Grand Complication watch"
            },
            {
              id: "opera-godfather",
              name: "Opera Godfather Musical Watch",
              price: "$560,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463268901-p3tz3s2q.jpg",
              imageAlt: "Opera Godfather musical timepiece"
            }
          ]}
          buttons={[
            {
              text: "View Full Collection",
              href: "https://jacobandco.com"
            },
            {
              text: "Schedule Viewing",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Collectors Say"
          description="Hear from distinguished clients who have experienced the extraordinary world of Jacob & Co"
          tag="Client Reviews"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",
              name: "Alexander Rothschild",
              role: "Private Collector",
              company: "Rothschild Holdings",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463269376-ei7gzzbr.jpg",
              imageAlt: "Alexander Rothschild portrait"
            },
            {
              id: "2",
              name: "Victoria Sterling",
              role: "Art Connoisseur",
              company: "Sterling Galleries",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463270246-awofgh5v.jpg",
              imageAlt: "Victoria Sterling portrait"
            },
            {
              id: "3",
              name: "Marcus Beaumont",
              role: "Luxury Consultant",
              company: "Beaumont & Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463270874-trit3rtn.jpg",
              imageAlt: "Marcus Beaumont portrait"
            },
            {
              id: "4",
              name: "Isabella Montclair",
              role: "Investment Advisor",
              company: "Montclair Capital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463272010-ujz2g9li.jpg",
              imageAlt: "Isabella Montclair portrait"
            },
            {
              id: "5",
              name: "Charles Wellington",
              role: "Watch Collector",
              company: "Wellington Estate",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463272722-8kzlob9x.jpg",
              imageAlt: "Charles Wellington portrait"
            },
            {
              id: "6",
              name: "Sophia Blackwood",
              role: "Luxury Lifestyle Expert",
              company: "Blackwood Luxury",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763463273432-jdhylxos.jpg",
              imageAlt: "Sophia Blackwood portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Schedule Your Private Viewing"
          description="Experience the world's most extraordinary timepieces in our exclusive showroom. Contact us to arrange a personal appointment with our horological experts."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "interest",
              type: "text",
              placeholder: "Timepiece of Interest",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your preferences or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Schedule Appointment"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Jacob & Co"
          copyrightText="© 2025 Jacob & Co Showroom. All rights reserved."
          columns={[
            {
              title: "Collections",
              items: [
                {
                  label: "Astronomia",
                  href: "https://jacobandco.com/timepieces/astronomia"
                },
                {
                  label: "Epic X",
                  href: "https://jacobandco.com/timepieces/epic-x"
                },
                {
                  label: "Palatial",
                  href: "https://jacobandco.com/timepieces/palatial"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Private Appointments",
                  href: "contact"
                },
                {
                  label: "Watch Servicing",
                  href: "contact"
                },
                {
                  label: "Custom Orders",
                  href: "contact"
                }
              ]
            },
            {
              title: "Showroom",
              items: [
                {
                  label: "Visit Us",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}