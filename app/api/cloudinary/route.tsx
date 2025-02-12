import { v2 as cloudinary } from "cloudinary"
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


cloudinary.config({
  secure: true,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function DELETE(req: NextRequest, res: NextResponse) {
  const public_id = await req.json();
  try {
    const resp = cloudinary.api.delete_resources(public_id)
    console.log(resp);
    return NextResponse.json({ resp, status: 200 });

  } catch (error) {
    console.error(error);
  }
}
export async function GET() {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:nxt-store')
      .sort_by('created_at', 'desc')
      .max_results(5)
      .execute();

    const imagesData = resources.map(({ public_id, secure_url }: { public_id: string, secure_url: string }) => ({
      public_id,
      url: secure_url
    }));


    return NextResponse.json({ imagesData, status: 200 });
  } catch (error) {
    console.error(error);
  }
}

