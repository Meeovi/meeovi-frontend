import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_translationCreateManyLanguageInputEnvelope";
import { Product_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_translationCreateOrConnectWithoutLanguageInput";
import { Product_translationCreateWithoutLanguageInput } from "../inputs/Product_translationCreateWithoutLanguageInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationCreateNestedManyWithoutLanguageInput", {})
export class Product_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_translationWhereUniqueInput[] | undefined;
}
