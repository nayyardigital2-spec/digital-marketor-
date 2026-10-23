/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { BlogModal } from './components/BlogModal';
import { WhatsAppAndScrollWidgets } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

import { PageType, CaseStudy, BlogPost } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [currentServiceId, setCurrentServiceId] = useState<string>('seo');
  
  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState<string>('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // Sync initial URL query params on mount
  useEffect(() => {
    const parseUrlParams = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageType | null;
      const serviceParam = params.get('service');

      if (pageParam && ['home', 'about', 'services', 'service-detail', 'portfolio', 'pricing', 'blog', 'contact', 'faq'].includes(pageParam)) {
        setCurrentPage(pageParam);
      }
      if (serviceParam) {
        setCurrentServiceId(serviceParam);
        if (!pageParam) setCurrentPage('service-detail');
      }
    };

    parseUrlParams();

    const handlePopState = () => {
      parseUrlParams();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageType, serviceId?: string) => {
    setCurrentPage(page);
    if (serviceId) {
      setCurrentServiceId(serviceId);
    }

    // Update URL history without page reload
    const url = new URL(window.location.href);
    if (page === 'home') {
      url.search = '';
    } else {
      url.searchParams.set('page', page);
      if (serviceId && page === 'service-detail') {
        url.searchParams.set('service', serviceId);
      } else {
        url.searchParams.delete('service');
      }
    }
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setConsultationDefaultService(serviceName || '');
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-sky-500/20 selection:text-sky-950 font-sans">
      
      {/* Sticky Responsive Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            serviceId={currentServiceId}
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onBookConsultation={() => handleOpenConsultation()}
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onSelectPost={setSelectedBlogPost}
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={handleNavigate}
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationDefaultService}
      />

      {/* Case Study Full Detail Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookConsultation={() => handleOpenConsultation(selectedCaseStudy?.client)}
      />

      {/* Blog Full Reader Modal */}
      <BlogModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onBookConsultation={() => handleOpenConsultation()}
      />

      {/* WhatsApp Quick Chat & Scroll To Top Widgets */}
      <WhatsAppAndScrollWidgets
        onBookConsultation={() => handleOpenConsultation()}
      />

    </div>
  );
}
