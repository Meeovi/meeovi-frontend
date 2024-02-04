import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryWhereUniqueInput } from "../../../inputs/Product_keyword_dictionaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_keyword_dictionaryOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_keyword_dictionaryWhereUniqueInput;
}
