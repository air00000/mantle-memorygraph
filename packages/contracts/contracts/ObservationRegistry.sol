// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ObservationRegistry
 * @notice Stores AI agent observations with scoring dimensions for the MemoryGraph.
 */
contract ObservationRegistry {
    struct Observation {
        bytes32 observationHash;
        string observationType;
        address primaryEntity;
        uint8 relevanceScore;
        uint8 noveltyScore;
        uint8 patternSimilarity;
        uint8 contextCoverage;
        uint256 timestamp;
        address submitter;
    }

    Observation[] private observations;

    event ObservationRegistered(
        uint256 indexed observationId,
        bytes32 indexed observationHash,
        string observationType,
        address indexed primaryEntity,
        uint8 relevanceScore,
        uint8 noveltyScore,
        uint8 patternSimilarity,
        uint8 contextCoverage,
        uint256 timestamp,
        address submitter
    );

    /**
     * @notice Register a new observation.
     * @param observationHash Hash of the observation content.
     * @param observationType Type/category of the observation.
     * @param primaryEntity The primary entity the observation relates to.
     * @param relevanceScore 0-100 relevance score.
     * @param noveltyScore 0-100 novelty score.
     * @param patternSimilarity 0-100 pattern similarity score.
     * @param contextCoverage 0-100 context coverage score.
     * @return observationId The ID of the newly registered observation.
     */
    function registerObservation(
        bytes32 observationHash,
        string calldata observationType,
        address primaryEntity,
        uint8 relevanceScore,
        uint8 noveltyScore,
        uint8 patternSimilarity,
        uint8 contextCoverage
    ) external returns (uint256 observationId) {
        require(relevanceScore <= 100, "Invalid relevance");
        require(noveltyScore <= 100, "Invalid novelty");
        require(patternSimilarity <= 100, "Invalid pattern similarity");
        require(contextCoverage <= 100, "Invalid context coverage");

        observations.push(Observation({
            observationHash: observationHash,
            observationType: observationType,
            primaryEntity: primaryEntity,
            relevanceScore: relevanceScore,
            noveltyScore: noveltyScore,
            patternSimilarity: patternSimilarity,
            contextCoverage: contextCoverage,
            timestamp: block.timestamp,
            submitter: msg.sender
        }));

        observationId = observations.length - 1;

        emit ObservationRegistered(
            observationId,
            observationHash,
            observationType,
            primaryEntity,
            relevanceScore,
            noveltyScore,
            patternSimilarity,
            contextCoverage,
            block.timestamp,
            msg.sender
        );
    }

    /**
     * @notice Retrieve an observation by ID.
     * @param id The observation ID.
     * @return The observation struct.
     */
    function getObservation(uint256 id) external view returns (Observation memory) {
        require(id < observations.length, "Invalid observation ID");
        return observations[id];
    }

    /**
     * @notice Get the total number of observations.
     * @return The count of observations.
     */
    function getObservationsCount() external view returns (uint256) {
        return observations.length;
    }
}
