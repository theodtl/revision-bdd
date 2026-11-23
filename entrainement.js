(() => {
  const dates = { mai: 'Mai 2026', aout: 'Août 2026 · Rattrapage' };
  const requested = new URLSearchParams(location.search).get('session');
  const session = Object.hasOwn(dates, requested) ? requested : 'mai';
  const questions = window.examSessions[session];
  const storageKey = 'revision-bdd:2026:' + session;
  const get = id => document.getElementById(id);
  const progress = get('progress');
  const jump = get('jump');
  const choiceGroup = get('choices');
  const feedback = get('feedback');
  const questionCard = get('question');
  const summary = get('summary');
  const diagram = get('diagram');
  const stem = get('stem');
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {};
  } catch {
    get('intro').textContent = 'Coche tes réponses pour voir l’explication.';
  }
  let position = Number.isInteger(saved.position) && saved.position >= 0 &&
    saved.position < questions.length ? saved.position : 0;
  const answers = {};
  for (const question of questions) {
    const values = saved.answers?.[question.id];
    if (Array.isArray(values)) {
      answers[question.id] = [...new Set(values)].filter(i => Number.isInteger(i) && i >= 0 && i < question.options.length);
    }
  }

  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ position, answers }));
    } catch {
      get('intro').textContent = 'Coche tes réponses pour voir l’explication.';
    }
  }

  function stats() {
    let answered = 0;
    let complete = 0;
    let points = 0;
    let maximum = 0;
    for (const question of questions) {
      const selected = answers[question.id] || [];
      const right = selected.filter(i => question.correct.includes(i)).length;
      const wrong = selected.length - right;
      answered += Number(selected.length > 0);
      complete += Number(right === question.correct.length && wrong === 0);
      const weight = .25 * question.options.length;
      points += weight * Math.max(0, right - wrong) / question.correct.length;
      maximum += weight;
    }
    return { answered, complete, score: 20 * points / maximum };
  }

  function renderFeedback() {
    const question = questions[position];
    const selected = answers[question.id] || [];
    const revealed = selected.length > 0;
    const mistakes = selected.some(i => !question.correct.includes(i));
    const complete = !mistakes && selected.length === question.correct.length;
    feedback.hidden = !revealed;
    if (revealed) {
      feedback.dataset.tone = mistakes ? 'error' : complete ? 'success' : 'partial';
      get('verdict').textContent = mistakes ? 'La sélection contient une erreur' :
        complete ? 'Correct selon le corrigé' : 'Sélection incomplète';
      get('explanation').textContent = question.explanation;
    }
    choiceGroup.querySelectorAll('.choice').forEach((label, i) => {
      const right = revealed && question.correct.includes(i);
      const wrong = revealed && selected.includes(i) && !right;
      const tag = label.querySelector('.status-tag');
      tag.hidden = !(right || wrong);
      tag.textContent = right ? 'Réponse attendue' : wrong ? 'Choix incorrect' : '';
      label.dataset.result = right ? 'yes' : wrong ? 'no' : '';
    });
    const { answered } = stats();
    progress.value = answered;
    get('progress-label').textContent = answered + ' / ' + questions.length + ' questions renseignées';
  }

  function showQuestion(index, focus = false) {
    position = index;
    summary.hidden = true;
    questionCard.hidden = false;
    const question = questions[position];
    jump.value = String(position);
    get('topic').textContent = question.section + ' · Question ' + (position + 1) + ' sur ' + questions.length;
    stem.textContent = question.stem;
    const query = get('query');
    query.hidden = !question.code;
    query.firstElementChild.textContent = question.code;
    diagram.hidden = !question.figure;
    diagram.open = Boolean(question.figure && !['restaurant', 'cinema'].some(name => question.figure.src === 'schema-' + name + '.webp'));
    if (question.figure) {
      const image = get('diagram-image');
      image.src = question.figure.src;
      image.alt = question.figure.alt;
      get('diagram-link').href = question.figure.src;
    }
    choiceGroup.querySelectorAll('.choice').forEach(label => label.remove());
    question.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.className = 'choice';
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = String(i);
      input.checked = (answers[question.id] || []).includes(i);
      const content = document.createElement('span');
      const text = document.createElement(/^(SELECT |Connection |Statement |while \(|for \(|if \()/i.test(option) ? 'code' : 'span');
      text.textContent = option;
      const tag = document.createElement('span');
      tag.className = 'status-tag';
      content.append(text, tag);
      label.append(input, content);
      choiceGroup.append(label);
    });
    get('previous').disabled = position === 0;
    get('next').textContent = position === questions.length - 1 ? 'Voir le bilan' : 'Suivante';
    renderFeedback();
    if (focus) {
      stem.focus({ preventScroll: true });
      questionCard.scrollIntoView({ block: 'start' });
    }
  }

  document.title = dates[session] + ' · QCM de bases de données';
  get('session-title').textContent = dates[session];
  progress.max = questions.length;
  questions.forEach((question, i) => jump.append(new Option((i + 1) + ' · ' + question.section, i)));
  jump.addEventListener('change', () => { showQuestion(Number(jump.value), true); persist(); });
  choiceGroup.addEventListener('change', () => {
    answers[questions[position].id] = Array.from(choiceGroup.querySelectorAll('input:checked'), input => Number(input.value));
    renderFeedback();
    persist();
  });
  get('previous').addEventListener('click', () => { showQuestion(position - 1, true); persist(); });
  get('next').addEventListener('click', () => {
    if (position < questions.length - 1) {
      showQuestion(position + 1, true);
      persist();
      return;
    }
    const { answered, complete, score } = stats();
    questionCard.hidden = true;
    summary.hidden = false;
    get('result').textContent = answered + ' réponses sur ' + questions.length + ' · ' +
      complete + ' questions entièrement justes · Score indicatif ' + score.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' / 20';
    get('result-title').focus();
  });
  get('resume').addEventListener('click', () => {
    const firstGap = questions.findIndex(question => {
      const selected = answers[question.id] || [];
      return selected.length !== question.correct.length || selected.some(i => !question.correct.includes(i));
    });
    showQuestion(Math.max(firstGap, 0), true);
    persist();
  });
  showQuestion(position);
})();
