import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FENConverter } from 'src/app/chess-logic/FENConverter';

@Injectable({
  providedIn: 'root'
})
export class ChessBoardService {
  public chessBoardState$ = new BehaviorSubject<string>(FENConverter.initalPosition);
  public reset$ = new Subject<void>();
}