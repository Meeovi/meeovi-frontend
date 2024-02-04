import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_stream_translationCreateManyLanguageInputEnvelope";
import { Product_stream_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_stream_translationCreateOrConnectWithoutLanguageInput";
import { Product_stream_translationCreateWithoutLanguageInput } from "../inputs/Product_stream_translationCreateWithoutLanguageInput";
import { Product_stream_translationScalarWhereInput } from "../inputs/Product_stream_translationScalarWhereInput";
import { Product_stream_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_stream_translationUpdateManyWithWhereWithoutLanguageInput";
import { Product_stream_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_stream_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_stream_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_stream_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationUpdateManyWithoutLanguageNestedInput", {})
export class Product_stream_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_stream_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_stream_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_stream_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_stream_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_stream_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_stream_translationScalarWhereInput[] | undefined;
}
