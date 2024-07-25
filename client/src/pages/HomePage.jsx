import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="bg-green-50 text-green-900 p-6 sm:mx-0 mx-[5%] rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mt-4 mb-5">Welcome Back to SPA-Tasks! 📝</h1>
        <p className="text-lg mb-5">
          Discover a new way to organize your pending tasks. Using the powerful SPA-Tasks tool you can organize all your daily tasks. Simplify your life with SPA-Tasks 🔥
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:px-14 py-12 w-full gap-20">
        <div className="lg:ml-10 m-3 lg:w-[40%] md:w-[50%] w-[70%] border-2 border-solid border-fuchsia-600 bg-[#5D9C59] text-white rounded-md">
          <h2 className="text-2xl font-bold lg:my-12 my-3 text-center">Advantages of Using a Task List 📝✨</h2>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">1. Stay Organized 📂</h3>
            <p className="mb-4">Track all your tasks easily and ensure you don't forget anything important. Prioritize and conquer! 🏆</p>

            <h3 className="text-xl font-semibold mb-4">2. Boost Productivity 🚀</h3>
            <p className="mb-4">Allocate your time effectively and get more done. Break tasks into manageable chunks and avoid overwhelm! 💪</p>

            <h3 className="text-xl font-semibold mb-4">3. Reduce Stress 🧘‍♂️</h3>
            <p className="mb-4">Feel more in control and less worried by knowing exactly what needs to be done and when. Calm and collected! 🌿</p>
          </div>
        </div>
        <div className="lg:pl-10 lg:pt-10 lg:w-[60%] w-[70%] flex flex-col items-center justify-center relative">
          <div className="bg-green-50 px-2 pt-6 pb-6 rounded-lg shadow-md text-green-900 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Learn from the Example of Stoic 🐶</h2>
            <p className="text-lg mb-4">
              Greetings, human. My name is Stoic 🐕‍🦺. Inspired by Seneca and Marcus Aurelius, I find wisdom in simplicity and order. A tool to track duties is essential for a serene life.
            </p>
          </div>
          <div className="mt-6 w-full flex sm:flex-row flex-col sm:items-end items-center gap-3">
            <img
              className="lg:ml-3 lg:mt-1 lg:pt-10 sm:w-[40%] w-[60%] sm:mt-[3%] mt-[15%] ml-8 rounded-full shadow-lg"
              src="https://res.cloudinary.com/dqh2illb5/image/upload/v1720472986/login/pexels-hiagorocha-22234096_t226kj.jpg"
              alt="image of a dog looking at how you are logging in"
            />
            <div className="bg-yellow-200 text-yellow-800 p-2 lg:mx-1 sm:mr-1 md:mx-2 rounded-lg sm:max-w-[60%] w-auto mt-4 sm:mt-0">
              <p className="text-lg">
                "He who lives in harmony with himself lives in harmony with the universe." 🌌 - Marcus Aurelius 🐕‍🦺
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
