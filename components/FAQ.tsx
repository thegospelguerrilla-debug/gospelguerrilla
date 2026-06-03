'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "Why does God let bad things happen to good people?",
    a: "This world is broken because of sin — both ours and the sins of others. God didn’t stay distant. Jesus entered the suffering, took the worst of it on the cross, and promises to make everything new for those who trust Him. Pain is real. So is hope. (John 16:33; Romans 8:28)",
  },
  {
    q: "Is the Bible actually true or just old stories?",
    a: "The Bible has been attacked, banned, and burned for 2,000 years and it’s still here. It contains hundreds of fulfilled prophecies and has transformed billions of lives — including people who were dead-set against it. Most ancient historical figures like Julius Caesar or Plato have only a handful of surviving manuscripts, while Jesus has over 5,000 Greek manuscripts plus tens of thousands more in other languages — far more documentation than any other figure from antiquity. It’s worth reading with an open mind. (2 Timothy 3:16-17; 2 Peter 1:21)",
  },
  {
    q: "I’ve tried religion before and it didn’t work.",
    a: "Religion often doesn’t work — because it’s mostly people trying to earn God’s approval. Jesus didn’t come to start another religion. He came to rescue people who know they can’t save themselves. That’s very different. (Ephesians 2:8-9)",
  },
  {
    q: "Can someone like me (addict, criminal, atheist for decades) really be forgiven?",
    a: "Yes. The Bible is full of people who did far worse than you. The cross was built for people like us. Grace doesn’t run out. Turn and trust Him — today is not too late. (1 Timothy 1:15; Luke 19:10)",
  },
  {
    q: "What about other religions? Don’t they all lead to God?",
    a: "Jesus said He is the only way to the Father. That’s an exclusive claim. Either it’s true or it’s the most arrogant lie in history. The evidence points to it being true. This is worth getting right. (John 14:6)",
  },
  {
    q: "I believe in science. How can I believe in God too?",
    a: "Many serious scientists follow Jesus. Science tells us how the universe works. It doesn’t answer why we exist, why we’re broken, or what happens after death. The Gospel answers the questions science can’t touch. (Psalm 19:1)",
  },
  {
    q: "How do I know I’m not just fooling myself?",
    a: "If God is who He says He is, you will find Him—but you have to open your heart and look. “Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.” (Matthew 7:7-8) Start by being brutally honest with God. Read the Gospels (start with John). Talk to Him like He’s real.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-[#2a2a2a]">
      {faqs.map((faq, index) => (
        <div key={index} className="py-5">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-start text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg md:text-xl font-bold pr-8 group-hover:text-[#FF5A6D] transition-colors">
              {faq.q}
            </span>
            <span className="text-[#FF5A6D] text-3xl leading-none mt-1 select-none">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-4 text-[#c1c1c1] leading-relaxed pr-8">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
