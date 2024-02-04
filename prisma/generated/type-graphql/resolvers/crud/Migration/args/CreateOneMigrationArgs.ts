import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationCreateInput } from "../../../inputs/MigrationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationCreateInput, {
    nullable: false
  })
  data!: MigrationCreateInput;
}
