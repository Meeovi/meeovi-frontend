import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldCreateManyInput } from "../../../inputs/Product_search_config_fieldCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldCreateManyInput], {
    nullable: false
  })
  data!: Product_search_config_fieldCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
