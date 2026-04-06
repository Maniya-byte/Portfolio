// ============================================================
// ROUTING & SWITCHING PROJECTS
// — Add new projects by copying a block and updating fields.
// — Images go in: src/assets/projects/
// ============================================================

import type { ProjectEntry } from "./types";

const projects: ProjectEntry[] = [
  {
    number: 1,
    title: "Spanning Tree Protocol (STP) Hands-on Lab",
    description: `Just wrapped up a hands-on lab on Spanning Tree Protocol (STP) in Cisco networking, and I wanted to share what I learned. STP is key for preventing loops in switched networks while keeping redundancy. I set up a simple lab with four switches to play around with features like Loop Guard, Root Guard, BPDU Guard, and PortFast. 

📌 First, how the Root Bridge gets elected:

• Switches vote based on Bridge ID
(priority + MAC address). The one with the lowest priority wins (default is 32768). If priorities tie, the lowest MAC address takes it. 
In my lab, I configured the SW1 using spanning-tree vlan 1 root primary to make it the Root bridge.

Port states in STP and how they change:

- Blocking: Listens but doesn't forward (starts here to avoid loops).
- Listening: Checks for BPDUs, no data forwarding.
- Learning: Builds MAC table, still no forwarding.
- Forwarding: Full operation, sends/receives data.
- Disabled: Port is shut down.
States shift based on BPDUs and timers (like forward delay of 15 sec). From Blocking, it goes to Listening if it's a better path, then Learning, and finally Forwarding.

⚔️ Configuring the lab for protection:

- PortFast: Speeds up access ports for end devices. Command: spanning-tree portfast on interface. It skips Listening/Learning.

- BPDU Guard: Shuts down PortFast ports if they get BPDUs (prevents rogue switches). 
( Global: spanning-tree portfast bpduguard default )

- Root Guard: Protects Root Bridge ports from superior BPDUs. 
(On interface: spanning-tree guard root.) 

- Loop Guard : Detects unidirectional links to avoid loops. 
 (Global: spanning-tree loopguard default.)

⏳ For Errdisable recovery:
 If a port goes into errdisable (e.g., from BPDU Guard), it stays down. I configured auto-recovery with errdisable recovery cause bpduguard and errdisable recovery interval 180 (recovers after 3 min).


📝 What I learned and achieved from the lab,

Mastered Root election by tweaking priorities (now I can force the best switch as Root.)

Protected the network from common issues like loops or attacks using guards—lab stayed stable even when I simulated faults.`,
    image: "stp.webp", // Place image in public/projects/vlan-project.jpg
    tags: ["Cisco", "STP", "Layer 2"],
    link: "https://www.linkedin.com/posts/pasindu-manelka-kandamby_cisco-networking-stp-activity-7371597567345827841-w4Gx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGa6EYABVWLYls7qYjnkVu3Q2PuuPCEvJos", // Link to external site
    //projectFile: "/files/vlan-report.pdf", // Place file in public/files/vlan-report.pdf
  },
  
];

export default projects;
