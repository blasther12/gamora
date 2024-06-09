import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1717870481408 implements MigrationInterface {
  name = 'SchemaUpdate1717870481408';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "register" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_14473cc8f2caa81fd19f7648d54" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "is_first_acess" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "register"`);
  }
}
