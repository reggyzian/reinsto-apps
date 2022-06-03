/* eslint-disable linebreak-style */
const Loader = {
  loaderTemplate() {
    return `
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
        </div>`;
  },

  OfflineTemplate() {
    return `
        <div class="offline">
            <span><i class="fa fa-ban"></i></span>
            <h2>Offline Connection</h2>
        </div>`;
  },
};

export default Loader;
