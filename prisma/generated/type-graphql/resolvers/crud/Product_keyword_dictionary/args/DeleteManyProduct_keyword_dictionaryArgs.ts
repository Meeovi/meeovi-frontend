import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryWhereInput } from "../../../inputs/Product_keyword_dictionaryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_keyword_dictionaryArgs {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereInput, {
    nullable: true
  })
  where?: Product_keyword_dictionaryWhereInput | undefined;
}
