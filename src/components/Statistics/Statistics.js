import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercentage,
} from './Statistics.styled';

export const StatisticsProps = ({ title, statistics }) => {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {statistics.map(({ id, label, percentage }) => (
          <StatisticItem key={id} backgroundColor={getRandomHexColor()}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercentage>{percentage}%</StatisticPercentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

StatisticsProps.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
