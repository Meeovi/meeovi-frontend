import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordCreateManyInput } from "../../../inputs/Product_search_keywordCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_search_keywordArgs {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateManyInput], {
    nullable: false
  })
  data!: Product_search_keywordCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
