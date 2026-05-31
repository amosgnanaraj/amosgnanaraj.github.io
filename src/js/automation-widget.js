/* ============================================================
   AMOS-OS AUTOMATION CORE & HACKING TERMINAL — LOGIC
   RPA Simulator | Glassmorphic Dashboard | Hacking Mini-Games
   ============================================================ */

'use strict';

(function initAutomationCore() {
  // ── Secret DevTools Key Selection ─────────────────────────
  const stage3Keys = [
    "AUTOMATE",
    "ORCHESTRATE",
    "COGNITIVE",
    "TESSERACT",
    "ELSACLOUD",
    "AISYNC",
    "ROBOTICS"
  ];
  const targetStage3Key = stage3Keys[Math.floor(Math.random() * stage3Keys.length)];

  // ── Print Secret DevTools Registration Key ────────────────
  console.log(
    "%c✨ [Amos-OS] SECURITY PROTOCOL ✨\n" +
    "%cLLM ALIGNMENT REGISTER GATEKEY REVEALED:\n" +
    `%c🔑 KEY: "${targetStage3Key}"\n` +
    "%cRegister this secure token in the Hacking Sandbox to complete system alignment.",
    "color: #00ff66; font-size: 13px; font-weight: bold; text-shadow: 0 0 8px rgba(0,255,102,0.4);",
    "color: #e2e8f0; font-size: 11px; font-family: monospace;",
    "color: #a3ff00; font-size: 14px; font-weight: bold; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(0,255,102,0.2); font-family: monospace; display: inline-block; margin: 4px 0;",
    "color: #94a3b8; font-size: 10px; font-family: monospace;"
  );

  // ── Spawn UI elements dynamically into the DOM ───────────
  function spawnWidgetDOM() {
    // 1. Launcher button container
    const launcherContainer = document.createElement('div');
    launcherContainer.className = 'auto-launcher-container';
    launcherContainer.id = 'autoLauncherContainer';
    launcherContainer.innerHTML = `
      <button class="auto-launcher" id="autoLauncher" title="Launch Automation Sandbox">
        <span class="auto-launcher-status-dot" id="autoStatusDot"></span>
        <span class="auto-launcher-text">SYS: ONLINE</span>
      </button>
    `;
    document.body.appendChild(launcherContainer);

    // 2. Main Dashboard Panel
    const panel = document.createElement('div');
    panel.className = 'auto-panel';
    panel.id = 'autoPanel';
    panel.innerHTML = `
      <div class="auto-panel-header">
        <div class="auto-panel-title-container">
          <div class="auto-panel-header-lights">
            <span class="auto-header-light blue"></span>
            <span class="auto-header-light green"></span>
            <span class="auto-header-light orange"></span>
          </div>
          <span class="auto-panel-title">AMOS-OS v3.0 // AUTO-CORE</span>
        </div>
        <button class="auto-panel-close" id="autoPanelClose" aria-label="Close Automation Panel">✕</button>
      </div>
      <div class="auto-panel-tabs">
        <button class="auto-tab-btn active" id="tabBtnRunbooks" data-tab="runbooks">Runbooks</button>
        <button class="auto-tab-btn" id="tabBtnSandbox" data-tab="sandbox">Hacking Sandbox</button>
      </div>
      <div class="auto-panel-body">
        <!-- Tab 1: Runbooks -->
        <div class="auto-tab-content active" id="tab-runbooks">
          <div class="auto-runbook-card">
            <div class="auto-runbook-header">
              <span class="auto-runbook-title">CV Scanner Runbook (OCR + Vision)</span>
              <span class="auto-runbook-icon">🔍</span>
            </div>
            <p class="auto-runbook-desc">Simulates structural OCR text extraction on the page. Identifies candidate profile stats, current roles, and education milestones.</p>
            <div class="auto-runbook-meta">
              <div class="auto-runbook-tags">
                <span class="auto-mini-tag">Tesseract</span>
                <span class="auto-mini-tag">OpenCV</span>
              </div>
              <button class="auto-btn-run" data-runbook="ocr">Run Script</button>
            </div>
          </div>
          
          <div class="auto-runbook-card">
            <div class="auto-runbook-header">
              <span class="auto-runbook-title">Skills Harvester (AI Agent)</span>
              <span class="auto-runbook-icon">🧠</span>
            </div>
            <p class="auto-runbook-desc">Deploys virtual LLM agent to crawl the technical arsenal. Simulates hovering, capability checks, and extracts engineering density.</p>
            <div class="auto-runbook-meta">
              <div class="auto-runbook-tags">
                <span class="auto-mini-tag ai">Local LLM</span>
                <span class="auto-mini-tag ai">RPA Agent</span>
              </div>
              <button class="auto-btn-run" data-runbook="skills">Run Script</button>
            </div>
          </div>

          <div class="auto-runbook-card">
            <div class="auto-runbook-header">
              <span class="auto-runbook-title">Contact Auto-Typer (RPA)</span>
              <span class="auto-runbook-icon">🤖</span>
            </div>
            <p class="auto-runbook-desc">Uses automated web-recorder events to scroll to contact section, select form nodes, and type a simulated message character-by-character.</p>
            <div class="auto-runbook-meta">
              <div class="auto-runbook-tags">
                <span class="auto-mini-tag">Playwright</span>
                <span class="auto-mini-tag">WinApp</span>
              </div>
              <button class="auto-btn-run" data-runbook="contact">Run Script</button>
            </div>
          </div>

          <div class="auto-console">
            <div class="auto-console-title">Live Log Console Feed</div>
            <div class="auto-console-feed" id="autoConsoleFeed">
              <div class="auto-console-line sys">[SYS] AMOS-OS [Version 3.0.1294]</div>
              <div class="auto-console-line sys">[SYS] (c) Amos Gnanaraj. Automation Systems Online.</div>
              <div class="auto-console-line">Ready for instruction.</div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Hacking Sandbox -->
        <div class="auto-tab-content" id="tab-sandbox">
          <div class="auto-sandbox-banner">
            ⚠️ CRITICAL GLITCH: Elsa Workflow loop block, OCR spatial alignment and LLM sync errors detected. System locked.
          </div>
          
          <div class="auto-sandbox-progress">
            <span class="auto-progress-label">Core Repairs:</span>
            <div class="auto-progress-dots">
              <span class="auto-progress-dot" id="dot-stage-1"></span>
              <span class="auto-progress-dot" id="dot-stage-2"></span>
              <span class="auto-progress-dot" id="dot-stage-3"></span>
            </div>
          </div>

          <!-- Stage 1 Puzzle -->
          <div class="auto-glitch-stage active" id="stage-1">
            <div class="auto-glitch-title">Glitch #1: Elsa Workflow Infinite Loop</div>
            <p class="auto-glitch-instructions">A browser RPA loop is iterating without an exit instruction. Add the missing C# control statement to terminate the loop safely:</p>
            <div class="auto-code-editor">
              <span class="auto-code-keyword">while</span> (<span class="auto-code-var">rpaEngine</span>.IsRunning) {<br>
              &nbsp;&nbsp;<span class="auto-code-var">rpaEngine</span>.<span class="auto-code-method">ProcessNextItem</span>();<br>
              &nbsp;&nbsp;<span class="auto-code-comment">// Prevent system crash:</span><br>
              &nbsp;&nbsp;<span class="auto-code-keyword">if</span> (<span class="auto-code-var">rpaEngine</span>.QueueEmpty)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span id="editor-placeholder" style="color:var(--clr-accent); font-weight:700; border-bottom:1.5px dashed var(--clr-accent); min-width:55px; display:inline-block; text-align:center;">______</span>;<br>
              }
            </div>
            <div class="auto-code-input-container">
              <input type="text" class="auto-input-field" id="input-stage-1" placeholder="Type C# statement (e.g. break)" autocomplete="off">
              <button class="auto-btn-submit" id="submit-stage-1">Submit</button>
            </div>
          </div>

          <!-- Stage 2 Puzzle -->
          <div class="auto-glitch-stage" id="stage-2">
            <div class="auto-glitch-title">Glitch #2: Tesseract Matrix Alignment</div>
            <p class="auto-glitch-instructions">The OCR spatial grid mapping matrix is corrupted. Click buttons in the 3x3 matrix below to match the Target Key shape shown on the right:</p>
            
            <div class="auto-matrix-game">
              <div class="auto-matrix-layout">
                <div class="auto-matrix-grid" id="hackingMatrix">
                  <button class="auto-matrix-cell" data-idx="0"></button>
                  <button class="auto-matrix-cell" data-idx="1"></button>
                  <button class="auto-matrix-cell" data-idx="2"></button>
                  <button class="auto-matrix-cell" data-idx="3"></button>
                  <button class="auto-matrix-cell" data-idx="4"></button>
                  <button class="auto-matrix-cell" data-idx="5"></button>
                  <button class="auto-matrix-cell" data-idx="6"></button>
                  <button class="auto-matrix-cell" data-idx="7"></button>
                  <button class="auto-matrix-cell" data-idx="8"></button>
                </div>
                
                <div class="auto-matrix-minimap-container">
                  <span class="auto-matrix-target-label">Target Key</span>
                  <div class="auto-matrix-minimap">
                    <!-- Target Key pattern cells injected dynamically -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stage 3 Puzzle -->
          <div class="auto-glitch-stage" id="stage-3">
            <div class="auto-glitch-title">Glitch #3: local LLM Secure Registry Key</div>
            <p class="auto-glitch-instructions">The cognitive local LLM gateway is locked. The sync register security token was dumped in the central system registry console logs. Inspect your console to find it:</p>
            <div class="auto-riddle-container">
              🔒 STACK STATUS: GATEWAYS_LOCKED<br>
              Hint: Open browser Developer Tools (F12 or Right Click → Inspect), select the "Console" tab, and look for the Amos-OS startup key.
            </div>
            <div class="auto-code-input-container">
              <input type="text" class="auto-input-field" id="input-stage-3" placeholder="Enter key (e.g. DEPLOY)" autocomplete="off">
              <button class="auto-btn-submit" id="submit-stage-3">Sync Key</button>
            </div>
          </div>

          <!-- Resolved Screen -->
          <div class="auto-resolved-screen" id="resolvedScreen">
            <div class="auto-resolved-badge">🏆</div>
            <div class="auto-resolved-title">ALL SYSTEMS OPERATIONAL</div>
            <p class="auto-resolved-msg">Exemplary work, Engineer. The Elsa Engine loop is stabilized, Tesseract matrix calibrated, and local LLM pipelines are fully aligned.</p>
            <p class="auto-resolved-msg" style="font-style: italic; color:var(--clr-primary); font-size:0.75rem;">"Automation isn't just about speed; it's about executing elegant solutions with flawless detail." — Amos J</p>
            <button class="auto-cyber-toggler" id="cyberToggler">
              ⚡ Toggle Matrix Cyber Mode
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    // 3. Virtual Cursor Pointer
    const cursor = document.createElement('div');
    cursor.className = 'auto-virtual-cursor';
    cursor.id = 'autoVirtualCursor';
    document.body.appendChild(cursor);

    // 4. Laser Scanner Overlay Box
    const scanner = document.createElement('div');
    scanner.className = 'auto-laser-scanner';
    scanner.id = 'autoLaserScanner';
    document.body.appendChild(scanner);

    // 5. Fullscreen Matrix Overlay Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'autoWidgetCanvasOverlay';
    document.body.appendChild(canvas);

    // 6. Fullscreen Matrix Background Canvas
    const bgCanvas = document.createElement('canvas');
    bgCanvas.id = 'matrix-rain-background';
    document.body.appendChild(bgCanvas);
  }

  // ── Glitch #1 Random Questions Pool ──────────────────────
  const stage1Questions = [
    {
      title: "Glitch #1: Elsa Workflow Infinite Loop",
      instructions: "A browser RPA loop is iterating without an exit instruction. Add the missing C# control statement to terminate the loop safely:",
      codeHtml: `<span class="auto-code-keyword">while</span> (<span class="auto-code-var">rpaEngine</span>.IsRunning) {<br>&nbsp;&nbsp;<span class="auto-code-var">rpaEngine</span>.<span class="auto-code-method">ProcessNextItem</span>();<br>&nbsp;&nbsp;<span class="auto-code-comment">// Prevent system crash:</span><br>&nbsp;&nbsp;<span class="auto-code-keyword">if</span> (<span class="auto-code-var">rpaEngine</span>.QueueEmpty)<br>&nbsp;&nbsp;&nbsp;&nbsp;<span id="editor-placeholder" style="color:var(--clr-accent); font-weight:700; border-bottom:1.5px dashed var(--clr-accent); min-width:55px; display:inline-block; text-align:center;">______</span>;<br>}`,
      placeholder: "Type C# statement (e.g. break)",
      acceptedAnswers: ["break", "break;", "return", "return;", "stop", "stop;"]
    },
    {
      title: "Glitch #1: Tesseract Bitmap Memory Leak",
      instructions: "An OCR scanner pipeline is caching raw bitmap memory. Complete the C# block to explicitly call the resource disposal method:",
      codeHtml: `<span class="auto-code-keyword">var</span> bitmap = <span class="auto-code-var">tesseract</span>.<span class="auto-code-method">CaptureScreen</span>();<br><span class="auto-code-keyword">try</span> {<br>&nbsp;&nbsp;<span class="auto-code-var">tesseract</span>.<span class="auto-code-method">ProcessOCR</span>(bitmap);<br>} <span class="auto-code-keyword">finally</span> {<br>&nbsp;&nbsp;<span class="auto-code-var">bitmap</span>.<span id="editor-placeholder" style="color:var(--clr-accent); font-weight:700; border-bottom:1.5px dashed var(--clr-accent); min-width:55px; display:inline-block; text-align:center;">______</span>();<br>}`,
      placeholder: "Type method call (e.g. Dispose)",
      acceptedAnswers: ["dispose", "dispose;", "close", "close;"]
    },
    {
      title: "Glitch #1: Async Elsa Activity Deadlock",
      instructions: "An asynchronous workflow task block is causing a thread deadlock. Add the missing C# keyword to pause execution until the task finishes:",
      codeHtml: `<span class="auto-code-keyword">public</span> <span class="auto-code-keyword">async</span> <span class="auto-code-keyword">Task</span> <span class="auto-code-method">ExecuteAsync</span>() {<br>&nbsp;&nbsp;<span class="auto-code-comment">// Await Elsa pipeline resolution:</span><br>&nbsp;&nbsp;<span class="auto-code-keyword">var</span> result = <span id="editor-placeholder" style="color:var(--clr-accent); font-weight:700; border-bottom:1.5px dashed var(--clr-accent); min-width:55px; display:inline-block; text-align:center;">______</span> <span class="auto-code-var">elsaEngine</span>.<span class="auto-code-method">RunTaskAsync</span>();<br>&nbsp;&nbsp;<span class="auto-code-var">Console</span>.<span class="auto-code-method">WriteLine</span>(result);<br>}`,
      placeholder: "Type async keyword (e.g. await)",
      acceptedAnswers: ["await"]
    },
    {
      title: "Glitch #1: Elsa Workflow Safe Navigation",
      instructions: "The workflow output metadata is occasionally null, causing a critical NullReferenceException. Complete the null-conditional operator to access its Id property safely:",
      codeHtml: `<span class="auto-code-keyword">var</span> workflow = <span class="auto-code-var">elsaEngine</span>.<span class="auto-code-method">GetCurrentContext</span>();<br><span class="auto-code-comment">// Access metadata safely without throwing:</span><br>&nbsp;&nbsp;<span class="auto-code-keyword">var</span> outputId = <span class="auto-code-var">workflow</span>.<span class="auto-code-var">Output</span><span id="editor-placeholder" style="color:var(--clr-accent); font-weight:700; border-bottom:1.5px dashed var(--clr-accent); min-width:30px; display:inline-block; text-align:center;">______</span>.<span class="auto-code-var">Id</span>;<br>&nbsp;&nbsp;<span class="auto-code-var">Console</span>.<span class="auto-code-method">WriteLine</span>(outputId ?? <span class="auto-code-string">"No Context"</span>);`,
      placeholder: "Type safe navigation operator (e.g. ? or ?.)",
      acceptedAnswers: ["?", "?."]
    }
  ];

  // ── Glitch #2 Random Patterns Pool ───────────────────────
  const stage2Patterns = [
    {
      name: "X-Pattern",
      grid: [true, false, true, false, true, false, true, false, true]
    },
    {
      name: "Plus-Pattern",
      grid: [false, true, false, true, true, true, false, true, false]
    },
    {
      name: "Box-Pattern",
      grid: [true, true, true, true, false, true, true, true, true]
    },
    {
      name: "Diamond-Pattern",
      grid: [false, true, false, true, false, true, false, true, false]
    },
    {
      name: "Corners-Pattern",
      grid: [true, false, true, false, false, false, true, false, true]
    }
  ];

  // ── State Management ──────────────────────────────────────
  let activeRunbook = null;
  let isPanelOpen = false;
  let activeTab = 'runbooks';
  let hackingProgress = { stage1: false, stage2: false, stage3: false };
  let activeHackingStage = 1;
  let activeMatrixState = Array(9).fill(false);
  let targetMatrixState = Array(9).fill(false);
  let selectedQuestion = null;

  function initStage1Question() {
    const randIdx = Math.floor(Math.random() * stage1Questions.length);
    selectedQuestion = stage1Questions[randIdx];
    
    const stage1El = document.getElementById('stage-1');
    if (stage1El) {
      stage1El.querySelector('.auto-glitch-title').textContent = selectedQuestion.title;
      stage1El.querySelector('.auto-glitch-instructions').textContent = selectedQuestion.instructions;
      stage1El.querySelector('.auto-code-editor').innerHTML = selectedQuestion.codeHtml;
      
      const inputEl = document.getElementById('input-stage-1');
      if (inputEl) {
        inputEl.placeholder = selectedQuestion.placeholder;
        inputEl.value = '';
      }
    }
  }

  function initStage2Pattern() {
    const randIdx = Math.floor(Math.random() * stage2Patterns.length);
    const chosen = stage2Patterns[randIdx];
    targetMatrixState = [...chosen.grid];
    
    // Update the Minimap DOM elements dynamically
    const minimapContainer = document.querySelector('.auto-matrix-minimap');
    if (minimapContainer) {
      minimapContainer.innerHTML = '';
      targetMatrixState.forEach((isActive, idx) => {
        const span = document.createElement('span');
        span.className = isActive ? 'auto-minimap-cell active' : 'auto-minimap-cell';
        span.setAttribute('data-midx', idx);
        minimapContainer.appendChild(span);
      });
    }
  }

  // ── Core Setup ────────────────────────────────────────────
  spawnWidgetDOM();
  initStage1Question();
  initStage2Pattern();

  const launcher = document.getElementById('autoLauncher');
  const statusDot = document.getElementById('autoStatusDot');
  const panel = document.getElementById('autoPanel');
  const panelClose = document.getElementById('autoPanelClose');
  const consoleFeed = document.getElementById('autoConsoleFeed');
  const virtualCursor = document.getElementById('autoVirtualCursor');
  const laserScanner = document.getElementById('autoLaserScanner');
  const canvasRain = document.getElementById('autoWidgetCanvasOverlay');
  const bgCanvas = document.getElementById('matrix-rain-background');

  // Tab buttons
  const tabBtnRunbooks = document.getElementById('tabBtnRunbooks');
  const tabBtnSandbox = document.getElementById('tabBtnSandbox');
  const tabRunbooks = document.getElementById('tab-runbooks');
  const tabSandbox = document.getElementById('tab-sandbox');

  // Hacking Elements
  const inputStage1 = document.getElementById('input-stage-1');
  const submitStage1 = document.getElementById('submit-stage-1');
  const hackingMatrix = document.getElementById('hackingMatrix');
  const inputStage3 = document.getElementById('input-stage-3');
  const submitStage3 = document.getElementById('submit-stage-3');
  const resolvedScreen = document.getElementById('resolvedScreen');
  const cyberToggler = document.getElementById('cyberToggler');

  const dotStage1 = document.getElementById('dot-stage-1');
  const dotStage2 = document.getElementById('dot-stage-2');
  const dotStage3 = document.getElementById('dot-stage-3');

  // ── UI Listeners ──────────────────────────────────────────
  launcher.addEventListener('click', () => togglePanel(!isPanelOpen));
  panelClose.addEventListener('click', () => togglePanel(false));

  tabBtnRunbooks.addEventListener('click', () => switchTab('runbooks'));
  tabBtnSandbox.addEventListener('click', () => switchTab('sandbox'));

  // Keyboard shortcut: Typing "bot" opens launcher
  let keysPressed = '';
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    keysPressed += e.key.toLowerCase();
    if (keysPressed.endsWith('bot')) {
      togglePanel(true);
      printConsole('🤖 [SYS] Robot terminal triggered via hotkey!', 'sys');
      keysPressed = '';
    }
    if (keysPressed.length > 10) keysPressed = keysPressed.slice(-5);
  });

  function togglePanel(open) {
    isPanelOpen = open;
    if (open) {
      panel.classList.add('open');
      launcher.querySelector('.auto-launcher-text').textContent = 'SYS: ACTIVE';
    } else {
      panel.classList.remove('open');
      launcher.querySelector('.auto-launcher-text').textContent = 'SYS: ONLINE';
    }
  }

  function switchTab(tab) {
    activeTab = tab;
    if (tab === 'runbooks') {
      tabBtnRunbooks.classList.add('active');
      tabBtnSandbox.classList.remove('active');
      tabRunbooks.classList.add('active');
      tabSandbox.classList.remove('active');
    } else {
      tabBtnSandbox.classList.add('active');
      tabBtnRunbooks.classList.remove('active');
      tabSandbox.classList.add('active');
      tabRunbooks.classList.remove('active');
    }
  }

  // ── Live Console Logger ───────────────────────────────────
  function printConsole(text, type = '') {
    const line = document.createElement('div');
    line.className = `auto-console-line ${type}`;
    line.textContent = text;
    consoleFeed.appendChild(line);
    consoleFeed.scrollTop = consoleFeed.scrollHeight;
  }

  // ── Async Helper Functions for RPA Simulator ──────────────

  // Smooth mouse cursor coordinate movement via Bezier easing
  async function moveCursorTo(element, duration = 1200) {
    if (!element) return;
    virtualCursor.style.opacity = '1';
    
    const rect = element.getBoundingClientRect();
    
    // Target center of element (viewport coords for position:fixed)
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;
    
    // Start from current virtual cursor location
    const startX = parseFloat(virtualCursor.style.left || `${window.innerWidth / 2}`);
    const startY = parseFloat(virtualCursor.style.top || `${window.innerHeight / 2}`);
    
    const startTime = performance.now();
    
    return new Promise(resolve => {
      function animateStep(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic: smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        
        const currentX = startX + (targetX - startX) * eased;
        const currentY = startY + (targetY - startY) * eased;
        
        virtualCursor.style.left = `${currentX}px`;
        virtualCursor.style.top = `${currentY}px`;
        
        if (progress < 1) {
          requestAnimationFrame(animateStep);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(animateStep);
    });
  }

  // Realistic human-like character typing into input elements
  async function simulateTyping(element, text) {
    element.focus();
    element.value = '';
    
    for (let i = 0; i < text.length; i++) {
      element.value += text[i];
      // Dispatch input & keypress events so the website's original validation and layout reacts
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: text[i] }));
      await new Promise(res => setTimeout(res, Math.random() * 50 + 40));
    }
  }

  // Automated window scrolling
  async function smoothScrollTo(element) {
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Wait for the scrolling easing animation to settle
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Display glowing OCR target alignment laser scanner box
  function showScanner(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    
    // Viewport coords for position:fixed
    laserScanner.style.width = `${rect.width + 10}px`;
    laserScanner.style.height = `${rect.height + 10}px`;
    laserScanner.style.left = `${rect.left - 5}px`;
    laserScanner.style.top = `${rect.top - 5}px`;
    laserScanner.style.opacity = '1';
  }

  function hideScanner() {
    laserScanner.style.opacity = '0';
  }

  // ── RPA Runbook Script Execution ─────────────────────────
  const runButtons = document.querySelectorAll('.auto-btn-run');
  runButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const scriptName = e.target.getAttribute('data-runbook');
      if (activeRunbook) return; // Allow only one script running at a time
      
      activeRunbook = scriptName;
      btn.disabled = true;
      btn.textContent = 'RUNNING...';
      statusDot.classList.add('active');
      document.body.classList.add('auto-overlay-active'); // temporarily block clicks outside panel
      
      try {
        if (scriptName === 'ocr') {
          await runOCRScript();
        } else if (scriptName === 'skills') {
          await runSkillsScript();
        } else if (scriptName === 'contact') {
          await runContactScript();
        }
      } catch (err) {
        console.error('Runbook error:', err);
        printConsole(`❌ [SYS] Runtime Glitch: ${err.message}`, 'warn');
      } finally {
        activeRunbook = null;
        btn.disabled = false;
        btn.textContent = 'Run Script';
        statusDot.classList.remove('active');
        document.body.classList.remove('auto-overlay-active');
        virtualCursor.style.opacity = '0';
        hideScanner();
      }
    });
  });

  // RUNBOOK 1: CV OCR Scanner
  async function runOCRScript() {
    printConsole('🔍 [OCR] Initializing Tesseract & CV analysis...', 'sys');
    await new Promise(res => setTimeout(res, 800));
    
    // 1. Scroll to About Section
    const aboutSection = document.getElementById('about');
    printConsole('🔍 [OCR] Scrolling viewport to Section 01: #ABOUT...', 'sys');
    await smoothScrollTo(aboutSection);
    
    // 2. Move virtual cursor and scan Left text
    const textTarget = document.querySelector('#about .reveal-left');
    printConsole('🔍 [OCR] Scanning profile summary block... Searching markers.', 'sys');
    await moveCursorTo(textTarget, 1000);
    showScanner(textTarget);
    await new Promise(res => setTimeout(res, 1800)); // scan duration
    printConsole('🔍 [OCR] Found metadata: Amos Gnanaraj, Senior Group Lead, .NET Architect.', 'success');
    
    // 3. Scan right information cards
    hideScanner();
    const rightCards = document.querySelector('#about .reveal-right');
    printConsole('🔍 [OCR] Recalibrating coordinates. Scanning professional milestones...', 'sys');
    await moveCursorTo(rightCards, 900);
    showScanner(rightCards);
    await new Promise(res => setTimeout(res, 1800));
    printConsole('🔍 [OCR] Milestone matches: Access Healthcare, B.E. Computer Science.', 'success');
    
    // 4. Wrap up
    hideScanner();
    printConsole('🏆 [OCR] Scan complete. Accuracy: 99.85%. Structural layout synced.', 'success');
  }

  // RUNBOOK 2: Skills Harvester
  async function runSkillsScript() {
    printConsole('🧠 [AI] Deploying Local LLM Cognitive Harvester agent...', 'ai');
    await new Promise(res => setTimeout(res, 800));

    // 1. Scroll to Skills
    const skillsSection = document.getElementById('skills');
    printConsole('🧠 [AI] Scrolling layout to Section 02: #SKILLS...', 'ai');
    await smoothScrollTo(skillsSection);

    // 2. We will select three high-tech tags and hover/glow them
    const targets = [
      { selector: '.skill-cat-backend .tag-primary', key: 'C# / .NET 10', log: '⚙️ Backend Mastered. High-scale C# core validated.' },
      { selector: '.skill-cat-workflow .tag-accent', key: 'Elsa Workflow', log: '🔄 Elsa Orchestration Engine custom activities verified.' },
      { selector: '.skill-cat-ai .tag-violet', key: 'Local LLM', log: '🧠 Local AI Agent infrastructure verified. Cognitive layers synced.' }
    ];

    for (const target of targets) {
      const tagEl = document.querySelector(target.selector);
      if (tagEl) {
        printConsole(`🧠 [AI] Moving agent to tag "${target.key}"...`, 'ai');
        await moveCursorTo(tagEl, 800);
        
        // Emulate hover activation
        tagEl.style.transform = 'scale(1.1)';
        tagEl.style.borderColor = 'var(--clr-primary)';
        tagEl.style.boxShadow = 'var(--glow-primary)';
        tagEl.style.background = 'var(--clr-primary-dim)';
        
        await new Promise(res => setTimeout(res, 1200));
        printConsole(`🧠 [AI] ${target.log}`, 'success');
        
        // Reset hover styles
        tagEl.style.transform = '';
        tagEl.style.borderColor = '';
        tagEl.style.boxShadow = '';
        tagEl.style.background = '';
      }
    }

    printConsole('🏆 [AI] Skills audit successful. Talent density rating: Elite.', 'success');
  }

  // RUNBOOK 3: Contact Form Auto-Typer
  async function runContactScript() {
    printConsole('🤖 [RPA] Reading XML recording file... Web elements mapped.', 'sys');
    await new Promise(res => setTimeout(res, 600));

    // 1. Scroll to Contact Section
    const contactSection = document.getElementById('contact');
    printConsole('🤖 [RPA] Scrolling web view port to Section 07: #CONTACT...', 'sys');
    await smoothScrollTo(contactSection);

    // 2. Map form elements
    const nameInput = document.getElementById('input_name');
    const emailInput = document.getElementById('input_email');
    const subjectInput = document.getElementById('input_subject');
    const messageInput = document.getElementById('input_message');
    const submitBtn = document.getElementById('form-submit');

    if (!nameInput || !emailInput || !subjectInput || !messageInput || !submitBtn) {
      throw new Error('Contact form elements missing or renamed.');
    }

    // 3. Automate Name
    printConsole('🤖 [RPA] Focusing on form element [input_name]...', 'sys');
    await moveCursorTo(nameInput, 800);
    nameInput.focus();
    await new Promise(res => setTimeout(res, 300));
    await simulateTyping(nameInput, 'RPA Agent Drone-4');

    // 4. Automate Email
    printConsole('🤖 [RPA] Focusing on form element [input_email]...', 'sys');
    await moveCursorTo(emailInput, 700);
    emailInput.focus();
    await new Promise(res => setTimeout(res, 300));
    await simulateTyping(emailInput, 'rpa.drone@cyberdyne.com');

    // 5. Automate Subject
    printConsole('🤖 [RPA] Focusing on form element [input_subject]...', 'sys');
    await moveCursorTo(subjectInput, 700);
    subjectInput.focus();
    await new Promise(res => setTimeout(res, 300));
    await simulateTyping(subjectInput, 'System Diagnostic Log');

    // 6. Automate Message
    printConsole('🤖 [RPA] Focusing on form element [input_message]...', 'sys');
    await moveCursorTo(messageInput, 800);
    messageInput.focus();
    await new Promise(res => setTimeout(res, 300));
    await simulateTyping(messageInput, 'Hello Amos J, I have initiated a full RPA and browser automation sweep of your portfolio. Your orchestration activities and system architecture are performing at peak efficiency! 🚀');

    // 7. Automate Button Hover
    printConsole('🤖 [RPA] Moving target to trigger [submit_btn]...', 'sys');
    await moveCursorTo(submitBtn, 900);
    
    // Glow submit button briefly to indicate bot hover
    submitBtn.style.boxShadow = '0 0 20px var(--clr-primary)';
    await new Promise(res => setTimeout(res, 1200));
    submitBtn.style.boxShadow = '';

    printConsole('🏆 [RPA] Form filling executed flawlessly. Awaiting human click verification to send.', 'success');
  }

  // ── HACKING PUZZLE LOGIC ──────────────────────────────────

  // Stage 1: Elsa Loop repair check
  submitStage1.addEventListener('click', verifyStage1);
  inputStage1.addEventListener('keypress', (e) => { if (e.key === 'Enter') verifyStage1(); });
  
  // Real-time synchronization of what the user types to the code placeholder!
  inputStage1.addEventListener('input', () => {
    const placeholderEl = document.getElementById('editor-placeholder');
    if (placeholderEl) {
      placeholderEl.textContent = inputStage1.value.trim() || '______';
    }
  });

  function verifyStage1() {
    const val = inputStage1.value.trim().toLowerCase();
    
    // Validate user input against acceptable answers for the randomized question
    const isCorrect = selectedQuestion.acceptedAnswers.some(ans => val === ans || val === ans.toLowerCase());
    
    if (isCorrect) {
      hackingProgress.stage1 = true;
      dotStage1.className = 'auto-progress-dot done';
      printConsole(`🔐 [SYS] ${selectedQuestion.title} resolved. State synchronized successfully!`, 'success');
      
      // Shift to stage 2
      document.getElementById('stage-1').classList.remove('active');
      document.getElementById('stage-2').classList.add('active');
      activeHackingStage = 2;
      dotStage2.className = 'auto-progress-dot active';
      
      // Re-align widget height
      panel.scrollTop = 0;
    } else {
      printConsole('❌ [SYS] Validation Glitch #1: Invalid control token key.', 'warn');
      inputStage1.value = '';
      const placeholderEl = document.getElementById('editor-placeholder');
      if (placeholderEl) placeholderEl.textContent = '______';
      inputStage1.focus();
    }
  }

  // Stage 2: OCR Matrix grid
  const cells = hackingMatrix.querySelectorAll('.auto-matrix-cell');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const idx = parseInt(cell.getAttribute('data-idx'));
      activeMatrixState[idx] = !activeMatrixState[idx];
      cell.classList.toggle('active', activeMatrixState[idx]);
      
      // Check if grid matches target state (X pattern)
      const matchesAll = activeMatrixState.every((val, i) => val === targetMatrixState[i]);
      if (matchesAll) {
        hackingProgress.stage2 = true;
        dotStage2.className = 'auto-progress-dot done';
        printConsole('🔐 [SYS] Glitch #2: OCR spatial alignment aligned.', 'success');
        
        // Shift to stage 3
        document.getElementById('stage-2').classList.remove('active');
        document.getElementById('stage-3').classList.add('active');
        activeHackingStage = 3;
        dotStage3.className = 'auto-progress-dot active';
        
        panel.scrollTop = 0;
      }
    });
  });

  // Stage 3: LLM Sync key verify
  submitStage3.addEventListener('click', verifyStage3);
  inputStage3.addEventListener('keypress', (e) => { if (e.key === 'Enter') verifyStage3(); });

  function verifyStage3() {
    const val = inputStage3.value.trim().toUpperCase();
    
    if (val === targetStage3Key) {
      hackingProgress.stage3 = true;
      dotStage3.className = 'auto-progress-dot done';
      printConsole(`🔐 [SYS] Glitch #3: LLM Secure Registry Key "${targetStage3Key}" synced and aligned.`, 'success');
      
      // Shift to Resolved Screen
      document.getElementById('stage-3').classList.remove('active');
      resolvedScreen.classList.add('active');
      activeHackingStage = 4;
      
      // Clear glitch alert banners
      document.querySelector('.auto-sandbox-banner').innerHTML = '✅ SYSTEM RESTORE COMPLETE. All core layers are synchronized and running at peak performance.';
      document.querySelector('.auto-sandbox-banner').style.background = 'rgba(0,255,102,0.06)';
      document.querySelector('.auto-sandbox-banner').style.borderColor = 'rgba(0,255,102,0.2)';
      document.querySelector('.auto-sandbox-banner').style.color = 'var(--clr-primary)';

      panel.scrollTop = 0;
      
      // Play retro-futuristic re-sync digital rain transition
      startMatrixRain();
    } else {
      printConsole('❌ [SYS] Validation Glitch #3: Invalid Alignment Security Token.', 'warn');
      inputStage3.value = '';
      inputStage3.focus();
    }
  }

  // ── Canvas-based Matrix Digital Rain Reboot Animation ─────
  function startMatrixRain() {
    canvasRain.classList.add('active');
    const ctx = canvasRain.getContext('2d');
    
    let W = canvasRain.width = window.innerWidth;
    let H = canvasRain.height = window.innerHeight;
    
    // Font parameters
    const fontSize = 14;
    const columns = Math.floor(W / fontSize);
    const drops = Array(columns).fill(1);
    
    const symbols = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ💻🤖⚡🧠🔒🔑".split("");
    let frame = 0;
    let animId;
    let lastTime = performance.now();
    const fps = 24; // 24 FPS transitions are cinematic and perfectly paced
    const interval = 1000 / fps;

    // Handle resizing on compile
    window.addEventListener('resize', () => {
      W = canvasRain.width = window.innerWidth;
      H = canvasRain.height = window.innerHeight;
    });

    function drawRain(timestamp) {
      const now = timestamp || performance.now();
      const elapsed = now - lastTime;

      if (elapsed < interval) {
        animId = requestAnimationFrame(drawRain);
        return;
      }

      lastTime = now - (elapsed % interval);

      ctx.fillStyle = "rgba(3, 9, 6, 0.08)";
      ctx.fillRect(0, 0, W, H);
      
      ctx.fillStyle = "#00ff66";
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = symbols[Math.floor(Math.random() * symbols.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillText(char, x, y);
        
        if (y > H && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      frame++;
      if (frame < 48) { // ~2 seconds at 24 FPS
        animId = requestAnimationFrame(drawRain);
      } else {
        // Fade out rain
        canvasRain.classList.remove('active');
        cancelAnimationFrame(animId);
        
        // Auto-enable Cyber Theme as a reward trigger
        enableCyberMode(true);
      }
    }
    
    drawRain();
  }

  // ── Theme Overriding (Reward Cyber Theme Trigger) ─────────
  cyberToggler.addEventListener('click', () => {
    const isCyber = document.documentElement.classList.contains('matrix-cyber-mode');
    enableCyberMode(!isCyber);
  });

  // ── Continuous Background Matrix Numbers Rain Loop ───────
  let bgCtx = bgCanvas.getContext('2d');
  let bgW = 0, bgH = 0, bgColumns = 0, bgDrops = [];
  const bgFontSize = 14;
  const bgSymbols = '0123456789'.split('');
  let bgAnimId = null;
  let bgResizeTimer = null;
  let lastBgTime = performance.now();
  const bgFps = 20; // NICELY paced matrix rain (20 updates per second looks super cinematic)
  const bgInterval = 1000 / bgFps;

  function initBgCanvas() {
    bgW = bgCanvas.width = window.innerWidth;
    bgH = bgCanvas.height = window.innerHeight;
    bgColumns = Math.floor(bgW / bgFontSize);
    // Stagger initial drop positions so rain is already falling across the screen
    bgDrops = Array.from({ length: bgColumns }, () => Math.floor(Math.random() * (bgH / bgFontSize)));
  }

  function drawBgRain(timestamp) {
    bgAnimId = requestAnimationFrame(drawBgRain);

    if (document.documentElement.classList.contains('matrix-cyber-mode')) {
      const now = timestamp || performance.now();
      const elapsed = now - lastBgTime;

      // Throttle rendering speed to the target cinematic frame rate
      if (elapsed < bgInterval) {
        return;
      }

      lastBgTime = now - (elapsed % bgInterval);

      // Semi-transparent fill creates the fading trail effect
      bgCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      bgCtx.fillRect(0, 0, bgW, bgH);

      bgCtx.fillStyle = '#00ff66';
      bgCtx.font = `${bgFontSize}px monospace`;

      for (let i = 0; i < bgDrops.length; i++) {
        const char = bgSymbols[Math.floor(Math.random() * bgSymbols.length)];
        const x = i * bgFontSize;
        const y = bgDrops[i] * bgFontSize;

        bgCtx.fillText(char, x, y);

        // Reset drop to top after it passes the bottom, with randomness for organic feel
        if (y > bgH && Math.random() > 0.975) {
          bgDrops[i] = 0;
        }
        bgDrops[i]++;
      }
    }
  }

  // Debounced resize — only fires 200ms after the user stops resizing,
  // preventing rapid canvas clears that cause the "stuck" appearance
  window.addEventListener('resize', () => {
    clearTimeout(bgResizeTimer);
    bgResizeTimer = setTimeout(() => {
      initBgCanvas();
    }, 200);
  });

  function enableCyberMode(enable) {
    if (enable) {
      document.documentElement.classList.add('matrix-cyber-mode');
      printConsole('⚡ [SYS] MATRIX CYBER THEME ENGAGED. SLEEK COGNITIVE LOOK STABLE.', 'success');
      cyberToggler.innerHTML = '⚡ Cyber Theme Activated';
      initBgCanvas();
    } else {
      document.documentElement.classList.remove('matrix-cyber-mode');
      printConsole('⚡ [SYS] RESTORED TO DEFAULT PORTFOLIO STYLING MATRIX.', 'sys');
      cyberToggler.innerHTML = '⚡ Toggle Matrix Cyber Mode';
      // Clear the canvas so no ghost trails remain
      bgCtx.clearRect(0, 0, bgW, bgH);
    }
  }

  // Initialize and start the continuous rain loop
  initBgCanvas();
  drawBgRain();

})();
