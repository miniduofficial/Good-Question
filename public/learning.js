'use strict';
document.querySelector('.skip').addEventListener('click', event => {
 event.preventDefault(); document.querySelector('#main').focus();
});
const titles = {home:'Find your next lesson',mathematics:'O/L Mathematics','zero-power':'Why is a⁰ = 1?',tutoring:'Tutoring & practice',library:'Library'};
const videoPlaceholder = document.querySelector('#video-container').innerHTML;
function bindVideo() {
 document.querySelector('#video-container').classList.add('video-placeholder');
 document.querySelector('#load-video').addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/5WIUR98WETo?autoplay=1';
  frame.title = 'Minidu Explains — companion video on the zero exponent';
  frame.className = 'video-frame'; frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true; frame.referrerPolicy = 'strict-origin-when-cross-origin';
  const container = document.querySelector('#video-container'); container.classList.remove('video-placeholder'); container.replaceChildren(frame); frame.focus();
 });
}
function route(focus = true) {
 const requested = location.hash.slice(1) || 'home';
 const view = Object.hasOwn(titles, requested) ? requested : 'home';
 document.querySelectorAll('[data-view]').forEach(section => { section.hidden = section.dataset.view !== view; });
 document.querySelectorAll('[data-nav]').forEach(link => {
  const activeNav = view === 'library' ? 'library' : view === 'tutoring' ? 'tutoring' : 'home';
  if (link.dataset.nav === activeNav) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
 });
 document.title = titles[view] + ' — Good Question';
 if (view !== 'zero-power' && document.querySelector('#video-container iframe')) { document.querySelector('#video-container').innerHTML = videoPlaceholder; bindVideo(); }
 if (focus) { window.scrollTo(0,0); document.querySelector('#main').focus({preventScroll:true}); }
}
bindVideo(); window.addEventListener('hashchange', () => route()); route(false);
let level = 'ol'; const search = document.querySelector('#search');
function filter() {
 const term = search.value.trim().toLowerCase();
 const match = level === 'ol' && (!term || 'mathematics maths indices exponents zero power why is a⁰ = 1'.includes(term));
 document.querySelector('#subject-result').hidden = !match; document.querySelector('#empty-result').hidden = match;
 document.querySelector('#results-note').textContent = (level === 'ol' ? 'O/L' : 'A/L') + ' · ' + (match ? '1 sample subject' : 'No available matches');
 document.querySelector('#empty-title').textContent = level === 'al' ? 'A/L lessons are on the way.' : 'No matching lessons yet';
 document.querySelector('#empty-text').textContent = level === 'al' ? 'There are no A/L lessons in this preview. You can explore the O/L Mathematics sample now.' : 'Try “mathematics”, “indices”, or “zero”.';
 document.querySelectorAll('[data-level]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.level === level)));
}
document.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => { level = button.dataset.level; filter(); }));
search.addEventListener('input', filter);
document.querySelector('#reset-search').addEventListener('click', () => { level = 'ol'; search.value = ''; filter(); });
const questions = [
 {prompt:'What is 9⁰?',options:['0','1','9'],correct:1,explanation:'9 is non-zero, so 9⁰ = 1. A zero exponent does not mean multiplying the base by zero.'},
 {prompt:'What is (−3)⁰?',options:['−1','0','1'],correct:2,explanation:'The base is −3, which is non-zero. Any non-zero base raised to zero equals 1; the brackets make the base clear.'},
 {prompt:'Which argument explains why 5⁰ = 1?',options:['5 × 0 = 0','5² ÷ 5² = 5⁰, and 25 ÷ 25 = 1','An exponent always makes a number smaller'],correct:1,explanation:'Subtracting the exponents gives 5²⁻² = 5⁰. Dividing the equal non-zero values gives 1, so the two expressions must be equal.'}
];
const solved = new Set();
questions.forEach((question,index) => {
 const form = document.createElement('form'); const fieldset = document.createElement('fieldset'); fieldset.className = 'question';
 const legend = document.createElement('legend'); legend.textContent = (index+1)+'. '+question.prompt; fieldset.append(legend);
 question.options.forEach((option,optionIndex) => {
  const label = document.createElement('label'); const input = document.createElement('input');
  input.type = 'radio'; input.name = 'question-'+index; input.value = String(optionIndex); input.required = true;
  label.append(input,document.createTextNode(option)); fieldset.append(label);
 });
 const button = document.createElement('button'); button.type = 'submit'; button.className = 'secondary'; button.textContent = 'Check answer'; fieldset.append(button);
 const feedback = document.createElement('div'); feedback.className = 'feedback'; feedback.hidden = true; feedback.setAttribute('role','status'); fieldset.append(feedback);
 form.append(fieldset); document.querySelector('#questions').append(form);
 form.addEventListener('submit', event => {
  event.preventDefault(); const selected = Number(new FormData(form).get('question-'+index)); const correct = selected === question.correct;
  if (correct) solved.add(index); else solved.delete(index);
  feedback.hidden = false; feedback.classList.toggle('correct',correct); feedback.textContent = (correct ? 'Correct. ' : 'Not quite. ')+question.explanation;
  document.querySelector('#practice-summary').textContent = solved.size === questions.length ? 'All 3 correct. Now try explaining the idea in your own words below.' : solved.size+' of 3 questions correct.';
 });
 form.addEventListener('change', () => { feedback.hidden = true; solved.delete(index); document.querySelector('#practice-summary').textContent = solved.size+' of 3 questions correct.'; });
});
