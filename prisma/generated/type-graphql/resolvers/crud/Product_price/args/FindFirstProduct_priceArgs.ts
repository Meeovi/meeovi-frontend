import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_priceOrderByWithRelationAndSearchRelevanceInput";
import { Product_priceWhereInput } from "../../../inputs/Product_priceWhereInput";
import { Product_priceWhereUniqueInput } from "../../../inputs/Product_priceWhereUniqueInput";
import { Product_priceScalarFieldEnum } from "../../../../enums/Product_priceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  where?: Product_priceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_priceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_priceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_priceWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_priceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_priceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "rule_id" | "product_id" | "product_version_id" | "price" | "quantity_start" | "quantity_end" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
