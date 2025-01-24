import * as sdk from 'node-appwrite'

const{
    Project_ID,API_KEY,DATABASE_ID,Patient_id,
    Bucket_id:Bucket_id,
    Endpoint:Endpoint,
}=process.env

const client =new sdk.Client();


client
 .setEndpoint('https://cloud.appwrite.io/v1')
 .setProject(Project_ID!)
 .setKey(API_KEY!)


 export const database =new sdk.Databases(client)
 export const storage = new sdk.Storage(client)
 export const messaging = new sdk.Messaging(client)
 export const users =new sdk.Users(client)
