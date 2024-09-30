import React from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './Resume.css';

const Resume = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Access the passed data

  const downloadPDF = () => {
    const input = document.getElementById('resume'); // Get the resume element

    // Set a white background style to the resume div before capturing it
    input.style.backgroundColor = "#fff"; // White background

    html2canvas(input, { scale: 2 }).then((canvas) => { 
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 page format

      const imgWidth = pdf.internal.pageSize.getWidth(); // Width for A4 page
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height based on aspect ratio
      const pageHeight = pdf.internal.pageSize.getHeight(); // Height of the PDF page

      let heightLeft = imgHeight;
      let position = 0;

      // Add the first image
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Loop to add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage(); // Add a new page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); // Add the image
        heightLeft -= pageHeight; // Decrease height left
      }

      pdf.save('resume.pdf'); // Save the PDF with the specified name
    }).catch(error => {
      console.error("Error generating PDF: ", error);
    }).finally(() => {
      // Reset the background color after generating PDF
      input.style.backgroundColor = ""; // Reset to original
    });
  };

  if (!formData) {
    return <div>No data available. Please fill out the form first.</div>; // Fallback message
  }

  return (
    <div className="resume" id="resume"> {/* Added id for capturing PDF */}
      <h1>{formData.name}</h1>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>

      <h2>Professional Summary</h2>
      <p>{formData.professionalSummary}</p>

      <h2>Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <p>{exp.position} at {exp.organization}</p>
          <p>{exp.startDate} - {exp.endDate || 'Present'}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
          <p>{edu.institution} ({edu.startDate} - {edu.endDate || 'Present'})</p>
          <p>Grade: {edu.grade}</p>
        </div>
      ))}

      <h2>Skills</h2>
      <p>{formData.skills}</p>

      <h2>Achievements</h2>
      {formData.achievements.map((ach, index) => (
        <div key={index}>
          <h3>{ach.name}</h3>
          <p>{ach.description}</p>
        </div>
      ))}

      {/* Download Button */}
      <button onClick={downloadPDF} className="download-button">
        Download Resume as PDF
      </button>
    </div>
  );
};

export default Resume;
