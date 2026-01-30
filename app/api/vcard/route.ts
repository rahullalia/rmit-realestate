import { NextResponse } from 'next/server'
import { CONTACT } from '@/lib/utils'

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CONTACT.name}
N:Sharma;Rmit;;;
ORG:${CONTACT.company};${CONTACT.team}
TITLE:${CONTACT.title}
TEL;TYPE=CELL:${CONTACT.phone}
EMAIL:${CONTACT.email}
URL:${CONTACT.instagram}
NOTE:Real Estate Professional - Nassau County, Suffolk County, NYC
END:VCARD`

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard',
      'Content-Disposition': `attachment; filename="${CONTACT.name.replace(' ', '_')}.vcf"`,
    },
  })
}
