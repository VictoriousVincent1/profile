tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif']
      },
      boxShadow: {
        'black': '4px 4px 0px 0px #000',
        'white': '4px 4px 0px 0px #fff',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)',
        'glow-cyan-sm': '0 0 12px rgba(34, 211, 238, 0.35)',
        'glow-magenta': '0 0 20px rgba(236, 72, 153, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(34, 211, 238, 0.08)'
      },
      colors: {
        darkTheme: '#11001F',
        void: '#030712',
        surface: '#0f172a',
        'cyber-cyan': '#22d3ee',
        'cyber-magenta': '#ec4899',
        'neon-blue': '#38bdf8'
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scan': 'scan 8s linear infinite'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.08) 0%, transparent 70%)'
      },
      backgroundSize: {
        'grid': '48px 48px'
      }
    }
  },
  darkMode: 'selector'
}