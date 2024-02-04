import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_translationCreateManyLanguageInputEnvelope";
import { Product_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_translationCreateOrConnectWithoutLanguageInput";
import { Product_translationCreateWithoutLanguageInput } from "../inputs/Product_translationCreateWithoutLanguageInput";
import { Product_translationScalarWhereInput } from "../inputs/Product_translationScalarWhereInput";
import { Product_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_translationUpdateManyWithWhereWithoutLanguageInput";
import { Product_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationUpdateManyWithoutLanguageNestedInput", {})
export class Product_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_translationScalarWhereInput[] | undefined;
}
