import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeCreateInput } from "../../../inputs/Product_category_treeCreateInput";
import { Product_category_treeUpdateInput } from "../../../inputs/Product_category_treeUpdateInput";
import { Product_category_treeWhereUniqueInput } from "../../../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_category_treeCreateInput, {
    nullable: false
  })
  create!: Product_category_treeCreateInput;

  @TypeGraphQL.Field(_type => Product_category_treeUpdateInput, {
    nullable: false
  })
  update!: Product_category_treeUpdateInput;
}
