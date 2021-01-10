import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const DannyResults = () => {
  const [applicants, setApplicants] = useState([]);
  const columns = [
    {
      dataField: 'fields.name',
      text: 'Name',
    },
    {
      dataField: 'fields.temperament_type',
      text: 'Closest Fit',
    },
    {
      dataField: 'fields.extroversion',
      text: 'E',
    },
    {
      dataField: 'fields.introversion',
      text: 'I',
    },
    {
      dataField: 'fields.sensing',
      text: 'S',
    },
    {
      dataField: 'fields.intuition',
      text: 'N',
    },
    {
      dataField: 'fields.thinking',
      text: 'T',
    },
    {
      dataField: 'fields.feeling',
      text: 'F',
    },
    {
      dataField: 'fields.judging',
      text: 'J',
    },
    {
      dataField: 'fields.perceiving',
      text: 'P',
    },
    {
      dataField: 'fields.self_EI',
      text: 'Self E/I',
    },
    {
      dataField: 'fields.self_SN',
      text: 'Self S/N',
    },
    {
      dataField: 'fields.self_TF',
      text: 'Self T/F',
    },
    {
      dataField: 'fields.self_JP',
      text: 'Self J/P',
    },
    // {
    //   dataField: 'created_at',
    //   text: 'Date',
    //   formatter: (cell) => format(new Date(cell), 'MM/dd/yyyy'),
    // },
  ];

  useEffect(() => {
    axios
      .get('/.netlify/functions/getRecords')
      .then((res) => {
        setApplicants(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StyledIntroductionContainer>
      <StyledIntroTitle>Results</StyledIntroTitle>
      <p>
        Below are all the current results submitted via the link supplied. The
        self perception scores are from 1-6. Eg. On the E/I scale, 1 is extreme
        Extroversion, 2 is moderate and 3 is just shy of the center. 4, 5 and 6
        would continue onto the Introversion side with 6 being extreme
        introversion.
      </p>
      <BootstrapTable
        keyField="_id"
        data={applicants}
        columns={columns}
        trClassName="tr-row"
      />
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
    width: 60%;
    margin-bottom: 2.5rem;
  }

  table {
    width: 80%;
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

export default DannyResults;
