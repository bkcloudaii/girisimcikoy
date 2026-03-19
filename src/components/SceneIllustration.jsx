// SVG İllüstrasyonlar — Her sahne için

export function BusScene() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e"/>
          <stop offset="100%" stopColor="#16213e"/>
        </linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2d2d"/>
          <stop offset="100%" stopColor="#1a1a1a"/>
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect width="800" height="450" fill="url(#sky)"/>
      {/* Stars */}
      {[...Array(40)].map((_,i) => (
        <circle key={i} cx={20+i*19+Math.sin(i)*8} cy={10+Math.cos(i*2)*40+i*3} r="1" fill="white" opacity={0.3+Math.sin(i)*0.3}/>
      ))}
      {/* Mountains */}
      <polygon points="0,350 120,180 240,350" fill="#1f2937"/>
      <polygon points="80,350 220,160 360,350" fill="#374151"/>
      <polygon points="400,350 540,140 680,350" fill="#1f2937"/>
      <polygon points="500,350 650,170 800,350" fill="#374151"/>
      {/* Snow caps */}
      <polygon points="120,180 105,220 135,220" fill="white" opacity="0.6"/>
      <polygon points="220,160 205,200 235,200" fill="white" opacity="0.6"/>
      <polygon points="540,140 525,180 555,180" fill="white" opacity="0.6"/>
      {/* Road */}
      <rect x="0" y="350" width="800" height="100" fill="url(#road)"/>
      {/* Road lines */}
      <rect x="60" y="390" width="80" height="6" fill="#F5A623" opacity="0.6"/>
      <rect x="200" y="390" width="80" height="6" fill="#F5A623" opacity="0.6"/>
      <rect x="340" y="390" width="80" height="6" fill="#F5A623" opacity="0.6"/>
      <rect x="480" y="390" width="80" height="6" fill="#F5A623" opacity="0.6"/>
      <rect x="620" y="390" width="80" height="6" fill="#F5A623" opacity="0.6"/>
      {/* Bus body */}
      <rect x="200" y="270" width="280" height="90" rx="8" fill="#E8321A"/>
      {/* Bus front */}
      <rect x="460" y="280" width="50" height="80" rx="4" fill="#C72A14"/>
      {/* Bus windows */}
      <rect x="220" y="285" width="45" height="35" rx="3" fill="#93C5FD" opacity="0.8"/>
      <rect x="275" y="285" width="45" height="35" rx="3" fill="#93C5FD" opacity="0.8"/>
      <rect x="330" y="285" width="45" height="35" rx="3" fill="#93C5FD" opacity="0.8"/>
      <rect x="385" y="285" width="45" height="35" rx="3" fill="#93C5FD" opacity="0.8"/>
      <rect x="440" y="285" width="14" height="35" rx="3" fill="#93C5FD" opacity="0.8"/>
      {/* Headlights */}
      <rect x="503" y="295" width="20" height="14" rx="2" fill="#FCD34D"/>
      <rect x="503" y="318" width="20" height="14" rx="2" fill="#FCD34D"/>
      {/* Text on bus */}
      <text x="260" y="348" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="18" letterSpacing="2">GİRİŞİMCİ KÖY</text>
      {/* Wheels */}
      <circle cx="265" cy="362" r="20" fill="#1f2937" stroke="#6B7280" strokeWidth="3"/>
      <circle cx="265" cy="362" r="8" fill="#374151"/>
      <circle cx="420" cy="362" r="20" fill="#1f2937" stroke="#6B7280" strokeWidth="3"/>
      <circle cx="420" cy="362" r="8" fill="#374151"/>
      {/* Exhaust */}
      <ellipse cx="200" cy="345" rx="15" ry="6" fill="#6B7280" opacity="0.5"/>
      <ellipse cx="185" cy="338" rx="10" ry="5" fill="#6B7280" opacity="0.3"/>
      {/* Trees */}
      <rect x="100" y="300" width="8" height="60" fill="#6B4226"/>
      <polygon points="104,210 70,305 138,305" fill="#15803d"/>
      <polygon points="104,240 72,320 136,320" fill="#16a34a"/>
      <rect x="680" y="305" width="8" height="55" fill="#6B4226"/>
      <polygon points="684,215 650,310 718,310" fill="#15803d"/>
    </svg>
  )
}

export function VillageExploreScene() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0d1b2a"/>
      {/* Sky gradient */}
      <rect width="800" height="200" fill="#1a3a4a" opacity="0.8"/>
      {/* Village houses */}
      <rect x="50" y="250" width="120" height="130" fill="#4A3728"/>
      <polygon points="50,250 110,180 170,250" fill="#7C5035"/>
      <rect x="80" y="290" width="30" height="90" fill="#2D1B0E"/>
      <rect x="125" y="270" width="25" height="25" fill="#93C5FD" opacity="0.6"/>

      <rect x="200" y="230" width="100" height="150" fill="#5C4033"/>
      <polygon points="200,230 250,165 300,230" fill="#8B5E3C"/>
      <rect x="230" y="280" width="25" height="100" fill="#3D2B1A"/>
      <rect x="258" y="255" width="20" height="20" fill="#93C5FD" opacity="0.6"/>

      <rect x="500" y="240" width="110" height="140" fill="#4A3728"/>
      <polygon points="500,240 555,170 610,240" fill="#7C5035"/>
      <rect x="535" y="290" width="28" height="90" fill="#2D1B0E"/>

      <rect x="640" y="255" width="120" height="125" fill="#5C4033"/>
      <polygon points="640,255 700,185 760,255" fill="#8B5E3C"/>

      {/* Ground */}
      <rect x="0" y="370" width="800" height="80" fill="#2D4A1E"/>
      <rect x="0" y="380" width="800" height="70" fill="#1E3A14" opacity="0.5"/>

      {/* Path */}
      <ellipse cx="400" cy="400" rx="300" ry="20" fill="#6B4226" opacity="0.4"/>

      {/* People/entrepreneurs - stylized */}
      <circle cx="330" cy="340" r="14" fill="#F5C06A"/>
      <rect x="323" y="354" width="14" height="35" rx="4" fill="#E8321A"/>
      <circle cx="370" cy="335" r="14" fill="#F0A070"/>
      <rect x="363" y="349" width="14" height="35" rx="4" fill="#2563EB"/>
      <circle cx="410" cy="342" r="14" fill="#F5C06A"/>
      <rect x="403" y="356" width="14" height="35" rx="4" fill="#16A34A"/>
      {/* Child */}
      <circle cx="450" cy="350" r="11" fill="#FBBF24"/>
      <rect x="444" y="361" width="12" height="28" rx="3" fill="#7C3AED"/>

      {/* Grandmother with tray */}
      <circle cx="170" cy="330" r="16" fill="#D1A882"/>
      <rect x="162" y="346" width="16" height="40" rx="3" fill="#7B4E2D"/>
      <rect x="145" y="328" width="50" height="6" rx="2" fill="#8B5E3C"/>
      <circle cx="155" cy="325" r="4" fill="#F5A623"/>
      <circle cx="170" cy="325" r="4" fill="#F5A623"/>
      <circle cx="185" cy="325" r="4" fill="#F5A623"/>

      {/* Speech bubbles */}
      <rect x="140" y="280" width="80" height="35" rx="8" fill="white" opacity="0.9"/>
      <polygon points="170,315 160,330 180,315" fill="white" opacity="0.9"/>
      <text x="152" y="298" fill="#1f2937" fontFamily="Arial" fontSize="10" fontWeight="bold">Köyün</text>
      <text x="148" y="310" fill="#1f2937" fontFamily="Arial" fontSize="10" fontWeight="bold">derdi ne?</text>

      {/* Stars */}
      {[...Array(30)].map((_,i) => (
        <circle key={i} cx={i*28+5} cy={5+Math.sin(i)*30+i*2} r="1" fill="white" opacity={0.2+Math.sin(i)*0.4}/>
      ))}
    </svg>
  )
}

export function EveningPresentScene() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0a0a15"/>
      {/* Night sky */}
      {[...Array(50)].map((_,i) => (
        <circle key={i} cx={i*17} cy={5+Math.sin(i*3)*60+i*2} r={Math.random()>0.7?1.5:1} fill="white" opacity={0.2+Math.sin(i)*0.5}/>
      ))}
      {/* Moon */}
      <circle cx="700" cy="70" r="35" fill="#FDE68A" opacity="0.9"/>
      <circle cx="715" cy="58" r="28" fill="#0a0a15"/>

      {/* Bus silhouette */}
      <rect x="30" y="230" width="220" height="80" rx="6" fill="#C72A14"/>
      <text x="55" y="280" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14" letterSpacing="1">GİRİŞİMCİ KÖY</text>
      <rect x="40" y="240" width="35" height="28" rx="2" fill="#1D4ED8" opacity="0.7"/>
      <rect x="85" y="240" width="35" height="28" rx="2" fill="#1D4ED8" opacity="0.7"/>
      <rect x="130" y="240" width="35" height="28" rx="2" fill="#FBBF24" opacity="0.9"/>
      <rect x="175" y="240" width="35" height="28" rx="2" fill="#1D4ED8" opacity="0.7"/>
      <circle cx="80" cy="313" r="17" fill="#374151" stroke="#6B7280" strokeWidth="2"/>
      <circle cx="200" cy="313" r="17" fill="#374151" stroke="#6B7280" strokeWidth="2"/>

      {/* Stage curtain from bus */}
      <rect x="248" y="185" width="8" height="130" fill="#7F1D1D"/>
      <path d="M256,185 Q290,200 310,230 Q290,260 256,275 Q275,250 270,230 Q275,210 256,185Z" fill="#B91C1C"/>
      <rect x="248" y="180" width="500" height="6" fill="#92400E"/>

      {/* Screen/canvas */}
      <rect x="310" y="195" width="300" height="180" fill="#1F2937" stroke="#374151" strokeWidth="2"/>
      <rect x="320" y="205" width="280" height="160" fill="#111827"/>
      {/* Presentation content */}
      <rect x="330" y="215" width="160" height="10" rx="2" fill="#E8321A" opacity="0.8"/>
      <rect x="330" y="235" width="260" height="6" rx="2" fill="#4B5563"/>
      <rect x="330" y="250" width="220" height="6" rx="2" fill="#4B5563"/>
      <rect x="330" y="275" width="80" height="50" rx="4" fill="#1D4ED8" opacity="0.5"/>
      <rect x="425" y="275" width="80" height="50" rx="4" fill="#16A34A" opacity="0.5"/>
      <rect x="520" y="275" width="60" height="50" rx="4" fill="#D97706" opacity="0.5"/>

      {/* Presenter */}
      <circle cx="460" cy="370" r="12" fill="#F5C06A"/>
      <rect x="453" y="382" width="14" height="30" rx="3" fill="#E8321A"/>
      {/* Pointer */}
      <line x1="467" y1="375" x2="500" y2="340" stroke="white" strokeWidth="1.5" opacity="0.6"/>

      {/* Jury table */}
      <rect x="550" y="360" width="220" height="15" rx="3" fill="#6B4226"/>
      <rect x="550" y="373" width="220" height="50" fill="#5C3820"/>
      {/* Jury people */}
      <circle cx="580" cy="355" r="12" fill="#D1A882"/>
      <circle cx="620" cy="355" r="12" fill="#F0C090"/>
      <circle cx="660" cy="355" r="12" fill="#C4956A"/>
      <circle cx="700" cy="355" r="12" fill="#E8C4A0"/>
      <circle cx="740" cy="355" r="12" fill="#D1A882"/>

      {/* Audience */}
      {[...Array(20)].map((_,i) => (
        <circle key={i} cx={100+i%10*60} cy={395+Math.floor(i/10)*25} r="8" fill="#6B7280" opacity={0.4+Math.sin(i)*0.3}/>
      ))}

      {/* Lights/torches */}
      <circle cx="300" cy="200" r="20" fill="#F5A623" opacity="0.2"/>
      <circle cx="300" cy="200" r="8" fill="#FDE68A" opacity="0.8"/>
      <circle cx="620" cy="200" r="20" fill="#F5A623" opacity="0.2"/>
      <circle cx="620" cy="200" r="8" fill="#FDE68A" opacity="0.8"/>

      {/* String lights */}
      {[...Array(15)].map((_,i) => (
        <circle key={i} cx={100+i*40} cy={170+Math.sin(i*0.5)*15} r="4" fill="#FDE68A" opacity="0.7"/>
      ))}
    </svg>
  )
}

export function TractorScene() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fieldsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f"/>
          <stop offset="60%" stopColor="#2d5a8e"/>
          <stop offset="100%" stopColor="#4a7c59"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#fieldsky)"/>
      {/* Field rows */}
      {[...Array(8)].map((_,i) => (
        <rect key={i} x="0" y={340+i*15} width="800" height="8" fill={i%2===0?'#2D4A1E':'#1E3A14'} opacity={0.6+i*0.05}/>
      ))}
      {/* Tractor body */}
      <rect x="350" y="300" width="160" height="70" rx="6" fill="#2563EB"/>
      {/* Cabin */}
      <rect x="420" y="265" width="90" height="50" rx="4" fill="#1E40AF"/>
      <rect x="430" y="272" width="70" height="36" rx="3" fill="#93C5FD" opacity="0.7"/>
      {/* Exhaust pipe */}
      <rect x="415" y="245" width="10" height="30" fill="#374151"/>
      <ellipse cx="420" cy="243" rx="12" ry="5" fill="#6B7280" opacity="0.5"/>
      {/* Big rear wheel */}
      <circle cx="390" cy="375" r="55" fill="#374151" stroke="#6B7280" strokeWidth="4"/>
      <circle cx="390" cy="375" r="35" fill="#4B5563"/>
      <circle cx="390" cy="375" r="12" fill="#1F2937"/>
      {[...Array(8)].map((_,i) => (
        <line key={i}
          x1={390+35*Math.cos(i*Math.PI/4)}
          y1={375+35*Math.sin(i*Math.PI/4)}
          x2={390+55*Math.cos(i*Math.PI/4)}
          y2={375+55*Math.sin(i*Math.PI/4)}
          stroke="#6B7280" strokeWidth="3"/>
      ))}
      {/* Small front wheel */}
      <circle cx="490" cy="375" r="28" fill="#374151" stroke="#6B7280" strokeWidth="3"/>
      <circle cx="490" cy="375" r="16" fill="#4B5563"/>
      {/* Farmer on tractor */}
      <circle cx="455" cy="258" r="16" fill="#C4956A"/>
      <rect x="440" y="270" width="20" height="8" rx="3" fill="#4B5563"/>
      {/* Farmers hat */}
      <ellipse cx="455" cy="248" rx="20" ry="6" fill="#8B5E3C"/>
      <rect x="443" y="236" width="24" height="14" rx="3" fill="#A0723F"/>

      {/* Entrepreneur talking to farmer */}
      <circle cx="600" cy="330" r="14" fill="#F5C06A"/>
      <rect x="593" y="344" width="14" height="38" rx="4" fill="#E8321A"/>
      {/* Notebook */}
      <rect x="608" y="350" width="20" height="26" rx="2" fill="white" opacity="0.9"/>
      <line x1="612" y1="358" x2="624" y2="358" stroke="#374151" strokeWidth="1"/>
      <line x1="612" y1="364" x2="624" y2="364" stroke="#374151" strokeWidth="1"/>
      <line x1="612" y1="370" x2="620" y2="370" stroke="#374151" strokeWidth="1"/>

      {/* Speech bubble */}
      <rect x="530" y="285" width="120" height="40" rx="8" fill="white" opacity="0.9"/>
      <polygon points="600,325 590,340 610,325" fill="white" opacity="0.9"/>
      <text x="545" y="305" fill="#1f2937" fontFamily="Arial" fontSize="11" fontWeight="bold">Tarlada en büyük</text>
      <text x="548" y="318" fill="#1f2937" fontFamily="Arial" fontSize="11" fontWeight="bold">sorun nedir?</text>

      {/* Sunflowers */}
      <circle cx="700" cy="300" r="16" fill="#F5A623"/>
      <rect x="698" y="315" width="4" height="60" fill="#16A34A"/>
      <circle cx="730" cy="285" r="14" fill="#F5A623"/>
      <rect x="728" y="298" width="4" height="75" fill="#16A34A"/>
    </svg>
  )
}
