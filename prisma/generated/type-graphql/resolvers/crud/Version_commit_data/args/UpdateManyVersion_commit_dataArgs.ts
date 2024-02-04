import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataUpdateManyMutationInput } from "../../../inputs/Version_commit_dataUpdateManyMutationInput";
import { Version_commit_dataWhereInput } from "../../../inputs/Version_commit_dataWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersion_commit_dataArgs {
  @TypeGraphQL.Field(_type => Version_commit_dataUpdateManyMutationInput, {
    nullable: false
  })
  data!: Version_commit_dataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Version_commit_dataWhereInput, {
    nullable: true
  })
  where?: Version_commit_dataWhereInput | undefined;
}
