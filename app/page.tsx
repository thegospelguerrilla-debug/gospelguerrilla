import CTAButton from '../components/CTAButton';

export default function Home() {
  return (
    <>
      {/* HERO — Clean photo + HTML text + single functional button.
          Source: hero-v4.jpg (centered glowing cross sign with "JESUS SAVES" in graffiti style, no baked text or button).
          Future swaps: use hero-v5.jpg etc. to avoid cache issues. */}
      <section className="relative min-h-[100dvh] flex items-end justify-center overflow-hidden pb-12 md:pb-20">
        <img
          src="/images/hero-v4.jpg"
          alt="Dark gritty alley with centered glowing cross and Jesus Saves in graffiti"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-3xl px-5 text-center pb-8">
          <p className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
            In a world with no hope,<br />Jesus is our only hope.
          </p>

          <CTAButton
            href="#gospel"
            variant="primary"
            className="text-xl px-12 py-4 font-bold tracking-wide"
          >
            Learn More
          </CTAButton>
        </div>
      </section>

      {/* THE WAY • THE TRUTH • THE LIFE */}
      <section id="gospel" className="section max-w-5xl mx-auto px-5">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#FF5A6D] text-[#0a0a0a] text-xs font-black tracking-[2px] mb-4">
            THE GOOD NEWS
          </div>
          <h2 className="headline text-5xl md:text-6xl">THE GOOD NEWS IS BETTER<br />THAN YOU CAN IMAGINE</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* The Way */}
          <div className="gritty-card">
            <h3 className="text-[#FF5A6D] font-black text-2xl mb-4 tracking-tight">THE WAY</h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#d1d1d1]">
              <p>We all know what it&apos;s like to be lost.</p>
              <p>We&apos;ve tried our own way. We&apos;ve chased success, pleasure, relationships, money, and self-improvement, yet our hearts still carry guilt, shame, and emptiness.</p>
              <p>The Bible says that sin separates us from God.</p>
              <p>No amount of good works can bridge that gap.</p>
            </div>
            <div className="verse mt-6">
              “Jesus said to him, ‘I am the way, and the truth, and the life. No one comes to the Father except through me.’” — John 14:6
            </div>
          </div>

          {/* The Truth */}
          <div className="gritty-card">
            <h3 className="text-[#FF5A6D] font-black text-2xl mb-4 tracking-tight">THE TRUTH</h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#d1d1d1]">
              <p>The truth is we are all sinners and have fallen short of the glory of God.</p>
              <p>We have all lived our own way. We have lied, hated, lusted, and stolen the glory that belongs to Him alone.</p>
            </div>
            <div className="verse mt-6">
              “For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.” — Romans 6:23
            </div>
          </div>

          {/* The Life */}
          <div className="gritty-card border-[#FF5A6D]/40">
            <h3 className="text-[#FF5A6D] font-black text-2xl mb-4 tracking-tight">THE LIFE</h3>
            <div className="space-y-4 text-[15px] leading-relaxed">
              <p>Through the sacrifice of Jesus we can be saved if we put our faith in Him.</p>
              <p>He took the punishment we deserved on the cross. He rose from the dead. In Him we have life, forgiveness, and eternal life.</p>
            </div>
            <div className="verse mt-6">
              “For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.” — John 3:16
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#a3a3a3] max-w-md mx-auto">
          This is not about joining a religion. It is about surrendering to the only One who can rescue you from the mess you’re in.
        </div>
      </section>

      {/* THE CALL — Sinner’s Prayer (careful, biblical, no manipulation) */}
      <section className="section bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 bg-[#FF5A6D] text-[#0a0a0a] text-xs font-black tracking-[2px] mb-4">
              IF YOU KNOW YOU NEED THIS
            </div>
            <h2 className="headline text-5xl md:text-6xl tracking-[-2px]">THERE&apos;S A WAY OUT AND HIS NAME IS JESUS</h2>
          </div>

          <div className="gritty-card mb-8">
            <p className="text-xl font-semibold mb-6 text-center">
              If these words reflect what’s happening in your heart right now, pray them honestly:
            </p>

            <div className="bg-[#0a0a0a] p-7 md:p-9 text-[17px] leading-relaxed border-l-4 border-[#FF5A6D]">
              “Jesus, I know I’ve lived my own way and it has wrecked me. I deserve Your judgment. I believe You died on the cross for my sin and rose from the dead. I turn from my sin right now and put all my trust in You alone. Save me. I surrender my life to You. I am Yours. In Jesus’ name I pray.”
            </div>

            <p className="mt-5 text-sm text-[#a3a3a3] text-center">
              These aren’t magic words. God looks at the heart. If this is real for you, you have just been born again.
            </p>
          </div>

          <div className="text-center">
            <p className="mb-5 text-lg font-semibold">Tell someone today. You don’t have to walk this alone.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/questions" variant="secondary">I HAVE QUESTIONS</CTAButton>
            </div>
            <p className="mt-6 text-sm text-[#a3a3a3]">
              If you just prayed in faith, <a href="/welcome" className="text-[#FF5A6D] underline">start here →</a>
            </p>
          </div>
        </div>
      </section>

      {/* FINAL URGENCY */}
      <section className="py-16 bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="text-3xl md:text-4xl font-black tracking-tight mb-6">
            Someone prayed you would find this page.<br />Don’t waste it.
          </p>
          <p className="mt-6 text-sm text-[#a3a3a3] max-w-2xl mx-auto">
            “And he made from one man every nation of mankind to live on all the face of the earth, having determined allotted periods and the boundaries of their dwelling place, that they should seek God, and perhaps feel their way toward him and find him. Yet he is actually not far from each one of us.” — Acts 17:26-27
          </p>
        </div>
      </section>
    </>
  );
}
