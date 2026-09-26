import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { OrdersPage } from './orders.page';
import { OrdersService } from '../../services/orders/orders.service';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { ORDERS } from '../../data/orders.interface';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPage],
      providers: [
        {
          provide: OrdersService,
          useValue: {
            getAllOrders: jest.fn().mockReturnValue(of(ORDERS)),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
  });

  it('debería crear el componente', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrders al iniciar', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS));

    fixture.detectChanges();

    expect(ordersService.getAllOrders).toHaveBeenCalled();
  });

  it('debería asignar las órdenes recibidas del servicio', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS));

    fixture.detectChanges();

    expect(component.orders).toEqual(ORDERS);
  });

  it('debería pasar las órdenes al componente orders-table', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS));

    fixture.detectChanges();

    const ordersTable = fixture.debugElement.query(
      By.directive(OrdersTableComponent)
    );

    expect(ordersTable).toBeTruthy();
    expect(ordersTable.componentInstance.orders).toEqual(ORDERS);
  });

  it('debería manejar el error cuando falla getAllOrders', () => {
    const error = new Error('Error al obtener las órdenes');

    jest
      .spyOn(ordersService, 'getAllOrders')
      .mockReturnValue(throwError(() => error));

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation();

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(consoleErrorSpy).toHaveBeenCalledWith(error);

    consoleErrorSpy.mockRestore();
  });
});