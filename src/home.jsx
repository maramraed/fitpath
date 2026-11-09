import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

function ExistingContent({ html }) {
  return <div className="existing-content" dangerouslySetInnerHTML={{ __html: html }} />;
}

function Home({ arabic, translate: t, actions, content }) {
  return <>
    <div className="home-heading">
      <div><h1>{t('كل رحلة حلوة،', 'Every good journey')}<br />
        <span>{t('بتبدأ بخطوة.', 'starts with a step.')}</span>
      </h1></div>
      <div className="home-stamp"><span>✧</span>{t('معكِ بكل خطوة', 'WITH YOU, EVERY STEP')}</div>
    </div>
    <section className="hero">
      <div className="hero-copy">
        <span className="pill"><span className="dot" />{t('مساعدتك الشخصية للتغذية والمتابعة', 'Your nutrition & routine companion')}</span>
        <h2>{t('أهلًا وسهلًا، أنا نوفا!', 'Hello, I’m Nova!')}</h2>
        <p>{t('خلّينا نتابع يومك سوا: وجباتك، خطتك، وتذكيراتك. بداية صغيرة اليوم، بتعمل فرق بكرا.', 'Let’s check in on your day: meals, plans and reminders. A little step today can make tomorrow feel different.')}</p>
        <ExistingContent html={content.voice} />
        <ExistingContent html={content.composer} />
        <div className="quick d-flex flex-wrap">
          <button onClick={actions.logMeal}>{t('＋ سجّلي وجبة', '＋ Log a meal')}</button>
          <button onClick={actions.openChat}>{t('▦ خطتي اليوم', '▦ My day')}</button>
          <button onClick={actions.openNotifications}>{t('♧ تذكيراتي', '♧ My reminders')}</button>
        </div>
      </div>
      <ExistingContent html={content.nova} />
    </section>
    <div className="section-title"><h2>{t('اختاري الدعم المناسب إلك', 'Find your kind of support')}</h2></div>
    <div className="categories">
      {content.categories.map(({ key, icon, label }) => (
        <button className="category" key={key} onClick={() => actions.openCategory(key)}>
          <span className="cat-icon">{icon}</span>
          <h3>{label}</h3>
          <span className="arrow">{arabic ? 'استكشفي الخيارات ←' : 'Explore options →'}</span>
        </button>
      ))}
    </div>
    <div className="section-title">
      <h2>{t('أماكن وخبراء لبدايتك', 'Places & people for your next step')}</h2>
      <button onClick={() => actions.openCategory('gym')}>{t('استكشفي الجيمات ←', 'Explore gyms →')}</button>
    </div>
    <ExistingContent html={content.cards} />
  </>;
}

let root;
window.fitpathViews = {
  mount(element, props) {
    root = createRoot(element);
    flushSync(() => root.render(props.html === undefined ? <Home {...props} /> : <ExistingContent html={props.html} />));
  },
  unmount() {
    root?.unmount();
    root = undefined;
  },
};
