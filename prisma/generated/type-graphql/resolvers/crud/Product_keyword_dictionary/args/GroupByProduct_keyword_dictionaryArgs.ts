import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryOrderByWithAggregationInput } from "../../../inputs/Product_keyword_dictionaryOrderByWithAggregationInput";
import { Product_keyword_dictionaryScalarWhereWithAggregatesInput } from "../../../inputs/Product_keyword_dictionaryScalarWhereWithAggregatesInput";
import { Product_keyword_dictionaryWhereInput } from "../../../inputs/Product_keyword_dictionaryWhereInput";
import { Product_keyword_dictionaryScalarFieldEnum } from "../../../../enums/Product_keyword_dictionaryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_keyword_dictionaryArgs {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereInput, {
    nullable: true
  })
  where?: Product_keyword_dictionaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_keyword_dictionaryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "language_id" | "keyword" | "reversed">;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_keyword_dictionaryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
