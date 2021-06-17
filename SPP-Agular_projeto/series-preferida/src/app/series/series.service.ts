import { Injectable } from '@angular/core';
import { of, SchedulerLike } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie';


@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private listaSerie: any[] | SchedulerLike;
  private url = "http://localhost:8000/api/series";

  constructor(private http: HttpClient) {
    this.listaSerie = [
      {  id: 11, name: 'The Witcher', desc: 'O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens. Assista o quanto quiser.'  },
      {  id: 12, name: 'Lupin', desc: 'Baseada nos romances policiais de Maurice Leblanc, Lupin acompanha Assane Diop (Omar Sy), um homem que, 25 anos atrás, viu sua vida virar de cabeça para baixo com a morte de seu pai, então acusado injustamente de um crime.' },
      {  id: 13, name: 'O Mandaloriano', desc: 'Escrito e produzido por Jon Favreau, The Mandalorian é ambientada entre os acontecimentos de O Retorno de Jedi e O Despertar da Força, acompanhando um caçador de recompensas, similar ao popular Boba Fett, que vive em uma galáxia caótica após a derrocada do Império.' },
      {  id: 14, name: 'Castlevania', desc: "Castlevania é uma série de animação baseada no jogo japonês de 1989, Castlevania III: Dracula's Curse, da Konami. A série retrata Trevor Belmont, que defende o condado da Valáquia de Dracula e seu exército de demônios."},
      {  id: 15, name: 'WandaVision', desc: 'Após os eventos de "Vingadores: Endgame" (2019), Wanda Maximoff/Feiticeira Escarlate (Elizabeth Olsen) e Visão (Paul Bettany) se esforçam para levar uma vida normal no subúrbio e esconder seus poderes. ... Conforme o tempo passa, Wanda e Visão perdem o controle da situação, sem saber mais o que é real e o que é ficção.' },
      {  id: 16, name: 'La Casa De Papel', desc: 'Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano. Será o maior roubo da história, ou uma missão em vão?' },
      {  id: 17, name: 'Brooklyn 99', desc: 'A série gira em torno de Jake Peralta (Andy Samberg), um imaturo, mas talentoso, detetive da polícia de Nova York na fictícia 99. ª Delegacia do Brooklyn, que muitas vezes entra em conflito com seu novo comandante, o sério e severo capitão Raymond Holt (Andre Braugher)' },
      {  id: 18, name: 'Breaking bad', desc: 'Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ela retrata a vida do químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa grávida e dívidas intermináveis.' },
      {  id: 19, name: 'The Big Bang Theory', desc: 'Disponível na Warner Channel. Sinopse: Dois jovens gênios da física, Leonard (Johnny Galecki) e Sheldon Cooper (Jim Parsons), dividem um apartamento e são surpreendidos ao descobrir que a vizinha, Penny (Kaley Cuoco), é uma loira não tão inteligente. Leonard acredita que pode conquistar a jovem.' },
      {  id: 20, name: 'Loki', desc: 'Loki, a nova série Original da Marvel Studios. O Deus da Trapaça está de volta. Assista filmes, séries e Originais da Marvel. Só no Disney+. Saiba mais em DisneyPlus.com. Novos lançamentos. Clássicos de sempre. Originais Disney+ Originais exclusivos.' },

    ];
   }

   getSeries(){
    this.http.get<Serie[]>(this.url);
    return of(this.listaSerie);
  }

  getSerie(id:  number | string) {
    return this.getSeries().pipe(
      map((series: Serie[]) => series.find(serie => serie.id === +id)!)
    );
  }
}
