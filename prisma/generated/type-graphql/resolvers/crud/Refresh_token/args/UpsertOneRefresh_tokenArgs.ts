import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenCreateInput } from "../../../inputs/Refresh_tokenCreateInput";
import { Refresh_tokenUpdateInput } from "../../../inputs/Refresh_tokenUpdateInput";
import { Refresh_tokenWhereUniqueInput } from "../../../inputs/Refresh_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenWhereUniqueInput, {
    nullable: false
  })
  where!: Refresh_tokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => Refresh_tokenCreateInput, {
    nullable: false
  })
  create!: Refresh_tokenCreateInput;

  @TypeGraphQL.Field(_type => Refresh_tokenUpdateInput, {
    nullable: false
  })
  update!: Refresh_tokenUpdateInput;
}
