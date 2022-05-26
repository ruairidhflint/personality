import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { backendURL } from '../Config/endpoint';

const Recruitment = () => {
  const [applicants, setApplicants] = useState([]);
  const columns = [
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'temperament_type',
      text: 'Type',
    },
    {
      dataField: 'temperament_results.E',
      text: 'E',
    },
    {
      dataField: 'temperament_results.I',
      text: 'I',
    },
    {
      dataField: 'temperament_results.S',
      text: 'S',
    },
    {
      dataField: 'temperament_results.N',
      text: 'N',
    },
    {
      dataField: 'temperament_results.F',
      text: 'F',
    },
    {
      dataField: 'temperament_results.T',
      text: 'T',
    },
    {
      dataField: 'temperament_results.J',
      text: 'J',
    },
    {
      dataField: 'temperament_results.P',
      text: 'P',
    },
    {
      dataField: 'created_at',
      text: 'Date',
      formatter: (cell) => format(new Date(cell), 'MM/dd/yyyy'),
    },
  ];

  useEffect(() => {
    axios
      .get(`${backendURL}/api/personality/all_applicants`)
      .then((res) => {
        console.log(res.data);
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StyledIntroductionContainer>
      <StyledIntroTitle>Recruitment</StyledIntroTitle>
      <p>
        Below are all the current results submitted via the CP+R temperament profiler by applicants. Once a recruitment
        drive has come to an end or is temporarily paused, please contact Team Geek to remove old data or applicants no
        longer involved in the process.
      </p>
      <BootstrapTable keyField="_id" data={applicants} columns={columns} trClassName="tr-row" />
    </StyledIntroductionContainer>
  );
};

const StyledIntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.9rem;
  color: ${(props) => props.theme.mediumgrey};

  p {
    color: ${(props) => props.theme.darkgrey};
    text-align: center;
    line-height: 2.3rem;
    width: 90%;
    margin-bottom: 2.5rem;
  }

  table {
    width: 120%;
    margin: 0 auto;
    text-align: left;
  }
  th {
    color: ${(props) => props.theme.darkgrey};
    padding-bottom: 1.5rem;
  }

  td {
    padding-bottom: 1rem;
  }

  @media (max-width: 950px) {
    padding: 1.5rem;
  }
`;

const StyledIntroTitle = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.orange};
  margin: 2rem;
`;

export default Recruitment;
