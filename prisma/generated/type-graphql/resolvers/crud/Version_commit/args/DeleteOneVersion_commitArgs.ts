import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitWhereUniqueInput } from "../../../inputs/Version_commitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitWhereUniqueInput, {
    nullable: false
  })
  where!: Version_commitWhereUniqueInput;
}
