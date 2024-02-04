import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateManyLanguageInputEnvelope } from "../inputs/Category_translationCreateManyLanguageInputEnvelope";
import { Category_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Category_translationCreateOrConnectWithoutLanguageInput";
import { Category_translationCreateWithoutLanguageInput } from "../inputs/Category_translationCreateWithoutLanguageInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationCreateNestedManyWithoutLanguageInput", {})
export class Category_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Category_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Category_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Category_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Category_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_translationWhereUniqueInput[] | undefined;
}
