import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_feature_set_translationOrderByWithAggregationInput } from "../../../inputs/Product_feature_set_translationOrderByWithAggregationInput";
import { Product_feature_set_translationScalarWhereWithAggregatesInput } from "../../../inputs/Product_feature_set_translationScalarWhereWithAggregatesInput";
import { Product_feature_set_translationWhereInput } from "../../../inputs/Product_feature_set_translationWhereInput";
import { Product_feature_set_translationScalarFieldEnum } from "../../../../enums/Product_feature_set_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_feature_set_translationArgs {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereInput, {
    nullable: true
  })
  where?: Product_feature_set_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_feature_set_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_feature_set_id" | "language_id" | "name" | "description" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_feature_set_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_feature_set_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
