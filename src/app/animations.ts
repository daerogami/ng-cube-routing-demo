import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animationDuration = '2s';
const animationType = 'ease-out';
// Add this as a preloaded resource in your head tag to ensure it is loaded before the app needs it
const imageBackgroundUrl =
  'https://ivrpa.org/wp-content/uploads/2016/08/360vr_matrix002-1024x512.jpg';

export const cubeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({
      overflow: 'hidden',
      background: `url("${imageBackgroundUrl}") repeat-x`,
      'background-size': '300vw 120vh',
      'background-position': '0vw -10vh',
    }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100vw',
          height: '100vh',
        }),
      ],
      { optional: true }
    ),
    query(
      '.container-3d',
      [
        style({
          width: '100vw',
          height: '100vh',
          perspective: '100vw',
          'transform-style': 'preserve-3d',
          transition: 'transform 0.5s',
        }),
      ],
      { optional: true }
    ),
    query(
      '.cube',
      [
        style({
          width: '100vw',
          height: '100vh',
          position: 'relative',
          'transform-style': 'preserve-3d',
          transform: 'translateZ(-50vw) scale(1) rotateY(90deg)',
        }),
      ],
      { optional: true }
    ),
    query(
      '.footer, .header',
      [
        style({
          overflow: 'hidden',
          'transform-style': 'preserve-3d',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ transform: 'translateZ(50vw)', background: 'white' })],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({
          transform: 'rotateY(-90deg) translateZ(50vw)',
          background: 'white'
        }),
        animateChild(),
      ],
      { optional: true }
    ),
    group([
      animate(
        `${animationDuration} ${animationType}`,
        style({
          'background-position': '100vw -10vh',
        })
      ),
      query(
        '.cube',
        [
          animate(
            `${animationDuration} ${animationType}`,
            keyframes([
              style({
                transform: 'translateZ(-50vw) scale(1) rotateY(90deg)',
              }),
              style({
                transform: 'translateZ(-60vw) scale(0.75) rotateY(45deg)',
              }),
              style({ transform: 'translateZ(-50vw) scale(1) rotateY(0deg)' }),
            ])
          ),
        ],
        { optional: true }
      ),
      query(
        '.footer, .header',
        [
          animate(
            `${animationDuration} ${animationType}`,
            keyframes([
              style({
                transform: 'translateZ(0)',
              }),
              style({ transform: 'translateZ(40vw)' }),
              style({ transform: 'translateZ(0)' }),
            ])
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          animate(
            `${animationDuration} ${animationType}`,
            keyframes([
                style({ 'box-shadow': 'inset 0 5vw 25vw -25vw transparent' }),
                style({ 'box-shadow': 'inset -200vw 5vw 25vw -25vw black' })
            ])
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            `${animationDuration} ${animationType}`,
            keyframes([
                style({ 'box-shadow': 'inset -75vw 5vw 25vw -25vw black' }),
                style({ 'box-shadow': 'inset 0 5vw 25vw -25vw transparent' })
            ])
          ),
        ],
        { optional: true }
      ), 
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
