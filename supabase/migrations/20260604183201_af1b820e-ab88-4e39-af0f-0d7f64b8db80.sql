CREATE POLICY "No public read access to contact submissions"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (false);

REVOKE SELECT ON public.contact_submissions FROM anon, authenticated;