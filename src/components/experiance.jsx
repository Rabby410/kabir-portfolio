import React from "react";

const Experience = () => {
  const portfolioItems = [
    {
      title: "iCircles LLC USA Bangladesh Ltd",
      description: "Worked as a Video editor and Creative Director on Broadcast and operation (Video editing, 2D)",
      year: "2021 to 30/05/2023",
    },
    {
      title: "Saptahik Proman",
      description: "Worked as a Senior Crime Reporter (Representative)",
      year: "2019 to Till",
    },
    {
      title: "Mystic Lense Production",
      description: "Video editor & Creative Director on Broadcast and operation (Video editing, 2D Animation, Sound editing, Graphic design)",
      year: "2012 to 2016",
    },
    {
      title: "Channel 24 (Media / News Company)",
      description: "Worked as an On-Line Sound Editor",
      year: "2017 to 2019",
    },
    {
      title: "Boishakhi Television (Boishakhi Tv) (Media / News Company)",
      description: "Worked as an On-Line Sound Editor in Boishakhi Television",
      year: "01/01/2008 to 23/07/2012",
    },
    {
      title: "Mohona Television (Mohona Tv) (Media / News Company)",
      description: "Worked as an On-Line Sound Editor in Mohona Television",
      year: "01/08/2012 to 27/10/2012",
    },
  ];

  return (
    <div className="container-fluid" id="experience">
      <h1 className="text-center mb-5">Experiance</h1>
      <div className="row">
        {portfolioItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ height: "100%" }}>
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
  );
};

export default Experience;
