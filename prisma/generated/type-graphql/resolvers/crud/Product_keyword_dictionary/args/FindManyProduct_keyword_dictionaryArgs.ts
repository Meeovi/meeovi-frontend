import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_keyword_dictionaryOrderByWithRelationAndSearchRelevanceInput";
import { Product_keyword_dictionaryWhereInput } from "../../../inputs/Product_keyword_dictionaryWhereInput";
import { Product_keyword_dictionaryWhereUniqueInput } from "../../../inputs/Product_keyword_dictionaryWhereUniqueInput";
import { Product_keyword_dictionaryScalarFieldEnum } from "../../../../enums/Product_keyword_dictionaryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_keyword_dictionaryArgs {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereInput, {
    nullable: true
  })
  where?: Product_keyword_dictionaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_keyword_dictionaryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_keyword_dictionaryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "language_id" | "keyword" | "reversed"> | undefined;
}
