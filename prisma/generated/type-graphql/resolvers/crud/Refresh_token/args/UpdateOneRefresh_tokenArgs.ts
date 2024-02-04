import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenUpdateInput } from "../../../inputs/Refresh_tokenUpdateInput";
import { Refresh_tokenWhereUniqueInput } from "../../../inputs/Refresh_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenUpdateInput, {
    nullable: false
  })
  data!: Refresh_tokenUpdateInput;

  @TypeGraphQL.Field(_type => Refresh_tokenWhereUniqueInput, {
    nullable: false
  })
  where!: Refresh_tokenWhereUniqueInput;
}
