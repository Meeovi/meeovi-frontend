import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitCreateInput } from "../../../inputs/Version_commitCreateInput";
import { Version_commitUpdateInput } from "../../../inputs/Version_commitUpdateInput";
import { Version_commitWhereUniqueInput } from "../../../inputs/Version_commitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitWhereUniqueInput, {
    nullable: false
  })
  where!: Version_commitWhereUniqueInput;

  @TypeGraphQL.Field(_type => Version_commitCreateInput, {
    nullable: false
  })
  create!: Version_commitCreateInput;

  @TypeGraphQL.Field(_type => Version_commitUpdateInput, {
    nullable: false
  })
  update!: Version_commitUpdateInput;
}
