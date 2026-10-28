import {getCloudflareContext} from '@opennextjs/cloudflare';

// A live Worker-version identifier for independent Cloudflare deployment review.
// This is NOT a Git commit SHA and cannot by itself certify source provenance.
export const dynamic = 'force-dynamic';

export async function GET() {
  const headers = {
    'Cache-Control': 'no-store, max-age=0',
    'X-Robots-Tag': 'noindex, nofollow',
  };
  try {
    const {env} = getCloudflareContext();
    const version = (env as unknown as {
      CF_VERSION_METADATA?: {id?: string; tag?: string; timestamp?: string};
    }).CF_VERSION_METADATA;
    if (!version?.id) {
      return Response.json({status: 'unavailable', reason: 'Cloudflare version metadata binding not deployed'},
        {status: 503, headers});
    }
    return Response.json({
      status: 'available',
      workerVersionId: version.id,
      workerVersionTag: version.tag ?? null,
      workerVersionCreatedAt: version.timestamp ?? null,
      provenance: 'Cloudflare runtime version metadata; match version ID to Cloudflare deployment records and Git commit separately',
    }, {headers});
  } catch {
    return Response.json({status: 'unavailable', reason: 'Cloudflare runtime context not available'},
      {status: 503, headers});
  }
}
