const { Button, Icon } = window.DesignSystem_c698ec;
Object.assign(window,{Button,Icon});

// Language is read from the page itself (<html lang="uk|ru">) — no cookies,
// no IP/browser-based redirects. Each language is a distinct static page;
// this only controls which strings the SHARED components (header, footer,
// quote form) render on that page.
function currentLang(){ return document.documentElement.lang === 'ru' ? 'ru' : 'uk'; }
const I18N = {
  uk: {
    location: 'м. Харків, бульвар Дмитра Антоновича 2',
    navHome: 'Головна', navServices: 'Наші Послуги', navWarranty: 'Гарантії', contactCta: "Зв'язатись з нами",
    burgerLabel: 'Меню', switchTo: 'RU',
    brandLabel: 'Магазин', mfrLabel: 'виробник',
    brandNote: 'Металопластикові та алюмінієві конструкції під розмір вашого проєму. Виготовлення, доставка й монтаж по Харкову та області',
    servicesColTitle: 'Послуги', contactsColTitle: 'Контакти', hoursColTitle: 'Графік роботи',
    hoursNote: 'Перерва з 13:00–14:00', weekday: 'Пн–Пт', saturday: 'Сб', sunday: 'Нд', dayOff: 'вихідний',
    copyright: '© 2026 ВІКНА-ОБРІЙ. Всі права захищені', privacyLink: 'Політика конфіденційності',
    addr1: 'м. Харків, бульвар', addr2: 'Дмитра Антоновича, 2',
    formHeadingDefault: 'Заповніть заявку на прорахунок',
    formLedeDefault: 'Усі поля обов’язкові. Зв’яжемося протягом 24 годин, безкоштовно прорахуємо вартість і проконсультуємо',
    ctaDefault: 'Відправити заявку', fieldName: "Ім'я", namePlaceholder: 'Олександр', fieldPhone: 'Телефон', fieldService: 'Послуга',
    serviceChoose: 'Обрати послугу', errorName: "Вкажіть ім'я", errorPhoneUnit: 'Введіть ', errorPhoneSuffix: ' цифр номера',
    errorService: 'Оберіть послугу', sendingLabel: 'Надсилаємо…',
    submitErrorMsg: 'Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам',
    checkboxLabel: 'Погоджуюсь з обробкою персональних даних',
    successTitle: 'Дякуємо за звернення',
    successText: 'Ваша заявка успішно надіслана. Ми зв’яжемося з вами протягом 24 годин',
    successSign: 'З любов’ю, ЕКІПАЖ', modalClose: 'Закрити',
    tickerText: 'Працюємо за програмою єВідновлення',
    certsHeading: 'Сертифікати якості', certsHint: 'Натисніть на сертифікат, щоб відкрити на повний екран',
    lbClose: 'Закрити', lbPrev: 'Назад', lbNext: 'Вперед', mapTitlePrefix: 'Мапа — ', mapsHl: 'uk',
    services: ['Металопластикові вікна','Виїзний офіс','Двері','Склопакети','Відкоси','Жалюзі та рулонні штори'],
    footerServices: ['Металопластикові вікна','Двері','Склопакети','Відкоси','Жалюзі та рулонні штори','Виїзний офіс'],
    serviceHrefs: {'Металопластикові вікна':'pvc-windows.html','Двері':'doors.html','Склопакети':'glass-units.html','Відкоси':'window-slopes.html','Жалюзі та рулонні штори':'blinds-and-roller-shades.html','Виїзний офіс':'index.html#services'}
  },
  ru: {
    location: 'г. Харьков, бульвар Дмитрия Антоновича 2',
    navHome: 'Главная', navServices: 'Наши услуги', navWarranty: 'Гарантии', contactCta: 'Связаться с нами',
    burgerLabel: 'Меню', switchTo: 'UA',
    brandLabel: 'Магазин', mfrLabel: 'производитель',
    brandNote: 'Металлопластиковые и алюминиевые конструкции по размеру вашего проёма. Изготовление, доставка и монтаж по Харькову и области',
    servicesColTitle: 'Услуги', contactsColTitle: 'Контакты', hoursColTitle: 'График работы',
    hoursNote: 'Перерыв с 13:00–14:00', weekday: 'Пн–Пт', saturday: 'Сб', sunday: 'Вс', dayOff: 'выходной',
    copyright: '© 2026 ВІКНА-ОБРІЙ. Все права защищены', privacyLink: 'Политика конфиденциальности',
    addr1: 'г. Харьков, бульвар', addr2: 'Дмитрия Антоновича, 2',
    formHeadingDefault: 'Оставьте заявку на расчёт',
    formLedeDefault: 'Все поля обязательны. Свяжемся в течение 24 часов, бесплатно рассчитаем стоимость и проконсультируем',
    ctaDefault: 'Отправить заявку', fieldName: 'Имя', namePlaceholder: 'Александр', fieldPhone: 'Телефон', fieldService: 'Услуга',
    serviceChoose: 'Выбрать услугу', errorName: 'Укажите имя', errorPhoneUnit: 'Введите ', errorPhoneSuffix: ' цифр номера',
    errorService: 'Выберите услугу', sendingLabel: 'Отправляем…',
    submitErrorMsg: 'Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам',
    checkboxLabel: 'Согласен(на) с обработкой персональных данных',
    successTitle: 'Спасибо за обращение',
    successText: 'Ваша заявка успешно отправлена. Мы свяжемся с вами в течение 24 часов',
    successSign: 'С любовью, ЕКІПАЖ', modalClose: 'Закрыть',
    tickerText: 'Работаем по программе «єВідновлення»',
    certsHeading: 'Сертификаты качества', certsHint: 'Нажмите на сертификат, чтобы открыть на весь экран',
    lbClose: 'Закрыть', lbPrev: 'Назад', lbNext: 'Вперёд', mapTitlePrefix: 'Карта — ', mapsHl: 'ru',
    services: ['Металлопластиковые окна','Выездной офис','Двери','Стеклопакеты','Откосы','Жалюзи и рулонные шторы'],
    footerServices: ['Металлопластиковые окна','Двери','Стеклопакеты','Откосы','Жалюзи и рулонные шторы','Выездной офис'],
    serviceHrefs: {'Металлопластиковые окна':'plastikovye-okna-harkov','Двери':'plastikovye-dveri-harkov','Стеклопакеты':'steklopakety-harkov','Откосы':'otkosy-na-okna-harkov','Жалюзи и рулонные шторы':'zhalyuzi-i-rulonnye-shtory-harkov','Выездной офис':'okna-i-dveri-harkov#services'}
  }
};
function t(key){ return I18N[currentLang()][key]; }

// Adjacent flex/inline items separated only by CSS `gap` have zero actual
// whitespace between them in the DOM text stream — plain textContent-style
// extraction (search snippets, screen readers, copy/paste) runs them
// together with no separator at all. Interspersing a literal space text
// node fixes that for any such extraction, while staying fully invisible
// visually: a whitespace-only text node between flex children is treated
// as display:none per the flexbox spec, so it adds no visible gap.
function spaced(nodes){ return nodes.flatMap((n,i)=> i===0 ? [n] : [' ', n]); }

const SERVICE_HREFS = {'Металопластикові вікна':'pvc-windows.html','Двері':'doors.html','Склопакети':'glass-units.html','Відкоси':'window-slopes.html','Жалюзі та рулонні штори':'blinds-and-roller-shades.html','Виїзний офіс':'index.html#services'};
const SLOT_PHOTOS = {"cut-veka-70":"assets/images/slots/profile-cross-section-veka-70.webp","cut-veka-82":"assets/images/slots/profile-cross-section-veka-82.webp","cut-ultra-60":"assets/images/slots/profile-cross-section-ultra-60.webp","cut-ultra-72":"assets/images/slots/profile-cross-section-ultra-72.webp","cut-wds-ad-76":"assets/images/slots/profile-cross-section-wds-ad-76.webp","cut-wds-md-76":"assets/images/slots/profile-cross-section-wds-md-76.webp","door-0-0-0":"assets/images/slots/door-photo-0-0-0.webp","door-0-0-1":"assets/images/slots/door-photo-0-0-1.webp","door-0-1-0":"assets/images/slots/door-photo-0-1-0.webp","door-0-1-1":"assets/images/slots/door-photo-0-1-1.webp","door-0-2-0":"assets/images/slots/door-photo-0-2-0.webp","door-0-2-1":"assets/images/slots/door-photo-0-2-1.webp","door-0-3-0":"assets/images/slots/door-photo-0-3-0.webp","door-0-3-1":"assets/images/slots/door-photo-0-3-1.webp","dr-hero":"assets/images/slots/doors-hero.webp","door-1-0-0":"assets/images/slots/door-photo-1-0-0.webp","door-1-0-1":"assets/images/slots/door-photo-1-0-1.webp","door-1-1-0":"assets/images/slots/MetaLuxe_M492_outer.png","door-1-1-1":"assets/images/slots/MetaLuxe_M492_internal.png","door-1-2-0":"assets/images/slots/door-photo-1-2-0.webp","door-1-2-1":"assets/images/slots/door-photo-1-2-1.webp","door-1-3-0":"assets/images/slots/door-photo-1-3-0.webp","door-1-3-1":"assets/images/slots/door-photo-1-3-1.webp","door-1-4-0":"assets/images/slots/door-photo-1-4-0.webp","door-1-4-1":"assets/images/slots/door-photo-1-4-1.webp","door-1-5-0":"assets/images/slots/door-photo-1-5-0.webp","door-1-5-1":"assets/images/slots/door-photo-1-5-1.webp","door-1-6-0":"assets/images/slots/door-photo-1-6-0.webp","door-1-6-1":"assets/images/slots/door-photo-1-6-1.webp","door-1-7-0":"assets/images/slots/door-photo-1-7-0.webp","door-1-7-1":"assets/images/slots/door-photo-1-7-1.webp","door-1-8-0":"assets/images/slots/door-photo-1-8-0.webp","door-1-8-1":"assets/images/slots/door-photo-1-8-1.webp","door-1-9-0":"assets/images/slots/door-photo-1-9-0.webp","door-1-9-1":"assets/images/slots/door-photo-1-9-1.webp","door-1-10-0":"assets/images/slots/door-photo-1-10-0.webp","door-1-10-1":"assets/images/slots/door-photo-1-10-1.webp","door-2-0-0":"assets/images/slots/door-photo-2-0-0.webp","door-2-1-0":"assets/images/slots/door-photo-2-1-0.webp","door-2-2-0":"assets/images/slots/door-photo-2-2-0.webp","gu-hero":"assets/images/slots/glass-units-hero.webp","bl-hero":"assets/images/slots/jalusie-1.jpg","roll-r01":"assets/images/slots/roller-shade-01.webp","roll-r02":"assets/images/slots/roller-shade-02.webp","roll-r03":"assets/images/slots/roller-shade-03.webp","roll-r04":"assets/images/slots/roller-shade-04.webp","roll-r05":"assets/images/slots/roller-shade-05.webp","roll-r06":"assets/images/slots/roller-shade-06.webp","roll-r07":"assets/images/slots/roller-shade-07.webp","roll-r08":"assets/images/slots/roller-shade-08.webp","roll-r09":"assets/images/slots/roller-shade-09.webp","roll-r10":"assets/images/slots/roller-shade-10.webp","roll-r11":"assets/images/slots/roller-shade-11.webp","roll-r12":"assets/images/slots/roller-shade-12.webp","roll-r13":"assets/images/slots/roller-shade-13.webp","roll-r14":"assets/images/slots/roller-shade-14.webp","roll-r15":"assets/images/slots/roller-shade-15.webp","roll-r16":"assets/images/slots/roller-shade-16.webp","roll-r17":"assets/images/slots/roller-shade-17.webp","roll-r18":"assets/images/slots/roller-shade-18.webp","roll-d01":"assets/images/slots/day-night-shade-01.webp","roll-d02":"assets/images/slots/day-night-shade-02.webp","roll-d03":"assets/images/slots/day-night-shade-03.webp","roll-d04":"assets/images/slots/day-night-shade-04.webp","roll-d05":"assets/images/slots/day-night-shade-05.webp","roll-d06":"assets/images/slots/day-night-shade-06.webp","roll-d07":"assets/images/slots/day-night-shade-07.webp","roll-d08":"assets/images/slots/day-night-shade-08.webp","roll-d09":"assets/images/slots/day-night-shade-09.webp","roll-d10":"assets/images/slots/day-night-shade-10.webp","roll-d11":"assets/images/slots/day-night-shade-11.webp","roll-d12":"assets/images/slots/day-night-shade-12.webp","roll-d13":"assets/images/slots/day-night-shade-13.webp","roll-d14":"assets/images/slots/day-night-shade-14.webp","roll-d15":"assets/images/slots/day-night-shade-15.webp","roll-d16":"assets/images/slots/day-night-shade-16.webp","roll-p01":"assets/images/slots/pleated-shade-01.webp","roll-p02":"assets/images/slots/pleated-shade-02.webp","roll-p03":"assets/images/slots/pleated-shade-03.webp","roll-p04":"assets/images/slots/pleated-shade-04.webp","roll-p05":"assets/images/slots/pleated-shade-05.webp","roll-p06":"assets/images/slots/pleated-shade-06.webp","roll-p07":"assets/images/slots/pleated-shade-07.webp","roll-p08":"assets/images/slots/pleated-shade-08.webp","roll-p09":"assets/images/slots/pleated-shade-09.webp","roll-p10":"assets/images/slots/pleated-shade-10.webp","roll-p11":"assets/images/slots/pleated-shade-11.webp","roll-p12":"assets/images/slots/pleated-shade-12.webp","roll-p13":"assets/images/slots/pleated-shade-13.webp","roll-p14":"assets/images/slots/pleated-shade-14.webp","roll-p15":"assets/images/slots/pleated-shade-15.webp","roll-p16":"assets/images/slots/pleated-shade-16.webp","roll-p17":"assets/images/slots/pleated-shade-17.webp","roll-p18":"assets/images/slots/pleated-shade-18.webp","roll-p19":"assets/images/slots/pleated-shade-19.webp","roll-rm01":"assets/images/slots/roman-shade-01.webp","roll-rm02":"assets/images/slots/roman-shade-02.webp","roll-rm03":"assets/images/slots/roman-shade-03.webp","roll-rm04":"assets/images/slots/roman-shade-04.webp","roll-w01":"assets/images/slots/wooden-blind-01.webp","roll-w02":"assets/images/slots/wooden-blind-02.webp","roll-h01":"assets/images/slots/horizontal-blind-01.webp","roll-h02":"assets/images/slots/horizontal-blind-02.webp","roll-h03":"assets/images/slots/horizontal-blind-03.webp","roll-h04":"assets/images/slots/horizontal-blind-04.webp","roll-v01":"assets/images/slots/vertical-blind-01.webp","roll-m01":"assets/images/slots/skylight-blind-01.webp"};
function slotSrc(id){ return SLOT_PHOTOS[id] || null; }
// Renders the photo when one exists; a flat labelled plate when it doesn't —
// so no upload affordance ever reaches the published site.
function Photo(props){
  const src = props.src || slotSrc(props.id);
  if(src) return React.createElement('image-slot', Object.assign({},props,{src}));
  return React.createElement('div',{className:'photo-pending',key:props.key||props.id},React.createElement('span',null,props.placeholder||''));
}
function openQuote(){ window.dispatchEvent(new CustomEvent('open-quote')); }
function pexels(id){ return 'https://images.pexels.com/photos/'+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w=900'; }

function InstagramIcon(){
  return React.createElement('svg',{width:17,height:17,viewBox:'0 0 24 24',fill:'none'},
    React.createElement('rect',{x:3,y:3,width:18,height:18,rx:5,stroke:'currentColor',strokeWidth:1.6}),
    React.createElement('circle',{cx:12,cy:12,r:4.2,stroke:'currentColor',strokeWidth:1.6}),
    React.createElement('circle',{cx:17,cy:7,r:1,fill:'currentColor'})
  );
}
function FacebookIcon(){
  return React.createElement('svg',{width:17,height:17,viewBox:'0 0 24 24',fill:'none'},
    React.createElement('path',{d:'M14.6 21V13.2h2.6l.5-3.2h-3.1V8c0-.9.3-1.5 1.7-1.5h1.5V3.6C17 3.5 15.9 3.4 14.7 3.4c-2.6 0-4.3 1.6-4.3 4.4v2.2H7.8v3.2h2.6V21z',fill:'currentColor'})
  );
}
function TwitterIcon(){
  return React.createElement('svg',{width:17,height:17,viewBox:'0 0 24 24',fill:'none'},
    React.createElement('path',{d:'M21 5.3c-.7.4-1.5.6-2.3.8.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1-.7-.8-1.7-1.2-2.8-1.2-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.1-.2-5.9-1.6-7.7-4-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.4 0 1.9 1.3 3.5 3.1 3.8-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.7 3.7 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-1-.1 1.8 1.2 4 1.9 6.3 1.9 7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z',fill:'currentColor'})
  );
}
function UkraineFlagIcon(){
  return React.createElement('svg',{width:32,height:24,viewBox:'0 0 32 24'},
    React.createElement('rect',{width:32,height:12,fill:'#0057B7'}),
    React.createElement('rect',{y:12,width:32,height:12,fill:'#FFD700'})
  );
}
function Ticker(){
  const text = t('tickerText');
  const item = (key) => React.createElement('div',{className:'ticker-item',key},
    React.createElement('img',{src:'assets/images/diia-solid.svg',alt:'Дія'}),
    React.createElement('span',null,text)
  );
  const items = [...Array(5)].map((_,i)=>item('a'+i)).concat([...Array(5)].map((_,i)=>item('b'+i)));
  return React.createElement('div',{className:'ticker'},
    React.createElement('div',{className:'ticker-track'}, items)
  );
}

function Header(){
  const [open, setOpen] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);
  const [entering, setEntering] = React.useState(false);
  const [wrapH, setWrapH] = React.useState(0);
  const wrapRef = React.useRef(null);
  React.useEffect(()=>{
    const heroEl = document.querySelector('.hero');
    function measure(){ if(wrapRef.current) setWrapH(wrapRef.current.offsetHeight); }
    function onScroll(){
      const threshold = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : (wrapRef.current ? wrapRef.current.offsetHeight : 80);
      setSticky(window.scrollY >= threshold);
    }
    measure(); onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', measure);
    return ()=>{ window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', measure); };
  },[]);
  React.useEffect(()=>{
    if(sticky){
      setEntering(true);
      const id1 = requestAnimationFrame(()=>{ const id2 = requestAnimationFrame(()=> setEntering(false)); wrapRef.current && (wrapRef.current._raf2 = id2); });
      return ()=>cancelAnimationFrame(id1);
    } else {
      setEntering(false);
    }
  },[sticky]);
  const [svcOpen, setSvcOpen] = React.useState(false);
  const [mSvcOpen, setMSvcOpen] = React.useState(false);
  const dropRef = React.useRef(null);
  React.useEffect(()=>{
    function onDoc(e){ if(dropRef.current && !dropRef.current.contains(e.target)) setSvcOpen(false); }
    document.addEventListener('mousedown', onDoc);
    return ()=>document.removeEventListener('mousedown', onDoc);
  },[]);
  const lg = currentLang();
  const d = I18N[lg];
  const services = d.services;
  const homeHref = lg==='ru' ? 'okna-i-dveri-harkov' : 'index.html';
  const warrantyHref = lg==='ru' ? 'okna-i-dveri-harkov#standards-section' : 'index.html#standards-section';
  const altUrl = typeof document!=='undefined' ? document.documentElement.dataset.altUrl : null;
  const chevron = React.createElement('svg',{width:12,height:12,viewBox:'0 0 12 12',fill:'none','aria-hidden':true},
    React.createElement('path',{d:'M2 4.25 6 8.25l4-4',stroke:'currentColor',strokeWidth:1.6,strokeLinecap:'square'})
  );
  const langSwitch = altUrl ? React.createElement('a',{className:'lang-switch',href:altUrl},d.switchTo) : null;
  return React.createElement(React.Fragment,null,
    React.createElement('div',{ref:wrapRef,className:'header-wrap'+(sticky?' sticky':'')+(entering?' entering':'')},
    React.createElement('header',{className:'header',id:'site-header'},
      React.createElement('div',{className:'header-left'},
        React.createElement('a',{className:'logo',href:homeHref},'ВІКНА-ОБРІЙ'),
        React.createElement('div',{className:'location'},
          React.createElement(Icon,{name:'map-pin',size:19,color:'var(--gray-400)'}),
          React.createElement('span',null,d.location)
        )
      ),
      React.createElement('nav',{className:'nav'},
        ...spaced([
          React.createElement('a',{key:'home',href:homeHref},d.navHome),
          React.createElement('div',{key:'svc',className:'nav-drop',ref:dropRef},
            React.createElement('button',{className:'nav-svc'+(svcOpen?' open':''),'aria-expanded':svcOpen,onClick:()=>setSvcOpen(!svcOpen)},d.navServices,chevron),
            svcOpen ? React.createElement('div',{className:'nav-menu'},
              spaced(services.map(s => React.createElement('a',{href:d.serviceHrefs[s]||'#',key:s,onClick:()=>setSvcOpen(false)},s)))
            ) : null
          ),
          React.createElement('a',{key:'warranty',href:warrantyHref},d.navWarranty),
          ...(langSwitch ? [langSwitch] : [])
        ])
      ),
      React.createElement('div',{className:'header-right'},
        React.createElement('div',{className:'socials'},
          React.createElement('a',{href:'https://www.instagram.com/vikna_obriy?igsh=bXNrNzM2Ym9vc29q&utm_source=ig_contact_invite',target:'_blank',rel:'noopener','aria-label':'Instagram'}, React.createElement(InstagramIcon)),
          React.createElement('a',{href:'https://www.facebook.com/share/1CsLXBLn8r/',target:'_blank',rel:'noopener','aria-label':'Facebook'}, React.createElement(FacebookIcon)),
          React.createElement('a',{href:'https://x.com/viknaobriy',target:'_blank',rel:'noopener','aria-label':'Twitter'}, React.createElement(TwitterIcon))
        ),
        React.createElement(Button,{variant:'secondary',size:'md',icon:'phone',iconPosition:'left',onClick:openQuote},d.contactCta)
      ),
      React.createElement('button',{className:'burger'+(open?' open':''),'aria-label':d.burgerLabel,onClick:()=>setOpen(!open)},
        React.createElement('span'),React.createElement('span'),React.createElement('span')
      )
    ),
    React.createElement('div',{className:'mobile-menu'+(open?' open':'')+(open&&mSvcOpen?' tall':'')},
      React.createElement('div',{className:'mobile-menu-inner'},
        React.createElement('div',{className:'mobile-location'},
          React.createElement(Icon,{name:'map-pin',size:17,color:'var(--gray-400)'}),
          React.createElement('span',null,d.location)
        ),
        React.createElement('nav',{className:'mobile-nav'},
          ...spaced([
            React.createElement('a',{key:'home',href:homeHref,onClick:()=>setOpen(false)},d.navHome),
            React.createElement('button',{key:'svc',className:'mobile-svc'+(mSvcOpen?' open':''),'aria-expanded':mSvcOpen,onClick:()=>setMSvcOpen(!mSvcOpen)},d.navServices,chevron),
            ...(mSvcOpen ? [React.createElement('div',{key:'sub',className:'mobile-sub'},
              spaced(services.map(s => React.createElement('a',{href:d.serviceHrefs[s]||'#',key:s,onClick:()=>{setOpen(false);setMSvcOpen(false);}},s)))
            )] : []),
            React.createElement('a',{key:'warranty',href:warrantyHref,onClick:()=>setOpen(false)},d.navWarranty),
            ...(altUrl ? [React.createElement('a',{key:'switch',href:altUrl,onClick:()=>setOpen(false)},d.switchTo)] : [])
          ])
        ),
        React.createElement('div',{className:'mobile-socials'},
          React.createElement('a',{href:'https://www.instagram.com/vikna_obriy?igsh=bXNrNzM2Ym9vc29q&utm_source=ig_contact_invite',target:'_blank',rel:'noopener','aria-label':'Instagram'}, React.createElement(InstagramIcon)),
          React.createElement('a',{href:'https://www.facebook.com/share/1CsLXBLn8r/',target:'_blank',rel:'noopener','aria-label':'Facebook'}, React.createElement(FacebookIcon)),
          React.createElement('a',{href:'https://x.com/viknaobriy',target:'_blank',rel:'noopener','aria-label':'Twitter'}, React.createElement(TwitterIcon))
        ),
        React.createElement('div',{className:'mobile-cta'},
          React.createElement(Button,{variant:'secondary',size:'md',icon:'phone',iconPosition:'left',onClick:openQuote},d.contactCta)
        )
      )
    )
    ),
    sticky ? React.createElement('div',{style:{height:wrapH}}) : null
  );
}


const countries = [
  {code:'UA',dial:'+380',name:'Україна',len:9,groups:[2,2,3,2]},
  {code:'PL',dial:'+48',name:'Польща',len:9,groups:[3,3,3]},
  {code:'DE',dial:'+49',name:'Німеччина',len:11,groups:[4,7]},
  {code:'CZ',dial:'+420',name:'Чехія',len:9,groups:[3,3,3]},
  {code:'SK',dial:'+421',name:'Словаччина',len:9,groups:[3,3,3]},
  {code:'US',dial:'+1',name:'США',len:10,groups:[3,3,4]},
  {code:'CA',dial:'+1',name:'Канада',len:10,groups:[3,3,4]},
  {code:'GB',dial:'+44',name:'Велика Британія',len:10,groups:[4,6]},
  {code:'TR',dial:'+90',name:'Туреччина',len:10,groups:[3,3,2,2]},
  {code:'IT',dial:'+39',name:'Італія',len:10,groups:[3,3,4]},
  {code:'ES',dial:'+34',name:'Іспанія',len:9,groups:[3,3,3]},
  {code:'FR',dial:'+33',name:'Франція',len:9,groups:[1,2,2,2,2]},
  {code:'NL',dial:'+31',name:'Нідерланди',len:9,groups:[3,3,3]},
  {code:'BE',dial:'+32',name:'Бельгія',len:9,groups:[3,3,3]},
  {code:'AT',dial:'+43',name:'Австрія',len:10,groups:[3,3,4]},
  {code:'CH',dial:'+41',name:'Швейцарія',len:9,groups:[2,3,2,2]},
  {code:'PT',dial:'+351',name:'Португалія',len:9,groups:[3,3,3]},
  {code:'IE',dial:'+353',name:'Ірландія',len:9,groups:[2,3,4]},
  {code:'SE',dial:'+46',name:'Швеція',len:9,groups:[3,3,3]},
  {code:'NO',dial:'+47',name:'Норвегія',len:8,groups:[3,2,3]},
  {code:'DK',dial:'+45',name:'Данія',len:8,groups:[2,2,2,2]},
  {code:'FI',dial:'+358',name:'Фінляндія',len:9,groups:[2,3,4]},
  {code:'RO',dial:'+40',name:'Румунія',len:9,groups:[3,3,3]},
  {code:'HU',dial:'+36',name:'Угорщина',len:9,groups:[2,3,4]},
  {code:'BG',dial:'+359',name:'Болгарія',len:9,groups:[3,3,3]},
  {code:'GR',dial:'+30',name:'Греція',len:10,groups:[3,3,4]},
  {code:'HR',dial:'+385',name:'Хорватія',len:9,groups:[3,3,3]},
  {code:'SI',dial:'+386',name:'Словенія',len:8,groups:[2,3,3]},
  {code:'LT',dial:'+370',name:'Литва',len:8,groups:[3,2,3]},
  {code:'LV',dial:'+371',name:'Латвія',len:8,groups:[4,4]},
  {code:'EE',dial:'+372',name:'Естонія',len:8,groups:[4,4]},
  {code:'MD',dial:'+373',name:'Молдова',len:8,groups:[3,2,3]}
];

function FlagSwatch({code,w=22}){
  const cc = code.toLowerCase();
  return React.createElement('img',{className:'flag',src:'https://unpkg.com/flag-icons@7.2.3/flags/4x3/'+cc+'.svg',alt:code,width:w,height:Math.round(w*0.75),loading:'eager',decoding:'async',
    onError:e=>{ const t=e.currentTarget; if(t.dataset.fb) return; t.dataset.fb='1'; t.src='https://flagcdn.com/w40/'+cc+'.png'; }});
}

function phDigits(raw,c){
  let d = String(raw).replace(/\D/g,'');
  const dial = c.dial.replace('+','');
  if(d.length > c.len && d.startsWith(dial)) d = d.slice(dial.length);
  while(d.length > c.len && d[0] === '0') d = d.slice(1);
  if(d.length > c.len && d.startsWith(dial)) d = d.slice(dial.length);
  return d.slice(0,c.len);
}
function phFormat(d,c){
  const out = []; let i = 0;
  for(const n of c.groups){ if(i >= d.length) break; out.push(d.slice(i,i+n)); i += n; }
  if(i < d.length) out.push(d.slice(i));
  return out.join(' ');
}
function phMask(c){
  return c.groups.map(n=>'X'.repeat(n)).join(' ');
}

const SERVICES_PICKER = {
  uk: [
    {label:'Металопластикові вікна'},
    {label:'ВИЇЗНИЙ ОФІС',accent:true},
    {label:'Двері'},
    {label:'Склопакети'},
    {label:'Відкоси'},
    {label:'Жалюзі та рулонні штори'}
  ],
  ru: [
    {label:'Металлопластиковые окна'},
    {label:'ВЫЕЗДНОЙ ОФИС',accent:true},
    {label:'Двери'},
    {label:'Стеклопакеты'},
    {label:'Откосы'},
    {label:'Жалюзи и рулонные шторы'}
  ]
};
const services = SERVICES_PICKER.uk;


function DropMenu({cls,children}){
  const ref = React.useRef(null);
  const [more,setMore] = React.useState(false);
  const [box,setBox] = React.useState(null);
  const [up,setUp] = React.useState(false);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    function fit(){
      const r = el.parentElement.getBoundingClientRect();
      const below = window.innerHeight - r.bottom - 20, above = r.top - 20;
      const flip = below < 200 && above > below;
      setUp(flip);
      setBox(Math.max(160,Math.min(flip?above:below,flip?260:420)));
    }
    const upd = ()=>setMore(el.scrollHeight - el.scrollTop - el.clientHeight > 4);
    fit(); upd();
    const raf = requestAnimationFrame(upd);
    el.addEventListener('scroll',upd);
    window.addEventListener('resize',fit);
    return ()=>{ cancelAnimationFrame(raf); el.removeEventListener('scroll',upd); window.removeEventListener('resize',fit); };
  },[]);
  React.useEffect(()=>{ const el = ref.current; if(el) setMore(el.scrollHeight - el.scrollTop - el.clientHeight > 4); },[box]);
  return React.createElement('div',{ref:ref,className:'drop-menu'+(cls?' '+cls:'')+(more?' more':'')+(up?' up':''),style:box?{maxHeight:box+'px'}:null},children);
}

function Checkbox({checked,onChange,children}){
  return React.createElement('label',{className:'checkbox-field'},
    React.createElement('input',{type:'checkbox',className:'checkbox-input',checked,onChange:e=>onChange(e.target.checked)}),
    React.createElement('span',{className:'checkbox-box'}, checked ? React.createElement(Icon,{name:'check',size:12,color:'var(--white)'}) : null),
    React.createElement('span',{className:'checkbox-label'},children)
  );
}

function QuoteForm({heading,lede,cta,onClose}){
  const lg = currentLang();
  const d = I18N[lg];
  const pickerServices = SERVICES_PICKER[lg];
  const [sent,setSent] = React.useState(false);
  const [name,setName] = React.useState('');
  const [phone,setPhone] = React.useState('');
  const [country,setCountry] = React.useState(countries[0]);
  const [service,setService] = React.useState('');
  const [ccOpen,setCcOpen] = React.useState(false);
  const [svcOpen,setSvcOpen] = React.useState(false);
  const [errors,setErrors] = React.useState({});
  const [sending,setSending] = React.useState(false);
  const [submitError,setSubmitError] = React.useState('');
  const [agreed,setAgreed] = React.useState(false);
  const nameOk = name.trim().length > 1;
  const phoneOk = phone.length === country.len;
  const serviceOk = !!service;
  const err = {
    name: errors.name && !nameOk ? errors.name : null,
    phone: errors.phone && !phoneOk ? errors.phone : null,
    service: errors.service && !serviceOk ? errors.service : null
  };
  async function submit(){
    const errs = {};
    if(!nameOk) errs.name = d.errorName;
    if(!phoneOk) errs.phone = d.errorPhoneUnit + country.len + d.errorPhoneSuffix;
    if(!serviceOk) errs.service = d.errorService;
    setErrors(errs);
    if(Object.keys(errs).length > 0) return;
    setSubmitError('');
    setSending(true);
    try{
      const res = await fetch('/api/submit-lead',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name: name.trim(),
          phone: country.dial + ' ' + phFormat(phone,country),
          service,
          page: document.documentElement.dataset.page || document.title
        })
      });
      if(!res.ok) throw new Error('submit-lead failed: ' + res.status);
      setSent(true);
    }catch(e){
      setSubmitError(d.submitErrorMsg);
    }finally{
      setSending(false);
    }
  }
  const star = (ok) => ok ? null : React.createElement('i',null,'*');
  if(sent) return React.createElement('div',{className:'modal-success'},
    React.createElement('div',{className:'tick'}, React.createElement(Icon,{name:'check',size:26,color:'var(--color-primary)'})),
    React.createElement('h2',null,d.successTitle),
    React.createElement('p',null,'Ваша заявка успішно надіслана. Ми зв\u2019яжемося з вами протягом 24 годин'),
    React.createElement('p',{className:'sign'},d.successSign)
  );
  return React.createElement('div',null,
    React.createElement('h2',null,heading||d.formHeadingDefault),
    React.createElement('p',{className:'lede'},lede||d.formLedeDefault),
    React.createElement('div',{className:'field'+(err.name?' err':'')},
      React.createElement('label',null,d.fieldName,star(nameOk)),
      React.createElement('input',{type:'text',placeholder:d.namePlaceholder,autoComplete:'name',value:name,onChange:e=>setName(e.target.value.replace(/[0-9]/g,''))}),
      err.name ? React.createElement('span',{className:'msg'},err.name) : null
    ),
    React.createElement('div',{className:'field'+(err.phone?' err':'')},
      React.createElement('label',null,d.fieldPhone,star(phoneOk)),
      React.createElement('div',{className:'drop'},
        React.createElement('div',{className:'phone-row'},
          React.createElement('button',{type:'button',className:'cc-btn',onClick:()=>{setCcOpen(!ccOpen);setSvcOpen(false);}},
            React.createElement(FlagSwatch,{code:country.code}),
            React.createElement('span',null,country.dial),
            React.createElement(Icon,{name:'chevron-down-thin',size:14,color:'var(--gray-500)'})
          ),
          React.createElement('input',{type:'tel',inputMode:'numeric',autoComplete:'tel',placeholder:phMask(country),value:phFormat(phone,country),
            onChange:e=>setPhone(phDigits(e.target.value,country)),
            onKeyDown:e=>{ if(e.key.length===1 && !/[0-9]/.test(e.key) && !e.metaKey && !e.ctrlKey) e.preventDefault(); }})
        ),
        ccOpen ? React.createElement(DropMenu,null,
          countries.map(c=>React.createElement('button',{type:'button',key:c.code+c.name,className:c.code===country.code&&c.name===country.name?'on':'',onClick:()=>{setCountry(c);setPhone(p=>phDigits(p,c));setCcOpen(false);}},
            React.createElement(FlagSwatch,{code:c.code}),
            React.createElement('span',null,c.name),
            React.createElement('em',null,c.dial)
          ))
        ) : null
      ),
      err.phone ? React.createElement('span',{className:'msg'},err.phone) : null
    ),
    React.createElement('div',{className:'field'+(err.service?' err':'')},
      React.createElement('label',null,d.fieldService,star(serviceOk)),
      React.createElement('div',{className:'drop'},
        React.createElement('button',{type:'button',className:'picker-btn'+(service?'':' placeholder'),onClick:()=>{setSvcOpen(!svcOpen);setCcOpen(false);}},
          React.createElement('span',null,service||d.serviceChoose),
          React.createElement(Icon,{name:'chevron-down-thin',size:16,color:'var(--gray-500)'})
        ),
        svcOpen ? React.createElement(DropMenu,{cls:'svc'},
          pickerServices.map(s=>React.createElement('button',{type:'button',key:s.label,className:s.accent?'accent':'',onClick:()=>{setService(s.label);setSvcOpen(false);}},s.label))
        ) : null
      ),
      err.service ? React.createElement('span',{className:'msg'},err.service) : null
    ),
    React.createElement(Checkbox,{checked:agreed,onChange:setAgreed},d.checkboxLabel),
    React.createElement('div',{className:'modal-submit'},
      submitError ? React.createElement('p',{className:'submit-error'},submitError) : null,
      React.createElement(Button,{variant:'secondary',size:'lg',icon:sending?null:'arrow-right',iconPosition:'right',disabled:sending||!agreed,onClick:submit},
        sending ? React.createElement(React.Fragment,null, React.createElement('span',{className:'btn-spinner','aria-hidden':'true'}), d.sendingLabel) : (cta||d.ctaDefault)
      )
    )
  );
}


const PHONES = ['066 12 67 495','096 97 098 43'];


function QuoteModal(){
  const [open,setOpen] = React.useState(false);
  const [seq,setSeq] = React.useState(0);
  const [closing,setClosing] = React.useState(false);
  React.useEffect(()=>{
    function onOpen(){ setOpen(true); setClosing(false); setSeq(s=>s+1); }
    window.addEventListener('open-quote',onOpen);
    return ()=>window.removeEventListener('open-quote',onOpen);
  },[]);
  const close = React.useCallback(()=>{
    setClosing(true);
    setTimeout(()=>{ setOpen(false); setClosing(false); },190);
  },[]);
  React.useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') close(); }
    if(open){ document.addEventListener('keydown',onKey); document.body.style.overflow='hidden'; }
    return ()=>{ document.removeEventListener('keydown',onKey); document.body.style.overflow=''; };
  },[open]);
  if(!open) return null;
  return React.createElement('div',{className:'modal-backdrop'+(closing?' out':''),onClick:(e)=>{ if(e.target===e.currentTarget) close(); }},
    React.createElement('div',{className:'modal',role:'dialog','aria-modal':'true'},
      React.createElement('button',{className:'modal-close','aria-label':t('modalClose'),onClick:close}, React.createElement(Icon,{name:'x',size:18,color:'var(--color-ink)'})),
      React.createElement(QuoteForm,{key:seq})
    )
  );
}


const MAP_ADDR = 'Харків, бульвар Дмитра Антоновича, 2';
function MapBlock(){
  const q = encodeURIComponent(MAP_ADDR);
  const hl = t('mapsHl');
  return React.createElement('section',{className:'mapblock',id:'map-section','data-screen-label':'Карта'},
    React.createElement('iframe',{title:t('mapTitlePrefix')+MAP_ADDR,src:'https://www.google.com/maps?q='+q+'&hl='+hl+'&z=16&output=embed',loading:'lazy',referrerPolicy:'no-referrer-when-downgrade',allowFullScreen:true})
  );
}

const FOOTER_SERVICES = ['Металопластикові вікна','Двері','Склопакети','Відкоси','Жалюзі та рулонні штори','Виїзний офіс'];

function Footer(){
  const d = I18N[currentLang()];
  const isRu = currentLang()==='ru';
  // Privacy policy stays UA-only by design (not a commercial/SEO page) —
  // every footer, including RU ones, links to the one existing UA page.
  const privacyHref = 'privacy-policy.html';
  return React.createElement('footer',{className:'footer',id:'site-footer','data-screen-label':'Футер'},
    React.createElement('div',{className:'footer-inner'},
      React.createElement('div',{className:'footer-grid'},
        React.createElement('div',{className:'f-brand'},
          React.createElement('p',{className:'f-brand-name'},
            React.createElement('em',null,d.brandLabel),
            React.createElement('b',null,'ВІКНА-ОБРІЙ')
          ),
          React.createElement('p',{className:'f-note'},d.brandNote),
          React.createElement('div',{className:'f-mfr'},
            React.createElement('em',null,d.mfrLabel),
            React.createElement('img',{src:'assets/images/ekipazh-logo.svg',alt:'ЕКІПАЖ'})
          ),
          React.createElement('div',{className:'f-socials'},
            React.createElement('a',{href:'https://www.instagram.com/vikna_obriy?igsh=bXNrNzM2Ym9vc29q&utm_source=ig_contact_invite',target:'_blank',rel:'noopener','aria-label':'Instagram'}, React.createElement(InstagramIcon)),
            React.createElement('a',{href:'https://www.facebook.com/share/1CsLXBLn8r/',target:'_blank',rel:'noopener','aria-label':'Facebook'}, React.createElement(FacebookIcon)),
            React.createElement('a',{href:'https://x.com/viknaobriy',target:'_blank',rel:'noopener','aria-label':'Twitter'}, React.createElement(TwitterIcon))
          )
        ),
        React.createElement('div',{className:'f-col'},
          React.createElement('h3',null,d.servicesColTitle),
          React.createElement('div',{className:'f-list'},
            spaced(d.footerServices.map(s=>React.createElement('a',{key:s,href:d.serviceHrefs[s]||(isRu?'okna-i-dveri-harkov#services':'index.html#services')},s)))
          )
        ),
        React.createElement('div',{className:'f-col'},
          React.createElement('h3',null,d.contactsColTitle),
          React.createElement('div',{className:'f-list'},
            spaced([
              ...PHONES.map(p=>React.createElement('a',{key:p,href:'tel:+38'+p.replace(/\s/g,'')},p)),
              React.createElement('a',{key:'email',href:'mailto:vikna-obriy@outlook.com'},'vikna-obriy@outlook.com'),
              React.createElement('a',{key:'addr',href:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(MAP_ADDR),target:'_blank',rel:'noopener'},d.addr1, React.createElement('br'),d.addr2)
            ])
          )
        ),
        React.createElement('div',{className:'f-col'},
          React.createElement('h3',null,d.hoursColTitle),
          React.createElement('div',{className:'f-hours'},
            ...spaced([
              React.createElement('div',{key:'wd',className:'f-hours-row'}, ...spaced([React.createElement('span',{key:'l'},d.weekday),React.createElement('b',{key:'v'},'09:00–18:00')])),
              React.createElement('div',{key:'sa',className:'f-hours-row'}, ...spaced([React.createElement('span',{key:'l'},d.saturday),React.createElement('b',{key:'v'},'09:00–14:00')])),
              React.createElement('div',{key:'su',className:'f-hours-row'}, ...spaced([React.createElement('span',{key:'l'},d.sunday),React.createElement('b',{key:'v'},d.dayOff)])),
              React.createElement('p',{key:'note',className:'f-hours-note'},d.hoursNote)
            ])
          )
        )
      ),
      React.createElement('div',{className:'f-bottom'},
        React.createElement('p',null,d.copyright),
        React.createElement('a',{href:privacyHref},d.privacyLink)
      )
    )
  );
}


function Lightbox({items,index,onClose,onPrev,onNext}){
  const [shown,setShown] = React.useState(false);
  React.useEffect(()=>{
    const id = requestAnimationFrame(()=>setShown(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return ()=>{ cancelAnimationFrame(id); document.body.style.overflow = prevOverflow; };
  },[]);
  React.useEffect(()=>{
    function onKey(e){
      if(e.key==='Escape') onClose();
      else if(e.key==='ArrowLeft') onPrev();
      else if(e.key==='ArrowRight') onNext();
    }
    document.addEventListener('keydown', onKey);
    return ()=>document.removeEventListener('keydown', onKey);
  },[onClose,onPrev,onNext]);
  const it = items[index];
  const arrow = (dir) => React.createElement('svg',{width:20,height:20,viewBox:'0 0 20 20',fill:'none'},
    React.createElement('path',{d:dir==='left'?'M12.5 3.5 6 10l6.5 6.5':'M7.5 3.5 14 10l-6.5 6.5',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'square'})
  );
  return React.createElement('div',{className:'lightbox'+(shown?' in':''),onClick:onClose,role:'dialog','aria-modal':'true'},
    React.createElement('button',{className:'lb-btn close','aria-label':t('lbClose'),onClick:onClose},
      React.createElement('svg',{width:18,height:18,viewBox:'0 0 18 18',fill:'none'},React.createElement('path',{d:'M2 2l14 14M16 2 2 16',stroke:'currentColor',strokeWidth:1.8}))
    ),
    React.createElement('button',{className:'lb-btn prev','aria-label':t('lbPrev'),onClick:(e)=>{e.stopPropagation();onPrev();}}, arrow('left')),
    React.createElement('button',{className:'lb-btn next','aria-label':t('lbNext'),onClick:(e)=>{e.stopPropagation();onNext();}}, arrow('right')),
    React.createElement('img',{src:it.src,alt:it.title,onClick:(e)=>e.stopPropagation()}),
    React.createElement('p',{className:'lb-caption',onClick:(e)=>e.stopPropagation()},it.title),
    React.createElement('div',{className:'lb-count'}, (index+1)+' / '+items.length)
  );
}

function Certificates(){
  const isRu = currentLang()==='ru';
  const CERT_TITLES_RU = {
    'ift Rosenheim — зовнішні двері WDS 76 AD/MD, WDS SL 76':'ift Rosenheim — входные двери WDS 76 AD/MD, WDS SL 76',
    'ift Rosenheim — вікна WDS 7s, WDS 8s':'ift Rosenheim — окна WDS 7s, WDS 8s',
    'ift Rosenheim — вікна Alumil S77, S700, S67':'ift Rosenheim — окна Alumil S77, S700, S67',
    'ift Rosenheim — фурнітура Winkhaus activPilot, proPilot':'ift Rosenheim — фурнитура Winkhaus activPilot, proPilot',
    'Сертифікат відповідності — скло багатошарове (ламіноване)':'Сертификат соответствия — стекло многослойное (ламинированное)',
    'Скло захисне ударотривке ЕК-СЗУ-Р4А/9,5 — ДСТУ EN 356:2005':'Стекло защитное ударостойкое ЕК-СЗУ-Р4А/9,5 — ДСТУ EN 356:2005',
    'ISO 9001:2015 — фурнітура AXOR':'ISO 9001:2015 — фурнитура AXOR',
    'Алюмінієві двері зовнішні та внутрішні — ДСТУ EN 14351-1:2020':'Алюминиевые двери входные и внутренние — ДСТУ EN 14351-1:2020',
    'Алюмінієві вікна, балконні двері та фасадні конструкції':'Алюминиевые окна, балконные двери и фасадные конструкции'
  };
  const tr = (s) => isRu ? (CERT_TITLES_RU[s]||s) : s;
  const items = [
    {src:'assets/images/certificate-ift-rosenheim-wds-76-doors.jpg',title:tr('ift Rosenheim — зовнішні двері WDS 76 AD/MD, WDS SL 76')},
    {src:'assets/images/certificate-ift-rosenheim-wds-7s-8s-windows.jpg',title:tr('ift Rosenheim — вікна WDS 7s, WDS 8s')},
    {src:'assets/images/certificate-ift-rosenheim-alumil-s77-s700-s67.jpg',title:tr('ift Rosenheim — вікна Alumil S77, S700, S67')},
    {src:'assets/images/certificate-ift-winkhaus-hardware.jpg',title:tr('ift Rosenheim — фурнітура Winkhaus activPilot, proPilot')},
    {src:'assets/images/certificate-laminated-glass-conformity.jpg',title:tr('Сертифікат відповідності — скло багатошарове (ламіноване)')},
    {src:'assets/images/certificate-impact-resistant-glass-en356.jpg',title:tr('Скло захисне ударотривке ЕК-СЗУ-Р4А/9,5 — ДСТУ EN 356:2005')},
    {src:'assets/images/certificate-iso-9001-axor-hardware.jpg',title:tr('ISO 9001:2015 — фурнітура AXOR')},
    {src:'assets/images/certificate-aluminium-doors-en14351.jpg',title:tr('Алюмінієві двері зовнішні та внутрішні — ДСТУ EN 14351-1:2020')},
    {src:'assets/images/certificate-aluminium-windows-facades.jpg',title:tr('Алюмінієві вікна, балконні двері та фасадні конструкції')}
  ];
  const [open,setOpen] = React.useState(-1);
  const railRef = React.useRef(null);
  const [edge,setEdge] = React.useState({start:true,end:false});
  const sync = React.useCallback(()=>{
    const el = railRef.current; if(!el) return;
    setEdge({start:el.scrollLeft<=2,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-2});
  },[]);
  React.useEffect(()=>{ sync(); window.addEventListener('resize',sync); return ()=>window.removeEventListener('resize',sync); },[sync]);
  const scrollBy = (dir)=>{ const el = railRef.current; if(el) el.scrollBy({left:dir*el.clientWidth*0.8,behavior:'smooth'}); };
  const chev = (dir) => React.createElement('svg',{width:16,height:16,viewBox:'0 0 16 16',fill:'none'},
    React.createElement('path',{d:dir==='left'?'M10 2.5 4.5 8l5.5 5.5':'M6 2.5 11.5 8 6 13.5',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'square'})
  );
  return React.createElement('section',{className:'certs',id:'certificates-section','data-screen-label':'Сертифікати'},
    React.createElement('div',{className:'certs-inner'},
      React.createElement('div',{className:'certs-head'},
        React.createElement('h2',null,t('certsHeading'))
      ),
      React.createElement('div',{className:'certs-railwrap'},
        React.createElement('button',{className:'certs-arrow prev','aria-label':t('lbPrev'),disabled:edge.start,onClick:()=>scrollBy(-1)}, chev('left')),
        React.createElement('div',{className:'certs-rail',ref:railRef,onScroll:sync},
          items.map((it,i)=>React.createElement('button',{className:'cert-thumb',key:it.src,onClick:()=>setOpen(i),'aria-label':it.title},
            React.createElement('img',{src:it.src,alt:it.title,loading:'lazy'})
          ))
        ),
        React.createElement('button',{className:'certs-arrow next','aria-label':t('lbNext'),disabled:edge.end,onClick:()=>scrollBy(1)}, chev('right'))
      ),
      React.createElement('p',{className:'certs-hint'},t('certsHint'))
    ),
    open >= 0 ? React.createElement(Lightbox,{items,index:open,onClose:()=>setOpen(-1),onPrev:()=>setOpen((open-1+items.length)%items.length),onNext:()=>setOpen((open+1)%items.length)}) : null
  );
}

Object.assign(window,{SLOT_PHOTOS,slotSrc,Photo,Lightbox,Certificates,SERVICE_HREFS,openQuote,pexels,InstagramIcon,FacebookIcon,TwitterIcon,UkraineFlagIcon,Ticker,Header,countries,FlagSwatch,phDigits,phFormat,phMask,services,DropMenu,Checkbox,QuoteForm,PHONES,QuoteModal,MAP_ADDR,MapBlock,FOOTER_SERVICES,Footer});
