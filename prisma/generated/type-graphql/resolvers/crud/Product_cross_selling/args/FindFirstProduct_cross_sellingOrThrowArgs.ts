import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput";
import { Product_cross_sellingWhereInput } from "../../../inputs/Product_cross_sellingWhereInput";
import { Product_cross_sellingWhereUniqueInput } from "../../../inputs/Product_cross_sellingWhereUniqueInput";
import { Product_cross_sellingScalarFieldEnum } from "../../../../enums/Product_cross_sellingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_cross_sellingOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  where?: Product_cross_sellingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_cross_sellingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "position" | "sort_by" | "sort_direction" | "active" | "limit" | "product_id" | "product_version_id" | "product_stream_id" | "created_at" | "updated_at"> | undefined;
}
