import React from 'react';
import { Property } from 'csstype';
import { StyledCard } from './Card.styled';

interface IProps {
  title?: string;
  children?: React.ReactNode;
  align?: Property.TextAlign;
  className?: string;
}

export const Card = ({ title, children, className }: IProps) => (
  <StyledCard className={`${className}`}>
    <div className="card-title">{title}</div>
    {children}
  </StyledCard>
);
