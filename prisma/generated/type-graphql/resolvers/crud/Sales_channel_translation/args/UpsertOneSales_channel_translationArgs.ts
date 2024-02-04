import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_translationCreateInput } from "../../../inputs/Sales_channel_translationCreateInput";
import { Sales_channel_translationUpdateInput } from "../../../inputs/Sales_channel_translationUpdateInput";
import { Sales_channel_translationWhereUniqueInput } from "../../../inputs/Sales_channel_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_translationCreateInput, {
    nullable: false
  })
  create!: Sales_channel_translationCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_translationUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_translationUpdateInput;
}
