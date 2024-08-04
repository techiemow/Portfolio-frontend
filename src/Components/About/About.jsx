import React from 'react';
import styled from 'styled-components';
import educationData from './education';


const NodeWrapper = styled.div`
    padding-left: ${props => props.level * 20}px;
    border-left: 2px solid #ccc;
    margin: 5px 0;
`;

const NodeTitle = styled.div`
    font-weight: bold;
    color: #333;
`;

const NodeContent = styled.div`
    color: #666;
    margin-left: 10px;
`;

const TreeContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const TreeNode = ({ data, level = 0 }) => {
    return (
        <NodeWrapper level={level}>
            {Object.keys(data).map(key => (
                <div key={key}>
                    <NodeTitle>{key}</NodeTitle>
                    {typeof data[key] === 'object' ? (
                        <TreeNode data={data[key]} level={level + 1} />
                    ) : (
                        <NodeContent>{data[key]}</NodeContent>
                    )}
                </div>
            ))}
        </NodeWrapper>
    );
};

const About = () => {
    return (
        <TreeContainer>
            <h2>Education</h2>
            <TreeNode data={educationData} />
        </TreeContainer>
    );
};

export default About;
