import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProduct_category_treeInput } from "../inputs/CategoryCreateWithoutProduct_category_treeInput";
import { CategoryUpdateWithoutProduct_category_treeInput } from "../inputs/CategoryUpdateWithoutProduct_category_treeInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutProduct_category_treeInput", {})
export class CategoryUpsertWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProduct_category_treeInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutProduct_category_treeInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_category_treeInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProduct_category_treeInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
