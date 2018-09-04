//import { Interview } from "../interviews/interview";

export class Candidate {
  public candidate_id: String;
  public candidateEmailID: String;
  public firstName: String;
  public lastName: String;
  public mobileNumber: String;
  public status: String;
  public requirementID: String;
  public interview: Interview;

}

export class Interview {

  public interviewID: String;

  public pancard : String;
  
public onlineTestScore : String;

  public firstLevelName: String;
  
public firstLevelFeedback: String ;

  public secondLevelName: String ;
  
  public secondLevelFeedback: String ;

  public thirdLevelName: String ;
  
  public thirdLevelFeedback: String ;

  public status: String;
  
  public dateOfOffer: String ;

  public joiningDate: String ;

  public revisedJoiningDate: String ;
  
}
