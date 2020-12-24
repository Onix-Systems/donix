import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerCardComponent } from './docker-card.component';

describe('DockerCardComponent', () => {
  let component: DockerCardComponent;
  let fixture: ComponentFixture<DockerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
