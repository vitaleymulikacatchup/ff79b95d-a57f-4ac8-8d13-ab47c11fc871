"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { DollarSign, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Fresh Market"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Fresh Groceries Delivered to Your Door"
          description="Discover the finest selection of fresh, organic, and quality groceries. From farm-fresh vegetables to premium dairy, we bring the best to your table."
          tag="Farm Fresh Quality"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969711319-p1t1il1b.jpg",
              imageAlt: "Fresh grocery vegetables"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969712176-1c0ubjl0.jpg",
              imageAlt: "Grocery shopping bags"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969713018-w34bfem9.jpg",
              imageAlt: "Farmers market produce"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969713706-owpb5v09.jpg",
              imageAlt: "Grocery checkout counter"
            }
          ]}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why choose Fresh Market? We are committed to bringing you the highest quality groceries at the best prices. Our carefully selected products ensure freshness, quality, and value for your family."
          features={[
            {
              icon: Leaf,
              title: "100% Fresh & Organic",
              description: "All our produce is sourced from trusted local farms and suppliers to ensure maximum freshness and quality."
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Same-day delivery available for orders placed before 2 PM. Quick and reliable service to your home."
            },
            {
              icon: DollarSign,
              title: "Best Prices",
              description: "Competitive pricing without compromising on quality. Regular discounts and loyalty rewards for our customers."
            },
            {
              icon: ShieldCheck,
              title: "Quality Guaranteed",
              description: "Every product is carefully inspected. If you are not satisfied, we offer a full refund guarantee."
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Products"
          description="Browse our wide selection of fresh groceries and quality items carefully selected for you."
          tag="Premium Selection"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              brand: "Fresh Market",
              name: "Organic Vegetables Mix",
              price: "$12.99",
              rating: 5,
              reviewCount: "324",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969714303-pfwu1nfz.jpg",
              imageAlt: "Fresh organic vegetables"
            },
            {
              id: "2",
              brand: "Fresh Market",
              name: "Tropical Fruits Bundle",
              price: "$15.49",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969715125-x0cfxos1.jpg",
              imageAlt: "Fresh tropical fruits"
            },
            {
              id: "3",
              brand: "Premium Dairy",
              name: "Organic Dairy Collection",
              price: "$18.99",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969715847-22u35ml3.jpg",
              imageAlt: "Organic dairy products"
            },
            {
              id: "4",
              brand: "Fresh Market",
              name: "Artisan Bread Selection",
              price: "$9.99",
              rating: 5,
              reviewCount: "412",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969716566-iwzvlcvf.jpg",
              imageAlt: "Fresh artisan bread"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from people who trust Fresh Market for their daily grocery needs."
          tag="Customer Reviews"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Homemaker",
              company: "Customer since 2022",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969717127-8i4ev5w7.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Chef",
              company: "Restaurant Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969717629-xnpxfkgl.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Wilson",
              role: "Nutritionist",
              company: "Health Advocate",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969718407-7dp6lbs3.jpg",
              imageAlt: "Emma Wilson"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Working Parent",
              company: "Busy Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969718964-nwull4qo.jpg",
              imageAlt: "David Martinez"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our grocery delivery service and products."
          tag="Help & Support"
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What are your delivery times?",
              content: "We offer same-day delivery for orders placed before 2 PM. Standard delivery is available from 9 AM to 9 PM, seven days a week. Express delivery options are also available in select areas."
            },
            {
              id: "2",
              title: "Are all products organic?",
              content: "While we specialize in organic produce, we also carry conventionally grown items. All products are clearly labeled so you can make informed choices. We prioritize quality and freshness across our entire range."
            },
            {
              id: "3",
              title: "How fresh are the products?",
              content: "Our products are sourced directly from farms and suppliers daily. Most items are delivered within 24 hours of harvest or production, ensuring maximum freshness and nutritional value."
            },
            {
              id: "4",
              title: "What is your return policy?",
              content: "We offer a 100% satisfaction guarantee. If you are not happy with any product, we will provide a full refund or replacement within 7 days of purchase."
            },
            {
              id: "5",
              title: "Do you offer bulk orders?",
              content: "Yes, we offer special discounts for bulk orders. Contact our customer service team for wholesale pricing and arrangements for restaurants, catering services, and corporate accounts."
            },
            {
              id: "6",
              title: "How do I place an order?",
              content: "You can place orders through our website or mobile app. Simply browse our products, add items to your cart, enter your delivery address, and proceed to checkout. Orders are confirmed within minutes."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Get Fresh Deals Every Week"
          description="Subscribe to our newsletter and receive exclusive offers, recipes, and tips on selecting the freshest groceries."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Fresh Market"
          copyrightText="© 2025 Fresh Market | All rights reserved"
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Vegetables", href: "products" },
                { label: "Fruits", href: "products" },
                { label: "Dairy", href: "products" },
                { label: "Bakery", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Return Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}