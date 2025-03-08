import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            I'm a passionate full-stack developer with expertise in building modern web applications.
            With a strong foundation in both front-end and back-end technologies, I create seamless,
            user-friendly experiences that solve real-world problems.
          </p>
          <p className="text-lg mb-4">
            My journey in software development began 5 years ago, and since then, I've worked on a
            variety of projects ranging from e-commerce platforms to data visualization tools.
            I'm constantly learning and adapting to new technologies to stay at the forefront of
            web development.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new hiking trails, reading about emerging
            tech trends, or contributing to open-source projects. I believe in writing clean,
            maintainable code and creating applications that provide exceptional user experiences.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400">University Name, 2015-2019</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-6">Work Experience</h3>
            <div className="mb-4">
              <h4 className="font-medium">Senior Frontend Developer</h4>
              <p className="text-gray-600 dark:text-gray-400">Company Name, 2021-Present</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Led the development of the company's flagship web application</li>
                <li>Implemented responsive designs and improved performance by 40%</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium">Full Stack Developer</h4>
              <p className="text-gray-600 dark:text-gray-400">Previous Company, 2019-2021</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed and maintained multiple client websites</li>
                <li>Created RESTful APIs and integrated third-party services</li>
                <li>Collaborated with design team to implement UI/UX improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 