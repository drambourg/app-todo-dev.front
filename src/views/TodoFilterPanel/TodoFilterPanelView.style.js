import styled from '@emotion/styled';

export const FilterPanelContainer = styled.div(
  `    
    border-bottom: 1px solid lightgrey;
    padding:10px;
    display: grid;
    grid-auto-flow: column;
    @media (max-width: 1024px) {
        grid-auto-flow: row;
        }
    `
);

export const FilterTitle = styled.div(
  `    
  margin:5px;
  font-size:18px;
    `
);
