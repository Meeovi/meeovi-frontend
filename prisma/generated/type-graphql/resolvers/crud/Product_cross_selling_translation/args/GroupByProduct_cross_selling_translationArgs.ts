import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationOrderByWithAggregationInput } from "../../../inputs/Product_cross_selling_translationOrderByWithAggregationInput";
import { Product_cross_selling_translationScalarWhereWithAggregatesInput } from "../../../inputs/Product_cross_selling_translationScalarWhereWithAggregatesInput";
import { Product_cross_selling_translationWhereInput } from "../../../inputs/Product_cross_selling_translationWhereInput";
import { Product_cross_selling_translationScalarFieldEnum } from "../../../../enums/Product_cross_selling_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereInput, {
    nullable: true
  })
  where?: Product_cross_selling_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_cross_selling_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_cross_selling_id" | "language_id" | "name" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_cross_selling_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
