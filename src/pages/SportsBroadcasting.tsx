import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, ShoppingCart, Globe, Shield, Zap, Check, Network, Cloud, Lock, Activity, Building2, Database, Gauge } from 'lucide-react';
import CountUp from 'react-countup';
import { createEmptyContactForm } from '../utils/contactFormDefaults';
import { useEffect, useRef, useState } from 'react';
import ReactCountUp from 'react-countup';
import { Link } from 'react-router-dom';



const SportsBroadcasting: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(createEmptyContactForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.company.trim() && formData.country.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(createEmptyContactForm());
      }, 3000);
    } else {
      alert('Please fill in all required fields: Full Name, Work Email, Company, and Country/Region');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

{/* Hero Section */}
<section className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
          <span className="text-gray-900">Premier Sports</span>
          <span className="animated-gradient-text block mt-2">Broadcasting Solution</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          <span className="text-[#0EB623] font-semibold">Capture Every Thrill. Deliver Without Limits.</span>
          <br />
          EdgeNext delivers the mission-critical live streaming infrastructure built for Tier-1 sports events.
          From regional leagues to the FIFA World Cup, we deliver stadium-grade experiences with ultra-low latency and absolute reliability.
        </p>

        <a
          href="/contact_us"
          className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
        >
          Contact Us
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
        </a>
      </div>

      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <img
          src="/sportsbroadcasting1.png"
          alt="Sports Broadcasting"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>

{/* Why Major Sports Need EdgeNext */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">
          Why Major Sports Need <span className="text-[#0EB623]">EdgeNext</span>?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Engineered for the high stakes of live sports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Gauge className="text-[#0EB623]" size={24} />
          </div>
          <h3 className="text-xl font-medium mb-4">Flash Crowd Scalability</h3>
          <p className="text-gray-600">
            Sports traffic is explosive. Our architecture automatically scales to handle millions of concurrent viewers during
            penalty kicks or match points—without buffering.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Cloud className="text-[#0EB623]" size={24} />
          </div>
          <h3 className="text-xl font-medium mb-4">Cinematic Fidelity (4K/8K/HDR)</h3>
          <p className="text-gray-600">
            Support next-gen immersive formats (4K, 8K, HDR10) and deliver studio-grade clarity across devices—so fans feel closer
            to the sidelines.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="text-[#0EB623]" size={24} />
          </div>
          <h3 className="text-xl font-medium mb-4">Revenue Protection</h3>
          <p className="text-gray-600">
            Sports rights are expensive. We help protect them with studio-grade security capabilities and robust enforcement—reducing
            abuse and piracy impact.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Activity className="text-[#0EB623]" size={24} />
          </div>
          <h3 className="text-xl font-medium mb-4">Sub-Second Latency</h3>
          <p className="text-gray-600">
            Beat the spoiler. Our optimized edge delivery keeps streams closer to real time—so fans see the goal before they hear it
            from the neighborhood.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Core Architecture Section */}
<section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#06261F] via-[#071A1F] to-[#0A2A24]">
  {/* subtle glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,182,35,0.18),transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_40%,rgba(76,196,255,0.10),transparent_55%)]" />
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4">
    {/* Title */}
    <div className="text-center mb-10 md:mb-12">
      <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
        Core Architecture
      </h2>
      <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
        A high-level view of EdgeNext’s end-to-end live sports streaming pipeline — from venue contribution to ultra-low latency delivery.
      </p>
    </div>

    {/* Image (same width as cards) */}
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden shadow-[0_24px_80px_-30px_rgba(0,0,0,0.65)] ring-1 ring-white/10 bg-black/10">
        <img
          src="/sportsbroadcasting2.png"
          alt="Core Architecture diagram"
          className="
            w-full block
            h-auto max-h-[380px] object-contain
            md:h-[420px] md:max-h-none md:object-cover md:object-center
          "
          loading="lazy"
        />
      </div>
    </div>

    {/* Two cards under the image (same container => perfect alignment) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 items-stretch">
      {/* Card 1 */}
      <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-white/10 hover:bg-black/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_-18px_rgba(14,182,35,0.32)] transition-all duration-500 flex flex-col h-full">
        <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Cloud className="text-[#0EB623]" size={28} />
        </div>

        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 min-h-[64px]">
          Resilient Ingest & Global Production
        </h3>

        <div className="flex-1">
          <p className="text-gray-300 mb-5">
            <span className="text-white font-medium">“From the Pitch to the Cloud — Without a Glitch”</span>{" "}
            Capture every angle with our fail-proof ingest pipeline. We aggregate main and auxiliary feeds (matches,
            interviews, press conferences) via resilient contribution links, including Fiber, Fixed IP, and SRT —
            with Satellite backup for absolute redundancy.
          </p>

          <ul className="space-y-3 min-h-[150px]">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">
                <span className="text-white font-medium">Global Orchestration:</span>{" "}
                Synchronized feeds are dispatched to production hubs in Americas, EMEA, and Asia.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">
                <span className="text-white font-medium">Studio-Grade Mixing:</span>{" "}
                Real-time insertion of graphics and commentary tracks in 20+ languages.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">
                <span className="text-white font-medium">Next-Gen Encoding:</span>{" "}
                High-density clusters support H.264, H.265, and AV1, outputting adaptive bitrate ladders from SD up to 8K UHD.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-white/10 hover:bg-black/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_-18px_rgba(14,182,35,0.32)] transition-all duration-500 flex flex-col h-full">
        <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Gauge className="text-[#0EB623]" size={28} />
        </div>

        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 min-h-[64px]">
          Ultra-Low Latency Distribution
        </h3>

        <div className="flex-1">
          <p className="text-gray-300 mb-5">
            <span className="text-white font-medium">“Beat the Spoiler with Edge Speed”</span>{" "}
            Don’t let your audience hear the goal from a neighbor first. Our architecture leverages low-latency CMAF
            chunked transfers (2–4 sec fragments) to achieve end-to-end latencies of ~5–10 seconds.
          </p>

          <ul className="space-y-3 min-h-[150px]">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">
                <span className="text-white font-medium">Dual-Homed Origins:</span>{" "}
                Distributed origin servers with active/standby failover ensure streams stay available.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">
                <span className="text-white font-medium">Smart Routing:</span>{" "}
                Traffic stays within an optimized edge network, routed dynamically based on real-time performance to avoid public internet congestion.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">
                <span className="text-white font-medium">Instant Failover:</span>{" "}
                DNS/HTTP-level health checks detect outages instantly, redirecting viewers to healthy paths to prevent blackouts.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Intelligent Edge Section */}
<section className="py-24 bg-gray-50 relative overflow-hidden">
  {/* subtle background accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#0EB623]/10 blur-3xl" />
    <div className="absolute -bottom-28 -right-28 w-[560px] h-[560px] rounded-full bg-[#0EB623]/10 blur-3xl" />
  </div>

  <div className="container mx-auto px-4 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">
          Intelligent <span className="text-[#0EB623]">Edge</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Designed for high-stakes sports streaming—performance, security, monetization, and visibility at the edge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-1">
          <div className="w-14 h-14 bg-[#0EB623]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Cloud className="text-[#0EB623]" size={28} />
          </div>

          <h3 className="text-xl font-medium mb-4 text-[#0EB623]">
            Smart Transcoding & Adaptation
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ensure smooth playback on any device. Edge nodes serve ABR streams, delivering 1080p/4K to mobile and 8K HDR
            to Smart TVs—switching instantly based on network conditions.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Optimized ladders for consistent quality</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Fast switching across renditions</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Edge-cache aware delivery</span>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-1">
          <div className="w-14 h-14 bg-[#0EB623]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="text-[#0EB623]" size={28} />
          </div>

          <h3 className="text-xl font-medium mb-4 text-[#0EB623]">
            Ironclad Content Security
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Protect premium sports rights with a multi-layered defense strategy—reducing abuse, piracy impact, and
            service disruption.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Encryption + Multi-DRM with dynamic license delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Access control: geo-blocking, token auth, IP whitelisting</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>DDoS scrubbing and WAF at the edge</span>
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-1">
          <div className="w-14 h-14 bg-[#0EB623]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Activity className="text-[#0EB623]" size={28} />
          </div>

          <h3 className="text-xl font-medium mb-4 text-[#0EB623]">
            Seamless Monetization (DAI)
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Maximize revenue without disrupting the game. Support SCTE-35 markers for SSAI and integrate with major ad
            servers to stitch region-specific pre-rolls, mid-rolls, and post-rolls directly into the live feed.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>SCTE-35 compatible ad signaling</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Server-side stitching for consistent QoE</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Region targeting for higher yield</span>
            </li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-1">
          <div className="w-14 h-14 bg-[#0EB623]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Gauge className="text-[#0EB623]" size={28} />
          </div>

          <h3 className="text-xl font-medium mb-4 text-[#0EB623]">
            Real-Time QoS Visibility
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Monitor every pixel. A centralized analytics plane provides real-time dashboards for startup time, rebuffer
            rates, and concurrent viewers—so NOC teams act before viewers notice.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Live dashboards across key QoE signals</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Automated alerting on degradation</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span>Operational visibility for rapid response</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Free Trial / CTA Section */}
<section className="py-12 bg-gradient-to-r from-emerald-50 via-white to-emerald-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          Ready to Scale Live Sports Streaming?
        </h2>
        <p className="text-gray-600">
          Deliver live sports at scale—ultra-low latency, broadcast-grade reliability, and global reach.
        </p>
      </div>

      <div className="flex">
        <a
          href="/contact_us"
          className="px-6 py-3 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] font-medium transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>

        {/* Lifecycle & Engagement Section */}
<section className="py-24 bg-gray-50 relative overflow-hidden">
  {/* subtle background accents (same family as your other sections) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#0EB623]/10 blur-3xl" />
    <div className="absolute -bottom-28 -right-28 w-[560px] h-[560px] rounded-full bg-[#0EB623]/10 blur-3xl" />
    {/* faint “pitch grid” 느낌 */}
    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] bg-[size:120px_120px]" />
  </div>

  <div className="container mx-auto px-4 relative">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">
          Lifecycle <span className="text-[#0EB623]">&amp;</span> Engagement
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Extend match moments beyond the whistle — and keep global audiences engaged in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-1">
          {/* top accent */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 bg-[#0EB623]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Activity className="text-[#0EB623]" size={22} />
            </div>
            <div className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
              Post-match value
            </div>
          </div>

          <h3 className="text-2xl font-medium mb-3 text-[#0EB623]">Extend the Match Lifecycle</h3>
          <p className="text-gray-700 mb-6">
            Turn live moments into lasting assets.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-700">
                <span className="font-medium text-gray-900">Instant Replay &amp; Near-Live VOD:</span>{" "}
                Convert live streams into VOD clips within seconds. Publish goals and highlights to social media or apps immediately.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-700">
                <span className="font-medium text-gray-900">Time-Shifting:</span>{" "}
                Enable “Start Over” and “Rewind” functionality so fans never miss a key moment.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-700">
                <span className="font-medium text-gray-900">Hybrid Storage:</span>{" "}
                Flexible on-prem and cloud storage scales to handle peak recording loads while ensuring long-term archival.
              </span>
            </li>
          </ul>

          {/* subtle bottom accent line */}
          <div className="mt-20 h-[10px] w-full bg-gradient-to-r from-[#0EB623]/30 via-transparent to-transparent" />
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 bg-[#0EB623]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-[#0EB623]" size={22} />
            </div>
            <div className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
              In-match engagement
            </div>
          </div>

          <h3 className="text-2xl font-medium mb-3 text-[#0EB623]">Immersive Fan Engagement</h3>
          <p className="text-gray-700 mb-6">
            Keep fans glued to the screen with interactive features.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-700">
                <span className="font-medium text-gray-900">Social Clipping:</span>{" "}
                AI-tagged or timecode-based clipping service for real-time social sharing.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-700">
                <span className="font-medium text-gray-900">Multilingual Support:</span>{" "}
                Deliver separate language audio tracks or sidecar subtitles/CC for global accessibility.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-700">
                <span className="font-medium text-gray-900">Interactive Overlays:</span>{" "}
                Use WebSocket/SSE channels to push real-time player stats, polls, and trivia overlays with minimal latency.
              </span>
            </li>
          </ul>

          <div className="mt-20 h-[10px] w-full bg-gradient-to-r from-[#0EB623]/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Stats Section — Sports Broadcast Proof */}
<section id="stats-section" className="py-24 relative overflow-hidden bg-[#05070B]">
  {/* cleaner sports-style background */}
  <div className="absolute inset-0 pointer-events-none">
    {/* green glow (brand) */}
    <div className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full bg-[#0EB623]/12 blur-3xl" />
    {/* cool stadium light */}
    <div className="absolute -top-32 -right-48 w-[720px] h-[720px] rounded-full bg-sky-400/10 blur-3xl" />
    {/* subtle vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/35" />
  </div>

  <div className="container mx-auto px-4 relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
        Accelerated. Stable. Secure.
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Enterprise-grade protection with uncompromising performance
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* 1 */}
      <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/12 hover:bg-white/15 hover:border-white/20 transition-all duration-500">
        <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4 tracking-tight">
          {hasScrolled && <CountUp end={10} prefix="<" suffix="s" duration={2} />}
          {!hasScrolled && "<10s"}
        </div>
        <div className="text-lg md:text-xl font-semibold mb-2 text-white">
          End-to-End Latency
        </div>
        <p className="text-gray-300">Keep fans ahead of the spoiler</p>
      </div>

      {/* 2 */}
      <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/12 hover:bg-white/15 hover:border-white/20 transition-all duration-500">
        <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4 tracking-tight">
          {hasScrolled && <CountUp end={1500} suffix="+" duration={2} />}
          {!hasScrolled && "1500+"}
        </div>
        <div className="text-lg md:text-xl font-semibold mb-2 text-white">
          Global Points of Presence
        </div>
        <p className="text-gray-300">Distributed edge coverage worldwide</p>
      </div>

      {/* 3 */}
      <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/12 hover:bg-white/15 hover:border-white/20 transition-all duration-500">
        <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4 tracking-tight">
          {hasScrolled && <CountUp end={99.99} decimals={2} suffix="%" duration={2} />}
          {!hasScrolled && "99.99%"}
        </div>
        <div className="text-lg md:text-xl font-semibold mb-2 text-white">
          Reliability
        </div>
        <p className="text-gray-300">Built for high-stakes live events</p>
      </div>

      {/* 4 */}
      <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/12 hover:bg-white/15 hover:border-white/20 transition-all duration-500">
        <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4 tracking-tight">
          8K/HDR
        </div>
        <div className="text-lg md:text-xl font-semibold mb-2 text-white">
          Ready
        </div>
        <p className="text-gray-300">Immersive quality at scale</p>
      </div>
    </div>
  </div>
</section>

                {/* Application Scenarios */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">
                Application Scenarios
              </div>
              <h2 className="text-4xl font-medium mb-4">
                Built for Live Sports, From Venue to Viewer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deliver real-time match streams, 4K-ready playback, and rapid highlight distribution with resilient ingest and low-latency delivery across every region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/CCTVCDN StreamingSolution.png"
                  alt="CCTV CDN Streaming Solution"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-medium mb-4">
                  CCTV – CDN Streaming Solution
                </h3>
                <p className="text-gray-600 mb-6">
                  China Central Television (CCTV) operates one of the
                  largest-scale digital video databases in the country,
                  supporting over 11.06 million simultaneous online viewers
                  during major broadcasts with EdgeNext&apos;s comprehensive
                  streaming solution.
                </p>
                <Link
                  to="/case-study/cctv-cdn-streaming-solution"
                  className="text-[#0EB623] font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300"
                >
                  Read Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/Beijing2022WinterOlympicGamesCDNStreamingSolution.png"
                  alt="Beijing 2022 Winter Olympic Games"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-medium mb-4">
                  Beijing 2022 Winter Olympic Games – CDN Streaming Solution
                </h3>
                <p className="text-gray-600 mb-6">
                  The 2022 Beijing Winter Olympic Games became the most-watched
                  Winter Olympics in history, achieving an extraordinary global
                  reach of over 2 billion people with EdgeNext&apos;s scalable
                  streaming infrastructure and real-time delivery capabilities.
                </p>
                <Link
                  to="/case-study/beijing-2022-winter-olympic-games-cdn-streaming-solution"
                  className="text-[#0EB623] font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300"
                >
                  Read Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>


         {/* Contact Section */}
        <section className="py-24 bg-gradient-to-r from-[#0EB623] to-[#0CA61F] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12)_0%,transparent_55%)]" />

        <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Ready for Real-Time Sports Delivery?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10">
                EdgeNext powers live sports streaming with ultra-low latency, resilient ingest, and instant failover—so every goal reaches every screen in real time.
              </p>

              <a
                href="/contact_us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={20}
                />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>);

};

export default SportsBroadcasting;