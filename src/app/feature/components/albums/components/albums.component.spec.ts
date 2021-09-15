import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsComponent } from './albums.component';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async() => {
  await TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      imports:[HttpClientModule],
    })
    .compileComponents();
  });

  it('should be exists AlbumsComponent', () => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
