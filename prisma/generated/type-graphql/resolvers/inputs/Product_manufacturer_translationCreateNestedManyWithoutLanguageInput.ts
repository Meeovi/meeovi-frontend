import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_manufacturer_translationCreateManyLanguageInputEnvelope";
import { Product_manufacturer_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_manufacturer_translationCreateOrConnectWithoutLanguageInput";
import { Product_manufacturer_translationCreateWithoutLanguageInput } from "../inputs/Product_manufacturer_translationCreateWithoutLanguageInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateNestedManyWithoutLanguageInput", {})
export class Product_manufacturer_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_manufacturer_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_manufacturer_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_manufacturer_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_manufacturer_translationWhereUniqueInput[] | undefined;
}
