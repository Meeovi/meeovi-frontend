import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataWhereUniqueInput } from "../../../inputs/Version_commit_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersion_commit_dataOrThrowArgs {
  @TypeGraphQL.Field(_type => Version_commit_dataWhereUniqueInput, {
    nullable: false
  })
  where!: Version_commit_dataWhereUniqueInput;
}
