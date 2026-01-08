import { MonthData } from './types';

export const MONTHS_DATA: MonthData[] = [
  {
    id: 'jan',
    name: 'January',
    theme: 'The Resolution Reset',
    summary: 'Critical acquisition month focusing on aggressive newcomer conversion and maximizing "Cash Upfront" via annual lock-ins. Targeting 35% YoY growth.',
    revenueTargetTotal: '₹1,59,56,805',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 175, estTicketSize: 'Blended', revenueTarget: '₹60,98,935', logic: 'Aggressive acquisition + High-ticket LTV' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 155, estTicketSize: 'Blended', revenueTarget: '₹54,92,945', logic: 'Focus on retention & upselling' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 165, estTicketSize: 'Blended', revenueTarget: '₹43,64,925', logic: 'Volume-led revenue growth' }
    ],
    offers: [
      {
        title: 'Fresh Start, No Guilt',
        type: 'New',
        description: '1 Month Unlimited for ₹11,999 + Taxes (Standard ₹15,250).',
        pricing: '₹12,599 (Inc VAT)',
        savings: '22% Off',
        whyItWorks: 'Plays on New Year\'s resolutions while removing the shame factor—inviting and liberating',
        targetUnits: 135
      },
      {
        title: 'The Habit Hack',
        type: 'Hero',
        description: 'Buy 3 Months Unlimited, Get 4th Month FREE.',
        pricing: '₹43,500 (MUM) / ₹40,200 (BLR)',
        savings: 'Up to ₹17,513 Off',
        whyItWorks: 'Snappy, modern language that appeals to productivity culture and sounds like a life pro-tip',
        targetUnits: 'Upsell Focus'
      },
      {
        title: 'All In \'27',
        type: 'Flash',
        description: '25% Flat Discount on Annual Membership (48 hours only).',
        pricing: '₹1,23,750 (MUM) / ₹1,11,600 (BLR)',
        savings: '₹41,250 Off',
        whyItWorks: 'Poker reference + year commitment = confidence and boldness. Short and punchy',
        targetUnits: 37
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'The Newcomer Surge', details: 'Marketing: Heavy Meta ads targeting "Fitness Resolutions". Sales: Call all Nov/Dec trials.' },
      { week: 'Week 2', focus: 'The Momentum Build', details: 'Sales: Upsell existing 1-month members to 4-Month bundle. Ops: Launch "Resolution Wall".' },
      { week: 'Week 3', focus: 'The Annual Spot Sale', details: '48-72 hour window for 25% Annual Offer. WhatsApp top 50 spenders.' },
      { week: 'Week 4', focus: 'The Habit Lock-in', details: 'Community: 21-Day Challenge. Referrals: "Bring a Buddy" passes.' }
    ]
  },
  {
    id: 'feb',
    name: 'February',
    theme: 'Heart-Health & Self Love',
    summary: 'Transitioning January trialists into long-term members while utilizing Valentine\'s Day as a high-conversion window. Goal: 33% YoY.',
    revenueTargetTotal: '₹50,00,000+',
    financialTargets: [
      { location: 'Mumbai Combined', category: 'Total', targetUnits: 85, estTicketSize: '₹14,500', revenueTarget: '₹41.4 L', logic: 'Valentine Hero Revenue focus' },
      { location: 'Bengaluru', category: 'Total', targetUnits: 35, estTicketSize: '₹11,200', revenueTarget: '₹8.6 L', logic: 'Retention of Jan influx' }
    ],
    offers: [
      {
        title: 'Partner in Grime',
        type: 'Hero',
        description: 'Buy one 1-Month Unlimited, get 2nd at 50% off for a partner.',
        pricing: '₹24,019 Bundle (MUM)',
        savings: '25% Total Savings',
        whyItWorks: 'Playful spin on "partner in crime"—instantly conveys duo workout + getting dirty/sweaty',
        targetUnits: 35
      },
      {
        title: 'Love at First Sweat',
        type: 'New',
        description: '3 Classes for the price of 1 + Free Grip Socks.',
        pricing: '₹1,575 (MUM)',
        whyItWorks: 'Romantic pun perfect for Valentine\'s season. Suggests instant connection with the studio',
        targetUnits: 'High Volume'
      },
      {
        title: 'Girls Just Wanna Have Buns',
        type: 'Event',
        description: 'Private studio session for 5 friends + Healthy Mimosas.',
        pricing: 'Flat ₹35,000',
        whyItWorks: 'Cyndi Lauper reference + glute goals = nostalgic fun meets fitness culture',
        targetUnits: 'Event Based'
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'Love Your Body Campaign', details: 'Launch marketing. Influencer couple workouts.' },
      { week: 'Week 2', focus: 'Duo Upgrade', details: 'Sales calls to Jan trials for Duo upgrade.' },
      { week: 'Week 3', focus: 'Self-Love Push', details: 'Front desk decorates "Self-Love" wall. Gift card push.' },
      { week: 'Week 4', focus: 'Retention', details: 'Partner stretches in class.' }
    ]
  },
  {
    id: 'mar',
    name: 'March',
    theme: 'The Power of Her',
    summary: 'Bridging Q1 to Q2. Converting momentum from Feb into long-term commitment. Focus on International Women\'s Day.',
    revenueTargetTotal: '₹47,00,000',
    financialTargets: [
      { location: 'Mumbai Combined', category: 'Total', targetUnits: 0, estTicketSize: 'N/A', revenueTarget: '₹40.0 L', logic: '18% Lead-to-Member Goal' },
      { location: 'Bengaluru', category: 'Total', targetUnits: 0, estTicketSize: 'N/A', revenueTarget: '₹7.0 L', logic: '15% Lead-to-Member Goal' }
    ],
    offers: [
      {
        title: 'She Means Business',
        type: 'Lapsed',
        description: '3-Month Unlimited + 3 Private Sessions + Strength Toolkit.',
        pricing: '₹56,238 (MUM)',
        savings: '20% Off',
        whyItWorks: 'Double meaning: serious about fitness + Women\'s Month empowerment. Confident and assertive',
        targetUnits: 10
      },
      {
        title: 'Squad Goals Unlocked',
        type: 'New',
        description: 'Buy 12-Class Pack, get 3 additional classes free.',
        pricing: '₹13,125 (BLR)',
        savings: '25% Extra Value',
        whyItWorks: 'Social media language that makes fitness social and achievement-oriented',
        targetUnits: 25
      },
      {
        title: 'Corner Office Conditioning',
        type: 'Corporate',
        description: '20% off Annual Membership for women in partner firms.',
        pricing: '₹1,61,700 (MUM)',
        whyItWorks: 'Alliterative and links career success with physical strength. Aspirational',
        targetUnits: 5
      }
    ],
    operations: [
      { week: 'All Month', focus: 'Voices of the Studio', details: 'Video testimonials of female members.' },
      { week: 'Week 1', focus: 'Re-Kindle Outreach', details: 'Contact female leads from last 12 months.' },
      { week: 'Week 2', focus: 'Empowerment Event', details: 'March 8th Brunch & Burn event.' },
      { week: 'Week 3-4', focus: 'Strength Cards', details: 'Distribution of complimentary class passes for friends.' }
    ]
  },
  {
    id: 'apr',
    name: 'April',
    theme: 'Infinite Strength (8th Anniversary)',
    summary: 'Grand 8th Anniversary Jubilee. High-impact "Event" offers. Gold, Glamour, and Legacy vibe.',
    revenueTargetTotal: 'High Impact Event Month',
    financialTargets: [
        { location: 'All Locations', category: 'Event', targetUnits: 8, estTicketSize: '₹88,000', revenueTarget: 'Cash Injection', logic: 'Scarcity Strategy' }
    ],
    offers: [
      {
        title: 'The Infinity Plan',
        type: 'Hero',
        description: '8 Months Unlimited + 8 Privates + 8 Guest Passes + Gold Socks. Limited to 8 people.',
        pricing: '₹88,000 (MUM)',
        savings: 'Value ₹1.3L+',
        whyItWorks: 'Marvel reference + endless commitment. Sounds epic and heroic',
        targetUnits: 8
      },
      {
        title: 'Til Death Do Us Squat',
        type: 'Retention',
        description: 'Price Rollback: 10-Class Pack at 2018 prices. 48 Hours Only.',
        pricing: '~₹12,000',
        savings: 'Significant Rollback',
        whyItWorks: 'Wedding vow parody = ultimate commitment joke. Memorable and shareable',
        targetUnits: 'Volume Driver'
      },
      {
        title: 'Eight Is Enough (It\'s Not)',
        type: 'New',
        description: '8 Classes for ₹8,888. Valid 8 Weeks.',
        pricing: '₹8,888',
        whyItWorks: 'Self-aware humor acknowledging fitness is never "done." Honest and funny',
        targetUnits: 'Acquisition'
      }
    ],
    operations: [
      { week: 'All Month', focus: 'Golden Ticket Hunt', details: 'Hide 8 tickets in retail/studio. Win 1 Month Free.' },
      { week: 'Week 1', focus: 'Mystery Box Launch', details: 'Sell sealed boxes for ₹8,000 containing ₹12k+ value.' },
      { week: 'Week 2', focus: 'Throwback Sale', details: '48-hour flash sale on Apr 8th & 9th.' },
      { week: 'Week 4', focus: 'Grand Gala', details: 'Barre, Bubbly & Bling event on April 25th.' }
    ]
  },
  {
    id: 'may',
    name: 'May',
    theme: 'The Summer Sprint',
    summary: 'High-liquidity month capitalizing on "Summer Holiday Prep" and Student demographic. Target 33% YoY jump.',
    revenueTargetTotal: '₹75,92,500',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 140, estTicketSize: 'High', revenueTarget: '₹29,22,500', logic: 'High AOV focus' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 130, estTicketSize: 'Med', revenueTarget: '₹27,20,000', logic: 'Retention & Upselling' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 140, estTicketSize: 'Low', revenueTarget: '₹19,50,000', logic: 'Volume-led growth' }
    ],
    offers: [
      {
        title: 'Broke But Buff',
        type: 'Student',
        description: '6-Week Unlimited + 1 "Bring-a-Friend" Permanent Guest Pass.',
        pricing: '₹18,000 (MUM)',
        savings: 'Value Add ₹4k',
        whyItWorks: 'Rhymes + acknowledges student budget reality with humor. Relatable and non-patronizing',
        targetUnits: 90
      },
      {
        title: 'Hot Girl Summer Prep',
        type: 'Hero',
        description: '6-Week Intensive + ₹3,000 Retail Voucher + 2 Nutrition Deep Dives.',
        pricing: '₹32,000 (MUM)',
        savings: 'Includes ₹6k extras',
        whyItWorks: 'Megan Thee Stallion reference. Culturally relevant and confidence-focused',
        targetUnits: 55
      },
      {
        title: 'Lunch Break, Make Bank',
        type: 'Retention',
        description: '5 Private Sessions (12-4 PM) + 1 Month Studio Unlimited included.',
        pricing: '₹25,000 (MUM)',
        savings: '38% Off Value',
        whyItWorks: 'Double meaning: banking classes + getting value. Perfect for daytime slots',
        targetUnits: 40
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'Private Launch', details: 'Contact heavy users for form correction/plateau breaking.' },
      { week: 'Week 2', focus: 'Student Invasion', details: 'Influencer campaign with college ambassadors. Squad pricing.' },
      { week: 'Week 3', focus: 'Bootcamp Intensity', details: 'Wall of Fame for daily attendees. Finisher challenges.' },
      { week: 'Week 4', focus: 'June Lock-In', details: 'Holiday Insurance: Buy 3-month pack, get infinite freeze for June.' }
    ]
  },
  {
    id: 'jun',
    name: 'June',
    theme: 'The Monsoon Motivation',
    summary: 'Pivoting to "Indoor Comfort" and "Reactive Marketing" to combat low attendance due to rains.',
    revenueTargetTotal: '₹56,55,500',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 117, estTicketSize: 'Med', revenueTarget: '₹21,43,000', logic: 'Global Wellness Week' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 110, estTicketSize: 'Med', revenueTarget: '₹20,15,000', logic: 'Rainy Day Discounts' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 115, estTicketSize: 'Low', revenueTarget: '₹14,97,500', logic: 'Virtual cross-sells' }
    ],
    offers: [
      {
        title: 'Rain Check Rejected',
        type: 'Hero',
        description: 'Attend 20 classes in 30 days. Reward: ₹2,000 Credit + Finisher Socks.',
        pricing: 'Attendance Challenge',
        whyItWorks: 'Flips the excuse phrase on its head. Empowering and defiant',
        targetUnits: 'All Members'
      },
      {
        title: 'The Boomerang',
        type: 'Lapsed',
        description: '5 Classes for fixed price. Valid 30 days. No extensions.',
        pricing: '₹5,500 (MUM)',
        savings: '~28% Off',
        whyItWorks: 'One word that perfectly captures coming back. Simple and visual',
        targetUnits: 70
      },
      {
        title: 'Virtual Reality Check',
        type: 'New',
        description: '1-Month Unlimited + Free 30-min Virtual Private Session.',
        pricing: '₹16,013 (MUM)',
        savings: 'Added Virtual Value',
        whyItWorks: 'Puns on VR + the reality of hybrid fitness. Tech-forward and clever',
        targetUnits: 45
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'The Reset', details: 'Launch U-Turn calls to lapsed members.' },
      { week: 'Week 2', focus: 'Wellness Week', details: 'Promote Virtual Private bonus.' },
      { week: 'Week 3', focus: 'Marathon Peak', details: 'Leaderboard updates to drive momentum.' },
      { week: 'Week 4', focus: 'Virtual Safety Net', details: 'Push Virtual Private packs for those complaining of traffic.' }
    ]
  },
  {
    id: 'jul',
    name: 'July',
    theme: 'The Storm Breaker',
    summary: 'Focus on "Logistical Relief" and "Social Proof" during peak monsoon. Removing travel barriers.',
    revenueTargetTotal: '₹63,39,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 117, estTicketSize: 'High', revenueTarget: '₹23,99,000', logic: 'Uber Credit Bundles' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 110, estTicketSize: 'High', revenueTarget: '₹22,60,000', logic: 'Referral Density' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 122, estTicketSize: 'Med', revenueTarget: '₹16,80,000', logic: 'Volume Retention' }
    ],
    offers: [
      {
        title: 'Lucky 7',
        type: 'Hero',
        description: 'Buy 6-Month Unlimited, Get 1 Month Free (7-for-6).',
        pricing: '₹89,775 (MUM)',
        savings: '1 Month Free',
        whyItWorks: 'Seven months for six is actually lucky. Gambling/luck reference feels special',
        targetUnits: 'Retention Focus'
      },
      {
        title: 'Gas Money\'s On Us',
        type: 'New',
        description: '3-Month Unlimited + ₹1,000 Transport Credit discount.',
        pricing: '₹42,500 (MUM)',
        savings: 'Direct Transport Subsidy',
        whyItWorks: 'Directly addresses "too hard to get a cab" objection.',
        targetUnits: 85
      },
      {
        title: 'Get Out of Jail Free Card',
        type: 'Retention',
        description: 'Buy 12-Class Pack, receive 2 "Late Cancel" Waivers.',
        pricing: 'Standard Pack Rate',
        savings: 'Peace of Mind',
        whyItWorks: 'Monopoly reference everyone knows. Removes guilt and anxiety perfectly',
        targetUnits: 'Pack Buyers'
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'Transport Focus', details: 'Market the Uber/Ola relief bundle heavily.' },
      { week: 'Week 2', focus: 'Referral Drive', details: 'Unlimited + Guest (4 free passes for 1-month buyer).' },
      { week: 'Week 3', focus: 'SEO Boost', details: 'Review & Reward: Free class for Google/Social testimonial.' },
      { week: 'Week 4', focus: 'Hustle Close', details: 'Close 7-for-6 deals before Anniversary month.' }
    ]
  },
  {
    id: 'aug',
    name: 'August',
    theme: 'Barre Besties & Vitality',
    summary: 'Peer-to-peer acquisition and community appreciation. Driving 70% repeat / 30% new revenue mix.',
    revenueTargetTotal: '₹72,40,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 238, estTicketSize: 'Mixed', revenueTarget: '₹33.3 L', logic: 'High Repeat Volume' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 215, estTicketSize: 'Mixed', revenueTarget: '₹28.6 L', logic: 'Friendship Push' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 135, estTicketSize: 'Mixed', revenueTarget: '₹10.5 L', logic: 'New Acquisition' }
    ],
    offers: [
      {
        title: 'The Infinity Plan',
        type: 'Hero',
        description: '12 Months Unlimited + 1 "Bestie Month" to gift + 2 Extra Freezes.',
        pricing: '₹1,35,000 (MUM Net)',
        savings: 'Gift Value ₹15k+',
        whyItWorks: 'Suggests never-ending commitment with superhero gravitas',
        targetUnits: 11
      },
      {
        title: 'Two Can Play at That Gym',
        type: 'New',
        description: 'Buy 3-class trial, get a second 3-class pass to gift a friend.',
        pricing: '₹4,500 (MUM Net)',
        savings: '50% Off Total Value',
        whyItWorks: '"Two can play at that game" twist. Competitive and fun friendship energy',
        targetUnits: 140
      },
      {
        title: 'Ride or Die (Literally)',
        type: 'Flash',
        description: '20% off Class Packs (10/20) when bought as a pair. Aug 1-3.',
        pricing: '₹19,600 for 20-Pack (MUM)',
        savings: '20% Off',
        whyItWorks: 'Hip-hop loyalty phrase + literal cycling class. Perfect double meaning',
        targetUnits: 45
      }
    ],
    operations: [
      { week: 'Pre-Aug', focus: 'Invitations', details: 'Hand out physical "Bestie Invitations" cards.' },
      { week: 'Weekly', focus: 'Sip & Pulse', details: 'Saturday socials with healthy juices. Photo booth.' },
      { week: 'All Month', focus: 'Vitality Circle', details: 'Bring a New Bestie = ₹500 retail voucher.' },
      { week: 'Trainers', focus: 'Partner Pulses', details: 'Integrate partner moves in choreography.' }
    ]
  },
  {
    id: 'sep',
    name: 'September',
    theme: 'Professional\'s Peak',
    summary: 'Honoring expertise through Trainer-led acquisition, team competition, and high-performance results.',
    revenueTargetTotal: '₹83,40,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 295, estTicketSize: 'High', revenueTarget: '₹39.5 L', logic: 'Trainer Led' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 250, estTicketSize: 'High', revenueTarget: '₹31.4 L', logic: 'Team Challenge' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 165, estTicketSize: 'Med', revenueTarget: '₹12.5 L', logic: 'Technical Focus' }
    ],
    offers: [
      {
        title: 'The Business Class Body',
        type: 'Hero',
        description: '3 Months Unlimited + 2 Form Correction Privates + 4 Travel Freezes.',
        pricing: '₹46,000 (MUM Net)',
        savings: '18% Off',
        whyItWorks: 'Travel luxury metaphor for premium fitness. Aspirational and status-oriented',
        targetUnits: 37
      },
      {
        title: 'The Insider Deal',
        type: 'New',
        description: 'Trainer unique code gives friend 20% off. Member gets Masterclass credit.',
        pricing: '₹11,340 for 10-Pack (MUM)',
        savings: '20% Off',
        whyItWorks: 'Makes members feel like VIPs with secret access. Exclusive and special',
        targetUnits: 170
      },
      {
        title: 'Back to Basics, Back to Badass',
        type: 'New',
        description: '4 Classes + 1 "Anatomy & Alignment" Workshop.',
        pricing: '₹4,725 (MUM Net)',
        savings: '25% Off',
        whyItWorks: 'Rhymes + shows that fundamentals lead to advanced results',
        targetUnits: 100
      }
    ],
    operations: [
      { week: 'All Month', focus: 'Master Trainer Challenge', details: 'Team Pulse-Off. Members earn points for attendance/referrals.' },
      { week: 'Marketing', focus: 'Trainer Cards', details: 'Social media "Trading Cards" for trainers with codes.' },
      { week: 'Lobby', focus: 'Leaderboard', details: 'Live leaderboard showing Team points.' },
      { week: 'Event', focus: 'Pulse-Off Finale', details: 'Winning team gets Masterclass & Mocktails event.' }
    ]
  },
  {
    id: 'oct',
    name: 'October',
    theme: 'Pre-Festive Glow',
    summary: 'Aesthetic results, high-velocity toning, and premium gifting ahead of the social season.',
    revenueTargetTotal: '₹85,50,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 320, estTicketSize: 'Med', revenueTarget: '₹41.2 L', logic: 'LBD Project' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 260, estTicketSize: 'Med', revenueTarget: '₹31.5 L', logic: 'Flash Packs' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 175, estTicketSize: 'Low', revenueTarget: '₹12.8 L', logic: 'Volume' }
    ],
    offers: [
      {
        title: 'Willy Wonka Wellness',
        type: 'Hero',
        description: '12 Months Unlimited + 2 Privates + Gold Socks.',
        pricing: '₹1,45,000 (MUM Net)',
        savings: 'Exclusive Swag',
        whyItWorks: 'Chocolate factory reference = rare, magical, exclusive. Fun premium positioning',
        targetUnits: 15
      },
      {
        title: 'The LBD Project',
        type: 'New',
        description: '4-Week Unlimited Sprint + Style Guide + 2 Guest Passes for final week.',
        pricing: '₹13,900 (MUM Net)',
        savings: '15% Off',
        whyItWorks: 'Little Black Dress + project transformation = aspirational and specific',
        targetUnits: 85
      },
      {
        title: 'The Speed Date',
        type: 'New',
        description: '5-Class Taster (14 Day Validity).',
        pricing: '₹6,000 (MUM Net)',
        savings: '20% Off',
        whyItWorks: 'Dating metaphor for trying fitness fast. Low commitment, high energy',
        targetUnits: 120
      }
    ],
    operations: [
      { week: 'Challenge', focus: 'Glow-Getter', details: 'Attendance challenge: 16 classes in Oct to win Luxury Spa voucher.' },
      { week: 'Gifting', focus: 'Luxury Gift Exchange', details: 'Buy Gift Card (₹5k), get 50% off next month installment.' },
      { week: 'Flash', focus: 'Power-Pulse', details: '5-Pack for PowerCycle/Strength Lab. Max calorie burn.' },
      { week: 'Volume', focus: '10 + 2 Bonanza', details: 'Buy 10 pack, get 2 free. Volume driver.' }
    ]
  },
  {
    id: 'nov',
    name: 'November',
    theme: 'Detox & Deal',
    summary: 'Combat post-festive slump by gamifying detox. Black Friday revenue injection.',
    revenueTargetTotal: '₹63,30,000',
    financialTargets: [
      { location: 'Mumbai Combined', category: 'Total', targetUnits: 450, estTicketSize: 'Mixed', revenueTarget: '₹48.5 L', logic: 'Black Friday Vault' },
      { location: 'Bengaluru', category: 'Total', targetUnits: 200, estTicketSize: 'Mixed', revenueTarget: '₹14.8 L', logic: 'Detox Challenge' }
    ],
    offers: [
      {
        title: 'The Doomsday Prep',
        type: 'Hero',
        description: '50 Class Pack with 24-Month Validity. Nov 24-30 Only.',
        pricing: '₹47,250 (MUM)',
        savings: '25% Off + 2 Year Validity',
        whyItWorks: 'Survivalist humor about stocking up. Makes bulk buying feel strategic',
        targetUnits: 25
      },
      {
        title: 'The Morning After Plan',
        type: 'New',
        description: '2 Weeks Unlimited for price of 1 week.',
        pricing: '₹8,925 (MUM)',
        savings: 'BOGO Week',
        whyItWorks: 'Hangover reference for post-Diwali guilt. Honest and relatable',
        targetUnits: 60
      },
      {
        title: 'Sweet Revenge',
        type: 'Lapsed',
        description: '1 Week Unlimited + Nutrition Detox Consult.',
        pricing: '₹3,500 (MUM)',
        savings: 'Guilt-based',
        whyItWorks: 'Double meaning: revenge on sweets + sweet-tasting revenge on guilt. BRILLIANT pun',
        targetUnits: 50
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'Detox Launch', details: 'Meta Ads "Post-Diwali Detox".' },
      { week: 'Week 3', focus: 'Countdown', details: 'Black Friday countdown marketing.' },
      { week: 'Week 4', focus: 'The Vault', details: 'Limit Vault packs to 25 units total to maintain brand value.' },
      { week: 'Trainers', focus: 'Finishers', details: '15-min intensive "Burn the Barfi" finishers in class.' }
    ]
  },
  {
    id: 'dec',
    name: 'December',
    theme: 'Finish Strong',
    summary: 'Pre-Resolution Capture & Gifting. Lock in 2027 revenue before January rush.',
    revenueTargetTotal: '₹41,50,000',
    financialTargets: [
      { location: 'Mumbai Combined', category: 'Total', targetUnits: 300, estTicketSize: 'Mixed', revenueTarget: '₹32.0 L', logic: 'Pre-Sale Lock-in' },
      { location: 'Bengaluru', category: 'Total', targetUnits: 150, estTicketSize: 'Mixed', revenueTarget: '₹9.5 L', logic: 'Gifting' }
    ],
    offers: [
      {
        title: 'Price Lock & Load',
        type: 'Hero',
        description: 'Lock in Annual Membership at 2025 prices + 10% Early Bird.',
        pricing: '₹1,55,925 (MUM)',
        savings: 'Future Proofing',
        whyItWorks: 'Gun-loading phrase + price locking. Urgent and action-oriented',
        targetUnits: 15
      },
      {
        title: 'Holiday Insurance',
        type: 'Retention',
        description: 'Buy 10/20 Pack, get Double Validity + 2 Extra Freezes.',
        pricing: 'Standard Rack',
        savings: 'Flexibility',
        whyItWorks: 'Insurance metaphor = protection against travel disruption. Smart and practical',
        targetUnits: 'Volume'
      },
      {
        title: 'Santa\'s Helper Gets Helped',
        type: 'Event',
        description: 'Buy ₹10k Gift Card, get 2 Complimentary Classes for purchaser.',
        pricing: '₹10,000',
        savings: 'Gifting Incentive',
        whyItWorks: 'Acknowledges the giver deserves rewards too. Fair exchange principle',
        targetUnits: 30
      }
    ],
    operations: [
      { week: 'Sales', focus: 'Extension Grant', details: 'Outreach to High Churn Risk members.' },
      { week: 'Front Desk', focus: 'Gifting', details: 'Display physical Gift Cards at reception.' },
      { week: 'Finance', focus: 'Audit', details: 'Strict VAT compliance on end-of-year deals.' },
      { week: 'Marketing', focus: 'Pre-Resolution', details: 'Tease Jan 2027 offers.' }
    ]
  }
];
