import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationOrderByWithAggregationInput } from "../../../inputs/Sales_channel_type_translationOrderByWithAggregationInput";
import { Sales_channel_type_translationScalarWhereWithAggregatesInput } from "../../../inputs/Sales_channel_type_translationScalarWhereWithAggregatesInput";
import { Sales_channel_type_translationWhereInput } from "../../../inputs/Sales_channel_type_translationWhereInput";
import { Sales_channel_type_translationScalarFieldEnum } from "../../../../enums/Sales_channel_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySales_channel_type_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereInput, {
    nullable: true
  })
  where?: Sales_channel_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_type_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sales_channel_type_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_type_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_type_id" | "language_id" | "name" | "manufacturer" | "description" | "description_long" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sales_channel_type_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
