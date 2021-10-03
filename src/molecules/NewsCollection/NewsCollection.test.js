import { render, screen } from '@testing-library/react';
import NewsCollection from "./NewsCollection";

const data = {"articles": [
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Jon Fingas",
          "title": "AMC theaters will accept cryptocurrencies beyond Bitcoin",
          "description": "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bitcoin Cash when crypto payments are available. He didn't hav…",
          "url": "https://www.engadget.com/amc-theaters-accept-ethereum-litecoin-bitcoin-cash-132642183.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/4a01cb80-16eb-11ec-abfe-c7b840dd48ca",
          "publishedAt": "2021-09-16T13:26:42Z",
          "content": "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bi… [+1198 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Karissa Bell",
          "title": "Twitter will let users send and receive Bitcoin tips",
          "description": "Four months after Twitter first introduced in-app tipping, the company is expanding its “tip jar” feature in a major way. The company is opening up tipping to all its users globally, and for the first time will allow some users to send and receive tips in Bit…",
          "url": "https://www.engadget.com/twitter-opens-tipping-in-bitcoin-170017891.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/28751be0-1c8e-11ec-9ffb-353ffababd7e",
          "publishedAt": "2021-09-23T17:00:17Z",
          "content": "Four months after Twitter first introduced in-app tipping, the company is expanding its tip jar feature in a major way. The company is opening up tipping to all its users globally, and for the first … [+2390 chars]"
        },
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Andrew Tarantola",
          "title": "Hitting the Books: How Bitcoin is somehow worth more than the paper it's printed on",
          "description": "Bitcoin and similar blockchain-based cryptos exhibit the same radical divergence from traditional scarcity economics that we first saw when MP3s and Napster cratered physical album sales at the turn of the century. Unlike gold, which derives its value from bo…",
          "url": "https://www.engadget.com/hitting-the-books-the-future-of-money-eswar-prasad-harvard-university-press-153024975.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/5ea7d740-17ff-11ec-9ffd-ff33ac942d83",
          "publishedAt": "2021-09-25T15:30:24Z",
          "content": "Bitcoin and similar blockchain-based cryptos exhibit the same radical divergence from traditional scarcity economics that we first saw when MP3s and Napster cratered physical album sales at the turn … [+8436 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Blogspot.com"
          },
          "author": "noreply@blogger.com (Unknown)",
          "title": "Why have Elon Musk and Tesla suddenly turned against bitcoin?",
          "description": "Elon Musk has performed a sudden U-turn on bitcoin over concerns about its energy usage, and says his electric car firm Tesla will no longer accept the cryptocurrency as payment – but will his decision have an impact, and could Tesla turn to an alternative cu…",
          "url": "https://techncruncher.blogspot.com/2021/09/why-have-elon-musk-and-tesla-suddenly.html",
          "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEh20SgNNsDlKyWWmB7XgB5SfFY10M6CqJAq93HwGtssTn2cWz6w9zHPjXf91WwoWr27QeaC4HsGv2NxPOXUdvk6xodUojnw8rUuAkEMY3Qb4ucoVpN3nSyF8JW_xVDWa2aSMEWH387hPsfouSJyClLNburIcDbXIeJamuTHwiSvw4hdNnqeeICcvg1wrQ=w1200-h630-p-k-no-nu",
          "publishedAt": "2021-09-28T20:03:00Z",
          "content": "Elon Musk has performed a sudden U-turn on bitcoin over concerns about its energy usage, and says his electric car firm Tesla will no longer accept the cryptocurrency as payment – but will his decisi… [+3069 chars]"
        }]};

describe("News Collection", ()=>{
    it("should be present in the document", ()=>{
        render(<NewsCollection />);

        const newsCollection = screen.queryByTestId('news-collection');
        expect(newsCollection).not.toBeNull();
        expect(newsCollection).toBeInTheDocument();
    });

    it("should have one or many news items on the page", ()=>{
        render(<NewsCollection rows={data.articles}/>);

        const newsCollection = screen.queryAllByTestId('news-item');
        expect(newsCollection).not.toHaveLength(0);
    });

    it("should show message when no news item exists", ()=>{
        render(<NewsCollection />);

        const newsCollection = screen.queryAllByTestId('news-item');
        expect(newsCollection).toHaveLength(0);

        const emptyNewsMessage = screen.queryByTestId('news-collection-message');
        expect(emptyNewsMessage).toBeInTheDocument();
    })
})