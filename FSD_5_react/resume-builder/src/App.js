import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Resume from './resume'; // Import the Resume component
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    professionalSummary: '',
    careerObjective: '',
    experience: [
      { organization: '', position: '', startDate: '', endDate: '', description: '', isCurrent: false },
    ],
    education: [
      { institution: '', degree: '', fieldOfStudy: '', grade: '', startDate: '', endDate: '', isCurrent: false },
    ],
    skills: '',
    achievements: [{ name: '', description: '' }],
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleGenerateResume = () => {
    // Pass formData as state when navigating to /resume
    navigate('/resume', { state: { formData } });
  };

  const handleGeneralInfoChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextChange = (e, field) => {
    const value = e.target.value.slice(0, 300);
    setFormData({ ...formData, [field]: value });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { organization: '', position: '', startDate: '', endDate: '', description: '', isCurrent: false },
      ],
    });
  };

  const removeExperience = () => {
    if (formData.experience.length > 1) {
      setFormData({
        ...formData,
        experience: formData.experience.slice(0, -1),
      });
    }
  };

  const handleExperienceChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedExperience = [...formData.experience];
    if (type === 'checkbox') {
      updatedExperience[index].isCurrent = checked;
      if (checked) {
        updatedExperience[index].endDate = ''; // Clear end date if currently working
      }
    } else {
      updatedExperience[index][name] = value;
    }
    setFormData({ ...formData, experience: updatedExperience });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { institution: '', degree: '', fieldOfStudy: '', grade: '', startDate: '', endDate: '', isCurrent: false },
      ],
    });
  };

  const removeEducation = () => {
    if (formData.education.length > 1) {
      setFormData({
        ...formData,
        education: formData.education.slice(0, -1),
      });
    }
  };

  const handleEducationChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedEducation = [...formData.education];
    if (type === 'checkbox') {
      updatedEducation[index].isCurrent = checked;
      if (checked) {
        updatedEducation[index].endDate = ''; // Clear end date if currently studying
      }
    } else {
      updatedEducation[index][name] = value;
    }
    setFormData({ ...formData, education: updatedEducation });
  };

  const addAchievement = () => {
    setFormData({
      ...formData,
      achievements: [...formData.achievements, { name: '', description: '' }],
    });
  };

  const handleAchievementChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAchievements = [...formData.achievements];
    updatedAchievements[index][name] = value;
    setFormData({ ...formData, achievements: updatedAchievements });
  };

  const steps = [
    {
      title: 'General Information',
      fields: (
        <>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleGeneralInfoChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleGeneralInfoChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleGeneralInfoChange}
            />
          </label>
        </>
      ),
    },
    {
      title: 'Professional Summary',
      fields: (
        <>
          <textarea
            maxLength="300"
            value={formData.professionalSummary}
            onChange={(e) => handleTextChange(e, 'professionalSummary')}
            style={{ resize: 'vertical', width: '100%' }}
          />
          <div>{formData.professionalSummary.length}/300</div>
        </>
      ),
    },
    {
      title: 'Career Objective',
      fields: (
        <>
          <textarea
            maxLength="300"
            value={formData.careerObjective}
            onChange={(e) => handleTextChange(e, 'careerObjective')}
            style={{ resize: 'vertical', width: '100%' }}
          />
          <div>{formData.careerObjective.length}/300</div>
        </>
      ),
    },
    {
      title: 'Experience and Internships',
      fields: (
        <>
          {formData.experience.map((exp, index) => (
            <div key={index}>
              <h4>Experience {index + 1}</h4>
              <label>
                Organization:
                <input
                  type="text"
                  name="organization"
                  value={exp.organization}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </label>
              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  value={exp.isCurrent ? '' : exp.endDate}
                  onChange={(e) => handleExperienceChange(index, e)}
                  disabled={exp.isCurrent}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, e)}
                  style={{ resize: 'vertical', width: '100%' }}
                />
              </label>
              <label>
                Currently Working Here:
                <input
                  type="checkbox"
                  checked={exp.isCurrent}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </label>
            </div>
          ))}
          <button onClick={addExperience}>Add Experience</button>
          <button onClick={removeExperience} disabled={formData.experience.length <= 1}>
            Remove Experience
          </button>
        </>
      ),
    },
    {
      title: 'Education',
      fields: (
        <>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <h4>Education {index + 1}</h4>
              <label>
                Institution:
                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </label>
              <label>
                Degree:
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </label>
              <label>
                Field of Study:
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </label>
              <label>
                Grade:
                <input
                  type="text"
                  name="grade"
                  value={edu.grade}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  value={edu.isCurrent ? '' : edu.endDate}
                  onChange={(e) => handleEducationChange(index, e)}
                  disabled={edu.isCurrent}
                />
              </label>
              <label>
                Currently Studying Here:
                <input
                  type="checkbox"
                  checked={edu.isCurrent}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </label>
            </div>
          ))}
          <button onClick={addEducation}>Add Education</button>
          <button onClick={removeEducation} disabled={formData.education.length <= 1}>
            Remove Education
          </button>
        </>
      ),
    },
    {
      title: 'Skills',
      fields: (
        <textarea
          maxLength="300"
          value={formData.skills}
          onChange={(e) => handleTextChange(e, 'skills')}
          style={{ resize: 'vertical', width: '100%' }}
        />
      ),
    },
    {
      title: 'Achievements',
      fields: (
        <>
          {formData.achievements.map((ach, index) => (
            <div key={index}>
              <h4>Achievement {index + 1}</h4>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={ach.name}
                  onChange={(e) => handleAchievementChange(index, e)}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={ach.description}
                  onChange={(e) => handleAchievementChange(index, e)}
                  style={{ resize: 'vertical', width: '100%' }}
                />
              </label>
            </div>
          ))}
          <button onClick={addAchievement}>Add Achievement</button>
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={
            <div className="box">
              <div className="box-content">
                <h2>{steps[step].title}</h2>
                {steps[step].fields}
              </div>
              <div className="box-footer">
                <button className="nav-button" onClick={handlePrevious} disabled={step === 0}>
                  Previous
                </button>
                {step === steps.length - 1 ? (
                  <button className="nav-button" onClick={handleGenerateResume}>
                    Generate Resume
                  </button>
                ) : (
                  <button className="nav-button" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            </div>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
