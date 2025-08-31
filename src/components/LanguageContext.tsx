import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'he' | 'am' | 'ti' | 'ar' | 'ru' | 'uk' | 'ka' | 'tl' | 'fr' | 'es' | 'pt' | 'de' | 'nl' | 'ro';

interface Translations {
  loading: {
    awakening: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    shopNow: string;
    learnMore: string;
  };
  features: {
    title: string;
    wildHarvested: {
      title: string;
      description: string;
    };
    energyCleansing: {
      title: string;
      description: string;
    };
    mindfulRitual: {
      title: string;
      description: string;
    };
    handpickedPerfection: {
      title: string;
      description: string;
    };
  };
  product: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  cta: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
    guarantee: string;
  };
  footer: {
    title: string;
    subtitle: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    loading: {
      awakening: "Awakening ancient wisdom..."
    },
    hero: {
      badge: "✨ PURE • NATURAL • POWERFUL ✨",
      title: "SAGE",
      subtitle: "Transform Your Space,\nElevate Your Spirit",
      description: "Premium sage bundles harvested from the wild mountains of California. Each bundle carries the ancient wisdom of cleansing and renewal.",
      shopNow: "SHOP NOW",
      learnMore: "LEARN MORE"
    },
    features: {
      title: "WHY OUR SAGE?",
      wildHarvested: {
        title: "WILD HARVESTED",
        description: "Sourced directly from pristine California mountains where sage grows naturally and abundantly."
      },
      energyCleansing: {
        title: "ENERGY CLEANSING",
        description: "Used for thousands of years by indigenous peoples to cleanse negative energy and purify spaces."
      },
      mindfulRitual: {
        title: "MINDFUL RITUAL",
        description: "Create sacred moments of peace and intention in your daily practice and spiritual journey."
      },
      handpickedPerfection: {
        title: "HANDPICKED PERFECTION",
        description: "Every bundle is carefully selected by hand, ensuring only the finest sage leaves reach your sacred space."
      }
    },
    product: {
      badge: "🌿 PREMIUM QUALITY",
      title: "HANDPICKED",
      subtitle: "PERFECTION",
      description: "Every sage bundle is carefully selected and bundled by hand. We ensure only the finest leaves make it into your sacred space.",
      features: [
        "✓ 100% Organic California White Sage",
        "✓ Hand-tied with cotton string",
        "✓ Sustainably harvested",
        "✓ Burns clean with aromatic smoke"
      ]
    },
    testimonial: {
      quote: "The moment I lit this sage bundle, I felt an immediate shift in energy. My home feels cleaner, brighter, and more peaceful.",
      author: "— Sarah M.",
      title: "Wellness Practitioner, Los Angeles"
    },
    cta: {
      title: "READY TO",
      subtitle: "TRANSFORM?",
      description: "Join thousands who have discovered the power of authentic sage. Your journey to a cleaner, more peaceful space starts here.",
      button: "GET YOURS NOW - $24.99",
      guarantee: "✨ Free shipping on orders over $50 • 30-day money-back guarantee ✨"
    },
    footer: {
      title: "SAGE",
      subtitle: "Bringing ancient wisdom to modern life",
      copyright: "© 2025 Sage Co. Made with ♡ in California"
    }
  },
  he: {
    loading: {
      awakening: "מעירים חכמה עתיקה..."
    },
    hero: {
      badge: "✨ טהור • טבעי • עוצמתי ✨",
      title: "מרווה",
      subtitle: "שנו את המרחב שלכם,\nהעלו את הרוח שלכם",
      description: "צרורי מרווה איכותיים שנקטפו מההרים הפראיים של קליפורניה. כל צרור נושא בתוכו את החכמה העתיקה של טיהור והתחדשות.",
      shopNow: "קנו עכשיו",
      learnMore: "למדו עוד"
    },
    features: {
      title: "למה המרווה שלנו?",
      wildHarvested: {
        title: "קטיף פראי",
        description: "מקורו ישירות מההרים הבתוליים של קליפורניה שבהם מרווה צומחת באופן טבעי ובשפע."
      },
      energyCleansing: {
        title: "טיהור אנרגיה",
        description: "בשימוש במשך אלפי שנים על ידי העמים הילידים לטיהור אנרגיה שלילית וטיהור מרחבים."
      },
      mindfulRitual: {
        title: "טקס מודע",
        description: "צרו רגעים קדושים של שלווה וכוונה במסע הרוחני והתרגול היומיומי שלכם."
      },
      handpickedPerfection: {
        title: "מושלמות נבחרת ביד",
        description: "כל צרור נבחר בקפידה ביד, המבטיח שרק עלי המרווה המשובחים ביותר יגיעו למרחב הקדוש שלכם."
      }
    },
    product: {
      badge: "🌿 איכות מעולה",
      title: "נבחר ביד",
      subtitle: "מושלמות",
      description: "כל צרור מרווה נבחר בקפידה ונקשר ביד. אנו מבטיחים שרק העלים המשובחים ביותר יגיעו למרחב הקדוש שלכם.",
      features: [
        "✓ 100% מרווה לבנה אורגנית מקליפורניה",
        "✓ קשור ביד עם חוט כותנה",
        "✓ נקטף באופן בר-קיימא",
        "✓ נשרף נקי עם עשן ארומטי"
      ]
    },
    testimonial: {
      quote: "ברגע שהדלקתי את צרור המרווה הזה, הרגשתי שינוי מיידי באנרגיה. הבית שלי מרגיש נקי יותר, בהיר יותר ושליו יותר.",
      author: "— שרה מ.",
      title: "מטפלת רווחה, לוס אנג'לס"
    },
    cta: {
      title: "מוכנים",
      subtitle: "להשתנות?",
      description: "הצטרפו לאלפים שגילו את הכוח של מרווה אותנטית. המסע שלכם למרחב נקי ושליו יותר מתחיל כאן.",
      button: "קבלו את שלכם עכשיו - $24.99",
      guarantee: "✨ משלוח חינם על הזמנות מעל $50 • ערבות להחזר כסף למשך 30 יום ✨"
    },
    footer: {
      title: "מרווה",
      subtitle: "מביאים חכמה עתיקה לחיים מודרניים",
      copyright: "© 2025 חברת מרווה. נעשה באהבה ♡ בקליפורניה"
    }
  },
  am: {
    loading: {
      awakening: "የጥንት ጥበብን እያነቃቃን..."
    },
    hero: {
      badge: "✨ ንጹህ • ተፈጥሯዊ • ኃይለኛ ✨",
      title: "ሸጉርት",
      subtitle: "የእርስዎን ቦታ ይለውጡ፣\nመንፈስዎን ያስነሱ",
      description: "ከካሊፎርኒያ ከባድ ተራሮች የተሰበሰቡ ከፍተኛ ደረጃ የሸጉርት እሽግዎች። እያንዳንዱ እሽግ የማፅዳትና የመታደስ ጥንታዊ ጥበብን ይዘዋል።",
      shopNow: "አሁን ይግዙ",
      learnMore: "የበለጠ ይወቁ"
    },
    features: {
      title: "የኛ ሸጉርት ለምን?",
      wildHarvested: {
        title: "በዱር የተሰበሰበ",
        description: "ሸጉርት በተፈጥሮ እና በብዛት ከሚበቅልባቸው ንጹህ የካሊፎርኒያ ተራሮች በቀጥታ የተገኘ።"
      },
      energyCleansing: {
        title: "የሃይል ማጽዳት",
        description: "ለሺዎች አመታት በአገሬው ተወላጆች መጥፎ ሃይልን ለማጽዳትና ቦታዎችን ለማስወጣት ጥቅም ላይ ውሏል።"
      },
      mindfulRitual: {
        title: "የመንፈስ ሥነ ሥርዓት",
        description: "በእለታዊ ልምምድዎ እና መንፈሳዊ ጉዞዎ ውስጥ የሰላምና የዓላማ ቅዱስ ጊዜዎችን ይፍጠሩ።"
      },
      handpickedPerfection: {
        title: "በእጅ የተመረጠ ፍጽምና",
        description: "እያንዳንዱ እሽግ በጥንቃቄ በእጅ የተመረጠ ነው፣ ወደ ቅዱስ ቦታዎ የሚደርሱት ምርጥ የሸጉርት ቅጠሎች ብቻ መሆናቸውን ያረጋግጣል።"
      }
    },
    product: {
      badge: "🌿 ከፍተኛ ጥራት",
      title: "በእጅ የተመረጠ",
      subtitle: "ፍጽምና",
      description: "እያንዳንዱ የሸጉርት እሽግ በጥንቃቄ የተመረጠ እና በእጅ የተሸጋገረ ነው። ወደ ቅዱስ ቦታዎ የሚገቡት ምርጥ ቅጠሎች ብቻ መሆናቸውን እናረጋግጣለን።",
      features: [
        "✓ 100% ኦርጋኒክ የካሊፎርኒያ ነጭ ሸጉርት",
        "✓ በጥጥ ሃብል የተሸጋገረ",
        "✓ በዘላቂ መንገድ የተሰበሰበ",
        "✓ ንጹህ በሚያቃጥል እና መዓዛ በሚሰጥ ጭስ"
      ]
    },
    testimonial: {
      quote: "ይህን የሸጉርት እሽግ ካበራሁበት ጊዜ ጀምሮ፣ በሃይል ውስጥ ፈጣን ለውጥ ተሰማኝ። ቤቴ የበለጠ ንጹህ፣ ብሩህ እና ሰላማ ይሰማል።",
      author: "— ሳራ ም.",
      title: "የጤና አጠባበቅ ባለሙያ፣ ሎስ አንጀለስ"
    },
    cta: {
      title: "ዝግጁ ነዎት",
      subtitle: "ለመለወጥ?",
      description: "የእውነተኛ ሸጉርት ሃይል ያገኙ ሺዎች ሰዎች ጋር ይቀላቀሉ። ወደ ንጹህ እና ሰላማ ቦታ ያለዎት ጉዞ እዚህ ይጀምራል።",
      button: "የእርስዎን አሁን ያግኙ - $24.99",
      guarantee: "✨ ከ$50 በላይ በሆኑ ትዕዛዞች ላይ ነፃ ማድረሻ • የ30 ቀን ገንዘብ መመላሻ ዋስትና ✨"
    },
    footer: {
      title: "ሸጉርት",
      subtitle: "ጥንታዊ ጥበብን ወደ ዘመናዊ ሕይወት ማምጣት",
      copyright: "© 2025 ሸጉርት ኩባንያ። በካሊፎርኒያ በፍቅር ♡ የተሰራ"
    }
  },
  ti: {
    loading: {
      awakening: "ንሓድሽ ጥንታዊ ጥበብ ኣነቃቒና..."
    },
    hero: {
      badge: "✨ ንጹህ • ተፈጥሮኣዊ • ሓይለኛ ✨",
      title: "ሸጉርቲ",
      subtitle: "ቦታኻ ለወጦ፣\nመንፈስካ ኣዕብዮ",
      description: "ካብ ሓዋሽ ጎቦታት ካሊፎርንያ ዝተሰበሰቡ ላዕለዋይ ደረጃ ጨቦት ሸጉርቲ። ነፍሲ ወከፍ ጨቦት ናይ ንጽሕና ከምኡ'ውን ተሓደስ ጥንታዊ ጥበብ ዝሓዘ እዩ።",
      shopNow: "ሕጂ ግዛእ",
      learnMore: "ዝያዳ ተማሃር"
    },
    features: {
      title: "ስለምንታይ ናይ ና ሸጉርቲ?",
      wildHarvested: {
        title: "ብኻዳ ዝተሰበሰበ",
        description: "ሸጉርቲ ብተፈጥሮ ብብዝሒ ዝበቅልላ ጽሩይ ጎቦታት ካሊፎርንያ ብቐጥታ ዝተረኽበ።"
      },
      energyCleansing: {
        title: "ናይ ሓይሊ ምጽራይ",
        description: "ንሓደ ሽሕ ዓመታት ብተወላዲ ህዝብታት ሕማቕ ሓይሊ ንምጽራይን ቦታታት ንምንጽሃርን ዝጥቀሙሉ ዝነበረ።"
      },
      mindfulRitual: {
        title: "ንቕሓት ዝመልእ ሰነ-ስርዓት",
        description: "ኣብ መዓልታዊ ልምምድካን መንፈሳዊ ጕዕዞኻን ናይ ሰላምን ዕላማን ቅዱሳት ግዜታት ፍጠር።"
      },
      handpickedPerfection: {
        title: "ብኢድ ዝተመረጸ ፍጽምና",
        description: "ነፍሲ ወከፍ ጨቦት ብጥንቃቐ ብኢድ ዝተመረጸ እዩ፣ ናብ ቅዱስ ቦታኻ ወኪሉ ምርጥ ቅጠላት ሸጉርቲ ብዝገበርዎ ውዒሎም።"
      }
    },
    product: {
      badge: "🌿 ላዕለዋይ ጽሬት",
      title: "ብኢድ ዝተመረጸ",
      subtitle: "ፍጽምና",
      description: "ነፍሲ ወከፍ ጨቦት ሸጉርቲ ብጥንቃቐ ዝተመረጸን ብኢድ ዝተዳለወን እዩ። ናብ ቅዱስ ቦታኻ ዘምጽኡ ማህደረ-ቅጠላት ወኪሉ ሞራቱ ምህላዎም ንረጋገጽ።",
      features: [
        "✓ 100% ኦርጋኒክ ናይ ካሊፎርንያ ጻዕዳ ሸጉርቲ",
        "✓ ብጥጥ ሕቆ ዝተኣሳሰረ",
        "✓ ብዘላቒ መንገዲ ዝተሰበሰበ",
        "✓ ንጹሩ ኣብ ዝነድድ ከምኡ'ውን ዓጣን ትሕዝቶ ዘለዎ ቀይሒ"
      ]
    },
    testimonial: {
      quote: "ነዚ ጨቦት ሸጉርቲ ካብ ዘበራብሮ እዋን ጀሚረ፣ ኣብ ሓይሊ ቅልጡፍ ለውጢ ተሰማዕኒ። ገዘይ ዝያዳ ንጹህ፣ ድሙቕን ህዱእን እዩ ዝስምዓኒ።",
      author: "— ሳራ ም.",
      title: "ናይ ጥዕና ሞያዊት፣ ሎስ ኣንጀለስ"
    },
    cta: {
      title: "ድልዋት ዲኻ",
      subtitle: "ንለውጢ?",
      description: "ናይ ሓቀኛ ሸጉርቲ ሓይሊ ዝረኸቡ ሽሕ ሰባት ምስ ተጸንበር። ናብ ንጹህን ህዱእን ቦታ ናይ ጕዕዞኻ ኣብዚ እዩ ዝጅምር።",
      button: "ናትካ ሕጂ ረኸብ - $24.99",
      guarantee: "✨ ልዕሊ $50 ኣብ ዝወሰድኻ ትእዛዝ ነጻ መላእኽቲ • ናይ 30 መዓልቲ ገንዘብ መመላለሲ ውሕስነት ✨"
    },
    footer: {
      title: "ሸጉርቲ",
      subtitle: "ጥንታዊ ጥበብ ናብ ዘመናዊ ህይወት ኣምጺእና",
      copyright: "© 2025 ሸጉርቲ ትካል። ኣብ ካሊፎርንያ ብፍቕሪ ♡ ዝተሰርሐ"
    }
  },
  ar: {
    loading: {
      awakening: "إيقاظ الحكمة القديمة..."
    },
    hero: {
      badge: "✨ نقي • طبيعي • قوي ✨",
      title: "المريمية",
      subtitle: "غيّر مساحتك،\nارتقِ بروحك",
      description: "حزم المريمية الفاخرة المحصودة من الجبال البرية في كاليفورنيا. تحمل كل حزمة الحكمة القديمة للتطهير والتجديد.",
      shopNow: "تسوق الآن",
      learnMore: "تعلم المزيد"
    },
    features: {
      title: "لماذا مريميتنا؟",
      wildHarvested: {
        title: "محصود بريًا",
        description: "مصدرها مباشرة من جبال كاليفورنيا النقية حيث تنمو المريمية طبيعيًا وبوفرة."
      },
      energyCleansing: {
        title: "تطهير الطاقة",
        description: "استُخدمت لآلاف السنين من قِبل الشعوب الأصلية لتطهير الطاقة السلبية وتنقية الأماكن."
      },
      mindfulRitual: {
        title: "طقوس واعية",
        description: "اخلق لحظات مقدسة من السلام والنية في ممارستك اليومية ورحلتك الروحية."
      },
      handpickedPerfection: {
        title: "الكمال المقطوف باليد",
        description: "كل حزمة مختارة بعناية باليد، مما يضمن وصول أفضل أوراق المريمية فقط إلى مساحتك المقدسة."
      }
    },
    product: {
      badge: "🌿 جودة فاخرة",
      title: "مقطوف باليد",
      subtitle: "الكمال",
      description: "كل حزمة مريمية مختارة بعناية ومربوطة باليد. نضمن وصول أفضل الأوراق فقط إلى مساحتك المقدسة.",
      features: [
        "✓ ١٠٠٪ مريمية بيضاء عضوية من كاليفورنيا",
        "✓ مربوطة باليد بخيط قطني",
        "✓ محصودة بشكل مستدام",
        "✓ تحترق نظيفًا بدخان عطري"
      ]
    },
    testimonial: {
      quote: "في اللحظة التي أشعلت فيها حزمة المريمية هذه، شعرت بتغيير فوري في الطاقة. بيتي يشعر بأنه أنظف وأكثر إشراقًا وسلامًا.",
      author: "— سارة م.",
      title: "ممارسة العافية، لوس أنجلوس"
    },
    cta: {
      title: "مستعد",
      subtitle: "للتغيير؟",
      description: "انضم إلى الآلاف الذين اكتشفوا قوة المريمية الأصيلة. رحلتك إلى مساحة أنظف وأكثر سلامًا تبدأ هنا.",
      button: "احصل على نصيبك الآن - $24.99",
      guarantee: "✨ شحن مجاني للطلبات فوق $50 • ضمان استرداد الأموال لمدة 30 يومًا ✨"
    },
    footer: {
      title: "المريمية",
      subtitle: "جلب الحكمة القديمة إلى الحياة الحديثة",
      copyright: "© 2025 شركة المريمية. صُنع بحب ♡ في كاليفورنيا"
    }
  },
  ru: {
    loading: {
      awakening: "Пробуждение древней мудрости..."
    },
    hero: {
      badge: "✨ ЧИСТЫЙ • НАТУРАЛЬНЫЙ • МОЩНЫЙ ✨",
      title: "ШАЛФЕЙ",
      subtitle: "Преобразите пространство,\nВозвысьте дух",
      description: "Премиальные пучки шалфея, собранные в диких горах Калифорнии. Каждый пучок несет древнюю мудрость очищения и обновления.",
      shopNow: "КУПИТЬ СЕЙЧАС",
      learnMore: "УЗНАТЬ БОЛЬШЕ"
    },
    features: {
      title: "ПОЧЕМУ НАШ ШАЛФЕЙ?",
      wildHarvested: {
        title: "ДИКИЙ СБОР",
        description: "Собран прямо в нетронутых горах Калифорнии, где шалфей растет естественно и в изобилии."
      },
      energyCleansing: {
        title: "ОЧИЩЕНИЕ ЭНЕРГИИ",
        description: "Использовался тысячелетиями коренными народами для очищения негативной энергии и пространств."
      },
      mindfulRitual: {
        title: "ОСОЗНАННЫЙ РИТУАЛ",
        description: "Создайте священные моменты мира и намерения в вашей ежедневной практике и духовном путешествии."
      },
      handpickedPerfection: {
        title: "ОТБОРНОЕ СОВЕРШЕНСТВО",
        description: "Каждый пучок тщательно отбирается вручную, гарантируя, что только лучшие листья шалфея достигнут вашего священного пространства."
      }
    },
    product: {
      badge: "🌿 ПРЕМИАЛЬНОЕ КАЧЕСТВО",
      title: "ОТБОРНЫЙ",
      subtitle: "СОВЕРШЕНСТВО",
      description: "Каждый пучок шалфея тщательно отбирается и связывается вручную. Мы гарантируем, что только лучшие листья попадут в ваше священное пространство.",
      features: [
        "✓ 100% Органический белый шалфей из Калифорнии",
        "✓ Связан вручную хлопковой нитью",
        "✓ Экологически собранный",
        "✓ Горит чисто с ароматным дымом"
      ]
    },
    testimonial: {
      quote: "В тот момент, когда я зажгла этот пучок шалфея, я почувствовала мгновенное изменение энергии. Мой дом стал чище, светлее и спокойнее.",
      author: "— Сара М.",
      title: "Практик велнеса, Лос-Анджелес"
    },
    cta: {
      title: "ГОТОВЫ",
      subtitle: "К ПЕРЕМЕНАМ?",
      description: "Присоединяйтесь к тысячам людей, открывших силу подлинного шалфея. Ваше путешествие к более чистому и мирному пространству начинается здесь.",
      button: "ПОЛУЧИТЕ СВОЙ СЕЙЧАС - $24.99",
      guarantee: "✨ Бесплатная доставка при заказе от $50 • 30-дневная гарантия возврата денег ✨"
    },
    footer: {
      title: "ШАЛФЕЙ",
      subtitle: "Приносим древнюю мудрость в современную жизнь",
      copyright: "© 2025 Компания Шалфей. Сделано с любовью ♡ в Калифорнии"
    }
  },
  uk: {
    loading: {
      awakening: "Пробудження стародавньої мудрості..."
    },
    hero: {
      badge: "✨ ЧИСТИЙ • НАТУРАЛЬНИЙ • ПОТУЖНИЙ ✨",
      title: "ШАВЛІЯ",
      subtitle: "Перетворіть простір,\nПіднесіть дух",
      description: "Преміальні пучки шавлії, зібрані в диких горах Каліфорнії. Кожен пучок несе стародавню мудрість очищення та оновлення.",
      shopNow: "КУПИТИ ЗАРАЗ",
      learnMore: "ДІЗНАТИСЯ БІЛЬШЕ"
    },
    features: {
      title: "ЧОМУ НАША ШАВЛІЯ?",
      wildHarvested: {
        title: "ДИКИЙ ЗБІР",
        description: "Зібрана прямо в недоторканих горах Каліфорнії, де шавлія росте природно та в достатку."
      },
      energyCleansing: {
        title: "ОЧИЩЕННЯ ЕНЕРГІЇ",
        description: "Використовувалася тисячоліттями корінними народами для очищення негативної енергії та просторів."
      },
      mindfulRitual: {
        title: "УСВІДОМЛЕНИЙ РИТУАЛ",
        description: "Створіть священні моменти миру та намірів у вашій щоденній практиці та духовній подорожі."
      },
      handpickedPerfection: {
        title: "ВИБРАНЕ ДОСКОНАЛІСТЬ",
        description: "Кожен пучок ретельно відбирається вручну, гарантуючи, що лише найкращі листя шавлії досягнуть вашого священного простору."
      }
    },
    product: {
      badge: "🌿 ПРЕМІАЛЬНА ЯКІСТЬ",
      title: "ВИБРАНИЙ",
      subtitle: "ДОСКОНАЛІСТЬ",
      description: "Кожен пучок шавлії ретельно відбирається та зв'язується вручну. Ми гарантуємо, що лише найкращі листя потраплять у ваш священний простір.",
      features: [
        "✓ 100% Органічна біла шавлія з Каліфорнії",
        "✓ Зв'язана вручну бавовняною ниткою",
        "✓ Екологічно зібрана",
        "✓ Горить чисто з ароматним димом"
      ]
    },
    testimonial: {
      quote: "У той момент, коли я запалила цей пучок шавлії, я відчула миттєву зміну енергії. Мій дім став чистішим, світлішим і спокійнішим.",
      author: "— Сара М.",
      title: "Практик велнесу, Лос-Анджелес"
    },
    cta: {
      title: "ГОТОВІ",
      subtitle: "ДО ЗМІН?",
      description: "Приєднуйтеся до тисяч людей, які відкрили силу справжньої шавлії. Ваша подорож до чистішого та мирного простору починається тут.",
      button: "ОТРИМАЙТЕ СВІЙ ЗАРАЗ - $24.99",
      guarantee: "✨ Безкоштовна доставка при замовленні від $50 • 30-денна гарантія повернення грошей ✨"
    },
    footer: {
      title: "ШАВЛІЯ",
      subtitle: "Приносимо стародавню мудрість у сучасне життя",
      copyright: "© 2025 Компанія Шавлія. Зроблено з любов'ю ♡ в Каліфорнії"
    }
  },
  ka: {
    loading: {
      awakening: "ძველი სიბრძნის გაღვიძება..."
    },
    hero: {
      badge: "✨ წმინდა • ბუნებრივი • ძლიერი ✨",
      title: "ნაღები",
      subtitle: "გარდააქვავით თქვენი სივრცე,\nააამაღლეთ თქვენი სული",
      description: "პრემიუმ ნაღების კვირები, შეგროვებული კალიფორნიის ველური მთებიდან. ყოველი კვირა ატარებს გაწმენდისა და განახლების ძველ სიბრძნეს.",
      shopNow: "ყიდვა ახლავე",
      learnMore: "გაიგეთ მეტი"
    },
    features: {
      title: "რატომ ჩვენი ნაღები?",
      wildHarvested: {
        title: "ველური ნაკრები",
        description: "პირდაპირ მოპოვებული კალიფორნიის ნაძვიან მთებიდან, სადაც ნაღები ბუნებრივად და ხვადწილად იზრდება."
      },
      energyCleansing: {
        title: "ენერგიის გაწმენდა",
        description: "ათასწლეულებისთვის გამოიყენებოდა ადგილობრივი ხალხების მიერ უარყოფითი ენერგიის გასაწმენდად და სივრცეების გასაწმენდად."
      },
      mindfulRitual: {
        title: "შეგნებული რიტუალი",
        description: "შექმენით სამკაულოვანი მშვიდობისა და განზრახვის მომენტები თქვენს ყოველდღიურ პრაქტიკასა და სულიერ მოგზაურობაში."
      },
      handpickedPerfection: {
        title: "ხელით შერჩეული სრულყოფილება",
        description: "ყოველი კვირა ფრთხილად ხელით არის შერჩეული, რომ მხოლოდ საუკეთესო ნაღების ფოთლები მიაღწიოს თქვენს წმინდა სივრცეს."
      }
    },
    product: {
      badge: "🌿 პრემიუმ ხარისხი",
      title: "ხელით შერჩეული",
      subtitle: "სრულყოფილება",
      description: "ყოველი ნაღების კვირა ფრთხილად არის შერჩეული და ხელით შეკრული. ჩვენ ვიცავთ, რომ მხოლოდ საუკეთესო ფოთლები მოხვდება თქვენს წმინდა სივრცეში.",
      features: [
        "✓ 100% ორგანული კალიფორნიის თეთრი ნაღები",
        "✓ ხელით შეკრული ბამბის ძაფით",
        "✓ მდგრადად მოკრეფილი",
        "✓ იწვის სუფთად სურნელოვანი კვამლით"
      ]
    },
    testimonial: {
      quote: "იმ მომენტში, როცა ეს ნაღების კვირა ავანთე, მყისიერად ვიგრძენი ენერგიის ცვლილება. ჩემი სახლი უფრო სუფთა, ნათელი და მშვიდი გახდა.",
      author: "— სარა მ.",
      title: "ველნეს პრაქტიკოსი, ლოს ანჯელესი"
    },
    cta: {
      title: "მზად ხართ",
      subtitle: "ცვლილებისთვის?",
      description: "შეუერთდით ათასობით ადამიანს, რომლებმაც აღმოაჩინეს ნამდვილი ნაღების ძალა. თქვენი მოგზაურობა უფრო სუფთა და მშვიდ სივრცეზე აქ იწყება.",
      button: "მიიღეთ თქვენი ახლავე - $24.99",
      guarantee: "✨ უფასო მიწოდება $50-ზე მეტ შეკვეთებზე • 30-დღიანი ფულის დაბრუნების გარანტია ✨"
    },
    footer: {
      title: "ნაღები",
      subtitle: "ძველი სიბრძნის მოყვანა თანამედროვე ცხოვრებაში",
      copyright: "© 2025 ნაღების კომპანია. გაკეთებულია სიყვარულით ♡ კალიფორნიაში"
    }
  },
  tl: {
    loading: {
      awakening: "Ginigising ang sinaunang karunungan..."
    },
    hero: {
      badge: "✨ DALISAY • NATURAL • MALAKAS ✨",
      title: "ALBAHACA",
      subtitle: "Baguhin ang Inyong Espasyo,\nItaas ang Inyong Diwa",
      description: "Premium na mga bunso ng albahaca na nakuha mula sa mga ligaw na bundok ng California. Bawat bunso ay may dalang sinaunang karunungan ng paglilinis at pagbabago.",
      shopNow: "BUMILI NGAYON",
      learnMore: "ALAMIN PA"
    },
    features: {
      title: "BAKIT ANG AMING ALBAHACA?",
      wildHarvested: {
        title: "LIGAW NA NAKUHA",
        description: "Direktang kinuha mula sa mga malinis na bundok ng California kung saan lumalaki nang natural at masagana ang albahaca."
      },
      energyCleansing: {
        title: "PAGLILINIS NG ENERHIYA",
        description: "Ginagamit ng libu-libong taon ng mga katutubo para sa paglilinis ng negatibong enerhiya at mga espasyo."
      },
      mindfulRitual: {
        title: "MAINGAT NA RITWAL",
        description: "Lumikha ng mga banal na sandali ng kapayapaan at layunin sa inyong pang-araw-araw na pagsasanay at espiritwal na paglalakbay."
      },
      handpickedPerfection: {
        title: "PINILI SA KAMAY NA KASAKDALAN",
        description: "Bawat bunso ay maingat na pinili sa kamay, tinitiyak na tanging ang pinakamahusay na mga dahon ng albahaca ang makakarating sa inyong banal na espasyo."
      }
    },
    product: {
      badge: "🌿 PREMIUM NA KALIDAD",
      title: "PINILI SA KAMAY",
      subtitle: "KASAKDALAN",
      description: "Bawat bunso ng albahaca ay maingat na pinili at tinalian ng kamay. Tinitiyak namin na tanging ang pinakamahusay na mga dahon ang makakarating sa inyong banal na espasyo.",
      features: [
        "✓ 100% Organic California White Sage",
        "✓ Tinalian ng kamay gamit cotton string",
        "✓ Sustainably harvested",
        "✓ Nasusunog nang malinis na may mabangong usok"
      ]
    },
    testimonial: {
      quote: "Sa sandaling sinindihan ko ang bunso ng albahaca na ito, naramdaman ko kaagad ang pagbabago sa enerhiya. Ang aming tahanan ay mas malinis, mas maliwanag, at mas mapayapa.",
      author: "— Sarah M.",
      title: "Wellness Practitioner, Los Angeles"
    },
    cta: {
      title: "HANDA NA BA",
      subtitle: "SA PAGBABAGO?",
      description: "Samahan ang libu-libong nakatuklas ng kapangyarihan ng tunay na albahaca. Ang inyong paglalakbay sa mas malinis at mapayapang espasyo ay nagsisimula dito.",
      button: "KUNIN NINYO NGAYON - $24.99",
      guarantee: "✨ Libreng shipping sa orders na higit sa $50 • 30-araw na money-back guarantee ✨"
    },
    footer: {
      title: "ALBAHACA",
      subtitle: "Nagdadala ng sinaunang karunungan sa modernong buhay",
      copyright: "© 2025 Albahaca Co. Ginawa ng may pagmamahal ♡ sa California"
    }
  },
  fr: {
    loading: {
      awakening: "Éveiller la sagesse ancienne..."
    },
    hero: {
      badge: "✨ PUR • NATUREL • PUISSANT ✨",
      title: "SAUGE",
      subtitle: "Transformez Votre Espace,\nÉlevez Votre Esprit",
      description: "Fagots de sauge premium récoltés dans les montagnes sauvages de Californie. Chaque fagot porte la sagesse ancienne du purification et du renouveau.",
      shopNow: "ACHETER MAINTENANT",
      learnMore: "EN SAVOIR PLUS"
    },
    features: {
      title: "POURQUOI NOTRE SAUGE ?",
      wildHarvested: {
        title: "RÉCOLTE SAUVAGE",
        description: "Sourcée directement des montagnes vierges de Californie où la sauge pousse naturellement et abondamment."
      },
      energyCleansing: {
        title: "PURIFICATION ÉNERGÉTIQUE",
        description: "Utilisée depuis des milliers d'années par les peuples indigènes pour purifier l'énergie négative et les espaces."
      },
      mindfulRitual: {
        title: "RITUEL CONSCIENT",
        description: "Créez des moments sacrés de paix et d'intention dans votre pratique quotidienne et votre voyage spirituel."
      },
      handpickedPerfection: {
        title: "PERFECTION CUEILLIE À LA MAIN",
        description: "Chaque fagot est soigneusement sélectionné à la main, garantissant que seules les meilleures feuilles de sauge atteignent votre espace sacré."
      }
    },
    product: {
      badge: "🌿 QUALITÉ PREMIUM",
      title: "CUEILLIE À LA MAIN",
      subtitle: "PERFECTION",
      description: "Chaque fagot de sauge est soigneusement sélectionné et lié à la main. Nous garantissons que seules les meilleures feuilles atteignent votre espace sacré.",
      features: [
        "✓ 100% Sauge Blanche Biologique de Californie",
        "✓ Liée à la main avec une ficelle de coton",
        "✓ Récoltée durablement",
        "✓ Brûle proprement avec une fumée aromatique"
      ]
    },
    testimonial: {
      quote: "Au moment où j'ai allumé ce fagot de sauge, j'ai ressenti un changement immédiat d'énergie. Ma maison se sent plus propre, plus lumineuse et plus paisible.",
      author: "— Sarah M.",
      title: "Praticienne de Bien-être, Los Angeles"
    },
    cta: {
      title: "PRÊT À",
      subtitle: "SE TRANSFORMER ?",
      description: "Rejoignez les milliers qui ont découvert le pouvoir de la sauge authentique. Votre voyage vers un espace plus propre et paisible commence ici.",
      button: "OBTENEZ LE VÔTRE MAINTENANT - $24.99",
      guarantee: "✨ Livraison gratuite sur les commandes de plus de $50 • Garantie de remboursement de 30 jours ✨"
    },
    footer: {
      title: "SAUGE",
      subtitle: "Apporter la sagesse ancienne à la vie moderne",
      copyright: "© 2025 Sauge Co. Fait avec amour ♡ en Californie"
    }
  },
  es: {
    loading: {
      awakening: "Despertando la sabiduría ancestral..."
    },
    hero: {
      badge: "✨ PURO • NATURAL • PODEROSO ✨",
      title: "SALVIA",
      subtitle: "Transforma Tu Espacio,\nEleva Tu Espíritu",
      description: "Manojos de salvia premium cosechados de las montañas silvestres de California. Cada manojo lleva la sabiduría ancestral de limpieza y renovación.",
      shopNow: "COMPRAR AHORA",
      learnMore: "SABER MÁS"
    },
    features: {
      title: "¿POR QUÉ NUESTRA SALVIA?",
      wildHarvested: {
        title: "COSECHA SILVESTRE",
        description: "Obtenida directamente de las montañas prístinas de California donde la salvia crece naturalmente y abundantemente."
      },
      energyCleansing: {
        title: "LIMPIEZA ENERGÉTICA",
        description: "Utilizada durante miles de años por pueblos indígenas para limpiar energía negativa y purificar espacios."
      },
      mindfulRitual: {
        title: "RITUAL CONSCIENTE",
        description: "Crea momentos sagrados de paz e intención en tu práctica diaria y viaje espiritual."
      },
      handpickedPerfection: {
        title: "PERFECCIÓN SELECCIONADA A MANO",
        description: "Cada manojo es cuidadosamente seleccionado a mano, garantizando que solo las mejores hojas de salvia lleguen a tu espacio sagrado."
      }
    },
    product: {
      badge: "🌿 CALIDAD PREMIUM",
      title: "SELECCIONADA A MANO",
      subtitle: "PERFECCIÓN",
      description: "Cada manojo de salvia es cuidadosamente seleccionado y atado a mano. Garantizamos que solo las mejores hojas lleguen a tu espacio sagrado.",
      features: [
        "✓ 100% Salvia Blanca Orgánica de California",
        "✓ Atada a mano con hilo de algodón",
        "✓ Cosechada de manera sostenible",
        "✓ Arde limpiamente con humo aromático"
      ]
    },
    testimonial: {
      quote: "En el momento que encendí este manojo de salvia, sentí un cambio inmediato en la energía. Mi hogar se siente más limpio, más brillante y más pacífico.",
      author: "— Sarah M.",
      title: "Practicante de Bienestar, Los Ángeles"
    },
    cta: {
      title: "¿LISTO PARA",
      subtitle: "TRANSFORMARTE?",
      description: "Únete a miles que han descubierto el poder de la salvia auténtica. Tu viaje hacia un espacio más limpio y pacífico comienza aquí.",
      button: "CONSIGUE EL TUYO AHORA - $24.99",
      guarantee: "✨ Envío gratis en pedidos de más de $50 • Garantía de devolución de dinero de 30 días ✨"
    },
    footer: {
      title: "SALVIA",
      subtitle: "Trayendo sabiduría ancestral a la vida moderna",
      copyright: "© 2025 Salvia Co. Hecho con amor ♡ en California"
    }
  },
  pt: {
    loading: {
      awakening: "Despertando a sabedoria ancestral..."
    },
    hero: {
      badge: "✨ PURO • NATURAL • PODEROSO ✨",
      title: "SÁLVIA",
      subtitle: "Transforme Seu Espaço,\nEleve Seu Espírito",
      description: "Feixes de sálvia premium colhidos das montanhas selvagens da Califórnia. Cada feixe carrega a sabedoria ancestral de limpeza e renovação.",
      shopNow: "COMPRAR AGORA",
      learnMore: "SAIBA MAIS"
    },
    features: {
      title: "POR QUE NOSSA SÁLVIA?",
      wildHarvested: {
        title: "COLHEITA SELVAGEM",
        description: "Obtida diretamente das montanhas pristinas da Califórnia onde a sálvia cresce naturalmente e abundantemente."
      },
      energyCleansing: {
        title: "LIMPEZA ENERGÉTICA",
        description: "Usada por milhares de anos por povos indígenas para limpar energia negativa e purificar espaços."
      },
      mindfulRitual: {
        title: "RITUAL CONSCIENTE",
        description: "Crie momentos sagrados de paz e intenção em sua prática diária e jornada espiritual."
      },
      handpickedPerfection: {
        title: "PERFEIÇÃO SELECIONADA À MÃO",
        description: "Cada feixe é cuidadosamente selecionado à mão, garantindo que apenas as melhores folhas de sálvia cheguem ao seu espaço sagrado."
      }
    },
    product: {
      badge: "🌿 QUALIDADE PREMIUM",
      title: "SELECIONADA À MÃO",
      subtitle: "PERFEIÇÃO",
      description: "Cada feixe de sálvia é cuidadosamente selecionado e amarrado à mão. Garantimos que apenas as melhores folhas cheguem ao seu espaço sagrado.",
      features: [
        "✓ 100% Sálvia Branca Orgânica da Califórnia",
        "✓ Amarrada à mão com barbante de algodão",
        "✓ Colhida de forma sustentável",
        "✓ Queima limpa com fumaça aromática"
      ]
    },
    testimonial: {
      quote: "No momento em que acendi este feixe de sálvia, senti uma mudança imediata na energia. Minha casa se sente mais limpa, mais brilhante e mais pacífica.",
      author: "— Sarah M.",
      title: "Praticante de Bem-estar, Los Angeles"
    },
    cta: {
      title: "PRONTO PARA",
      subtitle: "SE TRANSFORMAR?",
      description: "Junte-se a milhares que descobriram o poder da sálvia autêntica. Sua jornada para um espaço mais limpo e pacífico começa aqui.",
      button: "CONSIGA O SEU AGORA - $24.99",
      guarantee: "✨ Frete grátis em pedidos acima de $50 • Garantia de devolução do dinheiro em 30 dias ✨"
    },
    footer: {
      title: "SÁLVIA",
      subtitle: "Trazendo sabedoria ancestral para a vida moderna",
      copyright: "© 2025 Sálvia Co. Feito com amor ♡ na Califórnia"
    }
  },
  de: {
    loading: {
      awakening: "Erweckung uralter Weisheit..."
    },
    hero: {
      badge: "✨ REIN • NATÜRLICH • KRAFTVOLL ✨",
      title: "SALBEI",
      subtitle: "Verwandeln Sie Ihren Raum,\nErheben Sie Ihren Geist",
      description: "Premium Salbei-Bündel geerntet aus den wilden Bergen Kaliforniens. Jedes Bündel trägt die uralte Weisheit der Reinigung und Erneuerung.",
      shopNow: "JETZT KAUFEN",
      learnMore: "MEHR ERFAHREN"
    },
    features: {
      title: "WARUM UNSER SALBEI?",
      wildHarvested: {
        title: "WILD GEERNTET",
        description: "Direkt aus den unberührten Bergen Kaliforniens bezogen, wo Salbei natürlich und reichlich wächst."
      },
      energyCleansing: {
        title: "ENERGIEREINIGUNG",
        description: "Seit Jahrtausenden von indigenen Völkern verwendet, um negative Energie zu reinigen und Räume zu reinigen."
      },
      mindfulRitual: {
        title: "ACHTSAMES RITUAL",
        description: "Schaffen Sie heilige Momente des Friedens und der Absicht in Ihrer täglichen Praxis und spirituellen Reise."
      },
      handpickedPerfection: {
        title: "HANDVERLESENE PERFEKTION",
        description: "Jedes Bündel wird sorgfältig von Hand ausgewählt und gewährleistet, dass nur die besten Salbeiblätter Ihren heiligen Raum erreichen."
      }
    },
    product: {
      badge: "🌿 PREMIUM QUALITÄT",
      title: "HANDVERLESEN",
      subtitle: "PERFEKTION",
      description: "Jedes Salbei-Bündel wird sorgfältig ausgewählt und von Hand gebunden. Wir garantieren, dass nur die besten Blätter Ihren heiligen Raum erreichen.",
      features: [
        "✓ 100% Bio Kalifornischer Weißer Salbei",
        "✓ Von Hand mit Baumwollschnur gebunden",
        "✓ Nachhaltig geerntet",
        "✓ Brennt sauber mit aromatischem Rauch"
      ]
    },
    testimonial: {
      quote: "In dem Moment, als ich dieses Salbei-Bündel anzündete, spürte ich eine sofortige Veränderung der Energie. Mein Zuhause fühlt sich sauberer, heller und friedlicher an.",
      author: "— Sarah M.",
      title: "Wellness-Praktikerin, Los Angeles"
    },
    cta: {
      title: "BEREIT ZUR",
      subtitle: "VERWANDLUNG?",
      description: "Schließen Sie sich Tausenden an, die die Kraft des authentischen Salbeis entdeckt haben. Ihre Reise zu einem saubereren, friedlicheren Raum beginnt hier.",
      button: "HOLEN SIE SICH IHREN JETZT - $24.99",
      guarantee: "✨ Kostenloser Versand bei Bestellungen über $50 • 30-Tage Geld-zurück-Garantie ✨"
    },
    footer: {
      title: "SALBEI",
      subtitle: "Uralte Weisheit ins moderne Leben bringen",
      copyright: "© 2025 Salbei Co. Mit Liebe ♡ in Kalifornien gemacht"
    }
  },
  nl: {
    loading: {
      awakening: "Ontwaken van oude wijsheid..."
    },
    hero: {
      badge: "✨ ZUIVER • NATUURLIJK • KRACHTIG ✨",
      title: "SALIE",
      subtitle: "Transformeer Uw Ruimte,\nVerhef Uw Geest",
      description: "Premium salie bundels geoogst uit de wilde bergen van Californië. Elke bundel draagt de oude wijsheid van reiniging en vernieuwing.",
      shopNow: "NU KOPEN",
      learnMore: "MEER WETEN"
    },
    features: {
      title: "WAAROM ONZE SALIE?",
      wildHarvested: {
        title: "WILD GEOOGST",
        description: "Direct afkomstig uit de ongerepte bergen van Californië waar salie natuurlijk en overvloedig groeit."
      },
      energyCleansing: {
        title: "ENERGIE REINIGING",
        description: "Duizenden jaren gebruikt door inheemse volkeren om negatieve energie te reinigen en ruimtes te zuiveren."
      },
      mindfulRitual: {
        title: "BEWUST RITUEEL",
        description: "Creëer heilige momenten van vrede en intentie in uw dagelijkse praktijk en spirituele reis."
      },
      handpickedPerfection: {
        title: "HANDGEPLUKTE PERFECTIE",
        description: "Elke bundel wordt zorgvuldig met de hand geselecteerd, zodat alleen de beste salie bladeren uw heilige ruimte bereiken."
      }
    },
    product: {
      badge: "🌿 PREMIUM KWALITEIT",
      title: "HANDGEPLUKT",
      subtitle: "PERFECTIE",
      description: "Elke salie bundel wordt zorgvuldig geselecteerd en met de hand gebonden. Wij garanderen dat alleen de beste bladeren uw heilige ruimte bereiken.",
      features: [
        "✓ 100% Biologische Californische Witte Salie",
        "✓ Met de hand gebonden met katoenen touw",
        "✓ Duurzaam geoogst",
        "✓ Brandt schoon met aromatische rook"
      ]
    },
    testimonial: {
      quote: "Op het moment dat ik deze salie bundel aanstak, voelde ik een onmiddellijke verandering in energie. Mijn huis voelt schoner, helderder en vrediger aan.",
      author: "— Sarah M.",
      title: "Wellness Beoefenaar, Los Angeles"
    },
    cta: {
      title: "KLAAR OM TE",
      subtitle: "TRANSFORMEREN?",
      description: "Sluit u aan bij duizenden die de kracht van authentieke salie hebben ontdekt. Uw reis naar een schonere, vredigere ruimte begint hier.",
      button: "KRIJG DE UWE NU - $24.99",
      guarantee: "✨ Gratis verzending bij bestellingen boven $50 • 30-dagen geld-terug-garantie ✨"
    },
    footer: {
      title: "SALIE",
      subtitle: "Oude wijsheid naar het moderne leven brengen",
      copyright: "© 2025 Salie Co. Gemaakt met liefde ♡ in Californië"
    }
  },
  ro: {
    loading: {
      awakening: "Trezirea înțelepciunii străvechi..."
    },
    hero: {
      badge: "✨ PUR • NATURAL • PUTERNIC ✨",
      title: "SALVIE",
      subtitle: "Transformă-ți Spațiul,\nRidică-ți Spiritul",
      description: "Mănunchiuri de salvie premium culese din munții sălbatici ai Californiei. Fiecare mănunchi poartă înțelepciunea străveche a curățirii și reînnoirii.",
      shopNow: "CUMPĂRĂ ACUM",
      learnMore: "AFLĂ MAI MULT"
    },
    features: {
      title: "DE CE SALVIA NOASTRĂ?",
      wildHarvested: {
        title: "CULESĂ SĂLBATIC",
        description: "Obținută direct din munții nepângăriți ai Californiei unde salvia crește natural și abundent."
      },
      energyCleansing: {
        title: "CURĂȚAREA ENERGIEI",
        description: "Folosită de mii de ani de popoarele indigene pentru a curăța energia negativă și a purifica spațiile."
      },
      mindfulRitual: {
        title: "RITUAL CONȘTIENT",
        description: "Creează momente sacre de pace și intenție în practica ta zilnică și călătoria spirituală."
      },
      handpickedPerfection: {
        title: "PERFECȚIUNEA ALEASĂ MANUAL",
        description: "Fiecare mănunchi este atent selectat manual, garantând că doar cele mai bune frunze de salvie ajung în spațiul tău sacru."
      }
    },
    product: {
      badge: "🌿 CALITATE PREMIUM",
      title: "ALEASĂ MANUAL",
      subtitle: "PERFECȚIUNE",
      description: "Fiecare mănunchi de salvie este atent selectat și legat manual. Garantăm că doar cele mai bune frunze ajung în spațiul tău sacru.",
      features: [
        "✓ 100% Salvie Albă Organică din California",
        "✓ Legată manual cu sfoară de bumbac",
        "✓ Culeasă sustenabil",
        "✓ Arde curat cu fum aromatic"
      ]
    },
    testimonial: {
      quote: "În momentul în care am aprins acest mănunchi de salvie, am simțit o schimbare imediată în energie. Casa mea se simte mai curată, mai luminoasă și mai pașnică.",
      author: "— Sarah M.",
      title: "Practician Wellness, Los Angeles"
    },
    cta: {
      title: "GATA SĂ TE",
      subtitle: "TRANSFORMI?",
      description: "Alătură-te miilor care au descoperit puterea salviei autentice. Călătoria ta către un spațiu mai curat și pașnic începe aici.",
      button: "OBȚINE-L ACUM - $24.99",
      guarantee: "✨ Transport gratuit la comenzi peste $50 • Garanție de returnare a banilor 30 de zile ✨"
    },
    footer: {
      title: "SALVIE",
      subtitle: "Aducând înțelepciunea străveche în viața modernă",
      copyright: "© 2025 Salvie Co. Făcut cu dragoste ♡ în California"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Function to detect browser language and map to supported languages
function detectBrowserLanguage(): Language {
  try {
    // Get browser languages in order of preference with fallbacks
    const browserLanguages = 
      navigator.languages || 
      [navigator.language] || 
      [(navigator as any).userLanguage] || 
      [(navigator as any).browserLanguage] ||
      [(navigator as any).systemLanguage] ||
      ['en'];
    
    console.log('🌐 Browser languages detected:', browserLanguages);
  
  // Language mapping: browser locale -> our supported language
  const languageMap: Record<string, Language> = {
    // English variants
    'en': 'en', 'en-US': 'en', 'en-GB': 'en', 'en-CA': 'en', 'en-AU': 'en',
    
    // Hebrew
    'he': 'he', 'he-IL': 'he', 'iw': 'he', 'iw-IL': 'he',
    
    // Amharic
    'am': 'am', 'am-ET': 'am',
    
    // Tigrinya
    'ti': 'ti', 'ti-ER': 'ti', 'ti-ET': 'ti',
    
    // Arabic variants
    'ar': 'ar', 'ar-SA': 'ar', 'ar-EG': 'ar', 'ar-AE': 'ar', 'ar-QA': 'ar',
    'ar-KW': 'ar', 'ar-BH': 'ar', 'ar-OM': 'ar', 'ar-JO': 'ar', 'ar-LB': 'ar',
    'ar-SY': 'ar', 'ar-IQ': 'ar', 'ar-MA': 'ar', 'ar-TN': 'ar', 'ar-DZ': 'ar',
    'ar-LY': 'ar', 'ar-SD': 'ar', 'ar-YE': 'ar',
    
    // Russian
    'ru': 'ru', 'ru-RU': 'ru', 'ru-BY': 'ru', 'ru-KZ': 'ru', 'ru-KG': 'ru',
    
    // Ukrainian
    'uk': 'uk', 'uk-UA': 'uk',
    
    // Georgian
    'ka': 'ka', 'ka-GE': 'ka',
    
    // Filipino/Tagalog
    'tl': 'tl', 'tl-PH': 'tl', 'fil': 'tl', 'fil-PH': 'tl',
    
    // French variants
    'fr': 'fr', 'fr-FR': 'fr', 'fr-CA': 'fr', 'fr-BE': 'fr', 'fr-CH': 'fr',
    'fr-LU': 'fr', 'fr-MC': 'fr',
    
    // Spanish variants
    'es': 'es', 'es-ES': 'es', 'es-MX': 'es', 'es-AR': 'es', 'es-CO': 'es',
    'es-CL': 'es', 'es-PE': 'es', 'es-VE': 'es', 'es-EC': 'es', 'es-GT': 'es',
    'es-CU': 'es', 'es-BO': 'es', 'es-DO': 'es', 'es-HN': 'es', 'es-PY': 'es',
    'es-SV': 'es', 'es-NI': 'es', 'es-CR': 'es', 'es-PA': 'es', 'es-UY': 'es',
    'es-PR': 'es',
    
    // Portuguese variants
    'pt': 'pt', 'pt-PT': 'pt', 'pt-BR': 'pt', 'pt-AO': 'pt', 'pt-MZ': 'pt',
    
    // German variants
    'de': 'de', 'de-DE': 'de', 'de-AT': 'de', 'de-CH': 'de', 'de-LU': 'de',
    'de-LI': 'de',
    
    // Dutch variants
    'nl': 'nl', 'nl-NL': 'nl', 'nl-BE': 'nl', 'nl-SR': 'nl',
    
    // Romanian variants
    'ro': 'ro', 'ro-RO': 'ro', 'ro-MD': 'ro'
  };
  
  // Try to find a supported language
  for (const browserLang of browserLanguages) {
    const normalizedLang = browserLang.toLowerCase().trim();
    
    // Try exact match first
    if (languageMap[normalizedLang]) {
      console.log(`✅ Language matched: ${browserLang} -> ${languageMap[normalizedLang]}`);
      return languageMap[normalizedLang];
    }
    
    // Try language code only (before dash)
    const langCode = normalizedLang.split('-')[0];
    if (languageMap[langCode]) {
      console.log(`✅ Language code matched: ${browserLang} -> ${languageMap[langCode]}`);
      return languageMap[langCode];
    }
  }
  
  console.log('⚠️ No supported language found, defaulting to English');
  // Default to English if no supported language found
  return 'en';
  } catch (error) {
    console.error('Error detecting browser language:', error);
    return 'en';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Only detect browser language on initial load
    if (typeof window !== 'undefined') {
      // Check if user has previously selected a language
      const storedLanguage = localStorage.getItem('sage-language');
      if (storedLanguage && ['en', 'he', 'am', 'ti', 'ar', 'ru', 'uk', 'ka', 'tl', 'fr', 'es', 'pt', 'de', 'nl', 'ro'].includes(storedLanguage)) {
        console.log('🔄 Using stored language preference:', storedLanguage);
        return storedLanguage as Language;
      }
      // Otherwise detect from browser
      const detectedLang = detectBrowserLanguage();
      console.log('🎯 Auto-detected language:', detectedLang);
      return detectedLang;
    }
    return 'en';
  });
  
  const isRTL = language === 'he' || language === 'ar';
  
  // Enhanced setLanguage function to persist user choice
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sage-language', lang);
    }
  };
  
  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t: translations[language],
      isRTL
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}