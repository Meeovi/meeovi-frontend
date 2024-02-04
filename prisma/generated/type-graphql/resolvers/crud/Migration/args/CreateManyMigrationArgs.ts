import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationCreateManyInput } from "../../../inputs/MigrationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMigrationArgs {
  @TypeGraphQL.Field(_type => [MigrationCreateManyInput], {
    nullable: false
  })
  data!: MigrationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
