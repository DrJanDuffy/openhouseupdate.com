// Mobile Search Analytics Hook
// Provides tracking functions for mobile search interactions

interface MobileSearchAnalytics {
  trackButtonClick: () => void;
  trackModalOpen: () => void;
  trackModalClose: () => void;
  trackSearchPerformed: (searchType: string) => void;
}

export const useMobileSearchAnalytics = (): MobileSearchAnalytics => {
  const trackButtonClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mobile_search_button_click', {
        event_category: 'Mobile Search',
        event_label: 'Floating Button',
        value: 1
      });
    }
  };

  const trackModalOpen = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mobile_search_modal_open', {
        event_category: 'Mobile Search',
        event_label: 'Modal Interaction',
        value: 1
      });
    }
  };

  const trackModalClose = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mobile_search_modal_close', {
        event_category: 'Mobile Search',
        event_label: 'Modal Interaction',
        value: 1
      });
    }
  };

  const trackSearchPerformed = (searchType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mobile_search_performed', {
        event_category: 'Mobile Search',
        event_label: searchType,
        value: 1
      });
    }
  };

  return {
    trackButtonClick,
    trackModalOpen,
    trackModalClose,
    trackSearchPerformed
  };
};

// gtag is already declared in google-analytics.tsx

export default useMobileSearchAnalytics;
