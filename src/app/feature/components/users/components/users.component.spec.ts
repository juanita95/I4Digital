import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from '../services/users.service';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async() => {
  await  TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
       imports:[HttpClientModule],
    })
    .compileComponents();
  });

  it('should be exists UsersComponent', () => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
