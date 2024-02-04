import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldCreateInput } from "../../../inputs/Product_search_config_fieldCreateInput";
import { Product_search_config_fieldUpdateInput } from "../../../inputs/Product_search_config_fieldUpdateInput";
import { Product_search_config_fieldWhereUniqueInput } from "../../../inputs/Product_search_config_fieldWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_config_fieldWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateInput, {
    nullable: false
  })
  create!: Product_search_config_fieldCreateInput;

  @TypeGraphQL.Field(_type => Product_search_config_fieldUpdateInput, {
    nullable: false
  })
  update!: Product_search_config_fieldUpdateInput;
}
