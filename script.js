/* ========================================
   IT SUPPORT MOCK INTERVIEW
======================================== */


/* ========================================
   QUESTIONS
======================================== */

const questions = [

    {
        category: "General",

        question:
            "Tell me about yourself and your experience in IT.",

        sampleAnswer:
            `I enjoy helping people and solving technical problems. One of the things I like most about working in IT is troubleshooting an issue and then explaining to the user what happened in a way they can easily understand.

I believe good IT support is not just about fixing the problem, but also providing good customer service and making sure the user feels comfortable throughout the process.

I enjoy investigating technical issues, finding the cause, and helping users get back to work as quickly as possible.`,

        keywords: [
            "help",
            "troubleshoot",
            "technical",
            "customer service",
            "problem",
            "explain",
            "user"
        ],

        keyPoints: [
            "Explain your interest in IT.",
            "Mention troubleshooting experience.",
            "Show that you value customer service.",
            "Explain that you can communicate with non-technical users."
        ]
    },


    {
        category: "Troubleshooting",

        question:
            "A user calls and says they cannot connect to the internet. What steps would you take?",

        sampleAnswer:
            `First, I would determine whether the user is connected through Wi-Fi or Ethernet.

I would ask whether the problem affects only their computer or multiple users.

I would verify the physical or wireless connection and try basic troubleshooting such as restarting the computer.

If the issue continues, I would run ipconfig /all and check the IP address, default gateway, DHCP server, and DNS servers.

I would continue troubleshooting based on the results and verify connectivity after making a change.`,

        keywords: [
            "wifi",
            "ethernet",
            "restart",
            "ipconfig",
            "gateway",
            "dhcp",
            "dns",
            "other users",
            "network"
        ],

        keyPoints: [
            "Determine whether the issue affects one user or multiple users.",
            "Identify whether the user is on Wi-Fi or Ethernet.",
            "Start with basic troubleshooting.",
            "Check IP configuration.",
            "Verify the fix."
        ]
    },


    {
        category: "Troubleshooting",

        question:
            "A user says their computer is running very slowly. How would you troubleshoot the issue?",

        sampleAnswer:
            `I would start with simple troubleshooting such as restarting the computer.

If the computer is still slow, I would check for Windows updates and available storage space.

I would check Task Manager to see whether CPU, memory, or disk usage is unusually high.

If the issue is isolated to a browser, I would test Incognito or InPrivate mode to determine whether cache, cookies, or extensions are causing the issue.

I would continue isolating the problem and verify that the computer's performance improves.`,

        keywords: [
            "restart",
            "update",
            "storage",
            "task manager",
            "cpu",
            "memory",
            "disk",
            "browser",
            "cache",
            "incognito"
        ],

        keyPoints: [
            "Start with a restart.",
            "Check Windows updates.",
            "Check available storage.",
            "Use Task Manager.",
            "Isolate browser-specific problems."
        ]
    },


    {
        category: "Active Directory",

        question:
            "A user cannot log into their computer or company account. How would you troubleshoot the issue?",

        sampleAnswer:
            `First, I would ask the user what error message they are receiving and determine whether the problem is with Windows, a company account, or a specific application.

I would verify the username and password and make sure Caps Lock is not enabled.

I would then check Active Directory to see whether the account is locked, disabled, or requires a password reset.

If necessary, I would unlock the account or reset the password.

If the problem continues, I would investigate network connectivity and domain authentication.`,

        keywords: [
            "error",
            "username",
            "password",
            "caps lock",
            "active directory",
            "locked",
            "disabled",
            "reset",
            "network",
            "domain"
        ],

        keyPoints: [
            "Ask for the error message.",
            "Verify the username and password.",
            "Check Active Directory.",
            "Check for account lockout or disabled status.",
            "Consider domain authentication and network connectivity."
        ]
    },


    {
        category: "Networking",

        question:
            "What is DHCP, and why is it important?",

        sampleAnswer:
            `DHCP stands for Dynamic Host Configuration Protocol.

It automatically assigns network configuration to devices.

This can include an IP address, subnet mask, default gateway, and DNS server information.

DHCP is important because it eliminates the need to manually configure every device and helps prevent IP address conflicts.`,

        keywords: [
            "dynamic",
            "host",
            "configuration",
            "protocol",
            "automatic",
            "ip address",
            "gateway",
            "dns",
            "network"
        ],

        keyPoints: [
            "DHCP automatically assigns network configuration.",
            "Mention IP addresses.",
            "Mention default gateway and DNS.",
            "Explain why automatic configuration is useful."
        ]
    },


    {
        category: "Networking",

        question:
            "You run ipconfig /all and see an IP address beginning with 169.254. What does that tell you, and what would you do next?",

        sampleAnswer:
            `A 169.254 address usually means the computer was unable to receive a valid IP address from DHCP and assigned itself an APIPA address.

I would check whether the computer is connected to the correct Wi-Fi or Ethernet network.

I would check the network adapter and physical connection if applicable.

I would then investigate whether the computer can reach the DHCP server and determine whether other users are experiencing the same issue.

If multiple users are affected, I would investigate the DHCP server, switch, VLAN, or other network infrastructure.`,

        keywords: [
            "169.254",
            "apipa",
            "dhcp",
            "ip address",
            "wifi",
            "ethernet",
            "network",
            "other users",
            "switch",
            "vlan"
        ],

        keyPoints: [
            "Recognize 169.254 as an APIPA address.",
            "Understand that DHCP may not be providing an address.",
            "Check connectivity.",
            "Determine whether other users are affected."
        ]
    },


    {
        category: "Microsoft 365",

        question:
            "A user can send emails but cannot receive emails. How would you troubleshoot the issue?",

        sampleAnswer:
            `I would first check whether the user's mailbox is full or close to its storage limit.

If it is full, I would help them remove unnecessary large or old emails or archive appropriate messages.

I would then check Junk Email, Deleted Items, and Inbox rules.

I would determine whether all incoming emails are affected or only messages from specific senders.

If necessary, I would investigate Microsoft 365 mailbox settings and mail flow.`,

        keywords: [
            "mailbox",
            "storage",
            "full",
            "junk",
            "deleted",
            "rules",
            "sender",
            "microsoft 365",
            "mail flow"
        ],

        keyPoints: [
            "Check mailbox storage.",
            "Check Junk and Deleted Items.",
            "Check Inbox rules.",
            "Determine whether all senders are affected."
        ]
    },


    {
        category: "Active Directory",

        question:
            "What are some common tasks you can perform in Active Directory?",

        sampleAnswer:
            `I can manage user accounts and organize users into groups or organizational units.

I can assist with password resets and account lockouts.

I can manage group membership and permissions.

I can use Group Policy to apply settings and deploy resources such as network printers.

Properly organizing users and computers makes the environment easier to manage.`,

        keywords: [
            "users",
            "groups",
            "organizational unit",
            "ou",
            "password",
            "unlock",
            "permissions",
            "group policy",
            "printer"
        ],

        keyPoints: [
            "Managing user accounts.",
            "Password resets and account unlocks.",
            "Groups and Organizational Units.",
            "Group Policy.",
            "Managing resources such as printers."
        ]
    },


    {
        category: "Security",

        question:
            "A user receives an email asking them to click a link and enter their Microsoft 365 username and password. What would you tell them to do?",

        sampleAnswer:
            `I would tell the user not to click the link or enter their credentials.

I would treat the message as potentially phishing and have them report it using the organization's approved reporting process.

If they already clicked the link or entered their credentials, I would treat it as a potential security incident and follow company procedures to secure the account.

I would also reassure the user that they did the right thing by contacting IT.`,

        keywords: [
            "don't click",
            "do not click",
            "phishing",
            "credentials",
            "password",
            "report",
            "security",
            "incident"
        ],

        keyPoints: [
            "Do not click suspicious links.",
            "Do not enter credentials.",
            "Report potential phishing.",
            "Escalate if credentials were already entered."
        ]
    },


    {
        category: "Troubleshooting",

        question:
            "You make a configuration change and several users suddenly lose connectivity. What would you do?",

        sampleAnswer:
            `I would recognize that my configuration change may have caused the outage and immediately focus on restoring service.

If appropriate, I would roll back the change to the previous known-working configuration.

I would verify that users regain connectivity.

Once service is restored, I would investigate why the change caused the issue, review logs and configuration settings, document what happened, and communicate the incident to the appropriate team.`,

        keywords: [
            "rollback",
            "undo",
            "restore",
            "connectivity",
            "verify",
            "investigate",
            "logs",
            "document"
        ],

        keyPoints: [
            "Restore service quickly.",
            "Roll back the change if appropriate.",
            "Verify users are working again.",
            "Investigate the root cause.",
            "Document the incident."
        ]
    },


    {
        category: "Behavioral",

        question:
            "Why should we hire you for this IT Support Specialist position?",

        sampleAnswer:
            `I believe I bring a combination of technical troubleshooting skills and strong customer service.

I have experience troubleshooting a variety of IT issues and working to resolve them quickly.

I also understand how important it is to communicate with users patiently and explain technical issues in a way they understand.

I enjoy identifying the cause of a problem rather than simply treating the symptoms.

I would also be motivated to use my IT skills to help the organization and support its employees.`,

        keywords: [
            "technical",
            "troubleshooting",
            "customer service",
            "communication",
            "help",
            "problem",
            "organization",
            "users"
        ],

        keyPoints: [
            "Technical troubleshooting skills.",
            "Customer service experience.",
            "Communication with non-technical users.",
            "Motivation to help the organization."
        ]
    },


    {
        category: "Networking",

        question:
            "What is the difference between a switch, router, and firewall?",

        sampleAnswer:
            `A switch connects devices together on a local network.

A router connects different networks together, such as connecting a company's internal network to the internet.

A firewall inspects and controls network traffic based on security rules.

A simple way to remember it is: Switch connects devices, Router connects networks, Firewall controls and protects traffic.`,

        keywords: [
            "switch",
            "devices",
            "local network",
            "router",
            "networks",
            "internet",
            "firewall",
            "traffic",
            "security"
        ],

        keyPoints: [
            "Switch connects devices.",
            "Router connects networks.",
            "Firewall controls network traffic.",
            "Firewall provides network security."
        ]
    },


    {
        category: "Security",

        question:
            "A manager gives you their password and tells you to use it to log into their computer. What would you do?",

        sampleAnswer:
            `I would not accept or use the user's password.

I would explain that users should not share passwords with IT staff.

Instead, I would use an approved administrative account or remote-support tool.

If the user needs to authenticate, I would have them enter their own password.

I would follow the organization's security policies.`,

        keywords: [
            "not accept",
            "don't accept",
            "do not accept",
            "password",
            "security",
            "administrative",
            "admin",
            "remote",
            "policy"
        ],

        keyPoints: [
            "Do not accept the user's password.",
            "Use approved administrative tools.",
            "Have the user enter their own credentials.",
            "Follow security policy."
        ]
    },


    {
        category: "Networking",

        question:
            "A user can access 8.8.8.8 but cannot access google.com. What would you suspect?",

        sampleAnswer:
            `I would suspect a DNS issue.

Since the user can reach an IP address but cannot reach a domain name, the network connection is likely working, but DNS name resolution is failing.

I would check the DNS configuration using ipconfig /all and test resolution with a command such as nslookup google.com.

I would verify that the correct DNS servers are configured.`,

        keywords: [
            "dns",
            "name resolution",
            "ip address",
            "domain",
            "ipconfig",
            "nslookup",
            "dns server"
        ],

        keyPoints: [
            "Recognize this as a DNS issue.",
            "IP connectivity is working.",
            "Domain name resolution is failing.",
            "Check configured DNS servers."
        ]
    },


    {
        category: "Active Directory",

        question:
            "A user can see a shared folder but receives an Access Denied message when opening it. What would you check?",

        sampleAnswer:
            `I would first check whether the user's account has the correct permissions.

I would verify Active Directory group membership and compare their access with a user who can successfully open the folder.

I would check shared-folder and NTFS permissions if I have access.

If permissions appear correct, I would investigate whether there is a credential or authentication issue.

Access Denied usually makes me think about permissions first.`,

        keywords: [
            "access denied",
            "permissions",
            "active directory",
            "group",
            "ntfs",
            "credentials",
            "authentication"
        ],

        keyPoints: [
            "Think permissions first.",
            "Check group membership.",
            "Check share permissions.",
            "Check NTFS permissions."
        ]
    },


    {
        category: "Hardware",

        question:
            "A user cannot print, but other employees can print to the same printer. How would you troubleshoot it?",

        sampleAnswer:
            `Since other employees can print, I would focus on the user's computer.

I would verify that the correct printer is selected and check whether it appears online.

I would check the print queue for stuck jobs or errors.

If necessary, I would clear the queue and restart the Windows Print Spooler service.

If the problem continues, I would remove and reconnect the printer and verify that the correct driver is installed.

Finally, I would print a test page to confirm the issue is resolved.`,

        keywords: [
            "printer",
            "online",
            "queue",
            "stuck",
            "spooler",
            "driver",
            "test page"
        ],

        keyPoints: [
            "Focus on the user's computer because others can print.",
            "Check the correct printer.",
            "Check the print queue.",
            "Restart the Print Spooler.",
            "Verify with a test print."
        ]
    },


    {
        category: "Networking",

        question:
            "Five employees in the same area have 169.254 IP addresses, no default gateway, and no DHCP server listed. What would you do?",

        sampleAnswer:
            `Since multiple users in the same area have the same problem, I would suspect a shared DHCP or network connectivity issue.

The 169.254 addresses indicate that the computers are not receiving valid DHCP leases.

I would check the DHCP service and verify that the correct scope is active and has available addresses.

I would also investigate the switch, VLAN, and network path serving that area because the clients may not be able to reach DHCP.

After fixing the underlying issue, I would renew the clients' network configuration and verify that they receive a valid IP address, gateway, and DNS information.`,

        keywords: [
            "169.254",
            "dhcp",
            "apipa",
            "scope",
            "switch",
            "vlan",
            "gateway",
            "dns",
            "multiple users"
        ],

        keyPoints: [
            "Multiple affected users indicates a shared issue.",
            "169.254 suggests DHCP failure.",
            "Check the DHCP service and scope.",
            "Check switches and VLANs.",
            "Verify valid IP configuration after the fix."
        ]
    }


];


/* ========================================
   VARIABLES
======================================== */

let interviewQuestions = [];

let currentQuestionIndex = 0;

let scores = [];

let submitted = false;


/* ========================================
   DOM ELEMENTS
======================================== */

const introScreen =
    document.getElementById("introScreen");

const interviewScreen =
    document.getElementById("interviewScreen");

const resultsScreen =
    document.getElementById("resultsScreen");

const startBtn =
    document.getElementById("startBtn");

const questionNumber =
    document.getElementById("questionNumber");

const category =
    document.getElementById("category");

const question =
    document.getElementById("question");

const userAnswer =
    document.getElementById("userAnswer");

const wordCount =
    document.getElementById("wordCount");

const submitAnswerBtn =
    document.getElementById("submitAnswerBtn");

const feedbackSection =
    document.getElementById("feedbackSection");

const strengths =
    document.getElementById("strengths");

const improvements =
    document.getElementById("improvements");

const keyPoints =
    document.getElementById("keyPoints");

const sampleAnswer =
    document.getElementById("sampleAnswer");

const score =
    document.getElementById("score");

const scoreCircle =
    document.getElementById("scoreCircle");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const averageScore =
    document.getElementById("averageScore");

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const restartBtn =
    document.getElementById("restartBtn");

const resetProgressBtn =
    document.getElementById("resetProgressBtn");


/* ========================================
   SHUFFLE QUESTIONS
======================================== */

function shuffle(array) {

    const newArray =
        [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            newArray[i],
            newArray[randomIndex]
        ] =
        [
            newArray[randomIndex],
            newArray[i]
        ];

    }

    return newArray;
}


/* ========================================
   START INTERVIEW
======================================== */

function startInterview() {

    interviewQuestions =
        shuffle(questions);

    currentQuestionIndex = 0;

    scores = [];

    submitted = false;


    introScreen.classList.add(
        "hidden"
    );

    resultsScreen.classList.add(
        "hidden"
    );

    interviewScreen.classList.remove(
        "hidden"
    );


    displayQuestion();
}


/* ========================================
   DISPLAY QUESTION
======================================== */

function displayQuestion() {

    submitted = false;


    feedbackSection.classList.add(
        "hidden"
    );


    userAnswer.value = "";


    const currentQuestion =
        interviewQuestions[
            currentQuestionIndex
        ];


    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1}`;


    category.textContent =
        currentQuestion.category;


    question.textContent =
        currentQuestion.question;


    progressText.textContent =
        `${currentQuestionIndex + 1} / ${interviewQuestions.length}`;


    const progress =
        ((currentQuestionIndex + 1) /
        interviewQuestions.length) *
        100;


    progressFill.style.width =
        `${progress}%`;


    wordCount.textContent =
        "0 words";


    updateAverageScore();
}


/* ========================================
   WORD COUNT
======================================== */

userAnswer.addEventListener(
    "input",
    () => {

        const words =
            userAnswer.value
                .trim()
                .split(/\s+/)
                .filter(
                    word =>
                        word.length > 0
                );


        wordCount.textContent =
            `${words.length} words`;

    }
);


/* ========================================
   SCORE ANSWER
======================================== */

function evaluateAnswer(
    answer,
    currentQuestion
) {

    const lowerAnswer =
        answer.toLowerCase();


    let matchedKeywords = [];


    currentQuestion.keywords.forEach(
        keyword => {

            if (
                lowerAnswer.includes(
                    keyword.toLowerCase()
                )
            ) {

                matchedKeywords.push(
                    keyword
                );

            }

        }
    );


    const totalKeywords =
        currentQuestion.keywords.length;


    const keywordScore =
        totalKeywords === 0
            ? 0
            : (
                matchedKeywords.length /
                totalKeywords
            ) * 7;


    const wordLength =
        answer.trim()
            .split(/\s+/)
            .filter(
                word =>
                    word.length > 0
            )
            .length;


    let lengthScore = 0;


    if (
        wordLength >= 40 &&
        wordLength <= 300
    ) {

        lengthScore = 3;

    }

    else if (
        wordLength >= 20
    ) {

        lengthScore = 2;

    }

    else if (
        wordLength >= 10
    ) {

        lengthScore = 1;

    }


    let finalScoreValue =
        keywordScore +
        lengthScore;


    finalScoreValue =
        Math.round(
            Math.min(
                10,
                finalScoreValue
            )
        );


    return {

        score:
            finalScoreValue,

        matchedKeywords:
            matchedKeywords,

        wordLength:
            wordLength

    };
}


/* ========================================
   GENERATE FEEDBACK
======================================== */

function generateFeedback(
    evaluation,
    currentQuestion
) {

    const goodFeedback = [];

    const improvementFeedback = [];


    if (
        evaluation.matchedKeywords.length >= 3
    ) {

        goodFeedback.push(
            "You identified several important technical concepts related to the question."
        );

    }


    if (
        evaluation.wordLength >= 40
    ) {

        goodFeedback.push(
            "You gave enough detail to show your thought process instead of giving only a one-sentence answer."
        );

    }


    if (
        evaluation.wordLength >= 20 &&
        evaluation.wordLength < 40
    ) {

        improvementFeedback.push(
            "Try expanding your answer with a few more troubleshooting steps or explanations."
        );

    }


    if (
        evaluation.wordLength < 20
    ) {

        improvementFeedback.push(
            "Your answer is very short. In a real interview, explain your reasoning so the interviewer can understand your troubleshooting process."
        );

    }


    if (
        evaluation.matchedKeywords.length <
        Math.ceil(
            currentQuestion.keywords.length /
            2
        )
    ) {

        improvementFeedback.push(
            "You missed some important technical concepts that could make your answer stronger."
        );

    }


    if (
        goodFeedback.length === 0
    ) {

        goodFeedback.push(
            "You identified at least part of the problem and provided a starting point for troubleshooting."
        );

    }


    if (
        improvementFeedback.length === 0
    ) {

        improvementFeedback.push(
            "Your answer covers the major points. Continue practicing explaining your reasoning naturally."
        );

    }


    return {

        strengths:
            goodFeedback,

        improvements:
            improvementFeedback

    };
}


/* ========================================
   SUBMIT ANSWER
======================================== */

function submitAnswer() {

    if (submitted) {
        return;
    }


    const answer =
        userAnswer.value.trim();


    if (
        answer.length < 3
    ) {

        alert(
            "Please type an answer before submitting."
        );

        return;

    }


    submitted = true;


    const currentQuestion =
        interviewQuestions[
            currentQuestionIndex
        ];


    const evaluation =
        evaluateAnswer(
            answer,
            currentQuestion
        );


    const feedback =
        generateFeedback(
            evaluation,
            currentQuestion
        );


    scores.push(
        evaluation.score
    );


    displayFeedback(
        evaluation,
        feedback,
        currentQuestion
    );


    saveProgress();

}


/* ========================================
   DISPLAY FEEDBACK
======================================== */

function displayFeedback(
    evaluation,
    feedback,
    currentQuestion
) {

    score.textContent =
        evaluation.score;


    strengths.innerHTML = "";


    feedback.strengths.forEach(
        item => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                item;

            strengths.appendChild(
                li
            );

        }
    );


    improvements.innerHTML = "";


    feedback.improvements.forEach(
        item => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                item;

            improvements.appendChild(
                li
            );

        }
    );


    keyPoints.innerHTML = "";


    currentQuestion.keyPoints.forEach(
        point => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                point;

            keyPoints.appendChild(
                li
            );

        }
    );


    sampleAnswer.textContent =
        currentQuestion.sampleAnswer;


    feedbackSection.classList.remove(
        "hidden"
    );


    feedbackSection.scrollIntoView({
        behavior:
            "smooth"
    });


    updateAverageScore();

}


/* ========================================
   NEXT QUESTION
======================================== */

function nextQuestion() {

    currentQuestionIndex++;


    if (
        currentQuestionIndex >=
        interviewQuestions.length
    ) {

        finishInterview();

        return;

    }


    displayQuestion();


    window.scrollTo({
        top:
            0,

        behavior:
            "smooth"
    });

}


/* ========================================
   AVERAGE SCORE
======================================== */

function updateAverageScore() {

    if (
        scores.length === 0
    ) {

        averageScore.textContent =
            "--";

        return;

    }


    const total =
        scores.reduce(
            (sum, current) =>
                sum + current,
            0
        );


    const average =
        total /
        scores.length;


    averageScore.textContent =
        `${average.toFixed(1)} / 10`;

}


/* ========================================
   FINISH INTERVIEW
======================================== */

function finishInterview() {

    interviewScreen.classList.add(
        "hidden"
    );


    resultsScreen.classList.remove(
        "hidden"
    );


    const total =
        scores.reduce(
            (sum, current) =>
                sum + current,
            0
        );


    const average =
        total /
        scores.length;


    finalScore.textContent =
        `${average.toFixed(1)} / 10`;


    if (
        average >= 9
    ) {

        finalMessage.textContent =
            "Excellent work. Your answers demonstrate strong IT knowledge and a solid troubleshooting mindset. Continue practicing so your answers sound natural and confident.";

    }

    else if (
        average >= 7
    ) {

        finalMessage.textContent =
            "Good job. You have a strong foundation. Focus on giving more detailed explanations and explaining why you would take each troubleshooting step.";

    }

    else if (
        average >= 5
    ) {

        finalMessage.textContent =
            "You have a developing foundation. Review the example answers and focus on identifying symptoms, isolating the issue, troubleshooting, and verifying the solution.";

    }

    else {

        finalMessage.textContent =
            "Keep practicing. Focus on understanding the troubleshooting process rather than memorizing answers. Each practice session will help you improve.";

    }


    localStorage.removeItem(
        "itMockInterviewProgress"
    );

}


/* ========================================
   SAVE PROGRESS
======================================== */

function saveProgress() {

    const progress = {

        questionIndex:
            currentQuestionIndex,

        scores:
            scores,

        date:
            new Date()
                .toLocaleString()

    };


    localStorage.setItem(
        "itMockInterviewProgress",
        JSON.stringify(
            progress
        )
    );

}


/* ========================================
   RESET SAVED PROGRESS
======================================== */

function resetProgress() {

    localStorage.removeItem(
        "itMockInterviewProgress"
    );


    alert(
        "Saved progress has been reset."
    );

}


/* ========================================
   EVENT LISTENERS
======================================== */

startBtn.addEventListener(
    "click",
    startInterview
);


submitAnswerBtn.addEventListener(
    "click",
    submitAnswer
);


nextQuestionBtn.addEventListener(
    "click",
    nextQuestion
);


restartBtn.addEventListener(
    "click",
    startInterview
);


resetProgressBtn.addEventListener(
    "click",
    resetProgress
);
