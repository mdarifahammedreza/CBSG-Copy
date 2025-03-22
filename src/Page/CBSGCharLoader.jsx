


const CBSGCharLoader = () => {
    const letters = ['C', 'B', 'S', 'G'];

  return (
    <div style={styles.loaderContainer}>
      {letters.map((char, index) => (
        <span
          key={index}
          style={{
            ...styles.letter,
            animationDelay: `${index * 0.2}s`
          }}
        >
          {char}
        </span>
      ))}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            text-shadow: 0 0 1px #0E86D4, 0 0 2px rgba(0, 48, 96, 0.5);
          }
          40% {
            transform: translateY(-10px);
            text-shadow: 0 0 5px #003060, 0 0 10px rgba(0, 48, 96, 0.8);
          }
        }

        
      `}</style>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'transparent', // Always transparent
    position: 'relative'
  },
  letter: {
    fontSize: '1rem',
    fontWeight: 600, // Semi-bold
    color: '#0E86D4',
    margin: '0 8px',
    textTransform: 'uppercase',
    animation: 'bounce 1.5s infinite ease-in-out',
    position: 'relative'
  }
};

export default CBSGCharLoader;

