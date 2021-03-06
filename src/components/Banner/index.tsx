import React from 'react';
import { Container, Text } from './style';

interface BannerProps {
  pinCount: number;
  onClick: () => void;
}

const Banner = ({ pinCount, onClick }: BannerProps) => (
  <Container onClick={onClick}>
    <Text>Showing {pinCount} pins</Text>
    {pinCount !== 0 ? <Text>Click to focus</Text> : null}
  </Container>
);

export default Banner;
