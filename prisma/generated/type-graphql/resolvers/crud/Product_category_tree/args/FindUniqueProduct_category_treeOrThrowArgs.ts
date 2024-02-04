import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeWhereUniqueInput } from "../../../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_category_treeOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_category_treeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_category_treeWhereUniqueInput;
}
