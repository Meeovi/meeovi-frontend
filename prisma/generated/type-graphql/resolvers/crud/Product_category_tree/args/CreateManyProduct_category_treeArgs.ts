import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_category_treeCreateManyInput } from "../../../inputs/Product_category_treeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_category_treeArgs {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateManyInput], {
    nullable: false
  })
  data!: Product_category_treeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
