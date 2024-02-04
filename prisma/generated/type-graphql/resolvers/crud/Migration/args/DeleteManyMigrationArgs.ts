import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationWhereInput } from "../../../inputs/MigrationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationWhereInput, {
    nullable: true
  })
  where?: MigrationWhereInput | undefined;
}
