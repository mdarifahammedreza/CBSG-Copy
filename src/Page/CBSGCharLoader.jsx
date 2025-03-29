


const CBSGCharLoader = () => {
    const letters = ['C', 'B', 'S', 'G'];

  return (
    <div  className="h-screen w-screen flex justify-center items-center">
      <span className="loading loading-dots loading-lg"></span> 
    </div>
  );
};

// const styles = {
//   loaderContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'transparent', // Always transparent
//     position: 'relative'
//   },
//   letter: {
//     fontSize: '3rem',
//     fontWeight: 600, // Semi-bold
//     color: '#0E86D4',
//     margin: '0 8px',
//     textTransform: 'uppercase',
//     animation: 'bounce 1.5s infinite ease-in-out',
//     position: 'relative'
//   }
// };

export default CBSGCharLoader;

