import { TestBed } from '@angular/core/testing';

import { PaisesService } from './paises.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('PaisesService', () => {
  let service: PaisesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]});
    service = TestBed.inject(PaisesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('debería obtener países', async () => {

    const mockPaises = [
      { name: { common: 'España' }, region: 'Europe', population: 47000000, flags: {} },
      { name: { common: 'Francia' }, region: 'Europe', population: 67000000, flags: {} }
    ];

    const promise = firstValueFrom(service.getPaises());
    //se indica que se utilizará para la llamada a la url el httpmock,
    //que el método será GET y que el resultado será mockpaises.
    const req = httpMock.expectOne(service.url); //  intercepta la petición
    expect(req.request.method).toBe('GET');

    req.flush(mockPaises); //  responde con datos falsos
    //En base a lo anterior, se hace la suposición de lo que debería ser el resultado
    const resultado = await promise;

    expect(resultado.length).toBe(2);
  });
  it('debería obtener continentes únicos', async () => {

    const mockPaises = [
      { region: 'Europe' },
      { region: 'Asia' },
      { region: 'Europe' }
    ];

    const promise = firstValueFrom(service.getContinentes());

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');
    req.flush(mockPaises);

    const resultado = await promise;

    expect(resultado.length).toBe(2);
    expect(resultado['Europe']).toBe(true);
    expect(resultado['Asia']).toBe(true);
  });
  it('debería obtener países por continente', async () => {

    const mockPaises = [
      { name: { common: 'España' }, region: 'Europe', population: 47000000, flags: {} },
      { name: { common: 'Francia' }, region: 'Europe', population: 67000000, flags: {} },
      { name: { common: 'Canada' }, region: 'America', population: 3343434, flags: {} }
    ];

    const promise = firstValueFrom(service.getPaisesContinente("Europe"));

    const req = httpMock.expectOne(service.url); //  intercepta la petición
    expect(req.request.method).toBe('GET');

    req.flush(mockPaises); //  responde con datos falsos

    const resultado = await promise;

    expect(resultado.length).toBe(2);
  });
});
