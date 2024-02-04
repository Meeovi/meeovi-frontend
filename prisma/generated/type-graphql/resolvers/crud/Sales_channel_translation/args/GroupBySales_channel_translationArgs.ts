import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_translationOrderByWithAggregationInput } from "../../../inputs/Sales_channel_translationOrderByWithAggregationInput";
import { Sales_channel_translationScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_translationScalarWhereWithAggregatesInput";
import { Sales_channel_translationWhereInput } from "../../../inputs/Sales_channel_translationWhereInput";
import { Sales_channel_translationScalarFieldEnum } from "../../../../enums/Sales_channel_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_translationWhereInput, {
    nullable: true
  })
  where?: Sales_channel_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "language_id" | "name" | "home_keywords" | "home_meta_description" | "home_meta_title" | "home_name" | "home_enabled" | "home_slot_config" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Sales_channel_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
