import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationUpdateWithoutCategoryInput } from "../inputs/Category_translationUpdateWithoutCategoryInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationUpdateWithWhereUniqueWithoutCategoryInput", {})
export class Category_translationUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Category_translationUpdateWithoutCategoryInput;
}
