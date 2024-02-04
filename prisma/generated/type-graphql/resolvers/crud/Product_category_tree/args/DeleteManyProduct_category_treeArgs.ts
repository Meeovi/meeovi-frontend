import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeWhereInput } from "../../../inputs/Product_category_treeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => Product_category_treeWhereInput, {
    nullable: true
  })
  where?: Product_category_treeWhereInput | undefined;
}
