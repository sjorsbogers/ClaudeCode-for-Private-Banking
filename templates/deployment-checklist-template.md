# Deployment Security Checklist

**Tool Name:** [Name]
**Deployed by:** [Your name]
**Deployment Date:** [Date]
**Environment:** [Vercel / Internal / Other]
**URL:** [Deployment URL]

---

## 1. Authentication & Access Control

- [ ] Authentication enabled (not publicly accessible without login)
- [ ] Role-based access configured (RM sees only their clients, analyst sees only their funds)
- [ ] Default admin credentials changed
- [ ] Session timeout configured (recommend: 30 minutes inactive)
- [ ] Password requirements meet firm standards

**Access Control Model:**
| Role | Can Access | Cannot Access |
|------|-----------|---------------|
| RM | Own client data, reports | Other RMs' clients, admin |
| Analyst | Fund data, memo builder | Client PII, admin |
| Compliance | All data (read), sign-off fields | Code changes, admin |
| Admin | Everything | — |

---

## 2. Secrets & Configuration

- [ ] API keys stored in environment variables (NOT in code)
- [ ] No secrets committed to GitHub (check `.gitignore`)
- [ ] Production environment variables set in Vercel dashboard
- [ ] Separate API keys for development vs. production
- [ ] `.env.local` file excluded from version control

**Environment Variables Configured:**
| Variable | Set? | Location |
|----------|------|----------|
| API keys | [ ] | Vercel dashboard |
| Database URL | [ ] | Vercel dashboard |
| Auth secret | [ ] | Vercel dashboard |

---

## 3. Data Protection

- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] No client PII stored in browser localStorage
- [ ] No client data in URL parameters (use POST, not GET for sensitive data)
- [ ] Data in transit encrypted (TLS 1.2+)
- [ ] Cookie security flags set (HttpOnly, Secure, SameSite)

---

## 4. Audit Logging

- [ ] User actions logged (who accessed what, when)
- [ ] Report generation logged (which client, which RM, timestamp)
- [ ] Failed login attempts logged
- [ ] Logs stored securely (not accessible to end users)
- [ ] Log retention period defined (recommend: 7 years for financial services)

**Audit Log Format:**
```
[timestamp] [user] [action] [resource] [result]
Example: 2026-02-11T10:30:00Z | elena.vasquez | generated_report | client:van-der-berg | success
```

---

## 5. Compliance & Regulatory

- [ ] Pre-Build Compliance Checklist completed (see templates/pre-build-compliance-checklist.md)
- [ ] Required disclaimers present in all outputs
- [ ] Regulatory footer appropriate for deployment jurisdiction
- [ ] Data residency requirements met (where is the server located?)
- [ ] Vendor assessment completed for hosting provider

---

## 6. Operational Readiness

- [ ] Error handling: users see friendly messages, not stack traces
- [ ] Backup strategy defined (can we recover if something breaks?)
- [ ] Support contact identified (who do users call if it's down?)
- [ ] Performance tested (works with expected number of concurrent users)
- [ ] Mobile tested (works on tablet/phone for field use)

---

## 7. Go-Live Approval

| Approver | Status | Date |
|----------|--------|------|
| Technical review | [ ] Approved | |
| Compliance review (Raj) | [ ] Approved | |
| Business owner | [ ] Approved | |

**Overall Status:** [READY TO DEPLOY / NEEDS WORK / BLOCKED]

---

*Claudius Capital — Deployment Security Checklist v1.0*
*For internal tools handling client data. All items should be reviewed before production deployment.*
