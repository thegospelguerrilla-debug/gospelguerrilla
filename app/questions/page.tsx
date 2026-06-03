import { Metadata } from 'next';
import CTAButton from '../../components/CTAButton';

export const metadata: Metadata = {
  title: 'Questions & Objections',
  description: 'You probably have questions. Here are honest, raw answers.',
};

export default function QuestionsPage() {
  const objections = [
    {
      q: "I’ve done too much evil. God could never forgive me.",
      a: "You’re not too far gone. The apostle Paul murdered Christians before he met Jesus. Grace is bigger than your worst day. The cross was enough for the worst of us. (1 Timothy 1:15; Luke 19:10)",
    },
    {
      q: "What about all the hypocrites in church?",
      a: "Jesus hated fake religion more than you do. He called religious leaders whitewashed tombs. The existence of hypocrites doesn’t make the Gospel false — it proves we all need it. (Matthew 23:27-28)",
    },
    {
      q: "I believe in science / evolution.",
      a: "So do many followers of Jesus. Science explains how things work. It doesn’t answer why we’re here, why we’re broken, or what happens when we die. The Gospel answers those questions. (Psalm 19:1)",
    },
    {
      q: "How can a loving God let so much suffering happen?",
      a: "This world is broken because of sin — ours and others. God didn’t stay distant. He entered the suffering in Jesus and took the worst of it on the cross. He promises to make all things new for those who trust Him. (John 16:33; Romans 8:28)",
    },
    {
      q: "Is the Bible actually true or just old stories?",
      a: "The Bible has been attacked, banned, and burned for 2,000 years and it’s still here. It contains hundreds of fulfilled prophecies and has transformed billions of lives — including people who were dead-set against it. Most ancient historical figures like Julius Caesar or Plato have only a handful of surviving manuscripts, while Jesus has over 5,000 Greek manuscripts plus tens of thousands more in other languages — far more documentation than any other figure from antiquity. (2 Timothy 3:16-17; 2 Peter 1:21)",
    },
    {
      q: "I’ve tried religion before and it didn’t work.",
      a: "Religion often doesn’t work — because it’s mostly people trying to earn God’s approval. Jesus didn’t come to start another religion. He came to rescue people who know they can’t save themselves. That’s very different. (Ephesians 2:8-9)",
    },
    {
      q: "What about other religions? Don’t they all lead to God?",
      a: "Jesus said He is the only way to the Father. That’s an exclusive claim. Either it’s true or it’s the most arrogant lie in history. The evidence points to it being true. This is worth getting right. (John 14:6)",
    },
    {
      q: "How do I know I’m not just fooling myself?",
      a: "If God is who He says He is, you will find Him—but you have to open your heart and look. “Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.” (Matthew 7:7-8) Start by being brutally honest with God. Read the Gospels (start with John). Talk to Him like He’s real.",
    },
  ];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/questions-hero.jpg"
          alt="Gritty rainy urban park at night, person in hoodie sitting on park bench with head down holding an open bible, wet bench, city buildings and graffiti in background, raw searching for truth atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-5">
          <div className="text-[#FF5A6D] text-xs font-black tracking-[2px] mb-4">QUESTIONS</div>
          <h1 className="headline text-6xl md:text-7xl tracking-[-3px] mb-6">
            YOU PROBABLY HAVE QUESTIONS.<br />HERE ARE HONEST ANSWERS.
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#d1d1d1]">
            No question is off limits. No judgment. Just straight truth.
          </p>
        </div>
      </section>

      <section className="section max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {objections.map((item, i) => (
            <div key={i} className="gritty-card">
              <p className="font-bold text-lg mb-3 text-[#FF5A6D]">{item.q}</p>
              <p className="text-[#c1c1c1] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-sm text-[#a3a3a3]">
          Still wrestling? <a href="/reach" className="text-[#FF5A6D] underline">Reach out. No question is off limits.</a>
        </div>
      </section>

      <section className="section bg-[#111111] border-t border-[#2a2a2a] text-center">
        <div className="max-w-2xl mx-auto px-5">
          <p className="text-2xl font-semibold mb-6">
            If these answers don’t fully satisfy the questions in your heart, that’s okay.
          </p>
          <p className="mb-8 text-[#a3a3a3]">
            Jesus isn’t afraid of your doubts. Come talk to real people who’ve wrestled with the same things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/reach" variant="primary" className="text-sm px-6">
              TALK TO SOMEONE
            </CTAButton>
            <CTAButton href="/prayer" variant="secondary" className="text-sm px-6">
              ASK FOR PRAYER
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
