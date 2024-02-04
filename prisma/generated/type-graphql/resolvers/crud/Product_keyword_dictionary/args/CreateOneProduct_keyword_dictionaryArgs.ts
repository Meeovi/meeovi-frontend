import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryCreateInput } from "../../../inputs/Product_keyword_dictionaryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_keyword_dictionaryArgs {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCreateInput, {
    nullable: false
  })
  data!: Product_keyword_dictionaryCreateInput;
}
