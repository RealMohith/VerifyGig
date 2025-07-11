// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SkillVerifier {

    uint256 public skillFee = 100 ether;
    struct SkillRecord {
        string skillId;
        string skillName;
        address worker;
        address interviewer;
        uint256 timestamp;
        bool verified;
        string notes;
        uint256 feePaid;

    }

    mapping(string => SkillRecord) public skills;
    mapping(address => bool) public authorizedInterviewers;
    string[] public allSkillIds;

    event SkillRequested(string skillId, address worker);
    event SkillVerified(string skillId, address worker, address interviewer);

    constructor() {
        authorizedInterviewers[msg.sender] = true;
    }

    function authorizeInterviewer(address interviewer) public {
        require(msg.sender == address(this) || msg.sender == tx.origin, "Unauthorized");
        authorizedInterviewers[interviewer] = true;
    }

    

    function requestSkillVerification(string memory _skillId, string memory _skillName) public payable {
    require(bytes(skills[_skillId].skillId).length == 0, "Skill already exists");
    require(msg.value == skillFee, "Incorrect ETH amount sent");

    skills[_skillId] = SkillRecord({
        skillId: _skillId,
        skillName: _skillName,
        worker: msg.sender,
        interviewer: address(0),
        timestamp: 0,
        verified: false,
        notes: "",
        feePaid: msg.value
    });

    allSkillIds.push(_skillId);
    emit SkillRequested(_skillId, msg.sender);
    }


    function verifySkill(string memory _skillId, bool _verified, string memory _notes) public {
    require(authorizedInterviewers[msg.sender], "Not authorized");
    require(bytes(skills[_skillId].skillId).length > 0, "Skill not found");
    require(skills[_skillId].interviewer == address(0), "Already verified");

    skills[_skillId].interviewer = msg.sender;
    skills[_skillId].verified = _verified;
    skills[_skillId].timestamp = block.timestamp;
    skills[_skillId].notes = _notes;

    // Payout to interviewer
    uint256 fee = skills[_skillId].feePaid;
    if (fee > 0) {
        payable(msg.sender).transfer(fee);
    }

    emit SkillVerified(_skillId, skills[_skillId].worker, msg.sender);
}


    function getSkillVerification(string memory _skillId) public view returns (
        string memory,
        address,
        address,
        uint256,
        bool
    ) {
        SkillRecord memory skill = skills[_skillId];
        return (
            skill.skillName,
            skill.worker,
            skill.interviewer,
            skill.timestamp,
            skill.verified
        );
    }
}
