const {MongoClient} = require('mongodb');

// async function main(){
//     const uri = "mongodb+srv://Adehenry:Adehenry%401@cluster0.up9zn.mongodb.net/adehenrydatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         await listDatabases(client);
        // await createListing(client, {name: "Adehenry's Cottage", summary: "Home away from home", bedrooms: 3, bathrooms: 2, phone: 08030821679});
        // await createMultipleListings(client, [
        //     {name: "Olamide Cottage", summary: "Cool place", bathrooms: 2, phone: 08030821644},
        //     {name: "IbukunOluwa Cottage", summary: "Beauty like never before", bedrooms: 3, bathrooms: 2, phone: 08030828889},
        //     {name: "EbunOluwa Cottage", summary: "God is good", bedrooms: 3, bathrooms: 2, phone: 08033421679, Email: "gangan@gmail.com"},
        //     {name: "Bella Cottage", summary: "Feel at home", bedrooms: 3, bathrooms: 2, phone: 08030828596}
        // ])
        // await findOneListingByName(client, "IbukunOluwa Cottage")
        // await findMultipleListings(client, {minimumBedrooms : 4, minimumBathrooms: 2, maximumResults:5});
        // await updateOneListing(client, "Adehenry's Cottage", {bedrooms: 77, swimmingPool: true, heater: "Available"});
        // await upsertOneListing(client, "Baba's Cottage", {bedrooms: 101, bathrooms: 888})
        // await updateManyListings(client);
        // await deleteOneListing(client, "Baba's Cottage")
        // await deleteMultipleListings(client, new Date('2019-02-15'))

//     } catch (e) {
//         console.error(e)
//     } 
//     finally {
//         await client.close()
//     }
// }



// View list of your databases from your cluster/////////////////////////////

// async function listDatabases(client) {
//     const databaseList = await client.db().admin().listDatabases();

//     console.log('Your Databases:');
//     databaseList.databases.map(db => { console.log(`- ${db.name}`) });
// }

// CREATE DATA//////////////////////////////////////////////////////////////

// Insert a ssingle entry...

// async function createListing(client, newListing) {
//      const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

//      console.log(`New listing(s) has been created with the following id: ${result.insertedId}`);
// }

// Insert multiple entries...

// async function createMultipleListings(client, newMultipleListings) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newMultipleListings);

//     console.log(` ${result.insertedCount} new listings has been created with the following id(s):`);
//     console.log(result.insertedIds);
// }


// READ DATA//////////////////////////////////////////////////////////////

// Read single document...

// async function findOneListingByName(client, nameOfListing){
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

//   if(result) {
//       console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
//       console.log(result);
     
//   } else {
//       console.log(`No listing found with the name '${nameOfListing}'`);
     
//   }
   
// }


// Read multiple documents...

// async function findMultipleListings(client, {minimumBedrooms = 0, minimumBathrooms = 0, 
//                         maximumResults = Number.MAX_SAFE_INTEGER} = {}){
//                const cursor = await client.db("sample_airbnb").collection("listingsAndReviews").find({bedrooms: {$gte: minimumBedrooms}, bathrooms: {$gte: minimumBathrooms}}).sort({last_review: -1}).limit(maximumResults);
//                const result = await cursor.toArray();

//                if(result.length > 0){
//                    console.log(`Found listing(s) with at least ${minimumBedrooms} bedrooms and ${minimumBathrooms} bathrooms:`)
//                    result.forEach((item, i) => {
//                        date = new Date(item.last_review).toDateString();

//                        console.log();
//                        console.log(`${i + 1}. name: ${item.name}`);
//                        console.log(`   _id: ${item._id}`);
//                        console.log(`   bedrooms: ${item.bedrooms}`);
//                        console.log(`   bathrooms: ${item.bathrooms}`);
//                        console.log(`   most recent review date: ${new Date(item.last_review).toDateString()}`);
//                    });
//                } else{
//                    console.log(`No listings found with at least ${minimumBedrooms} bedrooms and ${minimumBathrooms} bathrooms`)
//                }
  
// }


// UPDATE DATA//////////////////////////////////////////////////////////////


// Update a single document..........

// async function updateOneListing(client, nameOfListing, updatedListing) {
//    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({name: nameOfListing},{$set: updatedListing});

//    console.log(`${result.matchedCount} document(s) matched the query criteria`);
//    console.log(`${result.modifiedCount} document(s) was/were updated`);
// }


// Update using UPSERT..........

// async function upsertOneListing(client, nameOfListing, updatedListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({name: nameOfListing},{$set: updatedListing},{upsert: true});
 
//     console.log(`${result.matchedCount} document(s) matched the query criteria`);

//     if(result.upsertedCount > 0) {
//         console.log(`${result.upsertedCount} document(s) was/were inserted with the id '${result.upsertedId}' `);
//     } else {
//         console.log(`${result.modifiedCount} document(s) was/were updated`);
//     }
    
//  }


// Update multiple documents..........

// async function updateManyListings(client) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateMany({garden: {$exists: false}},{$set: {garden: "Available"}});

//        console.log(`${result.matchedCount} document(s) matched the query criteria`);
//        console.log(`${result.modifiedCount} document(s) was/were updated`);
   
// }


// DELETE DATA//////////////////////////////////////////////////////////////


// Delete single document............

// async function deleteOneListing(client, nameOfListing) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({name: nameOfListing});

//        console.log(`${result.deletedCount} document(s) matched the query criteria`);
//        console.log(`${result.deletedCount} document(s) was/were deleted`);
// }


// Delete multiple documents............

// async function deleteMultipleListings(client, date) {
//     const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteMany({"last_scraped": {$lt: date} });
      
//            console.log(`${result.deletedCount} document(s) matched the query criteria`);
//            console.log(`${result.deletedCount} document(s) was/were deleted`);
// }



// main().catch(console.error);
  