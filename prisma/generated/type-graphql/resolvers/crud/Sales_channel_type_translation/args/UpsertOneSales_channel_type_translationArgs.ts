import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationCreateInput } from "../../../inputs/Sales_channel_type_translationCreateInput";
import { Sales_channel_type_translationUpdateInput } from "../../../inputs/Sales_channel_type_translationUpdateInput";
import { Sales_channel_type_translationWhereUniqueInput } from "../../../inputs/Sales_channel_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_type_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationCreateInput, {
    nullable: false
  })
  create!: Sales_channel_type_translationCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_type_translationUpdateInput;
}
