// components/Partners.js
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import p1 from '../assets/Group 1596.png'; 
import p2 from '../assets/Group 1598.png'// Import placeholder image

// Placeholder images
const partners = [
  { id: 1, image: p1, alt: 'Partner 1' },
  { id: 2, image: p2, alt: 'Partner 2' },
  { id: 3, image: p1, alt: 'Partner 3' },
  { id: 4, image: p2, alt: 'Partner 4' },
  { id: 5, image: p1, alt: 'Partner 5' },
  { id: 6, image: p2, alt: 'Partner 6' },
  { id: 7, image: p1, alt: 'Partner 7' },
];

// Styled components
const Section = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: white;
`;

const Title = styled.h2`
  text-decoration: underline;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
`;

const PartnerImage = styled.img`
  width: 20rem; /* Set your image width */
  height: auto;
  margin-right: 1rem; /* Space between images */
`;

const Looper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const InnerList = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
`;

const ListInstance = styled.div`
  display: flex;
  width: max-content;
  animation: slideAnimation linear infinite;
  animation-duration: ${(props) => props.speed}s;
  animation-direction: ${(props) => (props.direction === 'right' ? 'reverse' : 'normal')};
`;

const Keyframes = styled.div`
  @keyframes slideAnimation {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Partners = () => {
  return (
    <Section>
      <Title>Some of Our Trusted Partners</Title>
      <Looper>
        <Keyframes />
        <InnerList>
          <ListInstance speed={20} direction="left">
            {partners.map((partner) => (
              <PartnerImage key={partner.id} src={partner.image} alt={partner.alt} />
            ))}
          </ListInstance>
          <ListInstance speed={20} direction="left">
            {partners.map((partner) => (
              <PartnerImage key={partner.id + 7} src={partner.image} alt={partner.alt} />
            ))}
          </ListInstance>
        </InnerList>
      </Looper>
    </Section>
  );
};

export default Partners;
