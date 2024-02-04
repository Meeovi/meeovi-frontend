import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryOrderByWithAggregationInput } from "../../../inputs/Product_categoryOrderByWithAggregationInput";
import { Product_categoryScalarWhereWithAggregatesInput } from "../../../inputs/Product_categoryScalarWhereWithAggregatesInput";
import { Product_categoryWhereInput } from "../../../inputs/Product_categoryWhereInput";
import { Product_categoryScalarFieldEnum } from "../../../../enums/Product_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_categoryArgs {
  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  where?: Product_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_categoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "category_id" | "category_version_id">;

  @TypeGraphQL.Field(_type => Product_categoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_categoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
