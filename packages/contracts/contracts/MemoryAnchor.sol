// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title MemoryAnchor
 * @notice Anchors memory entries on-chain for the MemoryGraph.
 */
contract MemoryAnchor {
    struct MemoryEntry {
        bytes32 memoryHash;
        string memoryType;
        string summary;
        uint256 timestamp;
        address submitter;
    }

    MemoryEntry[] private memories;

    event MemoryAnchored(
        uint256 indexed anchorId,
        bytes32 indexed memoryHash,
        string memoryType,
        string summary,
        uint256 timestamp,
        address submitter
    );

    /**
     * @notice Anchor a new memory entry.
     * @param memoryHash Hash of the memory content.
     * @param memoryType Type/category of the memory.
     * @param summary Text summary of the memory.
     * @return anchorId The ID of the newly anchored memory.
     */
    function anchorMemory(
        bytes32 memoryHash,
        string calldata memoryType,
        string calldata summary
    ) external returns (uint256 anchorId) {
        memories.push(MemoryEntry({
            memoryHash: memoryHash,
            memoryType: memoryType,
            summary: summary,
            timestamp: block.timestamp,
            submitter: msg.sender
        }));

        anchorId = memories.length - 1;

        emit MemoryAnchored(
            anchorId,
            memoryHash,
            memoryType,
            summary,
            block.timestamp,
            msg.sender
        );
    }

    /**
     * @notice Retrieve a memory entry by ID.
     * @param id The anchor ID.
     * @return The memory entry struct.
     */
    function getAnchor(uint256 id) external view returns (MemoryEntry memory) {
        require(id < memories.length, "Invalid anchor ID");
        return memories[id];
    }

    /**
     * @notice Get the total number of anchored memories.
     * @return The count of memory anchors.
     */
    function getAnchorCount() external view returns (uint256) {
        return memories.length;
    }
}
