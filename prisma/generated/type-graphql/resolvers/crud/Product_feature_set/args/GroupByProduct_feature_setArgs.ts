import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_setOrderByWithAggregationInput } from "../../../inputs/Product_feature_setOrderByWithAggregationInput";
import { Product_feature_setScalarWhereWithAggregatesInput } from "../../../inputs/Product_feature_setScalarWhereWithAggregatesInput";
import { Product_feature_setWhereInput } from "../../../inputs/Product_feature_setWhereInput";
import { Product_feature_setScalarFieldEnum } from "../../../../enums/Product_feature_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_feature_setArgs {
  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  where?: Product_feature_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_feature_setOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "features" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_feature_setScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_feature_setScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
