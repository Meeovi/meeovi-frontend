import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryCreateInput } from "../../../inputs/Product_keyword_dictionaryCreateInput";
import { Product_keyword_dictionaryUpdateInput } from "../../../inputs/Product_keyword_dictionaryUpdateInput";
import { Product_keyword_dictionaryWhereUniqueInput } from "../../../inputs/Product_keyword_dictionaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_keyword_dictionaryArgs {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_keyword_dictionaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCreateInput, {
    nullable: false
  })
  create!: Product_keyword_dictionaryCreateInput;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryUpdateInput, {
    nullable: false
  })
  update!: Product_keyword_dictionaryUpdateInput;
}
