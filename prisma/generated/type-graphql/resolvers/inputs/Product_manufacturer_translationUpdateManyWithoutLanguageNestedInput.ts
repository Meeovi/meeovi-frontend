import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_manufacturer_translationCreateManyLanguageInputEnvelope";
import { Product_manufacturer_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_manufacturer_translationCreateOrConnectWithoutLanguageInput";
import { Product_manufacturer_translationCreateWithoutLanguageInput } from "../inputs/Product_manufacturer_translationCreateWithoutLanguageInput";
import { Product_manufacturer_translationScalarWhereInput } from "../inputs/Product_manufacturer_translationScalarWhereInput";
import { Product_manufacturer_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_manufacturer_translationUpdateManyWithWhereWithoutLanguageInput";
import { Product_manufacturer_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_manufacturer_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_manufacturer_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_manufacturer_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturer_translationUpdateManyWithoutLanguageNestedInput", {})
export class Product_manufacturer_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_manufacturer_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_manufacturer_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_manufacturer_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_manufacturer_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_manufacturer_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_manufacturer_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_manufacturer_translationScalarWhereInput[] | undefined;
}
