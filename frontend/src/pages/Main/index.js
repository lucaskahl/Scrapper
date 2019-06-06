import React, { Component } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container, Movies, TextInformation, VisualInformation, Ratio, Ticket,
} from './styles';

class Main extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const response = await api.get();
  };

  render() {
    return (
      <>
        <Header />
        <Container>
          <Movies>
            <VisualInformation>
              <Ratio>8.3</Ratio>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/A11Agdd1EQL._SL1500_.jpg"
                alt="Guardians of the galaxy poster"
              />
            </VisualInformation>
            <TextInformation>
              <h3>Guardians of the Galaxy</h3>
              <p>PG-13 | 2h 16min | Action, Adventure, Sci-FI</p>
              <p>
                Director: <span>James Gunn</span>
              </p>
              <Ticket />
            </TextInformation>
          </Movies>
          <Movies>
            <VisualInformation>
              <Ratio>8.1</Ratio>
              <img
                src="https://www.dhresource.com/0x0s/f2-albu-g8-M00-C6-A7-rBVaV1ycQS6AbBclAALBFfobGyM302.jpg/wonder-woman-decora-o-de-parede-art-silk.jpg"
                alt="Wonder Woman poster"
              />
            </VisualInformation>
            <TextInformation>
              <h3>Wonder Woman</h3>
              <p>PG-13 | 2h 21min | Action, Adventure, Sci-FI</p>
              <p>
                Director: <span>Patty Jenkins</span>
              </p>
              <Ticket />
            </TextInformation>
          </Movies>
          <Movies>
            <VisualInformation>
              <Ratio>8.1</Ratio>
              <img
                src="https://www.dhresource.com/0x0s/f2-albu-g8-M00-C6-A7-rBVaV1ycQS6AbBclAALBFfobGyM302.jpg/wonder-woman-decora-o-de-parede-art-silk.jpg"
                alt="Wonder Woman poster"
              />
            </VisualInformation>
            <TextInformation>
              <h3>Wonder Woman</h3>
              <p>PG-13 | 2h 21min | Action, Adventure, Sci-FI</p>
              <p>
                Director: <span>Patty Jenkins</span>
              </p>
              <Ticket />
            </TextInformation>
          </Movies>
          <Movies>
            <VisualInformation>
              <Ratio>8.1</Ratio>
              <img
                src="https://www.dhresource.com/0x0s/f2-albu-g8-M00-C6-A7-rBVaV1ycQS6AbBclAALBFfobGyM302.jpg/wonder-woman-decora-o-de-parede-art-silk.jpg"
                alt="Wonder Woman poster"
              />
            </VisualInformation>
            <TextInformation>
              <h3>Wonder Woman</h3>
              <p>PG-13 | 2h 21min | Action, Adventure, Sci-FI</p>
              <p>
                Director: <span>Patty Jenkins</span>
              </p>
              <Ticket />
            </TextInformation>
          </Movies>
        </Container>
      </>
    );
  }
}

export default Main;
