import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_keyword_dictionaryCreateManyInput } from "../../../inputs/Product_keyword_dictionaryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_keyword_dictionaryArgs {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryCreateManyInput], {
    nullable: false
  })
  data!: Product_keyword_dictionaryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
