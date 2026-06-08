// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title AgentRegistry
 * @notice Registry for AI agents participating in the MemoryGraph.
 */
contract AgentRegistry {
    struct Agent {
        string name;
        string role;
        string modelProvider;
        address registrant;
        uint256 registeredAt;
    }

    Agent[] private agents;

    event AgentRegistered(
        uint256 indexed agentId,
        string name,
        string role,
        string modelProvider,
        address registrant,
        uint256 registeredAt
    );

    /**
     * @notice Register a new agent.
     * @param name The agent's name.
     * @param role The agent's role (e.g., "observer", "curator").
     * @param modelProvider The model provider (e.g., "openai", "anthropic").
     * @return agentId The ID of the newly registered agent.
     */
    function registerAgent(
        string calldata name,
        string calldata role,
        string calldata modelProvider
    ) external returns (uint256 agentId) {
        agents.push(Agent({
            name: name,
            role: role,
            modelProvider: modelProvider,
            registrant: msg.sender,
            registeredAt: block.timestamp
        }));

        agentId = agents.length - 1;

        emit AgentRegistered(
            agentId,
            name,
            role,
            modelProvider,
            msg.sender,
            block.timestamp
        );
    }

    /**
     * @notice Retrieve an agent by ID.
     * @param id The agent ID.
     * @return The agent struct.
     */
    function getAgent(uint256 id) external view returns (Agent memory) {
        require(id < agents.length, "Invalid agent ID");
        return agents[id];
    }

    /**
     * @notice Get the total number of registered agents.
     * @return The count of agents.
     */
    function getAgentCount() external view returns (uint256) {
        return agents.length;
    }
}
