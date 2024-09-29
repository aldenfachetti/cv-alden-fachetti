import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 bg-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex md:space-x-8">
          {/* Left Column */}
          <div className="md:w-1/3">
            <div className="h-full bg-white text-gray-700 shadow-lg rounded-lg">
              {/* Avatar and Info */}
              <div className="relative">
                <Image
                  src="/assets/avatar-fachetti.png"
                  alt="Avatar Maguinho"
                  className="w-full rounded-t-lg"
                  width={400}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4">
                  <h2 className="text-white text-2xl">Gabriel Fachetti</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="flex items-center mb-4">
                  <i className="fa fa-briefcase text-teal-600 mr-3"></i>Software
                  Engineer
                </p>
                <p className="flex items-center mb-4">
                  <i className="fa fa-home text-teal-600 mr-3"></i>Köln, DE
                </p>
                <p className="flex items-center mb-4">
                  <i className="fa fa-envelope text-teal-600 mr-3"></i>
                  example@mail.com
                </p>
                <p className="flex items-center mb-4">
                  <i className="fa fa-phone text-teal-600 mr-3"></i>+01 1345
                  9324598
                </p>
                <hr className="my-4" />

                <h3 className="text-xl font-bold mb-4">
                  <i className="fa fa-asterisk text-teal-600 mr-3"></i>Skills
                </h3>
                <p>Front-end</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p>Back-end</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p>Devops</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p>UX/UI</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl text-teal-600 font-bold mb-4">
                <i className="fa fa-suitcase mr-3"></i>Work Experience
              </h2>
              <div className="mb-6">
                <h5 className="font-bold text-lg">
                  Front End Developer / w3schools.com
                </h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>Jan 2015 -{" "}
                  <span className="bg-teal-600 text-white px-2 rounded-lg">
                    Current
                  </span>
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                  in deserunt aspernatur est reprehenderit sunt hic.
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">
                  Web Developer / something.com
                </h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>Mar 2012 - Dec 2014
                </p>
                <p className="mt-2">
                  Consectetur adipisicing elit. Praesentium magnam consectetur
                  vel in deserunt aspernatur est reprehenderit sunt hic.
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">
                  Graphic Designer / designsomething.com
                </h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>Jun 2010 - Mar 2012
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl text-teal-600 font-bold mb-4">
                <i className="fa fa-certificate mr-3"></i>Education
              </h2>
              <div className="mb-6">
                <h5 className="font-bold text-lg">W3Schools.com</h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>Forever
                </p>
                <p className="mt-2">
                  Web Development! All I need to know in one place
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">London Business School</h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>2013 - 2015
                </p>
                <p className="mt-2">Master Degree</p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">School of Coding</h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>2010 - 2013
                </p>
                <p className="mt-2">Bachelor Degree</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
