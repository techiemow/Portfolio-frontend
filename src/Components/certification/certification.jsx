import React from 'react';
import certificate from "../../assets/img/certificate.png";
import styled, { keyframes } from 'styled-components';
import certificates from './Certifications';

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled-components for styling
const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Individual certificate card
const CertificateContainer = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease-in-out;
  }
`;

const ProgramName = styled.h2`
  color: #343a40;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CertificateInfo = styled.p`
  color: #495057;
  margin: 0.5rem 0;
`;

const CredentialLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

// Style for the image to match the text height
const CertificateImage = styled.img`
  width:70px;
  margin-right: 0.5rem;
`;

// Programs component that renders the list of certificates
function Programs() {
  return (
    <div className="container my-5 p-5">

     <HeaderContainer>
        <CertificateImage src={certificate} alt="Certificate Icon" />
        <h1 style={{ color: "#343a40", marginBottom: "1rem", marginTop: "1rem", textAlign: "center" }}>
          Certifications
        </h1>
      </HeaderContainer>

      {/* Render the certificates */}
    <CertificateGrid>
    {certificates.map((cert, index) => (
      <CertificateContainer key={index}>
        <ProgramName>{cert.programName}</ProgramName>
        <CertificateInfo>Issuer: {cert.issuer}</CertificateInfo>
        <CertificateInfo>Issued: {cert.issueDate}</CertificateInfo>
        <CertificateInfo>Credential ID: {cert.credentialId}</CertificateInfo>
        <CredentialLink href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
          Verify Certificate
        </CredentialLink>
      </CertificateContainer>
    ))}
  </CertificateGrid>
  </div>
  );
}

export default Programs;
