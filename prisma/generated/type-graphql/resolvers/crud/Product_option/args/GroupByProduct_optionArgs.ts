import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionOrderByWithAggregationInput } from "../../../inputs/Product_optionOrderByWithAggregationInput";
import { Product_optionScalarWhereWithAggregatesInput } from "../../../inputs/Product_optionScalarWhereWithAggregatesInput";
import { Product_optionWhereInput } from "../../../inputs/Product_optionWhereInput";
import { Product_optionScalarFieldEnum } from "../../../../enums/Product_optionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  where?: Product_optionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_optionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_optionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "property_group_option_id">;

  @TypeGraphQL.Field(_type => Product_optionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_optionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
