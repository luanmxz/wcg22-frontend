import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaClassificacaoComponent } from './tabela-classificacao.component';

describe('TabelaClassificacaoComponent', () => {
  let component: TabelaClassificacaoComponent;
  let fixture: ComponentFixture<TabelaClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaClassificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
