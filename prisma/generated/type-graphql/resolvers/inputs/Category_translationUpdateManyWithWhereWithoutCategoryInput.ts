import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationScalarWhereInput } from "../inputs/Category_translationScalarWhereInput";
import { Category_translationUpdateManyMutationInput } from "../inputs/Category_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Category_translationUpdateManyWithWhereWithoutCategoryInput", {})
export class Category_translationUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Category_translationScalarWhereInput, {
    nullable: false
  })
  where!: Category_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Category_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Category_translationUpdateManyMutationInput;
}
