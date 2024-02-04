import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sorting_translationOrderByWithAggregationInput } from "../../../inputs/Product_sorting_translationOrderByWithAggregationInput";
import { Product_sorting_translationScalarWhereWithAggregatesInput } from "../../../inputs/Product_sorting_translationScalarWhereWithAggregatesInput";
import { Product_sorting_translationWhereInput } from "../../../inputs/Product_sorting_translationWhereInput";
import { Product_sorting_translationScalarFieldEnum } from "../../../../enums/Product_sorting_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_sorting_translationArgs {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereInput, {
    nullable: true
  })
  where?: Product_sorting_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_sorting_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_sorting_id" | "language_id" | "label" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_sorting_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_sorting_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
