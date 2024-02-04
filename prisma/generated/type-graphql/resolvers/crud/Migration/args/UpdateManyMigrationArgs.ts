import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationUpdateManyMutationInput } from "../../../inputs/MigrationUpdateManyMutationInput";
import { MigrationWhereInput } from "../../../inputs/MigrationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationUpdateManyMutationInput, {
    nullable: false
  })
  data!: MigrationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MigrationWhereInput, {
    nullable: true
  })
  where?: MigrationWhereInput | undefined;
}
