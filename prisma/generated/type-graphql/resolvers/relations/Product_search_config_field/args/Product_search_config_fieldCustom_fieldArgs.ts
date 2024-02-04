import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldWhereInput } from "../../../inputs/Custom_fieldWhereInput";

@TypeGraphQL.ArgsType()
export class Product_search_config_fieldCustom_fieldArgs {
  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  where?: Custom_fieldWhereInput | undefined;
}
