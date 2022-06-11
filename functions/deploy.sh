gcloud functions deploy send_invite --entry-point send_invite --runtime python39 --region=europe-west2 --trigger-http --allow-unauthenticated

gcloud functions deploy send_confirmation --entry-point send_confirmation --runtime python39 --region=europe-west2 --trigger-http --allow-unauthenticated
