import React from "react";
import PropTypes from "prop-types";
import { Statistic, StatisticTitle } from "./Statistics.styled";

export const StatisticsProps = ({title, statistics}) => {
  console.log(title);
  return (
    <Statistic>
       {title && <StatisticTitle>{title}</StatisticTitle>}
      <ul className="stat-list">
        {statistics.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </Statistic>
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


