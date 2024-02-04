import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateWithoutLanguageInput } from "../inputs/Category_translationCreateWithoutLanguageInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationCreateOrConnectWithoutLanguageInput", {})
export class Category_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Category_translationCreateWithoutLanguageInput;
}
