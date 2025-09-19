import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div style={{ display: 'none' }}>
      {/* This component renders XML content */}
    </div>
  );
});

// Generate RSS feed
export const onGet = async () => {
  const currentDate = new Date().toISOString();
  
  const feedItems = [
    {
      title: 'Las Vegas Real Estate Market Update',
      description: 'Latest market trends and insights for Las Vegas real estate',
      url: 'https://openhouseupdate.com/market-analysis',
      pubDate: currentDate,
      guid: 'market-update-1',
    },
    {
      title: 'This Weekend\'s Open Houses in Las Vegas',
      description: 'Discover the best open houses happening this weekend',
      url: 'https://openhouseupdate.com/this-weekend',
      pubDate: currentDate,
      guid: 'open-houses-weekend',
    },
    {
      title: 'Home Buying Guide for Las Vegas',
      description: 'Complete guide to buying a home in Las Vegas with Dr. Janet Duffy',
      url: 'https://openhouseupdate.com/buyer-services',
      pubDate: currentDate,
      guid: 'buying-guide',
    },
    {
      title: 'Selling Your Home in Las Vegas',
      description: 'Expert tips for selling your home in the Las Vegas market',
      url: 'https://openhouseupdate.com/seller-services',
      pubDate: currentDate,
      guid: 'selling-guide',
    },
  ];

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Open House Update - Las Vegas Real Estate</title>
    <description>Professional real estate services in Las Vegas with Dr. Janet Duffy</description>
    <link>https://openhouseupdate.com</link>
    <language>en-US</language>
    <copyright>Copyright ${new Date().getFullYear()} Dr. Janet Duffy</copyright>
    <managingEditor>drduffy@bhhsnv.com (Dr. Janet Duffy)</managingEditor>
    <webMaster>drduffy@bhhsnv.com (Dr. Janet Duffy)</webMaster>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <category>Real Estate</category>
    <category>Las Vegas</category>
    <category>Nevada</category>
    <atom:link href="https://openhouseupdate.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://openhouseupdate.com/images/og-default.jpg</url>
      <title>Open House Update</title>
      <link>https://openhouseupdate.com</link>
      <width>144</width>
      <height>144</height>
    </image>
${feedItems.map(item => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.url}</link>
      <guid isPermaLink="false">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <category>Real Estate</category>
      <category>Las Vegas</category>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
