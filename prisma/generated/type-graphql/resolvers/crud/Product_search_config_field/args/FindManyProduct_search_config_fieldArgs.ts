import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_search_config_fieldOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_config_fieldWhereInput } from "../../../inputs/Product_search_config_fieldWhereInput";
import { Product_search_config_fieldWhereUniqueInput } from "../../../inputs/Product_search_config_fieldWhereUniqueInput";
import { Product_search_config_fieldScalarFieldEnum } from "../../../../enums/Product_search_config_fieldScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  where?: Product_search_config_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_search_config_fieldOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_search_config_fieldWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_search_config_id" | "custom_field_id" | "field" | "tokenize" | "searchable" | "ranking" | "created_at" | "updated_at"> | undefined;
}
