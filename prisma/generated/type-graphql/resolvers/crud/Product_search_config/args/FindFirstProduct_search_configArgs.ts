import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_search_configOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_configWhereInput } from "../../../inputs/Product_search_configWhereInput";
import { Product_search_configWhereUniqueInput } from "../../../inputs/Product_search_configWhereUniqueInput";
import { Product_search_configScalarFieldEnum } from "../../../../enums/Product_search_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_search_configOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_search_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "language_id" | "and_logic" | "min_search_length" | "excluded_terms" | "created_at" | "updated_at"> | undefined;
}
