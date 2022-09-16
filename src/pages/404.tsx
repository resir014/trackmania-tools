import * as React from 'react';
import CustomErrorPage from './_error';

export default function FourOhFour() {
  return <CustomErrorPage statusCode={404} />;
}
