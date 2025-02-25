import InnovatorImage from '../../../images/innovator.png';

export default function About() {
  return (
    <section id="about" className="w-full py-16 bg-white" style={{ fontFamily: 'Times New Roman' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={InnovatorImage}
            alt="Assuah Robotics Innovator"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">About the Innovator</h2>
          <p className="text-lg text-green-600 leading-relaxed mb-4">
            John Assuah is the founder of Assuah’s Robotics, and an electrical/electronic engineer who innovates tech gadgets to help improve people’s lives. Born in 1991, John in his younger years displayed an incredible talent for electronics and a tendency to do a good job at it. This drove him to Takoradi Technical Institute in 2007, where he further developed his talents for electronics under his mentor and tutor, Nana Mburaenu (Mr. Joseph Abaidoo Myles). He proceeded to develop and grow under that mentorship, all the while materializing his ideas into practical reality. John then continued his education in Takoradi Polytechnic, (now Takoradi Technical University) from 2012 to 2015, where he achieved his National Higher Diploma in Electrical and Electronic Engineering (HND), then completed his national service in the same university as a teaching assistant (T.A), where he had the opportunity to impart his knowledge to both students and new teachers alike. John then went ahead to acquire his Bachelor in Technology in Electrical and Electronic Engineering (B-TECH) in 2016 to 2018. Since then he has been working as an Electronic Project Consultant under his mentor Nana Mburaenu (Mr. Joseph Abaidoo Myles), and also as an Integrated Circuit Programmer and Designer for the last 12 years, helping out HND, Degree and PHD certified professionals and teachers in the engineering field.
          </p>
          <p className="text-lg text-green-600 leading-relaxed">
            His groundbreaking solutions continue to set new standards in worker protection, bridging technology with practical safety solutions that make a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
