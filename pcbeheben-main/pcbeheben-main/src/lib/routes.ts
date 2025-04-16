const Routes = {
  home: '/',
  Solution: {
    SetUpTheCompanyNetwork: '/Unternehmensnetzwerk',
    Office365Email: '/office-365-e-mail-setup',
    Network: '/netzwerk-sicherheit',
    FireWallProtection: '/firewall-schutz',
    DriverUpdater: '/treiber-aktualisieren',
    POSsystem: '/Kassensysteme',
    Recovery: '/datenrettung',
    CRMsystem: '/crm-system-solution',
    AntivirusSoftware: '/antiviren-software-solution',
    InstoreItHelpDesk: '/it-helpdesk-instore',
  },
  contact: '/contact',
  about: '/aboutus',
  term: '/nutzungsbedingungen',
  faq: '/faq',
  blog: '/blog',
  blog_post: (slug:string)=>`/blog/${slug}`,
  privacyPolicy:'/datenschutzrichtlinie',
  disclaimer:'/haftungsausschluss',
  Appointment : '/appointment',
  druckerSupport:'/drucker-Support-dienste'
};
export default Routes;