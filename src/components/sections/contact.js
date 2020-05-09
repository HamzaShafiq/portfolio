import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import { Link } from 'gatsby';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
    ${media.desktop`font-size: ${fontSizes.smish};`};
  }
  &:after {
    display: none;
  }
`;
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const StyledContactLink = styled.span`
  margin: 0 auto;
  justify-content: center;
  font-weight: 600;
  color: #ccd6f6;
  font-size: 20px;
  margin-right: 60px;
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledTitle>{title}</StyledTitle>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      {/*<StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        Say Hello
      </StyledEmailLink>*/}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledContactLink>Email:</StyledContactLink>{' '}
        <span style={{ textAlign: 'left', width: '51%' }}> hamzashafiq44@gmail.com </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledContactLink>Skype:</StyledContactLink>{' '}
        <span style={{ textAlign: 'left', width: '51%' }}> hamza.shafiq21 </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledContactLink>Mobile:</StyledContactLink>{' '}
        <span style={{ textAlign: 'left', width: '51%' }}> 923034075191 </span>
      </div>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
