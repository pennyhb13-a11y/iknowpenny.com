// =============================================
//  I KNOW PENNY — Nav & Footer injection
// =============================================

const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo"><img src="images/logo.png" alt="I Know Penny" style="height:44px;width:auto;display:block;" /></a>
  <button class="hamburger" aria-label="Menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="lending-programs.html">Loan Programs</a></li>
    <li><a href="resources.html">Resources</a></li>
    <li><a href="get-in-touch.html">Contact</a></li>
    <li class="nav-cta"><a href="apply.html" class="btn btn-gold">Apply Now</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html"><img src="images/logo.png" alt="I Know Penny" style="height:48px;width:auto;display:block;margin-bottom:4px;" /></a>
        <p>Your mortgage expert in Middle Tennessee. Real talk, real rates, real fast. NMLS #111937</p>
        <div style="margin-top:18px;display:flex;gap:14px;">
          <a href="https://business.facebook.com/latest/home?nav_ref=bizweb_landing_fb_login_button&business_id=2839252806211317&asset_id=104530249378646" target="_blank" rel="noopener" style="opacity:.7;transition:.2s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.7">Facebook</a>
          <a href="https://www.instagram.com/iknowpenny/" target="_blank" rel="noopener" style="opacity:.7;transition:.2s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.7">Instagram</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="lending-programs.html">Loan Programs</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="get-in-touch.html">Contact</a></li>
          <li><a href="apply.html">Apply Now</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:6158103988">615-810-3988</a></li>
          <li><a href="mailto:penny@iknowpenny.com">penny@iknowpenny.com</a></li>
          <li><a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener">Verify NMLS License</a></li>
        </ul>
        <p style="margin-top:14px;font-size:.82rem;opacity:.55;line-height:1.5">5843 Bending Chestnut Rd<br>Franklin, TN 37064</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="nmls">NMLS #111937 | Licensed in Tennessee | Equal Housing Lender</p>
      <p style="font-size:.8rem;opacity:.55">&copy; 2025 I Know Penny. All Rights Reserved.</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
});
