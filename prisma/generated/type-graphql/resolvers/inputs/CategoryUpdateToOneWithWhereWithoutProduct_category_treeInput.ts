import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutProduct_category_treeInput } from "../inputs/CategoryUpdateWithoutProduct_category_treeInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutProduct_category_treeInput", {})
export class CategoryUpdateToOneWithWhereWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProduct_category_treeInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutProduct_category_treeInput;
}
