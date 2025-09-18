export interface OpenHouse {
  id: string;
  property: {
    address: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    yearBuilt: number;
    photos: string[];
    virtualTourUrl?: string;
  };
  schedule: {
    date: Date;
    startTime: string;  // "10:00 AM"
    endTime: string;    // "2:00 PM"
    isActive: boolean;  // Currently happening
    cancelledReason?: string;
  };
  location: {
    lat: number;
    lng: number;
    neighborhood: string;
    zipCode: string;
    area: 'summerlin' | 'henderson' | 'northwest' | 'southwest' | 'downtown' | 'north';
    distanceToStrip: number;
    distanceToAirport: number;
  };
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
    brokerage: string;
    totalOpenHouses: number;
    rating: number;
  };
  features: {
    refreshments: boolean;
    giveaways: boolean;
    brokerTour: boolean;
    newListing: boolean;
    priceReduced: boolean;
    virtualOption: boolean;
  };
  metrics: {
    rsvpCount: number;
    visitCount: number;
    savedCount: number;
    sharesCount: number;
  };
  logistics: {
    parking: 'street' | 'driveway' | 'guest';
    petFriendly: boolean;
    wheelchairAccess: boolean;
    maskRequired: boolean;
  };
}

// Helper types for filtering and sorting
export type TimeFilter = 'today' | 'tomorrow' | 'this-weekend' | 'next-weekend' | 'all';
export type AreaFilter = 'summerlin' | 'henderson' | 'northwest' | 'southwest' | 'downtown' | 'north' | 'all';
export type SortOption = 'time' | 'price' | 'distance' | 'newest' | 'popularity';
export type SortOrder = 'asc' | 'desc';

// Filter state interface
export interface OpenHouseFilters {
  timeRange: TimeFilter;
  areas: AreaFilter[];
  priceRange: { min: number; max: number };
  bedrooms: number[];
  bathrooms: number[];
  neighborhoods: string[];
  agents: string[];
  features: string[];
  radius: number;
  sortBy: SortOption;
  sortOrder: SortOrder;
}

// Mock data generator
export function generateMockOpenHouses(count: number = 20): OpenHouse[] {
  const neighborhoods = [
    'Summerlin', 'Henderson', 'Green Valley', 'Anthem', 
    'Southern Highlands', 'Inspirada', 'MacDonald Ranch', 'Seven Hills',
    'Centennial Hills', 'Spring Valley', 'Enterprise', 'Paradise'
  ];

  const areas: Array<OpenHouse['location']['area']> = [
    'summerlin', 'henderson', 'northwest', 'southwest', 'downtown', 'north'
  ];

  const agents = [
    { name: 'Sarah Johnson', phone: '(702) 555-0123', email: 'sarah@example.com', brokerage: 'Keller Williams', rating: 4.9 },
    { name: 'Mike Chen', phone: '(702) 555-0456', email: 'mike@example.com', brokerage: 'RE/MAX', rating: 4.8 },
    { name: 'Lisa Rodriguez', phone: '(702) 555-0789', email: 'lisa@example.com', brokerage: 'Coldwell Banker', rating: 4.7 },
    { name: 'David Thompson', phone: '(702) 555-0321', email: 'david@example.com', brokerage: 'Berkshire Hathaway', rating: 4.9 },
    { name: 'Jennifer Lee', phone: '(702) 555-0654', email: 'jennifer@example.com', brokerage: 'Windermere', rating: 4.6 },
    { name: 'Robert Martinez', phone: '(702) 555-0987', email: 'robert@example.com', brokerage: 'Century 21', rating: 4.8 }
  ];

  const openHouses: OpenHouse[] = [];

  for (let i = 1; i <= count; i++) {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 7); // 0-6 days from today
    const openHouseDate = new Date(today);
    openHouseDate.setDate(today.getDate() + randomDays);

    const startHour = Math.floor(Math.random() * 8) + 9; // 9 AM to 4 PM start
    const startTime = `${startHour}:00 ${startHour >= 12 ? 'PM' : 'AM'}`;
    const endHour = startHour + Math.floor(Math.random() * 4) + 2; // 2-5 hour duration
    const endTime = `${endHour}:00 ${endHour >= 12 ? 'PM' : 'AM'}`;

    const price = Math.floor(Math.random() * 800000) + 400000; // $400k - $1.2M
    const beds = Math.floor(Math.random() * 4) + 2; // 2-5 beds
    const baths = Math.floor(Math.random() * 3) + 1; // 1-3 baths
    const sqft = Math.floor(Math.random() * 2000) + 1500; // 1500-3500 sqft

    const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    const area = areas[Math.floor(Math.random() * areas.length)];
    const agent = agents[Math.floor(Math.random() * agents.length)];

    // Generate realistic coordinates for Las Vegas area
    const lat = 36.1699 + (Math.random() - 0.5) * 0.5; // Roughly Las Vegas area
    const lng = -115.1398 + (Math.random() - 0.5) * 0.5;

    openHouses.push({
      id: `oh-${i}`,
      property: {
        address: `${Math.floor(Math.random() * 9999) + 1000} ${neighborhood} ${['Dr', 'Ave', 'Blvd', 'Way', 'St'][Math.floor(Math.random() * 5)]}, Las Vegas, NV ${Math.floor(Math.random() * 90000) + 89000}`,
        price,
        beds,
        baths,
        sqft,
        yearBuilt: Math.floor(Math.random() * 30) + 1990, // 1990-2020
        photos: [
          `/api/placeholder/400/300?text=${neighborhood}+${beds}bed`,
          `/api/placeholder/400/300?text=Kitchen`,
          `/api/placeholder/400/300?text=Living+Room`,
          `/api/placeholder/400/300?text=Master+Bedroom`
        ],
        virtualTourUrl: Math.random() > 0.5 ? `https://virtualtour.example.com/${i}` : undefined
      },
      schedule: {
        date: openHouseDate,
        startTime,
        endTime,
        isActive: Math.random() > 0.7, // 30% chance of being active
        cancelledReason: Math.random() > 0.9 ? 'Weather conditions' : undefined
      },
      location: {
        lat,
        lng,
        neighborhood,
        zipCode: `${Math.floor(Math.random() * 90000) + 89000}`,
        area,
        distanceToStrip: Math.floor(Math.random() * 30) + 5, // 5-35 miles
        distanceToAirport: Math.floor(Math.random() * 20) + 3 // 3-23 miles
      },
      agent: {
        ...agent,
        photo: `/api/placeholder/100/100?text=${agent.name.split(' ')[0]}`,
        totalOpenHouses: Math.floor(Math.random() * 50) + 10
      },
      features: {
        refreshments: Math.random() > 0.6,
        giveaways: Math.random() > 0.8,
        brokerTour: Math.random() > 0.9,
        newListing: Math.random() > 0.7,
        priceReduced: Math.random() > 0.8,
        virtualOption: Math.random() > 0.5
      },
      metrics: {
        rsvpCount: Math.floor(Math.random() * 25),
        visitCount: Math.floor(Math.random() * 50),
        savedCount: Math.floor(Math.random() * 15),
        sharesCount: Math.floor(Math.random() * 10)
      },
      logistics: {
        parking: ['street', 'driveway', 'guest'][Math.floor(Math.random() * 3)] as 'street' | 'driveway' | 'guest',
        petFriendly: Math.random() > 0.7,
        wheelchairAccess: Math.random() > 0.6,
        maskRequired: Math.random() > 0.9
      }
    });
  }

  return openHouses;
}

// Utility functions
export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  } else if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`;
  }
  return `$${price.toLocaleString()}`;
}

export function formatTime(time: string): string {
  // Convert "10:00 AM" format to 24-hour format for calculations
  const [timeStr, period] = time.split(' ');
  const [hours, minutes] = timeStr.split(':');
  let hour24 = parseInt(hours);
  
  if (period === 'PM' && hour24 !== 12) {
    hour24 += 12;
  } else if (period === 'AM' && hour24 === 12) {
    hour24 = 0;
  }
  
  return `${hour24}:${minutes}`;
}

export function parseTime(timeStr: string): number {
  const [hours, minutes] = timeStr.split(':');
  return parseInt(hours) * 60 + parseInt(minutes);
}

export function getWeekendDate(day: 'saturday' | 'sunday'): string {
  const today = new Date();
  const currentDay = today.getDay();
  const daysUntilSaturday = (6 - currentDay) % 7;
  const daysUntilSunday = (7 - currentDay) % 7;
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + (day === 'saturday' ? daysUntilSaturday : daysUntilSunday));
  
  return targetDate.toISOString().split('T')[0];
}

export function isOpenHouseActive(openHouse: OpenHouse): boolean {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const openHouseDate = openHouse.schedule.date.toISOString().split('T')[0];
  
  if (openHouseDate !== today || openHouse.schedule.cancelledReason) {
    return false;
  }
  
  const currentTimeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  const currentMinutes = parseTime(currentTimeStr);
  const startMinutes = parseTime(formatTime(openHouse.schedule.startTime));
  const endMinutes = parseTime(formatTime(openHouse.schedule.endTime));
  
  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

export function getOpenHouseStatus(openHouse: OpenHouse): 'starting' | 'active' | 'ending' | 'ended' {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const openHouseDate = openHouse.schedule.date.toISOString().split('T')[0];
  
  if (openHouseDate !== today || openHouse.schedule.cancelledReason) {
    return 'ended';
  }
  
  const currentTimeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  const currentMinutes = parseTime(currentTimeStr);
  const startMinutes = parseTime(formatTime(openHouse.schedule.startTime));
  const endMinutes = parseTime(formatTime(openHouse.schedule.endTime));
  
  if (currentMinutes < startMinutes) {
    return 'starting';
  } else if (currentMinutes >= startMinutes && currentMinutes < endMinutes - 30) {
    return 'active';
  } else if (currentMinutes >= endMinutes - 30 && currentMinutes < endMinutes) {
    return 'ending';
  } else {
    return 'ended';
  }
}

export function getTimeUntil(openHouse: OpenHouse, type: 'start' | 'end'): string | null {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const openHouseDate = openHouse.schedule.date.toISOString().split('T')[0];
  
  if (openHouseDate !== today) {
    return null;
  }
  
  const targetTime = type === 'start' ? openHouse.schedule.startTime : openHouse.schedule.endTime;
  const targetDate = new Date(`${today}T${formatTime(targetTime)}:00`);
  const diffMinutes = Math.floor((targetDate.getTime() - now.getTime()) / (1000 * 60));
  
  if (diffMinutes < 0) return null;
  
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}
