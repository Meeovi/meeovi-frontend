import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_assigned_productsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_cross_selling_assigned_productsOrderByWithRelationAndSearchRelevanceInput";
import { Product_cross_selling_assigned_productsWhereInput } from "../../../inputs/Product_cross_selling_assigned_productsWhereInput";
import { Product_cross_selling_assigned_productsWhereUniqueInput } from "../../../inputs/Product_cross_selling_assigned_productsWhereUniqueInput";
import { Product_cross_selling_assigned_productsScalarFieldEnum } from "../../../../enums/Product_cross_selling_assigned_productsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_cross_selling_assigned_productsArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereInput, {
    nullable: true
  })
  where?: Product_cross_selling_assigned_productsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_cross_selling_assigned_productsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_cross_selling_assigned_productsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "cross_selling_id" | "product_id" | "product_version_id" | "position" | "created_at" | "updated_at"> | undefined;
}
