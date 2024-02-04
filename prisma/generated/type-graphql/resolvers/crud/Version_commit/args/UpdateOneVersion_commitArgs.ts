import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitUpdateInput } from "../../../inputs/Version_commitUpdateInput";
import { Version_commitWhereUniqueInput } from "../../../inputs/Version_commitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitUpdateInput, {
    nullable: false
  })
  data!: Version_commitUpdateInput;

  @TypeGraphQL.Field(_type => Version_commitWhereUniqueInput, {
    nullable: false
  })
  where!: Version_commitWhereUniqueInput;
}
