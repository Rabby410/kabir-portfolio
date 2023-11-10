import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5" id="contact">
      <div className="row">
        <div className="col-md-6">
          <div style={styles.formContainer}>
            <h2>Contact Me</h2>
            <form style={styles.form}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-details" style={styles.detailsContainer}>
            <h2>My Details</h2>
            <div className="mb-3">
              <strong>Name:</strong> Md.Kabir Hossain (Nayan)
            </div>
            <div className="mb-3">
              <strong>Phone:</strong> +8801936906837, +8801985461866
            </div>
            <div className="mb-3">
              <strong>Email:</strong> nm13gtxx@gmail.com
            </div>
            <div className="mb-3">
              <strong>Address:</strong> House-49/10, South Pirerbag Agargaon
              Taltola (near Mukti Housing) Mirpur, Dhaka, Bangladesh-1216
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/kabir.jpg"
                alt="Profile"
                style={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailsContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  imageContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover', // Ensure the image covers the entire circle
  },
};

export default Contact;
