import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_cross_selling_translationCreateManyLanguageInputEnvelope";
import { Product_cross_selling_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_cross_selling_translationCreateOrConnectWithoutLanguageInput";
import { Product_cross_selling_translationCreateWithoutLanguageInput } from "../inputs/Product_cross_selling_translationCreateWithoutLanguageInput";
import { Product_cross_selling_translationWhereUniqueInput } from "../inputs/Product_cross_selling_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_translationCreateNestedManyWithoutLanguageInput", {})
export class Product_cross_selling_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_cross_selling_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_selling_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_selling_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_selling_translationWhereUniqueInput[] | undefined;
}
