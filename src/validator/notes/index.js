const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  // fungsi untuk validasi dan evaluasi berdasarkan schema
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    // jika properti validationResult error, memanggil pesan error
    if (validationResult.error) {
      // menggunakan custom error
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator; // ekspor objek
