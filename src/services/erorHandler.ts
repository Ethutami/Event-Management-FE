export const handleError = (error: unknown) => {
    if (error instanceof Error) {
        if (!error.message.includes("Voucher not found")) {
            alert(error.message);
        }
    } else {
        alert('Unknown error');
    }
};

export const checkResponse = async (response: Response) => {
    if (!response.ok) {
        const errorText = await response.statusText;
        const res = await response.json()
        alert(res.message)
        handleError(new Error(`HTTP error ${response.status}: ${errorText}`));
    }
};
