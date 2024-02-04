import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_reviewOrderByWithRelationAndSearchRelevanceInput";
import { Product_reviewWhereInput } from "../../../inputs/Product_reviewWhereInput";
import { Product_reviewWhereUniqueInput } from "../../../inputs/Product_reviewWhereUniqueInput";
import { Product_reviewScalarFieldEnum } from "../../../../enums/Product_reviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  where?: Product_reviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_reviewOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_reviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_id" | "customer_id" | "sales_channel_id" | "language_id" | "external_user" | "external_email" | "title" | "content" | "points" | "status" | "comment" | "custom_fields" | "updated_at" | "created_at" | "product_version_id"> | undefined;
}
