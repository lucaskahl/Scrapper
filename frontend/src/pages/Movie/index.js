import React from 'react';

import {
  Container, Trailer, MovieInfo, VisualInformation, TextInformation,
} from './styles';

const Movie = () => (
  <Container>
    <Trailer>
      <img src="http://lrmonline.com/inc/uploads/2018/10/Wonder-Woman-2.jpg" />
    </Trailer>
    <MovieInfo>
      <VisualInformation>
        <img
          src="https://www.dhresource.com/0x0s/f2-albu-g8-M00-C6-A7-rBVaV1ycQS6AbBclAALBFfobGyM302.jpg/wonder-woman-decora-o-de-parede-art-silk.jpg"
          alt="Wonder Woman poster"
        />
      </VisualInformation>
      <TextInformation>
        <h3>Wonder Woman</h3>
        <p>PG-13 | 2h 21min | Action, Adventure, Fantasy</p>
        <p>
          <strong>Director:</strong> <span>Patty Jenkins</span>
        </p>
        <p>
          <strong>Writter:</strong> <span>Allan Heinberg (screenplay), Zack Snyder (story by)</span>
        </p>
      </TextInformation>
    </MovieInfo>
  </Container>
);

export default Movie;
