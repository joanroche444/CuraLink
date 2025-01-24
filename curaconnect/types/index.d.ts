declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  declare type Status = "pending" | "scheduled" | "cancelled";
  
  declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    userid: string;
    birthDay: Date;
    gender: Gender;
    address: string;
    
    emergencyContact: string;
    emergencyContactNum: string;
    primaryPhy: string;
    insuranceProvider: string;
    allergies: string | undefined;
    currentMedication: string | undefined;
    medicalHistory: string | undefined;
    identificationType: string | undefined;
    idDocid: string | undefined;
    idDocUrl: FormData | undefined;
    privacy: boolean;
  }
  
  declare type CreateAppointmentParams = {
    userid: string;
    patient: string;
    primaryPhysician: string;
    reason: string;
    schedule: Date;
    status: Status;
    note: string | undefined;
  };
  
  declare type UpdateAppointmentParams = {
    appointmentId: string;
    userId: string;
    timeZone: string;
    appointment: Appointment;
    type: string;
  };