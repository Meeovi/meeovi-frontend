import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateManyLanguageInputEnvelope } from "../inputs/Delivery_time_translationCreateManyLanguageInputEnvelope";
import { Delivery_time_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Delivery_time_translationCreateOrConnectWithoutLanguageInput";
import { Delivery_time_translationCreateWithoutLanguageInput } from "../inputs/Delivery_time_translationCreateWithoutLanguageInput";
import { Delivery_time_translationScalarWhereInput } from "../inputs/Delivery_time_translationScalarWhereInput";
import { Delivery_time_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Delivery_time_translationUpdateManyWithWhereWithoutLanguageInput";
import { Delivery_time_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Delivery_time_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Delivery_time_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Delivery_time_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationUpdateManyWithoutLanguageNestedInput", {})
export class Delivery_time_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Delivery_time_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Delivery_time_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Delivery_time_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Delivery_time_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Delivery_time_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Delivery_time_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Delivery_time_translationScalarWhereInput[] | undefined;
}
