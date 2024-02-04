import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setOrderByWithAggregationInput } from "../../../inputs/Product_custom_field_setOrderByWithAggregationInput";
import { Product_custom_field_setScalarWhereWithAggregatesInput } from "../../../inputs/Product_custom_field_setScalarWhereWithAggregatesInput";
import { Product_custom_field_setWhereInput } from "../../../inputs/Product_custom_field_setWhereInput";
import { Product_custom_field_setScalarFieldEnum } from "../../../../enums/Product_custom_field_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereInput, {
    nullable: true
  })
  where?: Product_custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_custom_field_setOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"custom_field_set_id" | "product_id" | "product_version_id">;

  @TypeGraphQL.Field(_type => Product_custom_field_setScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_custom_field_setScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
