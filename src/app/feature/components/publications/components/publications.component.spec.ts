import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationsComponent } from './publications.component';

describe('PublicationsComponent', () => {
  let component: PublicationsComponent;
  let fixture: ComponentFixture<PublicationsComponent>;

  beforeEach(async() => {
  await TestBed.configureTestingModule({
      declarations: [ PublicationsComponent ],
      imports:[ReactiveFormsModule, FormsModule],
    })
    .compileComponents();
  });

  it('should be exists publicationsComponent',() => {
    fixture = TestBed.createComponent(PublicationsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should returns valid form',() => {
    fixture = TestBed.createComponent(PublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls['name'];
    let email = component.form.controls['email'];
    let cell = component.form.controls['cell'];
    let publication = component.form.controls['publication'];

    name.setValue('juanita');
    email.setValue('juanita1195@gmail.com');
    cell.setValue('3122153055');
    publication.setValue('nuevo album');
    expect(component.form.invalid).toBeFalsy();
  });

  it('should returns invalid form',() => {
    fixture = TestBed.createComponent(PublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls['name'];
    let email = component.form.controls['email'];
    let cell = component.form.controls['cell'];
    let publication = component.form.controls['publication'];

    name.setValue('');
    email.setValue('juanita1195gmail.com');
    cell.setValue('3122153kj055');
    publication.setValue('');
    expect(component.form.invalid).toBeTruthy();
  });
});
