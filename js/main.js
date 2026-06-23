// Thoretech — shared vanilla JS

(function () {
  'use strict';

  var isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  /* ---------- Nav scroll + mobile toggle ---------- */
  function initNav() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var toggle = nav.querySelector('.nav-toggle');
    var links = nav.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('mobile-open');
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('mobile-open');
        });
      });
    }
  }

  /* ---------- Home hero rotating carousel ---------- */
  function initCarousel() {
    var carousel = document.querySelector('.carousel');
    if (!carousel) return;
    var images = carousel.querySelectorAll('img');
    var captions = document.querySelectorAll('.carousel-caption');
    if (!images.length) return;
    var index = Math.floor(Math.random() * images.length);

    function show(i) {
      images.forEach(function (img, idx) {
        img.classList.toggle('active', idx === i);
      });
      captions.forEach(function (cap, idx) {
        cap.classList.toggle('active', idx === i);
      });
    }
    show(index);
    setInterval(function () {
      index = (index + 1) % images.length;
      show(index);
    }, 20000);
  }

  /* ---------- Home time-audit tooltips ---------- */
  function initTooltips() {
    var tiles = document.querySelectorAll('.audit-tile');
    var tooltip = document.querySelector('.tooltip');
    if (!tiles.length || !tooltip) return;
    if (isTouch) return;

    var titleEl = tooltip.querySelector('.tooltip-title');
    var bodyEl = tooltip.querySelector('.tooltip-body');
    var noteEl = tooltip.querySelector('.tooltip-note');

    var popups = {
      admin: {
        title: 'Financial admin',
        body: 'Chasing invoices, sorting receipts, reconciling accounts. The kind of work that never feels finished, no matter how long you spend on it.',
        note: '"I was busy all day but I feel like I didn\'t actually get anything done."'
      },
      paperwork: {
        title: 'Paperwork drag',
        body: 'Filling in the same information in three different places. Updating a spreadsheet nobody fully trusts. The invisible tax on your working day.',
        note: '"Two hours gone and I haven\'t spoken to a single customer."'
      },
      emails: {
        title: 'Emails and noise',
        body: 'An inbox that never empties. Questions you have answered before. Notifications pulling you away from the work that actually moves things forward.',
        note: '"I feel like I work for my inbox, not the other way round."'
      },
      process: {
        title: 'Process speed',
        body: 'The gap between deciding to do something and it actually being done. Approvals, chasing people, repeating yourself. Everything that slows the good work down.',
        note: '"Why does something this simple take so long?"'
      }
    };

    function position(x, y) {
      var w = tooltip.offsetWidth || 272;
      var h = tooltip.offsetHeight || 200;
      var left = Math.min(x + 14, window.innerWidth - w - 22);
      var top = Math.min(y + 14, window.innerHeight - h - 20);
      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    }

    tiles.forEach(function (tile) {
      var key = tile.getAttribute('data-popup');
      var data = popups[key];
      if (!data) return;

      tile.addEventListener('mouseenter', function (e) {
        titleEl.textContent = data.title;
        bodyEl.textContent = data.body;
        noteEl.textContent = data.note;
        tooltip.classList.add('visible');
        position(e.clientX, e.clientY);
      });
      tile.addEventListener('mousemove', function (e) {
        position(e.clientX, e.clientY);
      });
      tile.addEventListener('mouseleave', function () {
        tooltip.classList.remove('visible');
      });
    });
  }

  /* ---------- Small Business use-case carousel ---------- */
  function initUseCases() {
    var section = document.querySelector('.usecase-section');
    if (!section) return;

    var useCases = [
      {
        tag: 'Manufacturing · AI assistant',
        title: '"Our products change fast. Our receptionist could not keep up. Nobody could blame her."',
        problem: 'With a fast-moving product range, the reception team was regularly putting callers on hold or arranging callbacks because the latest information was never quite at their fingertips.',
        solution: 'We set up an AI assistant that stays current with every product update the team makes. Reception types the caller\'s question and gets the right, up to date answer instantly.',
        benefit: 'Callbacks dropped, callers got answers first time and the team stopped losing time to follow-up calls they should never have needed to make.'
      },
      {
        tag: 'Private tutor · AI booking assistant',
        title: '"I was spending an evening every month just working out who to invoice."',
        problem: 'Running a private tutoring practice, all bookings, amendments and cancellations were jotted in a notebook. At month end, time was spent going back through every page to work out what invoices needed to go out.',
        solution: 'We trained an AI on how they manage their bookings. Now they type or talk their notes to it and it keeps everything in order. At month end it tells them exactly who to invoice.',
        benefit: 'Invoicing now takes minutes. The AI logs records in their calendar too so they have a clear record of students and more time to prepare for lessons.'
      },
      {
        tag: 'Professional services team · Copilot training',
        title: '"We had AI on every laptop. We just had no idea what to do with it."',
        problem: 'The team had Microsoft Copilot included in their existing licence but were only using it for writing emails. They knew there was more to it but nobody had shown them.',
        solution: 'We spent time understanding how their day worked, then spent an hour showing them the things that would actually help. Simple, practical and tailored to their business.',
        benefit: 'One afternoon of practical guidance is now saving them time every single day. They use AI across their work, get things done faster and feel confident rather than confused.'
      },
      {
        tag: 'Independent retailer · Order tracking',
        title: '"Tracking supplier orders was everyone\'s job. Which meant it was nobody\'s job."',
        problem: 'Orders and costs were logged inconsistently across different spreadsheets. Nobody had a clear picture and chasing each other for updates was eating into everyone\'s day.',
        solution: 'Using the Google tools they already had, we created one simple tracker with a clean interface for adding and managing orders. It calculates costs and delays automatically and connects to AI so they can ask questions about their orders.',
        benefit: 'Orders processed faster, costs visible at a glance and no more chasing. All done with tools they were already paying for.'
      }
    ];

    var index = 0;
    var countEl = section.querySelector('.usecase-count');
    var titleEl = section.querySelector('.usecase-title');
    var problemEl = section.querySelector('.usecase-col.situation p');
    var solutionEl = section.querySelector('.usecase-col.what p');
    var benefitEl = section.querySelector('.usecase-col.diff p');
    var tagEl = section.querySelector('.usecase-tag');
    var dots = section.querySelectorAll('.usecase-dot');
    var prevBtn = section.querySelector('.usecase-btn-prev');
    var nextBtn = section.querySelector('.usecase-btn-next');

    function render() {
      var uc = useCases[index];
      countEl.textContent = (index + 1) + ' of 4';
      titleEl.textContent = uc.title;
      problemEl.textContent = uc.problem;
      solutionEl.textContent = uc.solution;
      benefitEl.textContent = uc.benefit;
      tagEl.textContent = uc.tag;
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () {
      index = (index + 3) % 4;
      render();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      index = (index + 1) % 4;
      render();
    });

    render();
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    var form = document.querySelector('.contact-panel');
    if (!form) return;

    var nameInput = form.querySelector('#cf-name');
    var messageInput = form.querySelector('#cf-message');
    var contactInput = form.querySelector('#cf-contact-value');
    var emailBtn = form.querySelector('.toggle-btn[data-pref="email"]');
    var phoneBtn = form.querySelector('.toggle-btn[data-pref="phone"]');
    var errorEl = form.querySelector('.contact-error');
    var sendBtn = form.querySelector('.send-btn');

    var thankyou = document.querySelector('.thankyou-card');

    var pref = 'email';

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var ukPhoneRe = /^(\+44|0044|0)(7\d{9}|[1-9]\d{8,9})$/;
    var intlRe = /^(\+(?!44)|00(?!44))/;

    function setPref(p) {
      pref = p;
      contactInput.value = '';
      errorEl.textContent = '';
      contactInput.classList.remove('error');
      if (p === 'email') {
        emailBtn.classList.add('active');
        phoneBtn.classList.remove('active');
        contactInput.placeholder = 'your@email.com';
      } else {
        phoneBtn.classList.add('active');
        emailBtn.classList.remove('active');
        contactInput.placeholder = 'e.g. 07700 900123';
      }
    }

    if (emailBtn) emailBtn.addEventListener('click', function () { setPref('email'); });
    if (phoneBtn) phoneBtn.addEventListener('click', function () { setPref('phone'); });

    if (contactInput) {
      contactInput.addEventListener('input', function () {
        errorEl.textContent = '';
        contactInput.classList.remove('error');
      });
      contactInput.addEventListener('blur', function () {
        var val = contactInput.value.trim();
        if (!val) return;
        if (pref === 'email') {
          if (!emailRe.test(val)) {
            errorEl.textContent = 'Please enter a valid email address.';
            contactInput.classList.add('error');
          }
        } else {
          var compact = val.replace(/\s/g, '');
          var ukOk = ukPhoneRe.test(compact);
          var looksIntl = intlRe.test(compact);
          if (looksIntl) {
            errorEl.textContent = 'Looks like an international number. Please use email so we can reach you reliably.';
            contactInput.classList.add('error');
          } else if (!ukOk) {
            errorEl.textContent = 'Please enter a valid UK phone number.';
            contactInput.classList.add('error');
          }
        }
      });
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', function () {
        var name = nameInput ? nameInput.value : '';
        var message = messageInput ? messageInput.value : '';
        var contactValue = contactInput ? contactInput.value : '';

        var subject = encodeURIComponent('Thoretech enquiry from ' + (name || 'website visitor'));
        var body = encodeURIComponent(
          'Name: ' + (name || 'Not provided') + '\n' +
          'Preferred contact: ' + pref + '\n' +
          (pref === 'email' ? 'Email: ' : 'Phone: ') + (contactValue || 'Not provided') + '\n\n' +
          'Message:\n' + (message || 'No message provided')
        );
        window.location.href = 'mailto:info@thoretech.com?subject=' + subject + '&body=' + body;

        setTimeout(function () {
          form.classList.add('hidden');
          if (thankyou) thankyou.classList.remove('hidden');
        }, 800);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initCarousel();
    initTooltips();
    initUseCases();
    initContactForm();
  });
})();
