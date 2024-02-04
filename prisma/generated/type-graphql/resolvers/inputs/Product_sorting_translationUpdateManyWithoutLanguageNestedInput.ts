import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_sorting_translationCreateManyLanguageInputEnvelope";
import { Product_sorting_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_sorting_translationCreateOrConnectWithoutLanguageInput";
import { Product_sorting_translationCreateWithoutLanguageInput } from "../inputs/Product_sorting_translationCreateWithoutLanguageInput";
import { Product_sorting_translationScalarWhereInput } from "../inputs/Product_sorting_translationScalarWhereInput";
import { Product_sorting_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_sorting_translationUpdateManyWithWhereWithoutLanguageInput";
import { Product_sorting_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_sorting_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_sorting_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_sorting_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_sorting_translationWhereUniqueInput } from "../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationUpdateManyWithoutLanguageNestedInput", {})
export class Product_sorting_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_sorting_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_sorting_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_sorting_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_sorting_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_sorting_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_sorting_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_sorting_translationScalarWhereInput[] | undefined;
}
