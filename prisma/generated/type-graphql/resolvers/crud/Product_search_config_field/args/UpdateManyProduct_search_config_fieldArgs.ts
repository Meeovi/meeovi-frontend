import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldUpdateManyMutationInput } from "../../../inputs/Product_search_config_fieldUpdateManyMutationInput";
import { Product_search_config_fieldWhereInput } from "../../../inputs/Product_search_config_fieldWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_search_config_fieldUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  where?: Product_search_config_fieldWhereInput | undefined;
}
