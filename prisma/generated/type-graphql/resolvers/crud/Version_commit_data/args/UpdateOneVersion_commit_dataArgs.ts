import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataUpdateInput } from "../../../inputs/Version_commit_dataUpdateInput";
import { Version_commit_dataWhereUniqueInput } from "../../../inputs/Version_commit_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersion_commit_dataArgs {
  @TypeGraphQL.Field(_type => Version_commit_dataUpdateInput, {
    nullable: false
  })
  data!: Version_commit_dataUpdateInput;

  @TypeGraphQL.Field(_type => Version_commit_dataWhereUniqueInput, {
    nullable: false
  })
  where!: Version_commit_dataWhereUniqueInput;
}
