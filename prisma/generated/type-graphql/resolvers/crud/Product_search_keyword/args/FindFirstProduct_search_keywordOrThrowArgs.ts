import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_search_keywordOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_keywordWhereInput } from "../../../inputs/Product_search_keywordWhereInput";
import { Product_search_keywordWhereUniqueInput } from "../../../inputs/Product_search_keywordWhereUniqueInput";
import { Product_search_keywordScalarFieldEnum } from "../../../../enums/Product_search_keywordScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_search_keywordOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereInput, {
    nullable: true
  })
  where?: Product_search_keywordWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_search_keywordOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_search_keywordWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "language_id" | "product_id" | "product_version_id" | "keyword" | "ranking" | "created_at" | "updated_at"> | undefined;
}
