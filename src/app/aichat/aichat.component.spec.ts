import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIchatComponent } from './aichat.component';

describe('AIchatComponent', () => {
  let component: AIchatComponent;
  let fixture: ComponentFixture<AIchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIchatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
