// Content for pillars in Dutch and English
const pillarsContent = {
  nl: `
<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button" data-tab="tab1">Pilaar 1</button>
    <button class="tab-button" data-tab="tab2">Pilaar 2</button>
    <button class="tab-button" data-tab="tab3">Pilaar 3</button>
  </div>
</div>
<div class="tab-content" id="tab1">
  <h2>Pilaar 1: BBL Studentenleerling (3 jaar)</h2>
  <p><strong>Leeftijd:</strong> 15+</p>
  <p><strong>Werk:</strong> 4 dagen per week</p>
  <p><strong>Studie:</strong> 1 dag op school (gekoppeld aan het Ministerie van Onderwijs)</p>
  <p><strong>Opleidingsfocus:</strong> Diploma-georiënteerde opleiding</p>
  <p><strong>Wervingscyclus:</strong> 2 keer per jaar (januari & juli)</p>
  <p><strong>Startdata:</strong> maart & september</p>
  <h3>Ideaal Kandidaat Profiel</h3>
  <p>Voorbeeld Kandidaat: Tom Janssen, 16 jaar oud, afrondende middelbare school, houdt ervan om met gereedschap te werken en zoekt een stabiele carrière.</p>
  <p><strong>Waarom dit programma?</strong> Wil school en werk combineren om een carrière in koeltechniek op te bouwen.</p>
  <h3>Potentiële Achtergronden:</h3>
  <ul>
    <li>Middelbare scholieren (VMBO, MBO niveau 2-3)</li>
    <li>Algemene arbeiders met interesse in technische beroepen</li>
    <li>Schoolverlaters op zoek naar een gestructureerd leertraject</li>
    <li>Junior magazijnmedewerkers met interesse in mechanica</li>
    <li>Assistent-monteurs in de automotive of industriële sectoren</li>
  </ul>
  <button class="minimize-button">Minimaliseer</button>
</div>
<div class="tab-content" id="tab2">
  <h2>Pilaar 2: Zij-instroom/Omscholingsleerling (2 jaar)</h2>
  <p><strong>Leeftijd:</strong> 18+</p>
  <p><strong>Werk:</strong> 4 dagen per week</p>
  <p><strong>Studie:</strong> 1 dag op het ROVC opleidingsinstituut + Opleidingscentrum</p>
  <p><strong>Focus:</strong> Volledig gericht op koeltechniek</p>
  <p><strong>Vereisten:</strong> Rijbewijs vereist</p>
  <p><strong>Wervingscyclus:</strong> Maandelijks</p>
  <p><strong>Startdata:</strong> Eerste week van elke maand</p>
  <h3>Ideaal Kandidaat Profiel</h3>
  <p>Voorbeeld Kandidaat: Lisa van den Berg, 24 jaar oud, momenteel elektricien maar wil overschakelen naar koeltechniek.</p>
  <p><strong>Waarom dit programma?</strong> Heeft al enige technische ervaring, maar heeft formele training in koeltechniek nodig.</p>
  <h3>Potentiële Achtergronden:</h3>
  <ul>
    <li>Elektriciens</li>
    <li>Bouwvakkers</li>
    <li>Loodgieters</li>
    <li>Algemene onderhoudstechnici</li>
    <li>Automotive monteurs</li>
    <li>HVAC helpers of assistenten</li>
    <li>Magazijnmedewerkers met technische vaardigheden</li>
    <li>Facilitair onderhoudspersoneel</li>
  </ul>
  <button class="minimize-button">Minimaliseer</button>
</div>
<div class="tab-content" id="tab3">
  <h2>Pilaar 3: Specialisatie in Koeltechniek (1 jaar)</h2>
  <p><strong>Leeftijd:</strong> 21+</p>
  <p><strong>Ervaring:</strong> Vereist technische ervaring, maar niet in koeltechniek</p>
  <p><strong>Opleiding:</strong> Gespecialiseerde training in koeltechniek</p>
  <p><strong>Werk:</strong> 4 dagen per week</p>
  <p><strong>Studie:</strong> 1 dag op het ROVC opleidingsinstituut</p>
  <p><strong>Zelfstandigheid:</strong> Hoge mate van zelfstandigheid</p>
  <p><strong>Vereisten:</strong> Rijbewijs vereist</p>
  <p><strong>Wervingscyclus:</strong> Doorlopend</p>
  <p><strong>Startdata:</strong> Eerste week van elke maand</p>
  <h3>Ideaal Kandidaat Profiel</h3>
  <p>Voorbeeld Kandidaat: Peter de Vries, 30 jaar oud, een ervaren industrieel monteur in een productieomgeving, maar zonder koeltechnische ervaring.</p>
  <p><strong>Waarom dit programma?</strong> Heeft al mechanische ervaring, maar heeft specifieke training nodig om over te stappen naar koeltechniek.</p>
  <h3>Potentiële Achtergronden:</h3>
  <ul>
    <li>Industriële monteurs</li>
    <li>Werktuigbouwkundig ingenieurs</li>
    <li>Onderhoudstechnici in de productie</li>
    <li>Machinebedieners met mechanische kennis</li>
    <li>Automotive monteurs</li>
    <li>Mechatronica specialisten</li>
    <li>Energie systeem technici</li>
    <li>Technisch supervisors in niet-koeltechnische sectoren</li>
  </ul>
  <button class="minimize-button">Minimaliseer</button>
</div>
  `,
  en: `
<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button" data-tab="tab1">Pillar 1</button>
    <button class="tab-button" data-tab="tab2">Pillar 2</button>
    <button class="tab-button" data-tab="tab3">Pillar 3</button>
  </div>
</div>
<div class="tab-content" id="tab1">
  <h2>Pillar 1: BBL Student Apprenticeship (3 Years)</h2>
  <p><strong>Age:</strong> 15+</p>
  <p><strong>Work:</strong> 4 days per week</p>
  <p><strong>Study:</strong> 1 day at school (linked to the Ministry of Education)</p>
  <p><strong>Focus:</strong> Diploma-oriented program</p>
  <p><strong>Recruitment Cycle:</strong> Twice per year (January & July)</p>
  <p><strong>Onboarding Dates:</strong> March & September</p>
  <h3>Ideal Candidate Profile</h3>
  <p>Example Candidate: Tom Janssen, 16 years old, finishing secondary school, likes working with tools, seeking a stable career.</p>
  <p><strong>Why This Program?</strong> Wants to combine school and work to build a career in refrigeration.</p>
  <h3>Potential Backgrounds:</h3>
  <ul>
    <li>Secondary school students (VMBO, MBO level 2-3)</li>
    <li>General laborers interested in technical trades</li>
    <li>School dropouts seeking a structured learning path</li>
    <li>Junior warehouse workers with mechanical interests</li>
    <li>Assistant mechanics in automotive or industrial sectors</li>
  </ul>
  <button class="minimize-button">Minimize</button>
</div>
<div class="tab-content" id="tab2">
  <h2>Pillar 2: Sidestream/Retraining Apprenticeship (2 Years)</h2>
  <p><strong>Age:</strong> 18+</p>
  <p><strong>Work:</strong> 4 days per week</p>
  <p><strong>Study:</strong> 1 day at ROVC training institute + Carrier training center</p>
  <p><strong>Focus:</strong> Fully focused on refrigeration technology</p>
  <p><strong>Requirement:</strong> Driving license required</p>
  <p><strong>Recruitment Cycle:</strong> Monthly</p>
  <p><strong>Onboarding Dates:</strong> First week of every month</p>
  <h3>Ideal Candidate Profile</h3>
  <p>Example Candidate: Lisa van den Berg, 24, currently an electrician but wants to switch to refrigeration.</p>
  <p><strong>Why This Program?</strong> Already has some technical experience but needs formal refrigeration training.</p>
  <h3>Potential Backgrounds:</h3>
  <ul>
    <li>Electricians</li>
    <li>Construction workers</li>
    <li>Plumbers</li>
    <li>General maintenance technicians</li>
    <li>Automotive mechanics</li>
    <li>HVAC helpers or assistants</li>
    <li>Warehouse operators with technical skills</li>
    <li>Facility maintenance workers</li>
  </ul>
  <button class="minimize-button">Minimize</button>
</div>
<div class="tab-content" id="tab3">
  <h2>Pillar 3: Refrigeration Specialization (1 Year)</h2>
  <p><strong>Age:</strong> 21+</p>
  <p><strong>Experience:</strong> Requires technical experience, but not in refrigeration</p>
  <p><strong>Training:</strong> Specialized refrigeration technology</p>
  <p><strong>Work:</strong> 4 days per week</p>
  <p><strong>Study:</strong> 1 day at ROVC training institute</p>
  <p><strong>Independence:</strong> High degree of independence</p>
  <p><strong>Requirement:</strong> Driving license required</p>
  <p><strong>Recruitment Cycle:</strong> Rolling basis</p>
  <p><strong>Onboarding Dates:</strong> First week of every month</p>
  <h3>Ideal Candidate Profile</h3>
  <p>Example Candidate: Peter de Vries, 30, an experienced industrial mechanic but no refrigeration experience.</p>
  <p><strong>Why This Program?</strong> Already has mechanical experience but needs specific refrigeration training.</p>
  <h3>Potential Backgrounds:</h3>
  <ul>
    <li>Industrial mechanics</li>
    <li>Mechanical engineers</li>
    <li>Maintenance technicians in manufacturing</li>
    <li>Machine operators with mechanical knowledge</li>
    <li>Automotive mechanics</li>
    <li>Mechatronics specialists</li>
    <li>Energy system technicians</li>
    <li>Technical supervisors in non-refrigeration sectors</li>
  </ul>
  <button class="minimize-button">Minimize</button>
</div>
  `
};

// Timeline content for Dutch and English
const timelineContent = {
  nl: `
<div class="timeline-item">
  <details class="timeline-details">
    <summary>1. Werving &amp; Selectie</summary>
    <div class="details-content">
      <p>In deze fase identificeert en selecteert het TA-team geschikte kandidaten op basis van de functie-eisen. Vervolgens deelt het deze kandidaten met de HM voor een snelle beoordeling via Workday.</p>
      <ul>
        <li>Taak: Zoeken &amp; selecteren van kandidaten (TA)</li>
        <li>Taak: Kandidaat presenteren aan HM met CV (TA)</li>
        <li>Taak: Beoordelen en goedkeuren/afwijzen binnen 2 werkdagen (HM)</li>
        <li>Taak: Bij goedkeuring van HM via Workday wordt de kandidaat gescreend (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>2. Eerste beoordeling &amp; Interview</summary>
    <div class="details-content">
      <p>Zodra de HM goedkeuring geeft, gaan we verder met een eerste virtueel interview om de geschiktheid van de kandidaat te beoordelen. Indien nodig volgt een gesprek op locatie.</p>
      <ul>
        <li>Taak: Plan eerste Teams-interview (TA)</li>
        <li>Taak: Voer het interview uit (HM &amp; Leonie)</li>
        <li>Taak: Plant een tweede interview op locatie indien nodig (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>3. Evaluatie &amp; Feedback</summary>
    <div class="details-content">
      <p>Snelle feedback van alle betrokkenen zorgt ervoor dat we de voortgang behouden. Het TA-team verzamelt en deelt inzichten zodat we gezamenlijk een beslissing kunnen nemen.</p>
      <ul>
        <li>Taak: HM geeft binnen 1 werkdag feedback aan TA over interview (HM &amp; Leonie)</li>
        <li>Taak: Contacteert kandidaat voor feedback interview (TA)</li>
        <li>Taak: Bespreekt vervolgstappen op basis van alle feedback (TA &amp; HM)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>4. Besluitvorming &amp; Aanbod</summary>
    <div class="details-content">
      <p>Wanneer beide partijen akkoord zijn om verder te gaan (HM en kandidaat), coördineren we de details van het aanbod en stellen we een realistische startdatum vast, rekening houdend met eventuele opzegtermijn.</p>
      <ul>
        <li>Taak: Ontvangt aanbodgegevens (HM &amp; Leonie)</li>
        <li>Taak: Contacteert kandidaat over te ontvangen aanbod (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>5. Aanbieding &amp; Afronding</summary>
    <div class="details-content">
      <p>Nadat de kandidaat heeft geaccepteerd, vraagt TA het contract aan bij GPS en zorgt dat alles juist in Workday wordt afgerond. GPS deelt het contract met de kandidaat via mail voor tekenen. Duidelijke communicatie zorgt voor een soepele overgang.</p>
      <ul>
        <li>Taak: Stuurt het definitieve aanbod ter ondertekening naar kandidaat (TA)</li>
        <li>Taak: Kandidaat tekent en retourneert het aanbod (TA)</li>
        <li>Taak: TA informeert HM wanneer alles getekend is en aangevraagd is (TA)</li>
        <li>Taak: Aanvraag contract GPS (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>6. Procesbewaking &amp; Overleg</summary>
    <div class="details-content">
      <p>Regelmatige afstemmingen helpen ons de voortgang te volgen, vertragingen aan te pakken en ervoor te zorgen dat we ons doel halen om binnen 2 werkdagen na een positief interview een aanbod te doen.</p>
      <ul>
        <li>Taak: Wekelijkse afstemming over openstaande vacatures (Leonie &amp; TA)</li>
        <li>Taak: Bewaken van doorlooptijden &amp; signaleren van vertragingen (TA)</li>
        <li>Taak: Neem tijdig beslissingen (Alle betrokkenen)</li>
        <li>Taak: Ontvang wekelijks tijdsloten van HM &amp; Leonie om interviews in te plannen (TA voorstel)</li>
      </ul>
    </div>
  </details>
</div>
  `,
  en: `
<div class="timeline-item">
  <details class="timeline-details">
    <summary>1. Recruitment &amp; Selection</summary>
    <div class="details-content">
      <p>In this phase, the TA team identifies and selects suitable candidates based on the job requirements. Then, the candidates are shared with the HM for a quick review via Workday.</p>
      <ul>
        <li>Task: Search &amp; select candidates (TA)</li>
        <li>Task: Present candidate with resume to HM (TA)</li>
        <li>Task: Approve/reject within 2 working days (HM)</li>
        <li>Task: If approved via Workday, the candidate is screened (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>2. Initial Assessment &amp; Interview</summary>
    <div class="details-content">
      <p>Once the HM gives approval, we proceed with a virtual interview to assess the candidate. If needed, an on-site interview follows.</p>
      <ul>
        <li>Task: Schedule first Teams interview (TA)</li>
        <li>Task: Conduct the interview (HM & Leonie)</li>
        <li>Task: Schedule a second on-site interview if needed (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>3. Evaluation &amp; Feedback</summary>
    <div class="details-content">
      <p>Quick feedback from all involved ensures we maintain momentum. The TA team gathers and shares insights so we can decide collectively.</p>
      <ul>
        <li>Task: HM provides feedback to TA within 1 working day (HM & Leonie)</li>
        <li>Task: Contact candidate for interview feedback (TA)</li>
        <li>Task: Discuss next steps based on feedback (TA & HM)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>4. Decision &amp; Offer</summary>
    <div class="details-content">
      <p>When both parties agree (HM and candidate), we coordinate offer details and set a realistic start date, considering any notice period.</p>
      <ul>
        <li>Task: Receive offer details (HM & Leonie)</li>
        <li>Task: Contact candidate about the offer (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>5. Offering &amp; Completion</summary>
    <div class="details-content">
      <p>After acceptance, TA requests the contract from GPS and completes all steps in Workday. GPS emails the contract to the candidate for signing. Clear communication ensures a smooth transition.</p>
      <ul>
        <li>Task: Send final offer for signature (TA)</li>
        <li>Task: Candidate signs and returns the offer (TA)</li>
        <li>Task: TA notifies HM when all is signed (TA)</li>
        <li>Task: Request contract from GPS (TA)</li>
      </ul>
    </div>
  </details>
</div>
<div class="timeline-item">
  <details class="timeline-details">
    <summary>6. Process Monitoring &amp; Alignment</summary>
    <div class="details-content">
      <p>Regular check-ins help track progress, address delays, and ensure we meet our target: sending an offer within 2 working days after a positive interview.</p>
      <ul>
        <li>Task: Weekly check-in on open vacancies (Leonie & TA)</li>
        <li>Task: Monitor timelines & flag delays (TA)</li>
        <li>Task: Make timely decisions (All involved)</li>
        <li>Task: Receive weekly time slots from HM & Leonie for scheduling interviews (TA proposal)</li>
      </ul>
    </div>
  </details>
</div>
  `
};

let currentLanguage = 'nl';

// References
const pillarsContainer = document.querySelector('.pillars');
const timelineContainer = document.querySelector('.timeline');
const pageTitle = document.querySelector('.page-title');

function loadContent() {
  pillarsContainer.innerHTML = pillarsContent[currentLanguage];
  timelineContainer.innerHTML = timelineContent[currentLanguage];
  initializeScripts();
}

// Load initial content
loadContent();

document.getElementById('toggleLanguage').addEventListener('click', () => {
  currentLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
  loadContent();
});

let editMode = false;
document.getElementById('toggleEdit').addEventListener('click', () => {
  if (!editMode) {
    const pwd = prompt('Enter password to enable editing:');
    if (pwd === '12345') {
      editMode = true;
      pillarsContainer.contentEditable = 'true';
      timelineContainer.contentEditable = 'true';
      pageTitle.contentEditable = 'true';
      alert('Editing enabled. You can now modify text directly on the page.');
    } else {
      alert('Incorrect password!');
    }
  } else {
    editMode = false;
    pillarsContainer.contentEditable = 'false';
    timelineContainer.contentEditable = 'false';
    pageTitle.contentEditable = 'false';
    alert('Editing disabled.');
  }
});

function initializeScripts() {
  // Tab toggling for pillars
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
      const content = document.getElementById(tab);
      if (button.classList.contains('active')) {
        button.classList.remove('active');
        content.classList.remove('active');
      } else {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(cont => cont.classList.remove('active'));
        button.classList.add('active');
        content.classList.add('active');
      }
    });
  });
  
  // Minimize button functionality
  document.querySelectorAll('.minimize-button').forEach(minButton => {
    minButton.addEventListener('click', function() {
      const parentContent = this.parentElement;
      parentContent.classList.remove('active');
      const tabId = parentContent.getAttribute('id');
      document.querySelectorAll('.tab-button').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
          btn.classList.remove('active');
        }
      });
    });
  });
  
  // Timeline items open/close behavior
  document.querySelectorAll('.timeline-item').forEach(item => {
    const details = item.querySelector('.timeline-details');
    details.addEventListener('toggle', function() {
      if (this.open) {
        item.classList.add('open');
      } else {
        item.classList.remove('open');
      }
    });
    // If open by default
    if (details.open) {
      item.classList.add('open');
    }
  });
}
