import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Animals from '../pages/Animals';

describe('Testes da tela Animals', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Animals/>
      </BrowserRouter>
    );
  });

  it('Existe card em Animals?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Animals?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Animals?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

});