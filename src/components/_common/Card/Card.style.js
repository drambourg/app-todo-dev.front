import styled from '@emotion/styled';

export const Card = styled.div`
    flex: 0 1 25%;
    border: solid 1px #f1f1f1;
    padding: 10px;
    width: 200px;
    height: 250px;
    margin: 20px;
    box-shadow: 6px 6px 12px 0px rgba(220,220,220,0.52);
    -webkit-box-shadow: 6px 6px 12px 0px rgba(220,220,220,0.52);
    -moz-box-shadow: 6px 6px 12px 0px rgba(220,220,220,0.52);
    display:grid;
    grid-template-areas:
        "header"
        "content"
        "footer";
    grid-template-rows: 1fr 1fr 40px;
    @media (max-width: 1024px) {
    flex: 0 1 40%;
    }
    @media (max-width: 758px) {
    flex: 0 1 100%;
    }
  }`;

export const CardHeader = styled.div`
  grid-area: header;
  background-color: #e7eae6;
  text-align: center;
  padding: 3px;
  align-self: center;
`;
export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;
export const CardBody = styled.div`
  grid-area: content;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  display:grid;
  justify-content: center;
  text-align: center;
  justify-items: center;
  align-items: center;
  padding: 20px;
`;

export const CardBadge = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  background-color: #ffc107;
  border-radius: 20px;
  width: min-content;
  padding: 5px 10px;
  margin: 10px 0;
`;

export const CardFooter = styled.div`
  grid-area: footer;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
`;
