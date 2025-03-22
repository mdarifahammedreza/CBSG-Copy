# Menu Structure

## Home

### Banner

- **Quote**: max 4 words [max one input]
- **Banner Image [Title]**: image input required (Max Input 5 images)
- **Caption [Title]**: title [Max word count 5 per image]

**API Endpoint:** `/api/home/banner/{bannerimage.jpg}`

Example JSON:

```json
[
  {
    "id": 1,
    "Quote": "Serve Greater Performance"
  },
  {
    "Id": 01,
    "image": "www.example.com/banner1.png",
    "Caption": "Believe In performance"
  }
]
```

### Company Profile - Counting Bar

- **Assignment**: [Auto increasable & decreasable input Number]
- **Countries**: [Auto increasable & decreasable input Number]
- **Customers**: [Auto increasable & decreasable input Number]
- **Experience**: [Auto year from CBSG Founding Date]

**API Endpoint:** `/api/home/company-profile`

Example JSON:

```json
[
  {
    "id": 01,
    "Counting_bar": {
      "Assignment": 20,
      "Countries": 50,
      "Customers": 20,
      "Experience": 35
    },
    "Profile": {
      "What_we_do": "text max 250 char",
      "OD_OI_text": "Char max 650",
      "OD_OI_IMAGE": "image path",
      "R&E_text": "char max 650",
      "R&E_image": "image path"
    }
  }
]
```

### Recent Projects [max 20]

- **Assignment Name**: max 30 words
- **Contract Duration**: Open and Close date fields
- **Contract With**: Company name (max 10 words)
- **Photo**: Image input

**API Endpoint:** `/api/home/recent-project`

Example JSON:

```json
[
  {
    "Assignment": {
      "name": "Developing a scalable system for client data management",
      "Contract Duration": {
        "open": "2025-01-01",
        "close": "2025-12-31"
      },
      "Contract with": "TechSolutions LLC",
      "Photo": "path_to_image.jpg"
    }
  }
]
```

### Practice Areas [max 30 inputs]

**API Endpoint:** `/api/home/practice-areas`

Example JSON:

```json
[
  {
    "Practice_area": {
      "Description": "max 200 char",
      "Practice_areas": [
        {
          "Id": 01,
          "Show_home_page_status": true,
          "Title": "title",
          "Description": "200 max char"
        }
      ]
    }
  }
]
```

### Testimonial

- **Testimonial Text**: max 100 words
- **Name**
- **Title**
- **Organization**
- **Contact**: Email & Phone

**API Endpoint:** `/api/home/testimonial`

Example JSON:

```json
[
  {
    "Id": 01,
    "title": "title",
    "Image": "path",
    "Description": "text 100 words max",
    "Organization": "text",
    "Contact": {
      "Email": "email",
      "Phone": "phone number with country code"
    }
  }
]
```

## About Us

### About CBSG

- **Max one-time input**
- Individual input boxes for:
  - About CBSG, Our Mission, Our Vision, Core Values, Integrity, Commitment to Meaningful Change, Ethical Practice, Inclusivity, and Adaptability (max 250 words)
  - Image: max 1
  - **Core Competencies**: max 10 words per competency

**API Endpoint:** `/api/about/CBSG`

Example JSON:

```json
{
  "image": "path",
  "about_cbs": "CBSG is a global consultancy...",
  "our_mission": "To strengthen organizations...",
  "our_vision": "To be a recognized global leader...",
  "core_values": "Integrity, Commitment, Ethical Practice, Inclusivity, Adaptability",
  "core_competencies": [
    { "id": 1, "competency": "Organizational Assessment" },
    { "id": 2, "competency": "Change Management" }
  ]
}
```

### History & Timeline

- **Year Range**: Open and Close range date (unique)
- **Content per Range**:
  - Title
  - Description (max 100 words)
  - Image path

**API Endpoint:** `/api/about/history&timeline`

Example JSON:

```json
[
  {
    "Id": 01,
    "Year": "2003-2005",
    "Content": [
      {
        "Title": "title",
        "Description": "max 100 words",
        "Image": "image path"
      }
    ]
  }
]
```

### Strategic Partners

- **Organization Name**
- **Logo**
- **Web Link** (optional)

**API Endpoint:** `/api/about/strategic-partners`

Example JSON:

```json
[
  {
    "Id": 001,
    "O_name": "XYZ Company",
    "Logo": "path of logo",
    "Web link": "path"
  }
]
```

## Team

- **Dropdown category**: Core Team, Technical Team, International Consultant
- **Fields**:
  - Name
  - Designation
  - Priority (number)
  - Description
  - Word from Employee (max 10 words)
  - Image (square shape)

**API Endpoint:** `/api/team`

Example JSON:

```json
[
  {
    "Team": {
      "Core": [
        {
          "Name": "John Doe",
          "Designation": "Senior Consultant",
          "Priority": 1,
          "Description": "Expert in organizational development",
          "Word from employee": "Passionate about change",
          "Image": "path"
        }
      ]
    }
  }
]
```

## Contacts

- Visit site and make every field dynamic.
