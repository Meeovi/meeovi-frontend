import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeCreateInput } from "../../../inputs/Product_category_treeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => Product_category_treeCreateInput, {
    nullable: false
  })
  data!: Product_category_treeCreateInput;
}
