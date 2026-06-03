import PrayerForm from '../../components/PrayerForm';

export const metadata = {
  title: 'Prayer Requests',
  description: 'Life is heavy. We will bring your request before God. No judgment. Real prayer for real people.',
};

export default function PrayerPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/prayer-hero.jpg"
          alt="Gritty cinematic photorealistic urban night photography in heavy rain, a homeless-looking man in ragged clothes seen from behind kneeling on wet pavement facing a large black dripping cross painted on a brick wall, both arms lifted high toward the sky and cross in prayer with hands open, head lifted up looking toward the cross, bright light above the cross shining down illuminating the cross and the man, everything outside the light deep black and dark, wet reflective ground, raw desperate hopeful atmosphere of someone connecting with God through prayer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-5">
          <div className="text-[#FF5A6D] text-sm font-black tracking-[3px] mb-3">YOU DON’T HAVE TO CARRY IT ALONE</div>
          <h1 className="headline text-6xl md:text-7xl tracking-[-3px]">PRAYER REQUESTS</h1>
        </div>
      </section>

      <section className="section max-w-3xl mx-auto px-5">
        <div className="text-center mb-10">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">
            Life is heavy. We don’t pretend to have all the answers.<br />But we will bring your request before God.
          </p>
        </div>

        <PrayerForm />
      </section>

      <section className="section bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h3 className="text-2xl font-bold mb-6">Scripture for the heavy-hearted</h3>
          <div className="space-y-8 text-[#c1c1c1]">
            <div>
              <p className="verse mb-2">“Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.”</p>
              <p className="text-sm text-[#737373]">— Matthew 11:28-30</p>
            </div>
          </div>
          <p className="mt-10 text-sm text-[#a3a3a3]">
            If you also want to talk to a real person, <a href="/reach" className="text-[#FF5A6D] underline">use the Reach Out page</a>.
          </p>
        </div>
      </section>
    </>
  );
}
