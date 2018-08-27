import { Interview } from "../interviews/interview";

export class Candidate {
  public candidate_id: String;
  public candidateMailID: String;
  public firstName: String;
  public lastName: String;
  public mobileNumber: String;
  public status: String;
  public requirementID: String;
  public interview: Interview;

}
