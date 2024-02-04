import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldWhereInput } from "../../../inputs/Product_search_config_fieldWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  where?: Product_search_config_fieldWhereInput | undefined;
}
