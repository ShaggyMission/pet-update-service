# # 🐾 Pet Update Service - Shaggy Mission

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</div>

<div align="center">
  <h3>🔄 Pet Information Update Microservice for Street Animal Rescue</h3>
  <p><em>Part of the Shaggy Mission ecosystem - Keeping pet information current for successful rescues! 🐕🐱</em></p>
</div>

---

## 🌟 Overview

The **Pet Update Service** is a specialized microservice in the Shaggy Mission platform that handles updating existing pet information. This service enables rescue organizations, volunteers, and administrators to keep pet profiles current with the latest health status, location updates, new photos, and other critical information that helps facilitate successful adoptions.

## 🎯 What This Service Does

- **Pet Profile Updates**: Modify existing pet information with new data
- **Partial Updates**: Update only specific fields without affecting others
- **Health Status Tracking**: Update pet health conditions over time
- **Location Management**: Track pet location changes for rescue coordination
- **Image Gallery Updates**: Add or replace pet photos for better adoption visibility
- **Data Validation**: Ensure updated information meets platform standards
- **Automatic Timestamping**: Track when pet information was last modified

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB Atlas with Mongoose ODM
- **Data Validation**: Mongoose schema validation with custom rules
- **RESTful Design**: Clean PUT endpoint for resource updates
- **Documentation**: Swagger UI for interactive API documentation
- **Error Handling**: Comprehensive error management and logging

## 📡 API Endpoints

### Pet Update Endpoint
**`PUT /pets/:id`**
- Updates an existing pet's information by MongoDB ObjectId
- Supports partial updates - only provided fields are modified
- Returns the complete updated pet object with new timestamps
- Validates pet ID format and existence before updating

**Request Example:**
```json
{
  "name": "Buddy Updated",
  "age": 4,
  "healthStatus": "Fair",
  "location": "Guayaquil, Ecuador",
  "description": "Friendly dog, now trained and ready for adoption",
  "images": [
    "https://example.com/images/buddy_new1.jpg",
    "https://example.com/images/buddy_new2.jpg"
  ]
}
```

**Response Example:**
```json
{
  "_id": "64f8b2a1c3d4e5f6a7b8c9d0",
  "name": "Buddy Updated",
  "breed": "Golden Retriever",
  "age": 4,
  "healthStatus": "Fair",
  "description": "Friendly dog, now trained and ready for adoption",
  "location": "Guayaquil, Ecuador",
  "images": [
    "https://example.com/images/buddy_new1.jpg",
    "https://example.com/images/buddy_new2.jpg"
  ],
  "createdAt": "2024-06-21T10:30:00.000Z",
  "updatedAt": "2024-06-29T14:45:00.000Z"
}
```

**Error Responses:**
- `404 Not Found`: Pet with specified ID doesn't exist
- `400 Bad Request`: Invalid ObjectId format or validation errors
- `500 Internal Server Error`: Database connection or server issues

### API Documentation
**`GET /putPets-docs`**
- Interactive Swagger UI documentation
- Complete API specification with examples
- Request/response schemas and validation rules
- Try-it-out functionality for testing updates

## 🔧 Core Functionality

### Update Process
The service handles pet updates by accepting a MongoDB ObjectId in the URL path, validating the ID format and pet existence, applying only the provided fields to the existing pet record, running Mongoose validation on the updated data, and returning the complete updated pet object with refreshed timestamps.

### Data Models & Validation
The service uses a comprehensive Mongoose schema that includes required name validation, optional breed and age fields with minimum constraints, health status enumeration (Good, Fair, Delicate), flexible description and location text fields, and an array of image URLs for photo management.

### Partial Update Strategy
Utilizes MongoDB's `findByIdAndUpdate` method with the `new: true` option to return the updated document, ensuring that only specified fields are modified while preserving existing data and maintaining data integrity through Mongoose validation.

## 🌐 Service Integration

This microservice integrates seamlessly with other Shaggy Mission platform components, working alongside the Pet Registration Service for initial pet creation, supporting the Pet Search Service with updated information, enabling rescue coordinators to track pet status changes, and providing adoption agencies with current pet profiles.

## 🔒 Data Integrity & Security

- **ObjectId Validation**: Ensures valid MongoDB ObjectId format
- **Schema Validation**: Mongoose validation for data consistency
- **Partial Updates**: Safe field-level updates without data loss
- **Error Handling**: Comprehensive error management and logging
- **Timestamp Management**: Automatic tracking of creation and update times
- **Data Persistence**: Reliable MongoDB Atlas cloud storage

## 🗃️ Database Schema

### Pet Document Structure
```javascript
{
  _id: ObjectId,
  name: String (required),
  breed: String (optional),
  age: Number (min: 0, optional),
  healthStatus: String (enum: ['Good', 'Fair', 'Delicate'], default: 'Good'),
  description: String (optional),
  location: String (optional),
  images: [String] (array of URLs),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-updated)
}
```

### Health Status Tracking
The service maintains three health status levels:
- **Good**: Healthy pet ready for adoption
- **Fair**: Pet with minor health concerns
- **Delicate**: Pet requiring special medical attention

## 📚 API Documentation

Complete API documentation is available through Swagger UI at `/putPets-docs` when the service is running. The documentation includes:

- Interactive endpoint testing with real pet IDs
- Comprehensive request/response examples
- Field validation rules and constraints
- Error handling scenarios
- MongoDB ObjectId format requirements

## 🔧 Development

### Project Structure
```
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/
│   └── pet.controller.js    # Pet update logic
├── models/
│   └── pet.model.js         # Mongoose Pet schema
├── routes/
│   └── pet.routes.js        # API route definitions
├── services/
│   └── pet.service.js       # Business logic layer
├── docs/
│   └── swagger.yaml         # OpenAPI specification
└── app.js                   # Express application setup
```

### Testing the API
```bash
# Update a pet's information
curl -X PUT "http://localhost:3007/pets/64f8b2a1c3d4e5f6a7b8c9d0" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Pet Name",
    "age": 5,
    "healthStatus": "Good",
    "location": "New Location"
  }'

# Expected response: Updated pet object with new timestamps
```

### Common Update Scenarios
- **Health Status Updates**: Track medical progress and recovery
- **Location Changes**: Update pet location for rescue coordination
- **Photo Updates**: Add new images or replace existing ones
- **Description Updates**: Add behavior notes or special requirements
- **Age Updates**: Correct or update age information

## 🔄 Update Workflows

### Rescue Organization Updates
Rescue organizations can update pet profiles with medical examination results, behavioral assessments, location changes during foster care, and new photos showcasing the pet's progress.

### Volunteer Contributions
Volunteers can contribute by updating pet descriptions with observed behaviors, adding new photos from interaction sessions, updating location information during transport, and providing health status updates from veterinary visits.

### Administrative Updates
Administrators can perform bulk updates for location changes, correct any inaccurate information, update health statuses based on veterinary reports, and manage the pet photo galleries.

---

<div align="center">
  <p><strong>Built with ❤️ for street dogs and cats everywhere 🐕🐱</strong></p>
  <p><em>Every update helps a pet find their forever home faster!</em></p>
  <p>📖 <a href="/putPets-docs">View API Documentation</a></p>
</div>