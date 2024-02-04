import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationCreateInput } from "../../../inputs/MigrationCreateInput";
import { MigrationUpdateInput } from "../../../inputs/MigrationUpdateInput";
import { MigrationWhereUniqueInput } from "../../../inputs/MigrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationWhereUniqueInput, {
    nullable: false
  })
  where!: MigrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => MigrationCreateInput, {
    nullable: false
  })
  create!: MigrationCreateInput;

  @TypeGraphQL.Field(_type => MigrationUpdateInput, {
    nullable: false
  })
  update!: MigrationUpdateInput;
}
