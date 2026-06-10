import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesComponent } from './paises.component';
import { of } from 'rxjs';
import { PaisesService } from '../../service/paises.service';

describe('PaisesComponent', () => {

  let component: PaisesComponent;
  let fixture: ComponentFixture<PaisesComponent>;
  let paisesServiceMock: any
  beforeEach(async () => {
      paisesServiceMock = {
      getContinentes: () => of(new Set(['Europe', 'Asia'])),
      getPaisesContinente: (continente: string) => of([
        { name: 'España', region: continente, population: 1, flags: {} }
      ])
    };
    await TestBed.configureTestingModule({
      imports: [PaisesComponent],
      providers: [
        { provide: PaisesService, useValue: paisesServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //test para ver si carga continentes en onInit
  it('debería cargar continentes al iniciar', () => {

    fixture.detectChanges(); // ejecuta ngOnInit

    expect(component.continentes().size).toBe(2);
    expect(component.continentes().has('Europe')).toBeTruthy();
    expect(component.continentes().has('Asia')).toBeTruthy();
  });
  // test para probar si carga paises en el evento change
  it('debería cargar países al seleccionar continente', () => {

    const event = { target: { value: 'Europe' } };

    component.cargarPaises(event);

    expect(component.paises().length).toBe(1);
    expect(component.paises()[0].region).toBe('Europe');
  });

  //test para el funcionamiento del combo
  it('debería pintar los continentes en el select', () => {

    fixture.detectChanges(); // 👈 ejecuta ngOnInit + render

    const html = fixture.nativeElement;

    const options = html.querySelectorAll('option');

    expect(options.length).toBe(2);
    expect(options[0].textContent).toContain('Europe');
    expect(options[1].textContent).toContain('Asia');
  });
  //test para el cambio en el combo
  it('debería cargar países al cambiar el select', () => {

    fixture.detectChanges();

    const html = fixture.nativeElement;
    const select = html.querySelector('select');

    // 👇 simulamos selección
    select.value = 'Europe';
    select.dispatchEvent(new Event('change'));

    // 👇 Angular procesa evento
    fixture.detectChanges();

    expect(component.paises().length).toBe(1);
  });
  //test para la tabla
  it('debería mostrar la tabla de países', () => {

    fixture.detectChanges();

    // 👇 cargamos datos manualmente
    component.paises.set([
      { name: { common: 'España', official:"España" }, region: 'Europe', population: "47000000", flags: {png:"",alt:""} }
    ]);

    fixture.detectChanges(); // 👈 actualizar HTML

    const html = fixture.nativeElement;

    const filas = html.querySelectorAll('tr');

    expect(filas.length).toBe(2);

    expect(filas[1].textContent).toContain('España');
  });
});
