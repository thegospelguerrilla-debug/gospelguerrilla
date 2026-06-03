import CTAButton from './CTAButton';

interface GospelBlockProps {
  compact?: boolean;
}

export default function GospelBlock({ compact = false }: GospelBlockProps) {
  if (compact) {
    return (
      <div className="gritty-card max-w-3xl mx-auto">
        <div className="text-center">
          <p className="uppercase text-[#FF5A6D] text-sm font-bold tracking-[2px] mb-3">The Only Message That Matters</p>
          <p className="text-xl md:text-2xl font-bold leading-tight mb-6">
            You have sinned. Christ died for sinners. He rose. Turn and trust Him alone.
          </p>
          <CTAButton href="/reach" variant="primary" className="text-base">
            I WANT TO TALK ABOUT THIS
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <div id="gospel" className="section max-w-5xl mx-auto px-5">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1 bg-[#FF5A6D] text-[#0a0a0a] text-xs font-black tracking-[2px] mb-4">
          THE GOOD NEWS
        </div>
        <h2 className="headline text-5xl md:text-6xl">THE GOOD NEWS IS BETTER<br />THAN YOU CAN IMAGINE</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* The Problem */}
        <div className="gritty-card">
          <h3 className="text-[#FF5A6D] font-black text-2xl mb-4 tracking-tight">THE REALITY</h3>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#d1d1d1]">
            <p>God is perfectly holy. You are not. Not even close.</p>
            <p>We have all rebelled against Him. The Bible calls it sin. The wages of sin is death — eternal separation from God.</p>
            <p>No good deeds, no religion, no "being a decent person" can fix this. You are already guilty.</p>
          </div>
          <div className="verse mt-6">
            “For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.” — Romans 6:23
          </div>
        </div>

        {/* The Good News */}
        <div className="gritty-card border-[#FF5A6D]/40">
          <h3 className="text-[#FF5A6D] font-black text-2xl mb-4 tracking-tight">THE GOOD NEWS</h3>
          <div className="space-y-4 text-[15px] leading-relaxed">
            <p><span className="font-bold text-white">Jesus is God in the flesh.</span> He lived the perfect life you couldn’t live.</p>
            <p>He was crucified — a brutal, public, shameful death — taking the punishment you and I deserve.</p>
            <p>On the third day He rose from the dead. Death could not hold Him. The payment was accepted.</p>
            <p className="font-semibold text-white">The offer is simple and free: Turn from your sin and trust Jesus Christ alone to save you.</p>
          </div>
          <div className="verse mt-6">
            “If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.” — Romans 10:9
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[#a3a3a3] max-w-md mx-auto">
        This is not about joining a religion. It is about surrendering to the only One who can rescue you from the mess you’re in.
      </div>
    </div>
  );
}
