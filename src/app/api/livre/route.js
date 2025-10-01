import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM produit_livre LIMIT 10");
    return Response.json(rows);
  } catch (err) {
    console.error("Erreur DB:", err);
    return new Response("Erreur serveur", { status: 500 });
  }
}