import React from 'react';

const Education = () => {
  const portfolioItems = [
    {
      title: "Diploma in Electrical Engineering",
      description: "Shyamoli Ideal Polytechnic Institute",
      year: "2005 to 2006",
    },
    {
      title: "Secondary School Certificate School",
      description: "Khirati A-K High School Board: Dhaka, Group: Science",
      year: "2000",
    },
    {
      title: "Diploma in Sound Engineering and recording from Sound Machine",
      description: "Diploma in Sound Engineering and recording from Sound Machine",
      year: "2005 to 2007",
    },
    {
      title: "Diploma in Nazrul Giti",
      description: "Bulbul Lalitkala Academy”( BAFA )",
      year: "2004 to 2005",
    },
    {
      title: "British Broadcast Channel (BBC)",
      description: "3 months special course on broadcast patching, broadcast maintenance, audio-video panel setup",
      year: "2008",
    },
  ];

  return (
    <>
      <div className='container-fluid' id='education'>
        <h1 className="text-center mb-5">Education</h1>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card position-relative" style={{ height: "100%", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Education;
