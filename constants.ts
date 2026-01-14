import { MonthData } from './types';

export const MONTHS_DATA: MonthData[] = [
  {
    id: 'jan',
    name: 'January',
    theme: 'The Resolution Reset',
    summary: 'Critical acquisition month focusing on aggressive newcomer conversion and maximizing "Cash Upfront" via annual lock-ins. Targeting 35% YoY growth.',
    revenueTargetTotal: '₹54,30,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 175, estTicketSize: 'Blended', revenueTarget: '₹25.2 L', logic: 'Aggressive acquisition + High-ticket LTV' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 155, estTicketSize: 'Blended', revenueTarget: '₹18.3 L', logic: 'Focus on retention & upselling' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 165, estTicketSize: 'Blended', revenueTarget: '₹10.8 L', logic: 'Volume-led revenue growth' }
    ],
    offers: [
      {
        title: 'Fresh Start, No Guilt',
        type: 'New',
        description: '1 Month Unlimited for Newcomers - Perfect entry point for New Year resolutions',
        pricing: 'Starting at ₹11,999',
        priceMumbai: 18638, // Studio 1 Month Unlimited (after tax)
        priceBengaluru: 14595, // Studio 1 Month Unlimited (after tax)
        finalPriceMumbai: 11999, // Special offer price
        finalPriceBengaluru: 11999, // Special offer price
        discountPercent: 36, // Mumbai: (18638-11999)/18638 = 36%, Bengaluru: (14595-11999)/14595 = 18%
        savings: '₹6,639 (Mumbai) / ₹2,596 (Bengaluru)',
        whyItWorks: 'Plays on New Year\'s resolutions while removing the shame factor—inviting and liberating',
        targetUnits: 135,
        promoteOnAds: true,
        marketingCollateral: 'Email campaign, WhatsApp blasts, Instagram stories with testimonials',
        operationalSupport: 'Welcome kit with branded water bottle and resistance band'
      },
      {
        title: 'The Habit Hack',
        type: 'Hero',
        description: 'Buy 3 Months Unlimited, Get 4th Month FREE - Build lasting fitness habits',
        pricing: 'Pay for 3, Get 4 Months',
        priceMumbai: 71926, // Standard: 3 months (53,288) + 1 month Studio (18,638)
        priceBengaluru: 56805, // Standard: 3 months (42,210) + 1 month Studio (14,595)
        finalPriceMumbai: 53288, // Pay only for 3 months
        finalPriceBengaluru: 42210, // Pay only for 3 months
        discountPercent: 26, // Savings of 1 free month
        savings: '₹18,638 (Mumbai) / ₹14,595 (Bengaluru) - 1 Month Free',
        whyItWorks: 'Snappy, modern language that appeals to productivity culture and sounds like a life pro-tip',
        targetUnits: 45,
        promoteOnAds: true,
        marketingCollateral: 'Landing page, Meta ads creative highlighting habit formation science',
        operationalSupport: '21-Day Challenge Kit with progress tracker'
      },
      {
        title: 'All In 2026',
        type: 'Flash',
        description: '25% Flat Discount on Annual Membership (48 hours only) - Best value of the year',
        pricing: '₹1,51,594 (Mumbai) / ₹1,17,180 (Bengaluru)',
        priceMumbai: 202125, // Studio Annual price (after tax)
        priceBengaluru: 156240, // Studio Annual price (after tax)
        finalPriceMumbai: 151594, // 25% off: 202125 * 0.75
        finalPriceBengaluru: 117180, // 25% off: 156240 * 0.75
        discountPercent: 25,
        savings: '₹50,531 (Mumbai) / ₹39,060 (Bengaluru)',
        whyItWorks: 'Limited-time urgency drives immediate action. Year commitment = confidence and commitment',
        targetUnits: 37,
        promoteOnAds: true,
        marketingCollateral: 'Countdown timer emails, WhatsApp urgency messages, in-studio posters',
        operationalSupport: 'VIP welcome package with premium merchandise'
      }
    ],
    operations: [
      { week: 'Week 1', focus: 'The Newcomer Surge', details: 'Marketing: Heavy Meta ads targeting "Fitness Resolutions". Sales: Call all Nov/Dec trials.' },
      { week: 'Week 2', focus: 'The Momentum Build', details: 'Sales: Upsell existing 1-month members to 4-Month bundle. Ops: Launch "Resolution Wall".' },
      { week: 'Week 3', focus: 'The Annual Spot Sale', details: '48-72 hour window for 25% Annual Offer. WhatsApp top 50 spenders.' },
      { week: 'Week 4', focus: 'The Habit Lock-in', details: 'Community: 21-Day Challenge. Referrals: "Bring a Buddy" passes.' }
    ],
    executionPlan: [
      {
        week: 'Week 1',
        focus: 'New Year Launch Blitz',
        offers: [],
        salesActivities: [
          'Call all Nov/Dec trial members and expired memberships',
          'Launch "Fresh Start, No Guilt" campaign with morning coffee chats',
          'Sales team targets: 45 conversions minimum',
          'Follow up on all web inquiries within 2 hours'
        ],
        marketingCollateral: 'Email sequence (3 emails), WhatsApp campaign with success stories, Instagram Reels featuring transformations',
        operationalSupport: 'Prepare 150 welcome kits with branded bottles and bands'
      },
      {
        week: 'Week 2',
        focus: 'Momentum & Upselling',
        offers: [],
        salesActivities: [
          'Upsell all 1-month members to "The Habit Hack" 3+1 month deal',
          'Personal check-ins with all new members from Week 1',
          'Launch referral incentive program',
          'Sales target: 35 upsells + 20 new acquisitions'
        ],
        marketingCollateral: 'WhatsApp upsell templates, Email nurture sequence, In-studio posters highlighting savings',
        operationalSupport: 'Create 21-Day Challenge tracker kit for Habit Hack buyers'
      },
      {
        week: 'Week 3',
        focus: 'Annual Flash Sale Push',
        offers: [],
        salesActivities: [
          'Launch 48-hour "All In 2026" flash sale',
          'Personal calls to top 50 lifetime spenders',
          'Flash sale exclusive: First 20 get premium merch',
          'Sales target: 37 annual memberships'
        ],
        marketingCollateral: 'Countdown timer emails, WhatsApp urgency messages, Stories with timer stickers',
        operationalSupport: 'VIP packages ready with premium merchandise for first 20 buyers'
      },
      {
        week: 'Week 4',
        focus: 'Habit Formation & Referrals',
        offers: [],
        salesActivities: [
          'Launch 21-Day Habit Challenge for all active members',
          'Activate "Bring a Buddy" 2-for-1 referral passes',
          'Check-in calls with all January joiners',
          'Sales target: 25 referral conversions'
        ],
        marketingCollateral: 'Challenge announcement emails, Daily motivation WhatsApp, Instagram challenge highlights',
        operationalSupport: 'Challenge completion certificates and reward planning (free private class for top 10)'
      }
    ]
  },
  {
    id: 'feb',
    name: 'February',
    theme: 'Heart-Health & Self Love',
    summary: 'Transitioning January trialists into long-term members while utilizing Valentine\'s Day as a high-conversion window. Anti-Valentine\'s offers included.',
    revenueTargetTotal: '₹1,12,29,860',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹51.3 L', logic: 'Valentine + Anti-Valentine revenue focus' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹42.8 L', logic: 'Self-love premium packages + retention' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹18.2 L', logic: 'Breakup package + new member influx' }
    ],
    offers: [
      {
        title: 'Partner in Grime',
        type: 'Hero',
        description: 'Buy one 1-Month Unlimited, get 2nd at 50% off for a partner.',
        pricing: 'Bundle Offer',
        priceMumbai: 37276, // 2x Studio 1 Month (2 x 18,638)
        priceBengaluru: 29190, // 2x Studio 1 Month (2 x 14,595)
        finalPriceMumbai: 27957, // 18,638 + (18,638 x 0.5)
        finalPriceBengaluru: 21893, // 14,595 + (14,595 x 0.5)
        discountPercent: 25,
        savings: '₹9,319 (Mumbai) / ₹7,297 (Bengaluru)',
        whyItWorks: 'Playful spin on "partner in crime"—instantly conveys duo workout + getting dirty/sweaty',
        targetUnits: 35,
        promoteOnAds: true,
        marketingCollateral: 'Valentine\'s Day couples campaign, Instagram duo workout videos',
        operationalSupport: 'Partner welcome kits with matching grip socks'
      },
      {
        title: 'Love at First Sweat',
        type: 'New',
        description: '3 Classes for the price of 1 + Free Grip Socks.',
        pricing: 'Intro Offer',
        priceMumbai: 5514, // 3x Studio Single Class (3 x 1,838)
        priceBengaluru: 4254, // 3x Studio Single Class (3 x 1,418)
        finalPriceMumbai: 1838, // Pay for 1, get 2 free
        finalPriceBengaluru: 1418, // Pay for 1, get 2 free
        discountPercent: 67,
        savings: '₹3,676 (Mumbai) / ₹2,836 (Bengaluru)',
        whyItWorks: 'Romantic pun perfect for Valentine\'s season. Suggests instant connection with the studio',
        targetUnits: 80,
        promoteOnAds: true,
        marketingCollateral: 'Email to prospects, Instagram Stories with trial testimonials',
        operationalSupport: 'Free grip socks inventory (150 pairs)'
      },
      {
        title: 'Girls Just Wanna Have Buns',
        type: 'Event',
        description: 'Private studio session for 5 friends + Healthy Mimosas.',
        pricing: 'Flat ₹35,000',
        priceMumbai: 35000,
        priceBengaluru: 35000,
        finalPriceMumbai: 35000,
        finalPriceBengaluru: 35000,
        savings: 'Exclusive Event Package',
        whyItWorks: 'Cyndi Lauper reference + glute goals = nostalgic fun meets fitness culture',
        targetUnits: 12,
        promoteOnAds: false,
        marketingCollateral: 'Social media event teasers, private invitations',
        operationalSupport: 'Mimosa bar setup, party decorations, photographer'
      },
      {
        title: 'The Breakup Package',
        type: 'Flash',
        description: '6-Week Unlimited (42 days) + 2 Private Sessions + "Revenge Body" tank.',
        pricing: '6 Weeks',
        priceMumbai: 24957, // ~1.5 Month value (18,638 × 1.5) + 2 Privates (2 × 5,250)
        priceBengaluru: 19584, // ~1.5 Month value (14,595 × 1.5) + 2 Privates (2 × 4,121)
        finalPriceMumbai: 16999,
        finalPriceBengaluru: 16999,
        discountPercent: 32,
        savings: '₹7,958 (Mumbai) / ₹2,585 (Bengaluru)',
        whyItWorks: 'Counter-programming anti-Valentine\'s. 6 weeks = habit-forming window. Savage marketing angle.',
        targetUnits: 80,
        promoteOnAds: true,
        marketingCollateral: 'Anti-Valentine\'s social campaign, "Revenge Body" content series',
        operationalSupport: 'Custom revenge body tanks, empowerment playlist curation'
      },
      {
        title: 'Self-Love Isn\'t Selfish',
        type: 'Hero',
        description: '4-Month Unlimited + 4 Private Sessions (one per month) + ₹2,000 retail credit.',
        pricing: '4-Month Premium',
        priceMumbai: 95552, // 3-Month (53,288) + 1-Month (18,638) + 4 Privates (21,000) + retail credit value
        priceBengaluru: 74822, // 3-Month (42,210) + 1-Month (14,595) + 4 Privates (16,484) + retail credit value
        finalPriceMumbai: 44999,
        finalPriceBengaluru: 44999,
        discountPercent: 53,
        savings: '₹50,553 (Mumbai) / ₹29,823 (Bengaluru)',
        whyItWorks: 'Single-person premium offer. ₹11,250/month effective rate. Takes you through summer. Appeals to "treat yourself" crowd.',
        targetUnits: 60,
        promoteOnAds: true,
        marketingCollateral: 'Self-love campaign, solo empowerment messaging, Instagram self-care series',
        operationalSupport: '₹2,000 retail credit vouchers, personalized wellness plans'
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
    summary: 'Bridging Q1 to Q2. Converting momentum from Feb into long-term commitment. Focus on International Women\'s Day with flash sale activation.',
    revenueTargetTotal: '₹69,63,200',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹31.8 L', logic: 'Women\'s Day flash sale + lapsed reactivation' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹26.7 L', logic: 'Power Hour high volume + retention focus' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹11.2 L', logic: 'Entry-level flash conversions' }
    ],
    offers: [
      {
        title: 'She Means Business',
        type: 'Lapsed',
        description: '3-Month Unlimited + 3 Private Sessions + Strength Toolkit.',
        pricing: 'Premium Package',
        priceMumbai: 69038, // 3 Month (53,288) + 3 Privates (3 x 5,250)
        priceBengaluru: 54573, // 3 Month (42,210) + 3 Privates (3 x 4,121)
        finalPriceMumbai: 55230, // 20% off
        finalPriceBengaluru: 43658, // 20% off
        discountPercent: 20,
        savings: '₹13,808 (Mumbai) / ₹10,915 (Bengaluru)',
        whyItWorks: 'Double meaning: serious about fitness + Women\'s Month empowerment. Confident and assertive',
        targetUnits: 10,
        promoteOnAds: true,
        marketingCollateral: 'Women\'s Day campaign emails, LinkedIn posts',
        operationalSupport: 'Strength toolkit with bands, foam roller, and guide'
      },
      {
        title: 'Squad Goals Unlocked',
        type: 'New',
        description: 'Buy 12-Class Pack, get 3 additional classes free.',
        pricing: '12-Class Pack',
        priceMumbai: 21270, // 15 classes value (15 x 1,418 BLR rate for comparison)
        priceBengaluru: 21270, // 15 classes (15 x 1,418)
        finalPriceMumbai: 15803, // 12-Class Pack price
        finalPriceBengaluru: 13125, // 12-Class Pack price
        discountPercent: 26, // Mumbai: (21,270-15,803)/21,270 = 26%, Bengaluru: (21,270-13,125)/21,270 = 38%
        savings: '₹5,467 (Mumbai) / ₹8,145 (Bengaluru) - 3 Free Classes',
        whyItWorks: 'Social media language that makes fitness social and achievement-oriented',
        targetUnits: 25,
        promoteOnAds: true,
        marketingCollateral: 'Instagram squad challenge campaign',
        operationalSupport: 'Squad tracking cards for progress'
      },
      {
        title: 'Corner Office Conditioning',
        type: 'Corporate',
        description: '20% off Annual Membership for women in partner firms.',
        pricing: 'Corporate Annual',
        priceMumbai: 202125, // Studio Annual price (after tax)
        priceBengaluru: 156240, // Studio Annual price (after tax)
        finalPriceMumbai: 161700, // 20% off
        finalPriceBengaluru: 124992, // 20% off
        discountPercent: 20,
        savings: '₹40,425 (Mumbai) / ₹31,248 (Bengaluru)',
        whyItWorks: 'Alliterative and links career success with physical strength. Aspirational',
        targetUnits: 5,
        promoteOnAds: false,
        marketingCollateral: 'Corporate partnership emails, LinkedIn outreach',
        operationalSupport: 'Corporate onboarding kits with branded merch'
      },
      {
        title: 'BIG BITCH ENERGY WEEK',
        type: 'Flash',
        description: '15% off all memberships + ₹1,000 gift voucher',
        pricing: 'All Memberships',
        priceMumbai: 53288, // 3 Month Unlimited as base
        priceBengaluru: 42210, // 3 Month Unlimited as base
        finalPriceMumbai: 44295, // 15% off + ₹1,000 voucher value
        finalPriceBengaluru: 34879, // 15% off + ₹1,000 voucher value
        discountPercent: 15,
        savings: '₹7,993 (Mumbai) / ₹6,331 (Bengaluru) + ₹1,000 voucher',
        whyItWorks: 'Because confidence deserves perks.',
        targetUnits: 30,
        promoteOnAds: true,
        marketingCollateral: 'Bold, empowering social media campaign',
        operationalSupport: 'Gift voucher distribution at front desk'
      },
      {
        title: 'Power Hour Reset',
        type: 'Flash',
        description: '8-Class Pack (valid 45 days) + 1 Private Session + Free grip socks. MARCH 8 ONLY (Women\'s Day).',
        pricing: '₹8,888',
        priceMumbai: 20054, // 8-Class estimate (₹15,750 for 10-pack prorated) + 1 Private (5,250)
        priceBengaluru: 15539, // 8-Class estimate (₹12,600 for 10-pack prorated) + 1 Private (4,121)
        finalPriceMumbai: 8888,
        finalPriceBengaluru: 8888,
        discountPercent: 56,
        savings: '₹11,166 (Mumbai) / ₹6,651 (Bengaluru)',
        whyItWorks: 'Entry-level commitment gets new members in door. One-day flash creates urgency. High volume play (150 units). Gateway to longer memberships.',
        targetUnits: 150,
        promoteOnAds: true,
        marketingCollateral: 'Women\'s Day flash campaign, 24-hour countdown, empowerment messaging',
        operationalSupport: 'Grip socks inventory (150+ pairs), Women\'s Day celebration activities'
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
    summary: 'Grand 8th Anniversary Jubilee with gamified offers. Interactive experiences including Jackpot Wheel, Double or Nothing Challenge, and Comeback Claw Machine.',
    revenueTargetTotal: '₹2,12,27,800',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Event', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹96.9 L', logic: 'Anniversary activation with gamification' },
      { location: 'MUM: Supreme HQ', category: 'Event', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹81.4 L', logic: 'Flash sale + wheel spinning events' },
      { location: 'BLR: Kenkere House', category: 'Event', targetUnits: 0, estTicketSize: 'Blended', revenueTarget: '₹33.9 L', logic: 'Lapsed reactivation + lucky dip' }
    ],
    offers: [
      {
        title: 'The Jackpot Wheel',
        type: 'Event',
        description: 'Spin the wheel (April 15-30) for 8-12 months unlimited + privates + prizes. Active clients get 1 FREE spin!',
        pricing: '₹88,000 (New) | FREE (Active)',
        priceMumbai: 120000, // Average value: 10-Month + 8 Privates + prizes
        priceBengaluru: 95000,
        finalPriceMumbai: 88000,
        finalPriceBengaluru: 88000,
        discountPercent: 27,
        savings: '₹32,000+ value (everyone wins!) Active members: FREE spin worth ₹88K+',
        whyItWorks: 'Higher price = higher revenue. Active member free spin = retention tool. Extended packages (8-12 months) = better LTV. Creates FOMO and viral social content.',
        targetUnits: 150,
        targetUnitsMumbai: '100 paid + 50 active free spins',
        targetUnitsBengaluru: '50 paid + 30 active free spins',
        promoteOnAds: true,
        marketingCollateral: 'Social media wheel spinning videos, Instagram stories of winners, active member VIP messaging',
        operationalSupport: 'Physical wheel setup with upgraded prizes, daily spin sessions, active member verification, winner announcements'
      },
      {
        title: 'Double or Nothing Challenge',
        type: 'Flash',
        description: 'Complete 16 classes in 16 days (April 10-25) to unlock 6 months total. Fail = keep your 3 months.',
        pricing: '3-Month Unlimited',
        priceMumbai: 99750, // 6-Month value if successful
        priceBengaluru: 78300,
        finalPriceMumbai: 50750, // 3-Month price paid
        finalPriceBengaluru: 40200,
        discountPercent: 49,
        savings: '₹49,000 (Mumbai) / ₹38,100 (Bengaluru) if successful',
        whyItWorks: 'Zero-loss proposition. Drives intense April attendance. Creates social proof and leaderboard competition.',
        targetUnits: 80,
        promoteOnAds: true,
        marketingCollateral: 'Challenge leaderboard updates, daily progress tracking posts',
        operationalSupport: 'Leaderboard screens, finisher merch, Wall of Winners, guest passes'
      },
      {
        title: 'The Comeback Claw Machine',
        type: 'Lapsed',
        description: 'Lapsed members: Pay ₹999 to grab a ball revealing your exclusive comeback package (1-6 months).',
        pricing: 'Mystery Package',
        priceMumbai: 35500, // Average 2-month value
        priceBengaluru: 28000,
        finalPriceMumbai: 20999, // Average redemption price + entry fee
        finalPriceBengaluru: 20999,
        discountPercent: 41,
        savings: '₹14,500 (Mumbai) / ₹7,000 (Bengaluru) average',
        whyItWorks: 'Gets lapsed members physically in studio. Gamification reduces "begging back" feeling. Entry fee covers cost.',
        targetUnits: 200,
        targetUnitsMumbai: 120,
        targetUnitsBengaluru: 80,
        promoteOnAds: false,
        marketingCollateral: 'Personalized lapsed member emails/SMS, Instagram claw machine stories',
        operationalSupport: 'Physical claw machine setup, prize balls refreshed weekly'
      },
      {
        title: 'Lucky Dip Class Packs',
        type: 'New',
        description: 'Pick a sealed envelope for ₹12,000. Get 10-15 classes + potential retail credits or privates.',
        pricing: '₹12,000',
        priceMumbai: 15000, // Average 12-class pack value
        priceBengaluru: 15000,
        finalPriceMumbai: 12000,
        finalPriceBengaluru: 12000,
        discountPercent: 20,
        savings: '₹3,000-6,000 value depending on envelope',
        whyItWorks: 'Entry-level commitment attracts new members. Mystery element drives social shares. Daily envelope rotation creates FOMO.',
        targetUnits: 250,
        promoteOnAds: true,
        marketingCollateral: 'Daily envelope reveal posts, user-generated content campaign',
        operationalSupport: 'Sealed envelope display at desk, daily rotation tracking'
      },
      {
        title: 'The 8-Hour Flash Sale',
        type: 'Flash',
        description: '50% OFF everything! April 8, 8 AM-4 PM. First 88 purchases. Annual, 6-month, 3-month, 20-class packs.',
        pricing: '50% Off All Packages',
        priceMumbai: 96250, // Annual at 50% off
        priceBengaluru: 74400,
        finalPriceMumbai: 48125, // Average sale price
        finalPriceBengaluru: 37200,
        discountPercent: 50,
        savings: '50% off all standard packages',
        whyItWorks: 'Massive urgency (8 hours, 88 people). Forces immediate decision. Creates social media frenzy. Limited quantity prevents margin destruction.',
        targetUnits: 88,
        promoteOnAds: true,
        marketingCollateral: '48-hour warning email, real-time countdown, live social updates',
        operationalSupport: 'Online checkout optimization, real-time counter, staff on deck'
      }
    ],
    operations: [
      { week: 'Pre-Launch (Mar 25-31)', focus: 'Setup & Teasers', details: 'Build wheel & claw machine. Social media teasers. Email list warm-up.' },
      { week: 'Week 1 (Apr 1-8)', focus: 'Grand Launch + Flash Sale', details: 'All offers go live Apr 1. Flash sale Apr 8 (8 AM-4 PM). Instagram countdown.' },
      { week: 'Week 2 (Apr 10-15)', focus: 'Challenge Begins + Wheel Opens', details: 'Double or Nothing starts Apr 10. Jackpot Wheel spinning begins Apr 15.' },
      { week: 'Week 3-4 (Apr 16-30)', focus: 'Daily Activations + Grand Finale', details: 'Daily winner posts. Challenge ends Apr 25. Grand finale party Apr 30.' }
    ]
  },
  {
    id: 'may',
    name: 'May',
    theme: 'The Summer Sprint',
    summary: 'High-liquidity month capitalizing on "Summer Holiday Prep" and Student demographic. Target 33% YoY jump.',
    revenueTargetTotal: '₹71,40,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 140, estTicketSize: 'High', revenueTarget: '₹34.0 L', logic: 'High AOV focus' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 130, estTicketSize: 'Med', revenueTarget: '₹27.1 L', logic: 'Retention & Upselling' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 140, estTicketSize: 'Low', revenueTarget: '₹10.3 L', logic: 'Volume-led growth' }
    ],
    offers: [
      {
        title: 'The Earned Unlimited',
        type: 'Student',
        description: '2-Month Unlimited at 10% off. Earn 1 bonus class for every 2 classes completed (unlocks after 30+ total).',
        pricing: '2-Month Unlimited',
        priceMumbai: 37276, // 2-Month Studio Unlimited (after tax)
        priceBengaluru: 29190, // 2-Month Studio Unlimited (after tax)
        finalPriceMumbai: 33548, // 10% off
        finalPriceBengaluru: 26271, // 10% off
        discountPercent: 10,
        savings: '₹3,728 (Mumbai) / ₹2,919 (Bengaluru) + bonus classes earned',
        whyItWorks: 'Unlimited isn\'t given. It\'s earned. Reframes bonuses as merit-based. Appeals to high-effort students. Discourages casual sign-ups.',
        targetUnits: 90,
        promoteOnAds: true,
        marketingCollateral: 'Student merit-based campaign, earned unlimited messaging, progress tracking',
        operationalSupport: 'Class completion tracking, bonus class unlock system, student ID verification'
      },
      {
        title: 'Your Ex Is Looking Good',
        type: 'Hero',
        description: '6-Week Studio Unlimited. Complete 18 classes in 42 days (3x/week) to earn ₹10,000 credit + 2 Nutrition Deep Dives.',
        pricing: 'Full Price',
        priceMumbai: 37500, // 6 Week Studio Unlimited
        priceBengaluru: 27500, // 6 Week Studio Unlimited
        finalPriceMumbai: 37500,
        finalPriceBengaluru: 27500,
        discountPercent: 0,
        savings: 'Earn ₹10,000 credit + ₹6,000 nutrition value (if 18 classes completed)',
        whyItWorks: 'Taps into petty revenge motivation. No upfront discount = higher revenue. Earned benefit ensures LTV and frequency commitment. Mission-based psychology.',
        targetUnits: 55,
        promoteOnAds: true,
        marketingCollateral: 'Savage accountability campaign, revenge body transformation stories, class completion tracker',
        operationalSupport: 'Class tracking system, ₹10K credit vouchers, nutrition consultant scheduling'
      },
      {
        title: 'Lunch Break, Make Bank',
        type: 'Retention',
        description: '5 Private Sessions (12-4 PM) + 1 Month Studio Unlimited included.',
        pricing: '₹25,000 (MUM)',
        priceMumbai: 44888, // 5 privates (26,250) + 1 month Studio (18,638)
        priceBengaluru: 35200, // 5 privates (20,605) + 1 month Studio (14,595)
        finalPriceMumbai: 25000,
        finalPriceBengaluru: 22000,
        discountPercent: 44, // Mumbai: (44,888-25,000)/44,888 = 44%, Bengaluru: (35,200-22,000)/35,200 = 38%
        savings: '₹19,888 (Mumbai) / ₹13,200 (Bengaluru)',
        whyItWorks: 'Double meaning: banking classes + getting value. Perfect for daytime slots',
        targetUnits: 40,
        promoteOnAds: false,
        marketingCollateral: 'Daytime slot promotion, private session showcase',
        operationalSupport: 'Dedicated noon private session slots, trainer scheduling'
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
    revenueTargetTotal: '₹71,60,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 117, estTicketSize: 'Med', revenueTarget: '₹31.9 L', logic: 'Global Wellness Week' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 110, estTicketSize: 'Med', revenueTarget: '₹28.5 L', logic: 'Rainy Day Discounts' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 115, estTicketSize: 'Low', revenueTarget: '₹11.2 L', logic: 'Virtual cross-sells' }
    ],
    offers: [
      {
        title: 'Rain Check Rejected',
        type: 'Hero',
        description: 'Attend 20 classes in 30 days. Reward: ₹2,000 Credit + Finisher Socks.',
        pricing: 'Attendance Challenge',
        priceMumbai: 18638, // Studio 1 Month Unlimited
        priceBengaluru: 14595, // Studio 1 Month Unlimited
        finalPriceMumbai: 18638, // No discount, earns ₹2k credit back (net = 16,638)
        finalPriceBengaluru: 14595, // No discount, earns ₹2k credit back (net = 12,595)
        discountPercent: 0,
        savings: 'Earn ₹2,000 Credit + Socks (effective 11% reward)',
        whyItWorks: 'Flips the excuse phrase on its head. Empowering and defiant',
        targetUnits: 100,
        promoteOnAds: true,
        marketingCollateral: 'Monsoon motivation campaign, attendance tracking',
        operationalSupport: 'Finisher socks inventory, credit tracking system'
      },
      {
        title: 'The Boomerang',
        type: 'Lapsed',
        description: '5 Classes for fixed price. Valid 30 days. No extensions.',
        pricing: '₹5,500 (MUM)',
        priceMumbai: 9190, // 5 x Studio Single Class (5 x 1,838)
        priceBengaluru: 7090, // 5 x Studio Single Class (5 x 1,418)
        finalPriceMumbai: 5500,
        finalPriceBengaluru: 5000,
        discountPercent: 40, // Mumbai: (9,190-5,500)/9,190 = 40%, Bengaluru: (7,090-5,000)/7,090 = 29%
        savings: '₹3,690 (Mumbai) / ₹2,090 (Bengaluru)',
        whyItWorks: 'One word that perfectly captures coming back. Simple and visual',
        targetUnits: 70,
        promoteOnAds: false,
        marketingCollateral: 'Lapsed member email campaign, welcome back messaging',
        operationalSupport: 'Lapsed member list, 30-day validity tracking'
      },
      {
        title: 'Virtual Reality Check',
        type: 'New',
        description: '1-Month Unlimited + Free 30-min Virtual Private Session.',
        pricing: '₹18,638 (MUM)',
        priceMumbai: 23363, // 1 Month Studio (18,638) + Virtual Private (4,725)
        priceBengaluru: 19320, // 1 Month Studio (14,595) + Virtual Private (4,725)
        finalPriceMumbai: 18638,
        finalPriceBengaluru: 14595,
        discountPercent: 20, // Mumbai: (23,363-18,638)/23,363 = 20%, Bengaluru: (19,320-14,595)/19,320 = 24%
        savings: '₹4,725 Virtual Private Free',
        whyItWorks: 'Puns on VR + the reality of hybrid fitness. Tech-forward and clever',
        targetUnits: 45,
        promoteOnAds: true,
        marketingCollateral: 'Virtual private session showcase, tech-forward messaging',
        operationalSupport: 'Virtual private session booking system, trainer availability'
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
    summary: 'Focus on weather-based gamification and attendance challenges during peak monsoon. High-engagement offers with cash prizes and weather-triggered bonuses.',
    revenueTargetTotal: '₹1,61,35,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 117, estTicketSize: 'High', revenueTarget: '₹74.9 L', logic: 'Weather roulette + streak challenge activation' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 110, estTicketSize: 'High', revenueTarget: '₹62.8 L', logic: 'Cash prize streak competition focus' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 122, estTicketSize: 'Med', revenueTarget: '₹23.6 L', logic: 'Weather-based purchase urgency' }
    ],
    offers: [
      {
        title: 'Rain or Shine Roulette',
        type: 'Event',
        description: '4-Month Unlimited + 3 Privates. Rainfall on purchase day determines bonus tier (spin digital wheel in studio).',
        pricing: '₹65,000 (MUM) / ₹52,000 (BLR)',
        priceMumbai: 92888, // 3-Month (53,288) + 1-Month (18,638) + 3 Privates (15,750) + avg bonus value (5,212)
        priceBengaluru: 72573, // 3-Month (42,210) + 1-Month (14,595) + 3 Privates (12,363) + avg bonus value (3,405)
        finalPriceMumbai: 65000,
        finalPriceBengaluru: 52000,
        discountPercent: 30,
        savings: '₹27,888 (Mumbai) / ₹20,573 (Bengaluru) + weather bonus',
        whyItWorks: 'Gamification tied to actual weather. Creates daily checking ("Is it raining enough?"). Heavy rain day = better odds. Transparent, verifiable.',
        targetUnits: 70,
        promoteOnAds: true,
        marketingCollateral: 'Weather tracker posts, daily rainfall updates, wheel spinning videos',
        operationalSupport: 'Digital wheel setup, rainfall data API integration, tier tracking system'
      },
      {
        title: 'The Monsoon Survivors Club',
        type: 'Flash',
        description: '3-Month Unlimited + 1 Private. Attendance streak challenge July 10-Aug 10. TOP 2 win cash prizes (₹20K + ₹10K).',
        pricing: '₹48,000 (MUM) / ₹38,000 (BLR)',
        priceMumbai: 58538, // 3-Month (53,288) + 1 Private (5,250)
        priceBengaluru: 46331, // 3-Month (42,210) + 1 Private (4,121)
        finalPriceMumbai: 48000,
        finalPriceBengaluru: 38000,
        discountPercent: 18,
        savings: '₹10,538 (Mumbai) / ₹8,331 (Bengaluru) + chance at ₹20K/₹10K cash',
        whyItWorks: 'Streak mechanic = daily commitment. Only 2 winners from 90 = exclusive. Creates daily studio attendance in monsoon. Dramatic element.',
        targetUnits: 90,
        promoteOnAds: true,
        marketingCollateral: 'Daily leaderboard updates, streak survivor stories, countdown posts',
        operationalSupport: 'Attendance tracking app, daily leaderboard screens, ₹30K prize pool'
      },
      {
        title: 'Lucky 7',
        type: 'Hero',
        description: 'Buy 6-Month Unlimited, Get 1 Month Free (7-for-6).',
        pricing: '₹1,04,738 (MUM)',
        priceMumbai: 123376, // 6 Month (104,738) + 1 Month Studio (18,638)
        priceBengaluru: 96810, // 6 Month (82,215) + 1 Month Studio (14,595)
        finalPriceMumbai: 104738,
        finalPriceBengaluru: 82215,
        discountPercent: 15, // Savings of 1 free month
        savings: '₹18,638 (Mumbai) / ₹14,595 (Bengaluru) - 1 Month Free',
        whyItWorks: 'Seven months for six is actually lucky. Gambling/luck reference feels special',
        targetUnits: 20,
        promoteOnAds: true,
        marketingCollateral: 'Lucky 7 campaign, monsoon retention messaging',
        operationalSupport: '7-month validity tracking, free month application'
      },
      {
        title: 'Gas Money\'s On Us',
        type: 'New',
        description: '3-Month Unlimited + ₹1,000 Transport Credit discount.',
        pricing: '₹42,500 (MUM)',
        priceMumbai: 53288, // 3 Month Unlimited
        priceBengaluru: 42210, // 3 Month Unlimited
        finalPriceMumbai: 42500,
        finalPriceBengaluru: 39000,
        discountPercent: 20, // Mumbai: (53,288-42,500)/53,288 = 20%, Bengaluru: (42,210-39,000)/42,210 = 8%
        savings: '₹10,788 (Mumbai) / ₹3,210 (Bengaluru) + Transport Credit',
        whyItWorks: 'Directly addresses "too hard to get a cab" objection.',
        targetUnits: 85,
        promoteOnAds: true,
        marketingCollateral: 'Monsoon travel relief messaging, transport credit promotion',
        operationalSupport: 'Transport credit tracking, Uber/Ola voucher system'
      },
      {
        title: 'Get Out of Jail Free Card',
        type: 'Retention',
        description: 'Buy 12-Class Pack, receive 2 "Late Cancel" Waivers.',
        pricing: 'Standard Pack Rate',
        priceMumbai: 15803, // 12-Class Pack
        priceBengaluru: 13125, // 12-Class Pack
        finalPriceMumbai: 15803,
        finalPriceBengaluru: 13125,
        discountPercent: 0,
        savings: '2 Late Cancel Waivers (Peace of Mind)',
        whyItWorks: 'Monopoly reference everyone knows. Removes guilt and anxiety perfectly',
        targetUnits: 60,
        promoteOnAds: false,
        marketingCollateral: 'Flexibility messaging, late cancel policy showcase',
        operationalSupport: 'Late cancel waiver tracking, member flexibility policy'
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
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 215, estTicketSize: 'Mixed', revenueTarget: '₹28.5 L', logic: 'Friendship Push' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 135, estTicketSize: 'Mixed', revenueTarget: '₹10.6 L', logic: 'New Acquisition' }
    ],
    offers: [
      {
        title: 'The Infinity Plan',
        type: 'Hero',
        description: '12 Months Unlimited + 1 "Bestie Month" to gift + 2 Extra Freezes.',
        pricing: '₹1,35,000 (MUM Net)',
        priceMumbai: 220763, // Annual (202,125) + 1 Month gift Studio (18,638)
        priceBengaluru: 170835, // Annual (156,240) + 1 Month gift Studio (14,595)
        finalPriceMumbai: 135000,
        finalPriceBengaluru: 125000,
        discountPercent: 39, // Mumbai: (220,763-135,000)/220,763 = 39%, Bengaluru: (170,835-125,000)/170,835 = 27%
        savings: '₹85,763 (Mumbai) / ₹45,835 (Bengaluru)',
        whyItWorks: 'Suggests never-ending commitment with superhero gravitas',
        targetUnits: 11,
        promoteOnAds: true,
        marketingCollateral: 'Annual membership push, bestie gifting campaign',
        operationalSupport: 'Gift month vouchers, 2 freeze credits per member'
      },
      {
        title: 'Two Can Play at That Gym',
        type: 'New',
        description: 'Buy 3-class trial, get a second 3-class pass to gift a friend.',
        pricing: '₹4,500 (MUM Net)',
        priceMumbai: 5514, // 3 x Studio Single Class (3 x 1,838)
        priceBengaluru: 4254, // 3 x Studio Single Class (3 x 1,418)
        finalPriceMumbai: 4500,
        finalPriceBengaluru: 4000,
        discountPercent: 18, // Mumbai: (5,514-4,500)/5,514 = 18%, Bengaluru: (4,254-4,000)/4,254 = 6%
        savings: '₹1,014 (Mumbai) / ₹254 (Bengaluru) + Friend Pass Free',
        whyItWorks: '"Two can play at that game" twist. Competitive and fun friendship energy',
        targetUnits: 140,
        promoteOnAds: true,
        marketingCollateral: 'Friend referral campaign, trial pass promotion',
        operationalSupport: 'Friend pass vouchers, 14-day validity tracking'
      },
      {
        title: 'Ride or Die (Literally)',
        type: 'Flash',
        description: '20% off Class Packs (10/20) when bought as a pair. Aug 1-3.',
        pricing: '₹25,200 for 20-Pack (MUM)',
        priceMumbai: 31500, // 20 x Pack rate (20 x 1,575 equivalent)
        priceBengaluru: 25200, // 20 x Pack rate (20 x 1,260 equivalent)
        finalPriceMumbai: 25200, // 20% off
        finalPriceBengaluru: 20160, // 20% off
        discountPercent: 20,
        savings: '₹6,300 (Mumbai) / ₹5,040 (Bengaluru)',
        whyItWorks: 'Hip-hop loyalty phrase + literal cycling class. Perfect double meaning',
        targetUnits: 45,
        promoteOnAds: true,
        marketingCollateral: '72-hour flash sale countdown, pair purchase incentive',
        operationalSupport: 'Flash sale tracking Aug 1-3, pair verification'
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
    revenueTargetTotal: '₹73,10,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 295, estTicketSize: 'High', revenueTarget: '₹39.5 L', logic: 'Trainer Led' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 250, estTicketSize: 'High', revenueTarget: '₹23.0 L', logic: 'Team Challenge' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 165, estTicketSize: 'Med', revenueTarget: '₹10.6 L', logic: 'Technical Focus' }
    ],
    offers: [
      {
        title: 'The Business Class Body',
        type: 'Hero',
        description: '3 Months Unlimited + 2 Form Correction Privates + 4 Travel Freezes.',
        pricing: '₹46,000 (MUM Net)',
        priceMumbai: 63788, // 3 Month (53,288) + 2 Privates (10,500)
        priceBengaluru: 50452, // 3 Month (42,210) + 2 Privates (8,242)
        finalPriceMumbai: 46000,
        finalPriceBengaluru: 42000,
        discountPercent: 28, // Mumbai: (63,788-46,000)/63,788 = 28%, Bengaluru: (50,452-42,000)/50,452 = 17%
        savings: '₹17,788 (Mumbai) / ₹8,452 (Bengaluru)',
        whyItWorks: 'Travel luxury metaphor for premium fitness. Aspirational and status-oriented',
        targetUnits: 37,
        promoteOnAds: true,
        marketingCollateral: 'Professional\'s Peak campaign, business traveler messaging',
        operationalSupport: '4 travel freeze credits, form correction private sessions'
      },
      {
        title: 'The Insider Deal',
        type: 'New',
        description: 'Trainer unique code gives friend 20% off. Member gets Masterclass credit.',
        pricing: '₹12,600 for 10-Pack (MUM)',
        priceMumbai: 15750, // 10-Class Pack
        priceBengaluru: 12600, // 10-Class Pack
        finalPriceMumbai: 12600,
        finalPriceBengaluru: 10080,
        discountPercent: 20,
        savings: '₹3,150 (Mumbai) / ₹2,520 (Bengaluru)',
        whyItWorks: 'Makes members feel like VIPs with secret access. Exclusive and special',
        targetUnits: 170,
        promoteOnAds: true,
        marketingCollateral: 'Trainer unique codes, referral tracking system',
        operationalSupport: 'Masterclass credit system, trainer code generation'
      },
      {
        title: 'Back to Basics, Back to Badass',
        type: 'New',
        description: '4 Classes + 1 "Anatomy & Alignment" Workshop.',
        pricing: '₹4,725 (MUM Net)',
        priceMumbai: 7352, // 4 x Studio Single Class (4 x 1,838)
        priceBengaluru: 5672, // 4 x Studio Single Class (4 x 1,418)
        finalPriceMumbai: 4725,
        finalPriceBengaluru: 4250,
        discountPercent: 36, // Mumbai: (7,352-4,725)/7,352 = 36%, Bengaluru: (5,672-4,250)/5,672 = 25%
        savings: '₹2,627 (Mumbai) / ₹1,422 (Bengaluru)',
        whyItWorks: 'Rhymes + shows that fundamentals lead to advanced results',
        targetUnits: 100,
        promoteOnAds: false,
        marketingCollateral: 'Fundamentals workshop promotion, beginner-friendly messaging',
        operationalSupport: 'Anatomy & Alignment workshop scheduling, instructor allocation'
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
    revenueTargetTotal: '₹59,80,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 320, estTicketSize: 'Med', revenueTarget: '₹31.4 L', logic: 'LBD Project' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 260, estTicketSize: 'Med', revenueTarget: '₹19.2 L', logic: 'Flash Packs' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 175, estTicketSize: 'Low', revenueTarget: '₹9.2 L', logic: 'Volume' }
    ],
    offers: [
      {
        title: 'Willy Wonka Wellness',
        type: 'Hero',
        description: '12 Months Unlimited + 2 Privates + Gold Socks.',
        pricing: '₹1,45,000 (MUM Net)',
        priceMumbai: 212625, // Annual (202,125) + 2 Privates (10,500)
        priceBengaluru: 164482, // Annual (156,240) + 2 Privates (8,242)
        finalPriceMumbai: 145000,
        finalPriceBengaluru: 135000,
        discountPercent: 32, // Mumbai: (212,625-145,000)/212,625 = 32%, Bengaluru: (164,482-135,000)/164,482 = 18%
        savings: '₹67,625 (Mumbai) / ₹29,482 (Bengaluru)',
        whyItWorks: 'Chocolate factory reference = rare, magical, exclusive. Fun premium positioning',
        targetUnits: 15,
        promoteOnAds: true,
        marketingCollateral: 'Exclusive premium membership campaign, golden ticket theme',
        operationalSupport: 'Gold socks inventory, 2 private session credits'
      },
      {
        title: 'The LBD Project',
        type: 'New',
        description: '4-Week Unlimited Sprint + Style Guide + 2 Guest Passes for final week.',
        pricing: '₹13,900 (MUM Net)',
        priceMumbai: 18638, // Studio 1 Month Unlimited
        priceBengaluru: 14595, // Studio 1 Month Unlimited
        finalPriceMumbai: 13900,
        finalPriceBengaluru: 12500,
        discountPercent: 25, // Mumbai: (18,638-13,900)/18,638 = 25%, Bengaluru: (14,595-12,500)/14,595 = 14%
        savings: '₹4,738 (Mumbai) / ₹2,095 (Bengaluru)',
        whyItWorks: 'Little Black Dress + project transformation = aspirational and specific',
        targetUnits: 85,
        promoteOnAds: true,
        marketingCollateral: 'LBD transformation campaign, style guide partnership',
        operationalSupport: 'Style guide distribution, 2 guest passes per member'
      },
      {
        title: 'The Speed Date',
        type: 'New',
        description: '5-Class Taster (14 Day Validity).',
        pricing: '₹6,000 (MUM Net)',
        priceMumbai: 9190, // 5 x Studio Single Class (5 x 1,838)
        priceBengaluru: 7090, // 5 x Studio Single Class (5 x 1,418)
        finalPriceMumbai: 6000,
        finalPriceBengaluru: 5500,
        discountPercent: 35, // Mumbai: (9,190-6,000)/9,190 = 35%, Bengaluru: (7,090-5,500)/7,090 = 22%
        savings: '₹3,190 (Mumbai) / ₹1,590 (Bengaluru)',
        whyItWorks: 'Dating metaphor for trying fitness fast. Low commitment, high energy',
        targetUnits: 120,
        promoteOnAds: true,
        marketingCollateral: 'Trial offer campaign, new member acquisition',
        operationalSupport: '14-day validity tracking, quick start onboarding'
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
    revenueTargetTotal: '₹62,70,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 0, estTicketSize: 'Mixed', revenueTarget: '₹31.1 L', logic: 'Black Friday Vault' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 0, estTicketSize: 'Mixed', revenueTarget: '₹21.0 L', logic: 'Black Friday Push' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 0, estTicketSize: 'Mixed', revenueTarget: '₹10.6 L', logic: 'Detox Challenge' }
    ],
    offers: [
      {
        title: 'The Doomsday Prep',
        type: 'Hero',
        description: '50 Class Pack with 24-Month Validity. Nov 24-30 Only.',
        pricing: '₹59,063 (MUM)',
        priceMumbai: 78750, // 30-Class Pack (47,250) + 20 more classes estimate (31,500)
        priceBengaluru: 63000, // 30-Class Pack (37,800) + 20 more classes estimate (25,200)
        finalPriceMumbai: 59063,
        finalPriceBengaluru: 47250,
        discountPercent: 25,
        savings: '₹19,687 (Mumbai) / ₹15,750 (Bengaluru)',
        whyItWorks: 'Survivalist humor about stocking up. Makes bulk buying feel strategic',
        targetUnits: 25,
        promoteOnAds: true,
        marketingCollateral: 'Black Friday Vault campaign, limited units countdown',
        operationalSupport: '24-month validity tracking, Nov 24-30 flash sale only'
      },
      {
        title: 'The Morning After Plan',
        type: 'New',
        description: '2 Weeks Unlimited for price of 1 week.',
        pricing: '₹7,560 (BLR)',
        priceMumbai: 10412, // Studio 2 Week Unlimited
        priceBengaluru: 7560, // Studio 2 Week Unlimited
        finalPriceMumbai: 10412,
        finalPriceBengaluru: 7560,
        discountPercent: 0,
        savings: 'Already priced as 2-for-1 value',
        whyItWorks: 'Hangover reference for post-Diwali guilt. Honest and relatable',
        targetUnits: 60,
        promoteOnAds: true,
        marketingCollateral: 'Post-Diwali detox campaign, guilt-relief messaging',
        operationalSupport: '2-week validity tracking, BOGO offer management'
      },
      {
        title: 'Sweet Revenge',
        type: 'Lapsed',
        description: '1 Week Unlimited + Nutrition Detox Consult.',
        pricing: '₹3,500 (MUM)',
        priceMumbai: 10412, // Studio 2 Week Unlimited (approximating 1 week at half)
        priceBengaluru: 7560, // Studio 2 Week Unlimited (approximating 1 week at half)
        finalPriceMumbai: 3500,
        finalPriceBengaluru: 3000,
        discountPercent: 66, // Mumbai: (5,206-3,500)/5,206 = 33% (using half of 2-week price), Bengaluru similar
        savings: '₹1,706+ (Mumbai) / ₹780+ (Bengaluru)',
        whyItWorks: 'Double meaning: revenge on sweets + sweet-tasting revenge on guilt. BRILLIANT pun',
        targetUnits: 50,
        promoteOnAds: false,
        marketingCollateral: 'Lapsed member email campaign, guilt-based messaging',
        operationalSupport: 'Nutrition consult scheduling, 1-week validity tracking'
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
    revenueTargetTotal: '₹52,50,000',
    financialTargets: [
      { location: 'MUM: Kwality House', category: 'Total', targetUnits: 0, estTicketSize: 'Mixed', revenueTarget: '₹31.1 L', logic: 'Pre-Sale Lock-in' },
      { location: 'MUM: Supreme HQ', category: 'Total', targetUnits: 0, estTicketSize: 'Mixed', revenueTarget: '₹14.6 L', logic: 'Holiday Push' },
      { location: 'BLR: Kenkere House', category: 'Total', targetUnits: 0, estTicketSize: 'Mixed', revenueTarget: '₹6.8 L', logic: 'Gifting' }
    ],
    offers: [
      {
        title: 'Price Lock & Load',
        type: 'Hero',
        description: 'Lock in Annual Membership at 2025 prices + 10% Early Bird.',
        pricing: '₹1,81,913 (MUM)',
        priceMumbai: 202125, // Studio Annual price (after tax)
        priceBengaluru: 156240, // Studio Annual price (after tax)
        finalPriceMumbai: 181913, // 10% off
        finalPriceBengaluru: 140616, // 10% off
        discountPercent: 10,
        savings: '₹20,212 (Mumbai) / ₹15,624 (Bengaluru)',
        whyItWorks: 'Gun-loading phrase + price locking. Urgent and action-oriented',
        targetUnits: 15,
        promoteOnAds: true,
        marketingCollateral: 'Price lock campaign, 2026 pricing increase messaging',
        operationalSupport: '2025 price lock tracking, annual membership onboarding'
      },
      {
        title: 'Holiday Insurance',
        type: 'Retention',
        description: 'Buy 10/20 Pack, get Double Validity + 2 Extra Freezes.',
        pricing: 'Standard Rack',
        priceMumbai: 15750, // 10-Class Pack
        priceBengaluru: 12600, // 10-Class Pack
        finalPriceMumbai: 15750,
        finalPriceBengaluru: 12600,
        discountPercent: 0,
        savings: 'Double Validity + 2 Freezes (Flexibility)',
        whyItWorks: 'Insurance metaphor = protection against travel disruption. Smart and practical',
        targetUnits: 80,
        promoteOnAds: false,
        marketingCollateral: 'Holiday flexibility messaging, travel protection positioning',
        operationalSupport: 'Double validity tracking, 2 extra freeze credits per pack'
      },
      {
        title: 'Santa\'s Helper Gets Helped',
        type: 'Event',
        description: 'Buy ₹10k Gift Card, get 2 Complimentary Classes for purchaser.',
        pricing: '₹10,000',
        priceMumbai: 10000,
        priceBengaluru: 10000,
        finalPriceMumbai: 10000,
        finalPriceBengaluru: 10000,
        discountPercent: 0,
        savings: '2 Free Classes (₹3,676 Mumbai / ₹2,836 Bengaluru)',
        whyItWorks: 'Acknowledges the giver deserves rewards too. Fair exchange principle',
        targetUnits: 30,
        promoteOnAds: true,
        marketingCollateral: 'Gift card campaign, holiday gifting promotion',
        operationalSupport: 'Gift card inventory, 2 complimentary class vouchers for purchasers'
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