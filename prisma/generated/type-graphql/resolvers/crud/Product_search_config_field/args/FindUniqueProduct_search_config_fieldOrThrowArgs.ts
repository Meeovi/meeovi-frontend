import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldWhereUniqueInput } from "../../../inputs/Product_search_config_fieldWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_search_config_fieldOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_config_fieldWhereUniqueInput;
}
