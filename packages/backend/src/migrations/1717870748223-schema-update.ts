import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1717870748223 implements MigrationInterface {
  name = 'SchemaUpdate1717870748223';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "registerId" integer`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_eb48bfe722b11bb6bceb0cff127" UNIQUE ("registerId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_eb48bfe722b11bb6bceb0cff127" FOREIGN KEY ("registerId") REFERENCES "register"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_eb48bfe722b11bb6bceb0cff127"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_eb48bfe722b11bb6bceb0cff127"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "registerId"`);
  }
}
