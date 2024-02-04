import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateWithoutCategoryInput } from "../inputs/Category_translationCreateWithoutCategoryInput";
import { Category_translationUpdateWithoutCategoryInput } from "../inputs/Category_translationUpdateWithoutCategoryInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationUpsertWithWhereUniqueWithoutCategoryInput", {})
export class Category_translationUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: Category_translationUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Category_translationCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Category_translationCreateWithoutCategoryInput;
}
