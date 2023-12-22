# LaMultiforme Web Project

The website focuses on providing a comprehensive experience for users interested in the activities of the yoga and pilates center. By registering and authenticating on the platform, users gain access to an interactive calendar displaying detailed schedules of various activities, workshops, and events.

The page provides comprehensive information about the instructors, including profiles and class schedules, and features a dedicated section for workshops and special events, with detailed descriptions. Additionally, there is a book section showcasing those created in the literary workshop of the center.

A distinctive feature is the ability of users to request specific schedules and activities through WhatsApp or Instagram. Center administrators, using Firebase functionality, can assign activities to users in response to these requests, once the payment method is arranged and finalized. When assigned, the activity is automatically reflected in the user's personalized calendar, serving as a reminder.

## Firebase Database Schema

/eventos
  /{eventoId}
    - tituloId: "1"
    - fecha: "2023-03-26"
    - hora_inicio: "18:00"
    - hora_fin: "19:00"

/titulos
  /{tituloId}
    - nombre: "Yoga"
    - color: "#5761b2"

/propietarios_x_eventos
  /{propietarioId_eventoId} 
    - propietarioId: "1" // id recovered from firebase authentication
    - eventoId: "abc123" 

## Project Local Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
