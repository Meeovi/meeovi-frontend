import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationWhereUniqueInput } from "../../../inputs/MigrationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationWhereUniqueInput, {
    nullable: false
  })
  where!: MigrationWhereUniqueInput;
}
