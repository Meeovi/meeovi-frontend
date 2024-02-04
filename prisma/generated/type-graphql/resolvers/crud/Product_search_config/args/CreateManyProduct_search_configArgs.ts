import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configCreateManyInput } from "../../../inputs/Product_search_configCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_search_configArgs {
  @TypeGraphQL.Field(_type => [Product_search_configCreateManyInput], {
    nullable: false
  })
  data!: Product_search_configCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
