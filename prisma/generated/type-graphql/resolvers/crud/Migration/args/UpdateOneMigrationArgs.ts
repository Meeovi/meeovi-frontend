import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationUpdateInput } from "../../../inputs/MigrationUpdateInput";
import { MigrationWhereUniqueInput } from "../../../inputs/MigrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationUpdateInput, {
    nullable: false
  })
  data!: MigrationUpdateInput;

  @TypeGraphQL.Field(_type => MigrationWhereUniqueInput, {
    nullable: false
  })
  where!: MigrationWhereUniqueInput;
}
