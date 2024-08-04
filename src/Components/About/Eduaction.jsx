import React from 'react';
import styled from 'styled-components';

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TreeNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const TreeBranch = styled.div`
  position: relative;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    width: 1px;
    height: 10px;
    background-color: #ddd;
    transform: translateX(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    width: 1px;
    height: 10px;
    background-color: #ddd;
    transform: translateX(-50%);
    border-radius: 0 0 4px 4px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #666;
`;

const EducationTree = () => {
  return (
    <TreeContainer>
      <TreeNode>
        <TreeBranch>
          <Title>Education</Title>
        </TreeBranch>
        <TreeNode>
          <TreeBranch>
            <Subtitle>University College of Engineering (Anna University- Trichy)</Subtitle>
            <Paragraph>B.E. in Electronics and Electrical Engineering (CGPA: 8.02, First Class)</Paragraph>
          </TreeBranch>
          <TreeNode>
            <TreeBranch>
              <Subtitle>Guvi</Subtitle>
              <Paragraph>MERN Full-Stack Course</Paragraph>
            </TreeBranch>
            <TreeNode>
              <TreeBranch>
                <Subtitle>Aurobindo International School CBSE</Subtitle>
                <Paragraph>High School</Paragraph>
              </TreeBranch>
              <TreeBranch>
                <Subtitle>Sri Akilandeswari Vidyalaya</Subtitle>
                <Paragraph>Secondary Education</Paragraph>
              </TreeBranch>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </TreeContainer>
  );
}

export default EducationTree;
