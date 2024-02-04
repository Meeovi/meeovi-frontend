import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordWhereUniqueInput } from "../../../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_search_keywordOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;
}
