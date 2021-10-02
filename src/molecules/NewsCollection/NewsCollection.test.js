import { render, screen } from '@testing-library/react';
import { NewsCollection } from "./NewsCollection";

describe("News Collection", ()=>{
    it("should be present in the document", ()=>{
        render(<NewsCollection />);

        // Assert

        // Action
    });

    it("should have one or many news items on the page", ()=>{
        render(<NewsCollection />);

        // Assert

        // Action
    });

    it("should show message when no news item exists", ()=>{
        render(<NewsCollection />);

        // Assert

        // Action
    })
})