import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-6 z-10 flex flex-col items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <h2 >About Me</h2>
          <p>
            I'm Raphael Liegeois-Barbey, a passionate and innovative
            entrepreneur with a strong track record of leadership and
            relationship-building. Throughout my career, I've demonstrated an
            exceptional ability to elevate productivity, optimize
            cost-efficiency, and forge pivotal partnerships. I thrive on solving
            complex challenges, taking a solution-oriented approach, and
            relentlessly pursuing excellence and success.
          </p>
          <br/>
          <p>
            As a Full Stack Developer, I specialize in creating captivating
            digital experiences and web application development. My expertise
            includes mastering cutting-edge technologies such as React, HTML,
            CSS, JavaScript, and PHP. I've crafted user-friendly interfaces,
            optimized user journeys, and leveraged my skills to help businesses
            scale efficiently. Currently, I'm focused on developing robust
            back-end solutions and building responsive, full-stack web
            applications. I'm dedicated to staying up-to-date with emerging
            technologies and industry trends to continuously enhance software
            quality and functionality. Let's collaborate and explore the world
            of web development together!
          </p>
          <p className="pt-6 underline cursor-pointer">Check out some of my latest projects</p>
        </div>
      </div>
      <div className="flex-grow max-w-[1240px] md:h-[40vh] my-8 w-full max-h-full video-container">
        <video

          className="w-full h-full z-10 object-cover "
          src="/assets/Ocean - 54081 (1).mp4"
          autoPlay
          loop
          muted
        >
        </video>
      </div>
    </div>
  );
};

export default About;
