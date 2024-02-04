import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataCreateInput } from "../../../inputs/Version_commit_dataCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersion_commit_dataArgs {
  @TypeGraphQL.Field(_type => Version_commit_dataCreateInput, {
    nullable: false
  })
  data!: Version_commit_dataCreateInput;
}
