/**
 * "What we believe" content for the About page.
 *
 * Scripture passages are quoted from The Holy Bible, English Standard Version®
 * (ESV®), © 2001 by Crossway, a publishing ministry of Good News Publishers.
 * Used by permission. All rights reserved.
 */

export interface ScriptureRef {
  readonly ref: string;
  readonly text: string;
}

export interface Belief {
  readonly num: string;
  readonly title: string;
  readonly body: string;
  readonly references: readonly ScriptureRef[];
}

export const BELIEFS: readonly Belief[] = [
  {
    num: '01',
    title: 'God',
    body:
      'God is the Creator and Ruler of the universe. He has eternally existed in three persons: the Father, the Son and the Holy Spirit. These three are co-equal and are one God.',
    references: [
      { ref: 'Genesis 1:1', text: 'In the beginning, God created the heavens and the earth.' },
      {
        ref: 'Genesis 1:26-27',
        text: "Then God said, \u201CLet us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth.\u201D So God created man in his own image, in the image of God he created him; male and female he created them.",
      },
      {
        ref: 'Genesis 3:22',
        text: "Then the Lord God said, \u201CBehold, the man has become like one of us in knowing good and evil. Now, lest he reach out his hand and take also of the tree of life and eat, and live forever\u2014\u201D",
      },
      {
        ref: 'Psalm 90:2',
        text: 'Before the mountains were brought forth, or ever you had formed the earth and the world, from everlasting to everlasting you are God.',
      },
      {
        ref: 'Matthew 28:19',
        text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
      },
      {
        ref: '1 Peter 1:2',
        text: 'according to the foreknowledge of God the Father, in the sanctification of the Spirit, for obedience to Jesus Christ and for sprinkling with his blood: May grace and peace be multiplied to you.',
      },
      {
        ref: '2 Corinthians 13:14',
        text: 'The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.',
      },
    ],
  },
  {
    num: '02',
    title: 'Jesus Christ',
    body:
      "Jesus Christ is the Son of God. He is co-equal with the Father. Jesus lived a sinless human life and offered Himself as the perfect sacrifice for the sins of all men by dying on a cross. He arose from the dead after three days to demonstrate His power over sin and death. He ascended to Heaven's glory and will return again to earth to reign as King of kings, and Lord of lords.",
    references: [
      {
        ref: 'Matthew 1:22-23',
        text: "All this took place to fulfill what the Lord had spoken by the prophet: \u201CBehold, the virgin shall conceive and bear a son, and they shall call his name Immanuel\u201D (which means, God with us).",
      },
      {
        ref: 'Isaiah 9:6',
        text: 'For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
      },
      {
        ref: 'John 1:1-5',
        text: 'In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him, and without him was not any thing made that was made. In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.',
      },
      {
        ref: 'John 14:10-30',
        text: "Do you not believe that I am in the Father and the Father is in me? The words that I say to you I do not speak on my own authority, but the Father who dwells in me does his works. \u2026 If you love me, you will keep my commandments. And I will ask the Father, and he will give you another Helper, to be with you forever, even the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. You know him, for he dwells with you and will be in you. \u2026 But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you.",
      },
      {
        ref: 'Hebrews 4:14-15',
        text: 'Since then we have a great high priest who has passed through the heavens, Jesus, the Son of God, let us hold fast our confession. For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin.',
      },
      {
        ref: '1 Corinthians 15:3-4',
        text: 'For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures,',
      },
      {
        ref: 'Romans 1:3-4',
        text: 'concerning his Son, who was descended from David according to the flesh and was declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead, Jesus Christ our Lord,',
      },
      {
        ref: 'Acts 1:9-11',
        text: "And when he had said these things, as they were looking on, he was lifted up, and a cloud took him out of their sight. And while they were gazing into heaven as he went, behold, two men stood by them in white robes, and said, \u201CMen of Galilee, why do you stand looking into heaven? This Jesus, who was taken up from you into heaven, will come in the same way as you saw him go into heaven.\u201D",
      },
      {
        ref: '1 Timothy 6:14-15',
        text: 'to keep the commandment unstained and free from reproach until the appearing of our Lord Jesus Christ, which he will display at the proper time\u2014he who is the blessed and only Sovereign, the King of kings and Lord of lords,',
      },
      {
        ref: 'Titus 2:13',
        text: 'waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ,',
      },
    ],
  },
  {
    num: '03',
    title: 'Holy Spirit',
    body:
      'The Holy Spirit is equal with the Father and the Son as God. He is present in the world to make men aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with power for living, understanding of spiritual truth, and guidance in doing what is right. The Christian seeks to live under His control daily.',
    references: [
      {
        ref: '2 Corinthians 3:17',
        text: 'Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.',
      },
      {
        ref: 'John 16:7-13',
        text: 'Nevertheless, I tell you the truth: it is to your advantage that I go away, for if I do not go away, the Helper will not come to you. But if I go, I will send him to you. And when he comes, he will convict the world concerning sin and righteousness and judgment: concerning sin, because they do not believe in me; concerning righteousness, because I go to the Father, and you will see me no longer; concerning judgment, because the ruler of this world is judged. I still have many things to say to you, but you cannot bear them now. When the Spirit of truth comes, he will guide you into all the truth, for he will not speak on his own authority, but whatever he hears he will speak, and he will declare to you the things that are to come.',
      },
      {
        ref: 'John 14:16-17',
        text: 'And I will ask the Father, and he will give you another Helper, to be with you forever, even the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. You know him, for he dwells with you and will be in you.',
      },
      {
        ref: 'Acts 1:8',
        text: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.',
      },
      {
        ref: '1 Corinthians 2:12',
        text: 'Now we have received not the spirit of the world, but the Spirit who is from God, that we might understand the things freely given us by God.',
      },
      {
        ref: '1 Corinthians 3:16',
        text: "Do you not know that you are God's temple and that God's Spirit dwells in you?",
      },
      {
        ref: 'Ephesians 1:13',
        text: 'In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit,',
      },
      {
        ref: 'Galatians 5:25',
        text: 'If we live by the Spirit, let us also keep in step with the Spirit.',
      },
      {
        ref: 'Ephesians 5:1',
        text: 'Therefore be imitators of God, as beloved children.',
      },
    ],
  },
  {
    num: '04',
    title: 'Eternity',
    body:
      'Man was created to exist forever. He will either exist eternally separated from God by sin, or in union with God through forgiveness and salvation. To be eternally separated from God is Hell. To be eternally in union with Him is eternal life. Heaven and Hell are places of eternal existence.',
    references: [
      {
        ref: 'John 3:16',
        text: '\u201CFor God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
      },
      {
        ref: 'John 2:25',
        text: 'and needed no one to bear witness about man, for he himself knew what was in man.',
      },
      {
        ref: 'John 5:11-13',
        text: "But he answered them, \u201CThe man who healed me, that man said to me, \u2018Take up your bed, and walk.\u2019\u201D They asked him, \u201CWho is the man who said to you, \u2018Take up your bed and walk\u2019?\u201D Now the man who had been healed did not know who it was, for Jesus had withdrawn, as there was a crowd in the place.",
      },
      {
        ref: 'Romans 6:23',
        text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
      },
      {
        ref: 'Revelation 20:15',
        text: "And if anyone's name was not found written in the book of life, he was thrown into the lake of fire.",
      },
      {
        ref: '1 John 5:11-12',
        text: 'And this is the testimony, that God gave us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life.',
      },
      {
        ref: 'Matthew 25:31-46',
        text: "\u201CWhen the Son of Man comes in his glory, and all the angels with him, then he will sit on his glorious throne. Before him will be gathered all the nations, and he will separate people one from another as a shepherd separates the sheep from the goats. \u2026 Then the King will say to those on his right, \u2018Come, you who are blessed by my Father, inherit the kingdom prepared for you from the foundation of the world.\u2019 \u2026 Then he will say to those on his left, \u2018Depart from me, you cursed, into the eternal fire prepared for the devil and his angels.\u2019 \u2026 And these will go away into eternal punishment, but the righteous into eternal life.\u201D",
      },
    ],
  },
  {
    num: '05',
    title: 'Man',
    body:
      'Man is made in the spiritual image of God, to be like Him in character. He is the supreme object of God\u2019s creation. Although man has tremendous potential for good, he is marred by an attitude of disobedience toward God called \u201Csin.\u201D This attitude separates man from God.',
    references: [
      {
        ref: 'Genesis 1:27',
        text: 'So God created man in his own image, in the image of God he created him; male and female he created them.',
      },
      {
        ref: 'Psalm 8:3-6',
        text: 'When I look at your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is man that you are mindful of him, and the son of man that you care for him? Yet you have made him a little lower than the heavenly beings and crowned him with glory and honor. You have given him dominion over the works of your hands; you have put all things under his feet,',
      },
      {
        ref: 'Isaiah 53:6a',
        text: 'All we like sheep have gone astray; we have turned\u2014every one\u2014to his own way;',
      },
      {
        ref: 'Romans 3:23',
        text: 'for all have sinned and fall short of the glory of God,',
      },
      {
        ref: 'Isaiah 59:1-2',
        text: "Behold, the Lord's hand is not shortened, that it cannot save, or his ear dull, that it cannot hear; but your iniquities have made a separation between you and your God, and your sins have hidden his face from you so that he does not hear.",
      },
    ],
  },
  {
    num: '06',
    title: 'Salvation',
    body:
      "Salvation is a gift from God to man. Man can never make up for his sin by self-improvement or good works. Only by trusting in Jesus Christ as God\u2019s offer of forgiveness can man be saved from sin\u2019s penalty. Eternal life begins the moment one receives Jesus Christ into his life by faith.",
    references: [
      {
        ref: 'Romans 6:23',
        text: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
      },
      {
        ref: 'Ephesians 2:8-9',
        text: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
      },
      {
        ref: 'John 14:6',
        text: "Jesus said to him, \u201CI am the way, and the truth, and the life. No one comes to the Father except through me.",
      },
      {
        ref: 'John 1:12',
        text: 'But to all who did receive him, who believed in his name, he gave the right to become children of God,',
      },
      {
        ref: 'Titus 3:5',
        text: 'he saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit,',
      },
      {
        ref: 'Galatians 3:26',
        text: 'for in Christ Jesus you are all sons of God, through faith.',
      },
      {
        ref: 'Romans 5:1',
        text: 'Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.',
      },
    ],
  },
  {
    num: '07',
    title: 'Eternal Security',
    body:
      'Because God gives man eternal life through Jesus Christ, the believer is secure in salvation for eternity. Salvation is maintained by the grace and power of God, not by the self-effort of the Christian. It is the grace and keeping power of God that gives this security.',
    references: [
      {
        ref: 'John 10:29',
        text: "My Father, who has given them to me, is greater than all, and no one is able to snatch them out of the Father's hand.",
      },
      {
        ref: '2 Timothy 1:12',
        text: 'which is why I suffer as I do. But I am not ashamed, for I know whom I have believed, and I am convinced that he is able to guard until that day what has been entrusted to me.',
      },
      {
        ref: 'Hebrews 7:25',
        text: 'Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.',
      },
      {
        ref: 'Hebrews 10:10',
        text: 'And by that will we have been sanctified through the offering of the body of Jesus Christ once for all.',
      },
      {
        ref: 'Hebrews 10:14',
        text: 'For by a single offering he has perfected for all time those who are being sanctified.',
      },
      {
        ref: '1 Peter 1:3-5',
        text: "Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead, to an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you, who by God's power are being guarded through faith for a salvation ready to be revealed in the last time.",
      },
    ],
  },
  {
    num: '08',
    title: 'The Bible',
    body:
      "The Bible is God\u2019s word to all men. It was written by human authors, under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living. Because it is inspired by God, it is truth without any mixture of error.",
    references: [
      {
        ref: '2 Timothy 3:16',
        text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness,',
      },
      {
        ref: '2 Peter 1:20-21',
        text: "knowing this first of all, that no prophecy of Scripture comes from someone's own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.",
      },
      {
        ref: '2 Timothy 1:13',
        text: 'Follow the pattern of the sound words that you have heard from me, in the faith and love that are in Christ Jesus.',
      },
      {
        ref: 'Psalm 119:105',
        text: 'Your word is a lamp to my feet and a light to my path.',
      },
      {
        ref: 'Psalm 119:160',
        text: 'The sum of your word is truth, and every one of your righteous rules endures forever.',
      },
      {
        ref: 'Psalm 12:6',
        text: 'The words of the Lord are pure words, like silver refined in a furnace on the ground, purified seven times.',
      },
      {
        ref: 'Proverbs 30:5',
        text: 'Every word of God proves true; he is a shield to those who take refuge in him.',
      },
    ],
  },
  {
    num: '09',
    title: 'Baptism',
    body:
      "We believe baptism is an important step in your walk with Christ. Baptism doesn\u2019t save you, but it is a step of obedience in your public profession of faith in Jesus Christ. It is a picture of what Jesus did for you \u2014 He died for your sins, was buried, and raised to life. It is also a picture of what happened to you \u2014 you died to an old way of living and have been raised to walk in a brand new life in Jesus. The Bible teaches that everyone who has put their faith in Jesus for salvation needs to be baptized.",
    references: [],
  },
  {
    num: '10',
    title: "Lord\u2019s Supper",
    body:
      "We believe the Lord\u2019s Supper is a vital element of worship because it is a direct command from Jesus Christ, Who instructed His followers to \u201Cdo this in remembrance of Me\u201D (Luke 22:19). This ordinance allows us to reflect on Christ\u2019s sacrifice on the cross, symbolized through the bread and the cup. These represent His body and blood given for our sins. It is a time of spiritual renewal, self-examination, and unity as the body of Christ, reminding us of His love, the forgiveness of sin, and the hope of His return. Through this act, we proclaim the gospel and celebrate our shared faith in Him.",
    references: [],
  },
];
