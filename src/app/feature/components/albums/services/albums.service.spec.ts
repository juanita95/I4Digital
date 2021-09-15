import { getTestBed, TestBed } from '@angular/core/testing';
import { AlbumsService } from './albums.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AlbumsService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    let album = [];
    const service: AlbumsService = TestBed.get(AlbumsService);
    album = [{
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  ];

    service.getAllAlbums().subscribe(albums =>{
      expect(albums).toEqual(album);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
    expect(req.request.method).toBe('GET');
    req.flush(album);
  });
});
