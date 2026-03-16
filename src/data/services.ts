export interface FAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  name: string
  image: string
  shortDesc: string
  description: string
  whatToExpect: string
  whoIsItFor: string
  faqs: FAQ[]
  relatedSlugs: string[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'gae-knee-pain',
    name: 'GAE for Knee Pain',
    image: '/images/services/gae-knee-pain.jpg',
    shortDesc: 'Minimally invasive relief for chronic knee pain and arthritis without surgery',
    description: 'Genicular Artery Embolization (GAE) is a groundbreaking minimally invasive procedure that provides lasting relief from chronic knee pain caused by osteoarthritis. At MM Medical Services, our interventional radiologists perform GAE through a tiny incision — no larger than a grain of rice — to reduce inflammation in the knee joint by blocking the small arteries that feed the inflamed tissue. Unlike knee replacement surgery, GAE requires no general anesthesia, no hospital stay, and no lengthy recovery. Most patients return to their daily activities within days, not months. This procedure is especially well-suited for seniors who may not be candidates for traditional knee replacement due to age, health conditions, or personal preference. Clinical studies show significant pain reduction and improved mobility in the majority of patients who undergo GAE.',
    whatToExpect: 'During your GAE procedure, you will be comfortably sedated with local anesthesia. Your interventional radiologist will make a small puncture, typically in the wrist or groin, and guide a thin catheter to the arteries surrounding your knee using real-time imaging. Tiny particles are then delivered to reduce blood flow to the inflamed tissue. The entire procedure takes approximately one to two hours. Most patients go home the same day and experience noticeable pain relief within the first few weeks.',
    whoIsItFor: 'GAE is ideal for adults over 50 experiencing chronic knee pain from osteoarthritis who have not found lasting relief from medications, injections, or physical therapy — and who want to avoid or delay knee replacement surgery.',
    faqs: [
      {
        question: 'How is GAE different from knee replacement surgery?',
        answer: 'GAE is a minimally invasive outpatient procedure that requires only a tiny puncture and local anesthesia, whereas knee replacement is a major surgery requiring general anesthesia, hospitalization, and months of rehabilitation. GAE targets the inflammation causing your pain rather than replacing the joint itself.'
      },
      {
        question: 'How long does pain relief from GAE last?',
        answer: 'Clinical studies show that most patients experience significant pain relief lasting two years or more. Some patients report continued improvement over time as inflammation decreases. Results vary by individual, and your doctor will discuss realistic expectations during your consultation.'
      },
      {
        question: 'Is GAE covered by insurance?',
        answer: 'Coverage varies by insurance plan. MM Medical Services works with most major insurance providers and Medicare. Our team will verify your benefits and discuss any out-of-pocket costs before scheduling your procedure.'
      },
      {
        question: 'What is the recovery time after GAE?',
        answer: 'Most patients return to normal daily activities within one to three days. You may experience mild soreness or swelling around the knee for a short period. Unlike knee replacement, there is no need for inpatient rehabilitation or extended physical therapy.'
      },
      {
        question: 'Am I a candidate for GAE if I have other health conditions?',
        answer: 'GAE is often a good option for patients who are not ideal candidates for surgery due to heart disease, diabetes, or other conditions. During your initial consultation, our team will review your complete medical history to determine whether GAE is right for you.'
      }
    ],
    relatedSlugs: ['interventional-radiology', 'pain-management', 'physical-therapy', 'orthopedic-surgery'],
    keywords: ['genicular artery embolization', 'knee pain treatment', 'minimally invasive knee procedure', 'knee arthritis relief', 'alternative to knee replacement', 'GAE procedure', 'chronic knee pain seniors']
  },
  {
    slug: 'shoulder-embolization',
    name: 'Shoulder Artery Embolization',
    image: '/images/services/shoulder-embolization.jpg',
    shortDesc: 'Minimally invasive treatment for frozen shoulder, rotator cuff pain, and chronic shoulder conditions',
    description: 'Shoulder Artery Embolization is an innovative minimally invasive procedure offered at MM Medical Services for patients suffering from chronic shoulder pain, frozen shoulder, or rotator cuff-related conditions. This catheter-based treatment works by reducing the abnormal blood vessel growth and inflammation that contribute to persistent shoulder pain. Performed by our experienced interventional radiologists using advanced image guidance, the procedure requires only a small puncture and local anesthesia. There is no need for open surgery, general anesthesia, or prolonged hospital stays. Shoulder embolization is particularly beneficial for seniors and patients who have not responded to conservative treatments such as physical therapy, steroid injections, or oral medications. By addressing the underlying vascular component of shoulder inflammation, this procedure offers meaningful pain relief and improved range of motion.',
    whatToExpect: 'Your shoulder embolization procedure begins with local anesthesia and mild sedation for your comfort. Through a small puncture in the wrist or groin, your interventional radiologist threads a micro-catheter to the blood vessels feeding the inflamed shoulder tissue, guided by live X-ray imaging. Tiny particles are delivered to reduce the abnormal blood flow. The procedure typically takes one to two hours, and you will go home the same day. Most patients notice gradual improvement in pain and mobility over the following weeks.',
    whoIsItFor: 'This procedure is designed for adults with chronic shoulder pain from frozen shoulder, rotator cuff tendinopathy, or shoulder arthritis who have not improved with medications, injections, or physical therapy — especially those who wish to avoid shoulder surgery.',
    faqs: [
      {
        question: 'What conditions can shoulder embolization treat?',
        answer: 'Shoulder embolization is effective for frozen shoulder (adhesive capsulitis), chronic rotator cuff tendinopathy, and shoulder osteoarthritis. It targets the inflammatory blood vessels that contribute to ongoing pain and stiffness in these conditions.'
      },
      {
        question: 'How soon will I feel improvement after the procedure?',
        answer: 'Many patients begin to notice reduced pain within two to four weeks, with continued improvement over the following months. Full results are typically realized within three months as the inflammation subsides and range of motion improves.'
      },
      {
        question: 'Is shoulder embolization safe for older adults?',
        answer: 'Yes. Because it uses only local anesthesia and requires no general anesthesia or major incisions, shoulder embolization carries significantly lower risks than traditional shoulder surgery. It is well-suited for seniors and patients with multiple health conditions.'
      },
      {
        question: 'Will I need physical therapy after the procedure?',
        answer: 'Your doctor may recommend gentle physical therapy after shoulder embolization to maximize your range of motion and strengthen the surrounding muscles. Our team at MM Medical Services can coordinate a rehabilitation plan tailored to your needs.'
      },
      {
        question: 'What are the risks of shoulder embolization?',
        answer: 'Shoulder embolization is considered very safe. The most common side effects are mild soreness or bruising at the puncture site. Serious complications are rare. Your interventional radiologist will review all risks and benefits with you before the procedure.'
      }
    ],
    relatedSlugs: ['interventional-radiology', 'pain-management', 'physical-therapy', 'physical-medicine', 'orthopedic-surgery'],
    keywords: ['shoulder artery embolization', 'frozen shoulder treatment', 'rotator cuff pain relief', 'minimally invasive shoulder procedure', 'chronic shoulder pain', 'shoulder embolization seniors', 'adhesive capsulitis treatment']
  },
  {
    slug: 'interventional-radiology',
    name: 'Interventional Radiology',
    image: '/images/services/interventional-radiology.jpg',
    shortDesc: 'Image-guided minimally invasive procedures for diagnosis and treatment',
    description: 'Interventional radiology at MM Medical Services brings together advanced imaging technology and minimally invasive techniques to diagnose and treat a wide range of medical conditions. Our board-certified interventional radiologists use real-time X-ray, ultrasound, and other imaging tools to guide tiny instruments through the body via small punctures rather than large surgical incisions. This approach allows us to treat conditions that once required open surgery — including vascular disease, chronic pain, and joint inflammation — with far less risk, shorter recovery times, and reduced discomfort. As a cornerstone of our practice, interventional radiology enables us to offer procedures like genicular artery embolization, shoulder embolization, and vascular treatments that get our patients back on their feet faster. We are committed to providing these advanced options with the personal, attentive care that our senior patients deserve.',
    whatToExpect: 'Most interventional radiology procedures are performed on an outpatient basis with local anesthesia and light sedation. Your doctor will explain the specific procedure, including where the small puncture will be made and what imaging will be used. During the procedure, you will be monitored closely by our clinical team. Afterward, you will rest briefly in our recovery area before going home the same day. Your care team will provide detailed aftercare instructions and schedule any necessary follow-up appointments.',
    whoIsItFor: 'Interventional radiology is for patients seeking less invasive alternatives to traditional surgery for vascular conditions, chronic pain, joint problems, and other medical issues — particularly seniors looking for safer treatment options with faster recovery.',
    faqs: [
      {
        question: 'What types of conditions can interventional radiology treat?',
        answer: 'Interventional radiology can treat a broad range of conditions including peripheral artery disease, chronic knee and shoulder pain, varicose veins, deep vein thrombosis, uterine fibroids, and certain types of tumors. Our team will help determine whether an interventional approach is right for your specific condition.'
      },
      {
        question: 'Is interventional radiology safer than traditional surgery?',
        answer: 'In many cases, yes. Because interventional procedures use small punctures instead of large incisions, they typically involve less blood loss, lower infection risk, shorter hospital stays, and faster recovery. However, your doctor will discuss the best approach for your individual situation.'
      },
      {
        question: 'How long do interventional radiology procedures take?',
        answer: 'Most procedures take between one and three hours, depending on the specific treatment. Many patients are able to go home the same day. Your doctor will provide a time estimate during your pre-procedure consultation.'
      },
      {
        question: 'Will I be awake during the procedure?',
        answer: 'Most interventional radiology procedures are performed under local anesthesia with conscious sedation, meaning you will be relaxed and comfortable but not fully asleep. This approach is safer than general anesthesia, especially for older adults.'
      },
      {
        question: 'Do I need a referral to see an interventional radiologist?',
        answer: 'While some insurance plans require a referral, many do not. Our scheduling team at MM Medical Services can help you determine whether a referral is needed and assist with coordinating your care.'
      }
    ],
    relatedSlugs: ['gae-knee-pain', 'shoulder-embolization', 'vascular-care', 'pain-management'],
    keywords: ['interventional radiology', 'minimally invasive procedures', 'image-guided treatment', 'IR procedures', 'catheter-based treatment', 'interventional radiologist near me', 'outpatient radiology procedures']
  },
  {
    slug: 'vascular-care',
    name: 'Vascular Care',
    image: '/images/services/vascular-care.jpg',
    shortDesc: 'Comprehensive diagnosis and treatment of vascular and circulatory conditions',
    description: 'The vascular care program at MM Medical Services provides thorough evaluation, diagnosis, and treatment for conditions affecting your arteries, veins, and overall circulatory system. Vascular disease is especially common among older adults and can lead to serious complications if left untreated, including poor circulation, leg pain, non-healing wounds, and increased risk of stroke or heart attack. Our vascular specialists use state-of-the-art diagnostic tools — including duplex ultrasound, CT angiography, and ankle-brachial index testing — to identify problems early and develop a personalized treatment plan. Treatment options range from lifestyle modifications and medication management to minimally invasive catheter-based procedures performed by our interventional radiology team. At MM Medical Services, we take a coordinated approach to vascular health, working closely with your primary care physician and other specialists to ensure comprehensive, continuous care.',
    whatToExpect: 'Your first vascular care visit will include a thorough review of your medical history, a physical examination focused on your circulatory system, and any necessary diagnostic testing such as ultrasound or blood work. Based on the findings, your vascular specialist will explain your condition, discuss treatment options, and develop a care plan tailored to your needs. If a procedure is recommended, our team will walk you through every step and coordinate scheduling at your convenience.',
    whoIsItFor: 'Vascular care is for adults experiencing symptoms of circulatory problems such as leg pain, swelling, numbness, non-healing wounds, or varicose veins, as well as those with risk factors like diabetes, high blood pressure, or a history of smoking.',
    faqs: [
      {
        question: 'What are the signs of vascular disease?',
        answer: 'Common signs include leg pain or cramping when walking (claudication), swelling in the legs or feet, numbness or tingling, skin color changes, slow-healing wounds, and cold extremities. If you experience any of these symptoms, it is important to seek evaluation promptly.'
      },
      {
        question: 'How is peripheral artery disease diagnosed?',
        answer: 'Peripheral artery disease (PAD) is typically diagnosed using a combination of physical examination, ankle-brachial index (ABI) testing, and duplex ultrasound. In some cases, CT angiography or other advanced imaging may be recommended to evaluate the extent of the disease.'
      },
      {
        question: 'Can vascular disease be treated without surgery?',
        answer: 'Yes. Many vascular conditions can be managed with lifestyle changes, medications, and minimally invasive procedures such as angioplasty or stenting. Our team prioritizes the least invasive effective treatment for every patient.'
      },
      {
        question: 'How often should I have my vascular health checked?',
        answer: 'If you are over 65, have diabetes, high blood pressure, or a history of smoking, we recommend annual vascular screenings. Your doctor can advise on the right schedule based on your individual risk factors.'
      },
      {
        question: 'Does MM Medical Services treat varicose veins?',
        answer: 'Yes. We offer evaluation and treatment for varicose veins, including minimally invasive options such as endovenous ablation and sclerotherapy. These treatments can relieve pain, swelling, and cosmetic concerns with minimal downtime.'
      },
      {
        question: 'Is vascular care covered by Medicare?',
        answer: 'Most vascular diagnostic tests and treatments are covered by Medicare and major insurance plans. Our billing team will verify your coverage and explain any costs before your appointment.'
      }
    ],
    relatedSlugs: ['interventional-radiology', 'podiatry', 'annual-exams', 'pain-management', 'physical-medicine'],
    keywords: ['vascular care', 'peripheral artery disease', 'PAD treatment', 'vascular specialist', 'circulatory problems', 'varicose veins treatment', 'vascular screening seniors']
  },
  {
    slug: 'orthopedic-surgery',
    name: 'Orthopedic Surgery',
    image: '/images/services/orthopedic-surgery.jpg',
    shortDesc: 'Expert surgical and non-surgical solutions for joint pain, fractures, and mobility issues',
    description: 'The orthopedic surgery team at MM Medical Services specializes in the evaluation and treatment of conditions affecting the bones, joints, muscles, ligaments, and tendons. Whether you are dealing with chronic joint pain, a recent fracture, or mobility limitations that affect your quality of life, our orthopedic surgeons provide a full spectrum of care — from conservative management to advanced surgical options. We understand that for many of our senior patients, maintaining independence and mobility is a top priority. That is why we emphasize a conservative-first approach, exploring physical therapy, bracing, injections, and other non-surgical treatments before recommending surgery. When surgery is the best path forward, our team uses the latest techniques, including minimally invasive and arthroscopic approaches, to minimize recovery time and get you back to the activities you enjoy.',
    whatToExpect: 'Your orthopedic consultation begins with a comprehensive evaluation including a physical exam, review of your symptoms and medical history, and any necessary imaging such as X-rays or MRI. Your surgeon will explain the diagnosis in clear terms and discuss all available treatment options, from non-surgical approaches to surgical intervention. If surgery is recommended, you will receive detailed preparation instructions, a clear timeline for recovery, and a coordinated rehabilitation plan.',
    whoIsItFor: 'Orthopedic surgery services are for adults experiencing joint pain, fractures, arthritis, sports injuries, or mobility limitations who want expert evaluation and a full range of treatment options — surgical and non-surgical — from an experienced orthopedic team.',
    faqs: [
      {
        question: 'Do I need surgery for my joint pain?',
        answer: 'Not necessarily. Many joint conditions respond well to conservative treatments including physical therapy, anti-inflammatory medications, corticosteroid injections, and activity modification. Surgery is typically recommended only when these approaches have not provided adequate relief.'
      },
      {
        question: 'What minimally invasive options are available?',
        answer: 'MM Medical Services offers arthroscopic procedures, minimally invasive joint replacement techniques, and innovative alternatives like genicular artery embolization for knee pain. These approaches result in smaller incisions, less pain, and faster recovery compared to traditional open surgery.'
      },
      {
        question: 'How long is recovery after joint replacement?',
        answer: 'Recovery timelines vary, but most patients begin walking with assistance within a day of surgery and return to many daily activities within four to six weeks. Full recovery, including return to more demanding activities, typically takes three to six months with consistent physical therapy.'
      },
      {
        question: 'Is joint replacement safe for elderly patients?',
        answer: 'Joint replacement is routinely performed on patients in their 70s, 80s, and beyond. Our team conducts thorough pre-operative evaluations to ensure you are medically optimized for surgery, and we use anesthesia techniques that are safer for older adults.'
      },
      {
        question: 'Will I need physical therapy after orthopedic surgery?',
        answer: 'Yes, physical therapy is a critical part of recovery after most orthopedic procedures. MM Medical Services coordinates your rehabilitation to ensure a smooth transition from surgery to recovery, with physical therapy services available right within our care network.'
      }
    ],
    relatedSlugs: ['gae-knee-pain', 'physical-therapy', 'physical-medicine', 'pain-management', 'shoulder-embolization'],
    keywords: ['orthopedic surgery', 'joint replacement', 'knee surgery', 'hip replacement', 'orthopedic surgeon seniors', 'arthroscopic surgery', 'bone and joint care']
  },
  {
    slug: 'pain-management',
    name: 'Pain Management',
    image: '/images/services/pain-management.jpg',
    shortDesc: 'Personalized treatment plans for chronic and acute pain relief',
    description: 'The pain management program at MM Medical Services is dedicated to helping patients find lasting relief from chronic and acute pain through personalized, multimodal treatment plans. Chronic pain affects millions of older adults and can significantly diminish quality of life, limiting mobility, disrupting sleep, and contributing to depression and social isolation. Our pain management specialists take the time to understand the root cause of your pain — whether it stems from arthritis, nerve damage, spinal conditions, or post-surgical discomfort — and develop a comprehensive plan that may include medication management, therapeutic injections, nerve blocks, physical therapy, and referrals for minimally invasive procedures. At MM Medical Services, we believe that effective pain management is not just about reducing pain scores; it is about restoring your ability to live an active, fulfilling life. We coordinate closely with our orthopedic, vascular, and rehabilitation teams to ensure every aspect of your care works together.',
    whatToExpect: 'Your initial pain management visit includes a detailed assessment of your pain history, a physical examination, and review of any prior imaging or test results. Your specialist will work with you to identify the type, location, and triggers of your pain. Together, you will develop a treatment plan that may include medications, injections, nerve blocks, physical therapy referrals, or recommendations for interventional procedures. Follow-up visits allow your doctor to adjust the plan as needed to achieve the best possible results.',
    whoIsItFor: 'Pain management services are for adults living with chronic pain from arthritis, back or neck problems, neuropathy, post-surgical pain, or other conditions who are seeking a comprehensive, coordinated approach to relief and improved quality of life.',
    faqs: [
      {
        question: 'What types of pain do you treat?',
        answer: 'We treat a wide range of pain conditions including osteoarthritis, back and neck pain, sciatica, neuropathy, post-surgical pain, joint pain, and musculoskeletal pain. Our goal is to identify the source of your pain and address it with the most effective, least invasive approach.'
      },
      {
        question: 'Are opioids the only option for chronic pain?',
        answer: 'Absolutely not. Our pain management team emphasizes a multimodal approach that includes non-opioid medications, therapeutic injections, nerve blocks, physical therapy, and lifestyle modifications. Opioids are used only when medically appropriate and are carefully monitored.'
      },
      {
        question: 'What are nerve blocks and how do they work?',
        answer: 'Nerve blocks are injections of medication near specific nerves to interrupt pain signals. They can provide significant relief for conditions like sciatica, joint pain, and neuropathy. The procedure is performed in-office with imaging guidance for precision and typically takes only minutes.'
      },
      {
        question: 'How long does it take to see results from a pain management plan?',
        answer: 'Some treatments, like injections and nerve blocks, can provide relief within days. A comprehensive pain management plan may take several weeks to fully optimize as your doctor adjusts medications and therapies based on your response. Consistent follow-up is key to long-term success.'
      },
      {
        question: 'Can pain management help me avoid surgery?',
        answer: 'In many cases, yes. Effective pain management can reduce symptoms to the point where surgery is no longer necessary or can be significantly delayed. Our team works closely with orthopedic and interventional radiology specialists to explore all non-surgical options first.'
      }
    ],
    relatedSlugs: ['gae-knee-pain', 'shoulder-embolization', 'physical-therapy', 'physical-medicine', 'orthopedic-surgery'],
    keywords: ['pain management', 'chronic pain treatment', 'nerve block', 'pain specialist', 'arthritis pain relief', 'pain management seniors', 'non-surgical pain treatment']
  },
  {
    slug: 'podiatry',
    name: 'Podiatry',
    image: '/images/services/podiatry.jpg',
    shortDesc: 'Comprehensive foot and ankle care with a focus on senior mobility and health',
    description: 'The podiatry department at MM Medical Services provides expert care for the full range of foot and ankle conditions, with a special focus on the needs of our senior patients. Healthy feet are essential for maintaining mobility, balance, and independence as we age, yet foot problems are among the most common — and most overlooked — health concerns for older adults. Our podiatrists diagnose and treat conditions including diabetic foot complications, bunions, hammertoes, plantar fasciitis, ingrown toenails, fungal infections, peripheral neuropathy, and foot wounds that are slow to heal. We also provide routine foot care, custom orthotics, and fall-prevention assessments. Because foot health is closely connected to vascular and neurological health, our podiatry team works in coordination with our vascular care specialists and primary care providers to deliver integrated, whole-patient care.',
    whatToExpect: 'Your podiatry visit begins with a thorough examination of your feet and ankles, including assessment of skin condition, nail health, circulation, sensation, and structural alignment. Your podiatrist will discuss your symptoms, review your medical history, and perform any necessary tests. Treatment options are explained clearly, and a care plan is developed based on your specific needs — whether that involves routine maintenance, custom orthotics, medication, or a minor in-office procedure.',
    whoIsItFor: 'Podiatry services are for adults experiencing foot or ankle pain, diabetic foot concerns, toenail problems, balance issues, or anyone seeking routine foot care to maintain mobility and prevent complications as they age.',
    faqs: [
      {
        question: 'How often should seniors see a podiatrist?',
        answer: 'We recommend that seniors visit a podiatrist at least once a year for a comprehensive foot exam. Patients with diabetes, peripheral neuropathy, or vascular disease should be seen more frequently — typically every three to six months — to prevent complications.'
      },
      {
        question: 'Why is foot care important for diabetic patients?',
        answer: 'Diabetes can cause nerve damage (neuropathy) and poor circulation in the feet, making it difficult to feel injuries and slowing wound healing. Regular podiatric care helps catch problems early, prevent infections, and reduce the risk of serious complications including amputation.'
      },
      {
        question: 'Do you provide custom orthotics?',
        answer: 'Yes. Our podiatrists can prescribe and fit custom orthotic inserts designed to support your feet, correct alignment issues, and reduce pain from conditions like plantar fasciitis, flat feet, and arthritis. Custom orthotics are made from precise measurements of your feet.'
      },
      {
        question: 'Can a podiatrist help with balance and fall prevention?',
        answer: 'Absolutely. Foot problems are a leading contributor to falls in older adults. Our podiatrists assess gait, foot structure, and footwear to identify fall risks and recommend treatments — including exercises, orthotics, and shoe modifications — to improve stability.'
      },
      {
        question: 'Is podiatry covered by Medicare?',
        answer: 'Medicare covers many podiatric services, including treatment of foot conditions related to diabetes and peripheral vascular disease, as well as medically necessary procedures. Routine foot care coverage depends on your specific plan. Our billing team can help clarify your benefits.'
      }
    ],
    relatedSlugs: ['vascular-care', 'physical-therapy', 'annual-exams', 'pain-management'],
    keywords: ['podiatrist', 'foot care seniors', 'diabetic foot care', 'podiatry near me', 'bunion treatment', 'plantar fasciitis', 'foot and ankle specialist', 'fall prevention podiatry']
  },
  {
    slug: 'physical-medicine',
    name: 'Physical Medicine & Rehabilitation',
    image: '/images/services/physical-medicine.jpg',
    shortDesc: 'Specialized recovery and rehabilitation to restore function and mobility',
    description: 'Physical Medicine and Rehabilitation (PM&R) at MM Medical Services focuses on restoring function, reducing pain, and improving quality of life for patients recovering from injury, surgery, illness, or the effects of chronic conditions. Our physiatrists — doctors who specialize in rehabilitation medicine — take a whole-person approach, addressing not just the injury or condition but its impact on your ability to perform everyday activities. Whether you are recovering from a joint replacement, managing the effects of a stroke, adapting to arthritis, or working to regain strength after a hospital stay, our PM&R team develops individualized rehabilitation plans that may include therapeutic exercises, medications, assistive devices, injections, and coordination with physical therapy and other specialists. At MM Medical Services, our goal is to help you achieve the highest possible level of independence and comfort.',
    whatToExpect: 'Your first PM&R appointment includes a comprehensive evaluation of your physical function, pain levels, medical history, and rehabilitation goals. Your physiatrist will assess your strength, range of motion, coordination, and ability to perform daily activities. Based on this evaluation, a personalized rehabilitation plan is created. This may involve a combination of in-office treatments, referrals for physical therapy, medication adjustments, and follow-up visits to track your progress and modify the plan as you improve.',
    whoIsItFor: 'PM&R services are for adults recovering from surgery, injury, stroke, or hospitalization, as well as those managing chronic conditions like arthritis or back pain who want to improve their function, mobility, and independence.',
    faqs: [
      {
        question: 'What is a physiatrist?',
        answer: 'A physiatrist is a medical doctor who specializes in physical medicine and rehabilitation. They are trained to diagnose and treat conditions that affect the muscles, bones, nerves, and brain, with a focus on restoring function rather than performing surgery.'
      },
      {
        question: 'How is PM&R different from physical therapy?',
        answer: 'PM&R is a medical specialty led by a physician (physiatrist) who diagnoses conditions, prescribes treatments, and oversees your overall rehabilitation plan. Physical therapy is one component of that plan, delivered by a licensed physical therapist. The two work together for optimal outcomes.'
      },
      {
        question: 'Can PM&R help after joint replacement surgery?',
        answer: 'Yes. Post-surgical rehabilitation is one of the most common reasons patients see a physiatrist. Your PM&R doctor will create a recovery plan designed to restore strength, flexibility, and function in the replaced joint as quickly and safely as possible.'
      },
      {
        question: 'What conditions does PM&R treat?',
        answer: 'PM&R treats a wide range of conditions including back and neck pain, arthritis, sports injuries, post-surgical recovery, stroke rehabilitation, spinal cord injuries, nerve injuries, and deconditioning after hospitalization.'
      },
      {
        question: 'How long does a rehabilitation program typically last?',
        answer: 'The length of a rehabilitation program depends on your condition and goals. Some patients see significant improvement in a few weeks, while more complex recoveries may take several months. Your physiatrist will set realistic milestones and adjust the plan as you progress.'
      }
    ],
    relatedSlugs: ['physical-therapy', 'orthopedic-surgery', 'pain-management', 'vascular-care'],
    keywords: ['physical medicine rehabilitation', 'physiatrist', 'PM&R', 'rehabilitation doctor', 'post surgery recovery', 'stroke rehabilitation', 'mobility restoration seniors']
  },
  {
    slug: 'physical-therapy',
    name: 'Physical Therapy',
    image: '/images/services/physical-therapy.jpg',
    shortDesc: 'Targeted therapy for strength, balance, and fall prevention in seniors',
    description: 'Physical therapy at MM Medical Services is designed to help patients rebuild strength, improve balance, restore mobility, and prevent falls — all critical priorities for older adults. Our licensed physical therapists work one-on-one with each patient to create customized exercise and treatment programs based on your specific condition, goals, and abilities. Whether you are recovering from surgery, managing chronic pain, rehabilitating after a fall, or simply wanting to stay active and independent as you age, our physical therapy team provides the hands-on care and expert guidance you need. We treat a wide range of conditions including post-surgical stiffness, arthritis-related mobility loss, balance disorders, gait abnormalities, and general deconditioning. As part of the MM Medical Services care network, our physical therapists coordinate closely with your physicians, surgeons, and pain management specialists to ensure your therapy aligns with your overall treatment plan.',
    whatToExpect: 'Your physical therapy journey begins with a thorough evaluation of your strength, flexibility, balance, gait, and functional abilities. Your therapist will discuss your goals — whether that is walking without pain, climbing stairs safely, or returning to a favorite activity — and design a personalized treatment plan. Sessions typically last 45 to 60 minutes and may include therapeutic exercises, manual therapy, balance training, gait training, and education on home exercises. Your progress is monitored at every visit, and your plan is adjusted to keep you moving forward.',
    whoIsItFor: 'Physical therapy is for adults of all ages recovering from surgery, injury, or illness, as well as seniors seeking to improve balance, prevent falls, manage arthritis, and maintain the strength and mobility needed for independent living.',
    faqs: [
      {
        question: 'How often will I need to attend physical therapy?',
        answer: 'Most patients attend physical therapy two to three times per week, though the frequency depends on your condition and treatment plan. As you improve, sessions may be reduced. Your therapist will also provide home exercises to supplement your in-clinic sessions.'
      },
      {
        question: 'Can physical therapy help prevent falls?',
        answer: 'Yes. Fall prevention is one of the primary benefits of physical therapy for seniors. Your therapist will assess your balance, strength, and gait, then design exercises specifically targeting the areas that put you at risk. Studies show that physical therapy significantly reduces fall risk in older adults.'
      },
      {
        question: 'Do I need a doctor referral for physical therapy?',
        answer: 'Referral requirements vary by insurance plan. Many plans allow direct access to physical therapy without a referral. Our front desk team can help determine your plan requirements and schedule your first appointment.'
      },
      {
        question: 'What should I wear to physical therapy?',
        answer: 'Wear comfortable, loose-fitting clothing that allows you to move freely. Athletic shoes with good support are recommended. If your therapy involves a specific body area, wear clothing that provides easy access — for example, shorts for knee therapy.'
      },
      {
        question: 'Is physical therapy painful?',
        answer: 'Physical therapy should not cause sharp or lasting pain. You may experience mild discomfort or muscle soreness as you work on building strength and flexibility, similar to what you might feel after exercise. Your therapist will always work within your comfort level and adjust intensity as needed.'
      },
      {
        question: 'How long until I see results from physical therapy?',
        answer: 'Many patients notice some improvement within the first few sessions, though meaningful progress typically develops over several weeks of consistent participation. Your therapist will set short-term and long-term goals and track your progress throughout your treatment.'
      }
    ],
    relatedSlugs: ['physical-medicine', 'orthopedic-surgery', 'pain-management', 'gae-knee-pain', 'podiatry'],
    keywords: ['physical therapy', 'fall prevention seniors', 'balance training', 'post surgery physical therapy', 'senior physical therapy', 'mobility exercises', 'strength training elderly', 'PT near me']
  },
  {
    slug: 'annual-exams',
    name: 'Annual Exams',
    image: '/images/services/annual-exams.jpg',
    shortDesc: 'Comprehensive yearly checkups to monitor your health and catch problems early',
    description: 'Annual wellness exams at MM Medical Services are the foundation of preventive care, giving you and your doctor a complete picture of your health each year. These comprehensive checkups are performed by our experienced medical doctors and are designed to detect health concerns early — when they are most treatable — and to keep your ongoing conditions well managed. During your annual exam, your physician reviews your medical history, performs a thorough physical examination, orders appropriate screening tests, updates vaccinations, and discusses any new symptoms or health concerns. For our senior patients, annual exams are especially important for monitoring conditions common with aging, including high blood pressure, diabetes, cardiovascular risk, cognitive changes, and medication management. At MM Medical Services, your annual exam is also an opportunity for your doctor to coordinate with our specialists in vascular care, pain management, podiatry, and rehabilitation to ensure all aspects of your health are addressed under one roof.',
    whatToExpect: 'Your annual exam begins with a review of your medical history, current medications, and any health changes since your last visit. Your doctor will perform a comprehensive physical examination including blood pressure, heart and lung assessment, abdominal examination, and musculoskeletal evaluation. Routine bloodwork and age-appropriate screenings will be ordered as needed. You will have time to discuss any questions or concerns with your doctor, and referrals to specialists within MM Medical Services will be arranged if needed.',
    whoIsItFor: 'Annual exams are for all adults, and are particularly important for seniors and individuals managing chronic conditions such as diabetes, hypertension, heart disease, or arthritis who benefit from regular monitoring and coordinated preventive care.',
    faqs: [
      {
        question: 'What is included in an annual exam?',
        answer: 'A typical annual exam includes a complete physical examination, blood pressure check, review of medications, routine bloodwork (cholesterol, blood sugar, kidney and liver function), age-appropriate cancer screenings, vaccination updates, and a discussion of any new health concerns or lifestyle changes.'
      },
      {
        question: 'Is an annual exam covered by Medicare?',
        answer: 'Yes. Medicare covers an Annual Wellness Visit at no cost to you when you see a participating provider. This visit focuses on preventive care and health planning. Additional tests or treatments identified during the visit may have separate coverage terms, which our billing team can explain.'
      },
      {
        question: 'How is an annual exam different from a sick visit?',
        answer: 'An annual exam is a scheduled preventive visit focused on overall health assessment, screenings, and early detection. A sick visit is for evaluating and treating a specific symptom or illness. Both are important, but annual exams help catch problems before symptoms appear.'
      },
      {
        question: 'What should I bring to my annual exam?',
        answer: 'Please bring your insurance card, a list of all current medications (including vitamins and supplements), any recent test results from outside providers, and a list of questions or health concerns you would like to discuss with your doctor.'
      },
      {
        question: 'Can my annual exam doctor refer me to specialists at MM Medical Services?',
        answer: 'Yes. One of the advantages of MM Medical Services is our coordinated care model. Your primary care doctor can refer you directly to our vascular, orthopedic, pain management, podiatry, or rehabilitation specialists — all within the same practice, making scheduling and communication seamless.'
      }
    ],
    relatedSlugs: ['vascular-care', 'podiatry', 'pain-management', 'physical-medicine'],
    keywords: ['annual exam', 'yearly physical', 'wellness checkup', 'preventive care seniors', 'annual wellness visit Medicare', 'primary care doctor', 'health screening elderly']
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map(slug => services.find(s => s.slug === slug)).filter((s): s is Service => !!s)
}
