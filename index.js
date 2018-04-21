/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.29b29561-bb1f-4a3f-95c6-ec2c70ab36ae';

const SKILL_NAME = 'pulp fiction';
const GET_FACT_MESSAGE = "Here's your story: ";
const HELP_MESSAGE = 'You can say tell me a terrible short story, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'You have reached The End of Things. Whatever comes next is concealed in darkness.What if you take another step? Will you plummet to your death? Will the creatures in the shadows devour you?I’ve taken you as far as I can. The next move is yours.If you dare',
    'The vampire’s about to bite her when she realizes this is all wrong. You can’t go out in daytime! The vampire gives a slow and disdainful look over his shoulder at the sun looming over them.You shouldn’t believe everything you see in the movies, child. And he drains her',
    'The legends are wrong. Its name is Spattered Claws.It takes anyone. Naughty. Nice. Whenever the moon is a fingernail sliver and the night sky darkest, Spattered Claws prowls for meat.It hates the December holiday lights. Brightness sends it underground.So keep those lights shining. We’ll all need them',
    'Jonathan ignored the signs warning of thin ice; he loved skating on frozen ponds. surface shattered under his feet. He grabbed a jagged icy edge and pulled his head above the frigid water; gasping.Claws seized his ankles. Ice broke in his hands as he went under for good',
    'he is night owl; she is early bird ; 4 am knows all of their secrets ',
    'i love you he finally said ; then they, closed the coffin ',
    'she wore the saree for the first time; he tripped .',
    'Every noise in the house is magnified when I’m alone. Every creak, bump, and rustle makes me glance around the empty rooms. Before bed, I turn on the bathroom light. The face behind mine in the mirror whispers You’re never truly alone, dear. And then all the lights go out',
    'cause my heart breaks a little when i hear her name ',
    'they fought; but they texted each other i love you before sleeping ; love prevails ; fight dont ',
    'we talked like lovers ; laughed like friends ',
    'she is made up of layers of blemish , concealed in optimism ',
    'nah he is just a friend ; she said ; but the blush on her face gave her away ',
    'but he is not perfect ; everyone told her ; for me he is ;    her heart revolted ',
    'what is love ? ; a fealing which ruins a friendship or makes it stronger',
    'just friends they agreed ; while it worked for one ; the other lied again ',
    'A short story is a love affair, a novel is a marriage. A short story is a photograph; a novel is a film.',
    'Fiction has been maligned for centuries as being "false," "untrue," yet good fiction provides more truth about the world, about life, and even about the reader, than can be found in non-fiction',
    'Kids believe in Santa; adults believe in childhood.',
    'At school, you try to learn your tables; but all you see in your head is a field of dead horses.',
    'We discovered the pleasure of unbridled, unlimited destruction, the endless joy of converting something into nothing',
    'The second anniversary is dust, not to be confused with the fortieth anniversary, ashes',
    'He’d always had this notion about hair—that it was sentient, that it somehow possessed the propensity to tell whether it was appreciated or not',
    'I just stood there, in the stifling and cramped semi-darkness, listening to the frenzied beating of my heart. Or perhaps it was the bear’s heart',
    'A woman passes. It’s about time, the gunman thinks. Has she been sent by the Boss? Is she his witness? His victim? His executioner?',
    'What are you doing? I whisper in her ear. Skiing, she says. Skiing in the Canadian Rockies with Mr. Bluepants',
    'There was a lot that he didn’t know about robbing banks, and every moment was another opportunity to reveal his ignorance',
    'I would leave here those beloved and those close to me, everything that touched me, everything that shocked me, fascinated and uplifted me',
    'There’s nothing more to do but wait, and either acknowledge the person beside you, or not'
    
    
    
    
    
    
    
    
    
    ];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = '<prosody pitch="low"> <prosody rate="slow">'+GET_FACT_MESSAGE + randomFact+'</prosody></prosody>';

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

