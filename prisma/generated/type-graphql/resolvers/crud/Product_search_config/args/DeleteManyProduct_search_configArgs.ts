import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configWhereInput } from "../../../inputs/Product_search_configWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;
}
