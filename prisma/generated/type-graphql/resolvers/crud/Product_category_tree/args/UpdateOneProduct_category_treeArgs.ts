import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeUpdateInput } from "../../../inputs/Product_category_treeUpdateInput";
import { Product_category_treeWhereUniqueInput } from "../../../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => Product_category_treeUpdateInput, {
    nullable: false
  })
  data!: Product_category_treeUpdateInput;

  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;
}
