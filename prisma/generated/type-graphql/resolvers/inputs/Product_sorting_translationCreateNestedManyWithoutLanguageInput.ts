import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_sorting_translationCreateManyLanguageInputEnvelope";
import { Product_sorting_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_sorting_translationCreateOrConnectWithoutLanguageInput";
import { Product_sorting_translationCreateWithoutLanguageInput } from "../inputs/Product_sorting_translationCreateWithoutLanguageInput";
import { Product_sorting_translationWhereUniqueInput } from "../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationCreateNestedManyWithoutLanguageInput", {})
export class Product_sorting_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_sorting_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_sorting_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_sorting_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_sorting_translationWhereUniqueInput[] | undefined;
}
